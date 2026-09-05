const parameters = new URLSearchParams(window.location.search);
const question = parameters.get("q") || "";
const terms = question.toLowerCase().match(/[a-z0-9]+/g) || [];
const results = window.NCC_SEARCH_DATA
  .map((record) => {
    const text = record.text.toLowerCase();
    const score = terms.reduce((total, term) => total + (text.match(new RegExp(`\\b${term}`, "g")) || []).length, 0);
    return { ...record, score };
  })
  .filter((record) => record.score > 0)
  .sort((left, right) => right.score - left.score)
  .slice(0, 5);

document.querySelector("#question-heading").textContent = question ? `Question: ${question}` : "No question was provided.";
const summary = document.querySelector("#summary");
summary.textContent = results.length
  ? `Local source summary: ${results[0].text.replace(/\s+/g, " ").slice(0, 650)}…`
  : "No matching local RAG segments were found.";

const sources = document.querySelector("#sources");
for (const result of results) {
  const card = document.createElement("article");
  card.className = "result";
  card.innerHTML = `<p class="citation">${result.edition} ${result.volume}, page ${result.page}</p><p>${result.text}</p>`;
  sources.append(card);
}
