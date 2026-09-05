const form = document.querySelector("#search-form");
const questionInput = document.querySelector("#question");
const resultsElement = document.querySelector("#results");
const statusElement = document.querySelector("#status");

function renderResults(results) {
  const answerSection = document.querySelector("#search-answer");
  const summaryElement = document.querySelector("#search-summary");
  answerSection.hidden = false;
  resultsElement.replaceChildren();
  if (!results.length) {
    statusElement.textContent = "No matching passages found. Try different words.";
    summaryElement.textContent = "";
    return;
  }

  statusElement.textContent = `${results.length} source passages found.`;
  const summaryText = results[0].text.replace(/\s+/g, " ").slice(0, 520);
  summaryElement.textContent = `Local source summary: ${summaryText}${results[0].text.length > 520 ? "…" : ""}`;
  for (const result of results) {
    const card = document.createElement("article");
    card.className = "result";
    const citation = document.createElement("p");
    citation.className = "citation";
    citation.textContent = `${result.edition} ${result.volume}, page ${result.page}`;
    const text = document.createElement("p");
    text.textContent = result.text;
    const link = document.createElement("a");
    link.className = "source-link";
    link.href = result.sourceUrl;
    link.target = "_blank";
    link.rel = "noreferrer";
    link.textContent = "Open official NCC source";
    card.append(citation, text, link);
    resultsElement.append(card);
  }
}

async function search(question) {
  statusElement.textContent = "Searching your local NCC library…";
  resultsElement.replaceChildren();
  try {
    const payload = await requestSearch(question);
    localStorage.setItem("nccTutorRecentTopic", question);
    renderResults(payload.results);
  } catch (error) {
    statusElement.textContent = error.message || "The search could not be completed.";
  }
}

function requestSearch(question) {
  const terms = question.toLowerCase().match(/[a-z0-9]+/g);
  if (!terms) throw new Error("Ask a question containing letters or numbers.");
  if (!Array.isArray(window.NCC_SEARCH_DATA)) {
    throw new Error("The local NCC study library is unavailable. Refresh this page.");
  }

  const results = window.NCC_SEARCH_DATA
    .map((record) => {
      const searchableText = record.text.toLowerCase();
      const score = terms.reduce(
        (total, term) => total + (searchableText.match(new RegExp(`\\b${term}`, "g")) || []).length,
        0,
      );
      return { ...record, score };
    })
    .filter((record) => record.score > 0)
    .sort((left, right) => right.score - left.score)
    .slice(0, 5);

  return Promise.resolve({ results });
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const question = questionInput.value.trim();
  if (question) window.location.hash = `search=${encodeURIComponent(question)}`;
});

document.querySelectorAll("[data-question]").forEach((button) => {
  button.addEventListener("click", () => {
    questionInput.value = button.dataset.question;
    window.location.hash = `search=${encodeURIComponent(questionInput.value)}`;
  });
});

document.querySelector("#clear-history").addEventListener("click", () => {
  history.replaceState(null, "", window.location.pathname);
  statusElement.textContent = "Choose a topic to begin.";
  document.querySelector("#search-answer").hidden = true;
});

const recentTopic = localStorage.getItem("nccTutorRecentTopic");
if (recentTopic) questionInput.value = recentTopic;

const hashSearch = new URLSearchParams(window.location.hash.slice(1)).get("search");
if (hashSearch) search(hashSearch);
window.addEventListener("hashchange", () => {
  const question = new URLSearchParams(window.location.hash.slice(1)).get("search");
  if (question) search(question);
});

const chapterCards = document.querySelector("#chapter-cards");
let structureChapter = window.NCC_CHAPTERS.find((chapter) => chapter.id === "a1");
const chapterStatus = document.querySelector("#chapter-status");
const archiveKey = "nccTutorLearnedQuestionsV2";
let chapterView = "queue";
let selectedSection = structureChapter.section;
const sectionNames = { A: "Governing requirements", S: "Specifications", H: "Class 1 and 10 buildings", SA: "South Australia" };

function chaptersInSection(section) {
  return window.NCC_CHAPTERS.filter((chapter) => chapter.section === section);
}

function renderSectionButtons() {
  const container = document.querySelector("#section-buttons");
  container.replaceChildren();
  const sectionOrder = ["A", "S", "H", "SA"];
  const sections = [...new Set(window.NCC_CHAPTERS.map((chapter) => chapter.section))].sort((left, right) => sectionOrder.indexOf(left) - sectionOrder.indexOf(right));
  for (const section of sections) {
    const button = document.createElement("button");
    button.id = `section-${section.toLowerCase()}`;
    button.type = "button";
    button.textContent = section === "SA" ? "Schedule 8 — South Australia" : `Section ${section} — ${sectionNames[section] || "Study material"}`;
    button.addEventListener("click", () => selectChapter(chaptersInSection(section)[0].id));
    container.append(button);
  }
}

function renderPartTabs() {
  const partTabs = document.querySelector("#part-tabs");
  partTabs.replaceChildren();
  for (const chapter of chaptersInSection(selectedSection)) {
    const button = document.createElement("button");
    button.id = `part-${chapter.id}`;
    button.type = "button";
    button.className = "text-button";
    button.textContent = chapter.section === "S" ? `Specification ${chapter.id.slice(1)}` : chapter.section === "SA" ? "South Australia" : `Part ${chapter.id.toUpperCase()}`;
    button.addEventListener("click", () => selectChapter(chapter.id));
    partTabs.append(button);
  }
}

function learnedQuestions() {
  return new Set(JSON.parse(localStorage.getItem(archiveKey) || "[]"));
}

function renderChapter() {
  chapterCards.replaceChildren();
  const learned = learnedQuestions();
  const questions = structureChapter.questions.filter((_, index) => chapterView === "archive" ? learned.has(`${structureChapter.id}-${index}`) : !learned.has(`${structureChapter.id}-${index}`));
  const unitName = structureChapter.contentMode === "modules" ? "learning topic" : "question";
  document.querySelector("#restore-learned").textContent = structureChapter.contentMode === "modules" ? "Restore archived learning topics" : "Restore archived questions";
  chapterStatus.textContent = chapterView === "archive"
    ? `${questions.length} learned ${unitName}${questions.length === 1 ? "" : "s"} in your archive.`
    : `${questions.length} ${unitName}${questions.length === 1 ? "" : "s"} left to study in this part.`;
  document.querySelector("#study-queue").classList.toggle("selected-tab", chapterView === "queue");
  document.querySelector("#learned-archive").classList.toggle("selected-tab", chapterView === "archive");
  for (const sectionButton of document.querySelectorAll("#section-buttons button")) {
    const section = sectionButton.id.replace("section-", "").toUpperCase();
    const complete = chaptersInSection(section).every((chapter) => chapter.questions.every((_, index) => learned.has(`${chapter.id}-${index}`)));
    sectionButton.classList.toggle("completed-section", complete);
  }
  for (const chapter of chaptersInSection(selectedSection)) {
    const completed = chapter.questions.every((_, index) => learned.has(`${chapter.id}-${index}`));
    document.querySelector(`#part-${chapter.id}`).classList.toggle("completed-part", completed);
  }
  const partLabel = structureChapter.section === "S" ? `Specification ${structureChapter.id.slice(1)}` : structureChapter.section === "SA" ? "Schedule 8" : `Part ${structureChapter.id.toUpperCase()}`;
  document.querySelector("#chapter-title").textContent = structureChapter.section === "S" ? `${partLabel} — ${structureChapter.title}` : structureChapter.section === "SA" ? "Schedule 8 — South Australia" : `Section ${structureChapter.section}, ${partLabel} — ${structureChapter.title.replace(/^[AH]\d+\s+/, "")}`;
  document.querySelector("#chapter-summary").innerHTML = `<h3>Part overview</h3><p>${structureChapter.summaryEn || "Overview coming soon."}</p><p class="chinese">${structureChapter.summaryZh || ""}</p><p class="citation">Local RAG source: ${structureChapter.source}, ${structureChapter.summaryCitation || ""}</p>`;

  questions.forEach(([question, questionZh, answer, answerZh, citation], visibleIndex) => {
    const originalIndex = structureChapter.questions.indexOf(structureChapter.questions.find((item) => item[0] === question));
    const questionId = `${structureChapter.id}-${originalIndex}`;
  const clause = citation.match(/[A-Z]\d+[A-Z]\d+/)?.[0];
  const page = Number(citation.match(/pp?\. (\d+)/)?.[1]);
  const sourceRecord = window.NCC_SEARCH_DATA.find((record) => record.page === page && record.text.includes(clause));
  const card = document.createElement("article");
  card.className = "chapter-card";
  const archiveAction = chapterView === "archive" ? "Move back to study queue" : "Mark as learned";
  const questionPart = structureChapter.section === "S" ? `Specification ${structureChapter.id.slice(1)}` : structureChapter.section === "SA" ? "Schedule 8 · South Australia" : `Section ${structureChapter.section} · Part ${structureChapter.id.toUpperCase()}`;
  const itemLabel = structureChapter.contentMode === "modules" ? `Learning topic ${originalIndex + 1}` : `Q${originalIndex + 1}`;
  const answerMarkup = structureChapter.contentMode === "modules" ? `<div class="learning-content">${answer}</div>` : `<p>${answer}</p>`;
  const chineseMarkup = structureChapter.contentMode === "modules" ? `<div class="learning-content chinese">${answerZh}</div>` : `<p class="chinese">${answerZh}</p>`;
  card.classList.toggle("learning-module", structureChapter.contentMode === "modules");
  card.innerHTML = `<p class="question-id">${questionPart} · ${itemLabel}</p><h3>${question}</h3>${answerMarkup}<button class="translate-button" type="button">Show Chinese explanation</button><div class="translation" hidden><h4 class="chinese">${questionZh}</h4>${chineseMarkup}</div><p class="citation">Local RAG source: ${structureChapter.source}, ${citation}</p><details class="source-excerpt"><summary>View local source excerpt</summary><p>${sourceRecord?.text || "Matching local source segment unavailable."}</p></details><button class="archive-button" type="button">${archiveAction}</button>`;
  card.querySelector(".translate-button").addEventListener("click", (event) => {
    const button = event.currentTarget;
    const translation = card.querySelector(".translation");
    const isHidden = translation.hidden;
    translation.hidden = !isHidden;
    button.textContent = isHidden ? "Hide Chinese explanation" : "Show Chinese explanation";
  });
  card.querySelector(".archive-button").addEventListener("click", () => {
    const updated = learnedQuestions();
    if (chapterView === "archive") updated.delete(questionId); else updated.add(questionId);
    localStorage.setItem(archiveKey, JSON.stringify([...updated]));
    renderChapter();
  });
  chapterCards.append(card);
  });
}

document.querySelector("#restore-learned").addEventListener("click", () => {
  localStorage.removeItem(archiveKey);
  renderChapter();
});

document.querySelector("#study-queue").addEventListener("click", () => { chapterView = "queue"; renderChapter(); });
document.querySelector("#learned-archive").addEventListener("click", () => { chapterView = "archive"; renderChapter(); });
function selectChapter(chapterId) {
  structureChapter = window.NCC_CHAPTERS.find((chapter) => chapter.id === chapterId);
  selectedSection = structureChapter.section;
  renderPartTabs();
  const learned = learnedQuestions();
  const isComplete = structureChapter.questions.every((_, index) => learned.has(`${structureChapter.id}-${index}`));
  chapterView = isComplete ? "archive" : "queue";
  renderChapter();
}

renderSectionButtons();
renderPartTabs();
renderChapter();
