const specification = (id, title, titleZh, pages, summaryEn, summaryZh, questions) => ({ id, section: "S", title, titleZh, source: "NCC 2025 Volume Two", summaryEn, summaryZh, summaryCitation: pages, questions });
window.NCC_CHAPTERS.push(
  specification("s1", "Fire-resistance of building elements", "建筑构件耐火性能", "S1C1–S1C6, pp. 71–76",
    "Specification 1 explains how a required Fire Resistance Level (FRL) is established. A building element may use the listed tables, a tested prototype, an accredited assessment of a minor variation, an approved structural design standard, or a calculation based on fire-test performance. The evidence must match the real materials, restraint, exposure, support and loading conditions.",
    "规范 1 说明如何确定所需的耐火等级（FRL）。建筑构件可采用表列构造、测试原型、对轻微变更的认可评估、指定结构设计标准，或基于耐火试验性能的计算。证据必须与实际材料、约束、受火面、支撑和荷载条件一致。", [
      ["What is Specification 1 for?","规范 1 有什么作用？","It sets out the accepted procedures for determining the FRL of building elements.","它规定确定建筑构件耐火等级的认可程序。","S1C1, p. 71"],
      ["What do the three FRL numbers represent?","FRL 的三个数字代表什么？","They represent structural adequacy, integrity and insulation, measured in minutes; a dash means that criterion is not required.","它们分别代表结构承载力、完整性和隔热性，以分钟计；短横线表示不要求该项。","S1C2 tables, pp. 71–75"],
      ["How can the Specification 1 tables establish an FRL?","如何用规范 1 的表格确定 FRL？","Select the table for the element and material, meet its minimum dimensions, and also satisfy the element descriptions in Specification 2.","选择适用于构件和材料的表格，满足最低尺寸，并符合规范 2 的构件说明。","S1C2(a), pp. 71–75"],
      ["When can a tested prototype support an FRL?","测试原型何时可支持 FRL？","The element must be identical to the prototype and an accredited laboratory report must fully describe the test, construction and restraint.","构件必须与原型相同，认可实验室报告必须完整说明试验、构造和约束条件。","S1C2(b), p. 71"],
      ["Can a building element differ from its tested prototype?","建筑构件可以与测试原型不同吗？","Only minor differences are accepted through this pathway, and an accredited laboratory must confirm the FRL and necessary limitations.","此路径只接受轻微差异，并须由认可实验室确认 FRL 和必要限制。","S1C2(c), p. 71"],
      ["Which design standards can establish an FRL?","哪些设计标准可确定 FRL？","The clause nominates standards for steel or composite, concrete, timber and masonry structures; the correct standard depends on the material.","条文为钢或组合结构、混凝土、木结构和砌体指定标准；应按材料选择。","S1C2(d), p. 71"],
      ["What must an FRL calculation demonstrate?","FRL 计算必须证明什么？","It must show structural adequacy, integrity and insulation under the Standard Fire Test regime and account for temperature, strength, support, restraint, geometry, protection and design load.","必须证明在标准耐火试验下的承载力、完整性和隔热性，并考虑温度、强度、支撑、约束、几何、防护和设计荷载。","S1C3, pp. 75–76"],
      ["When are materials interchangeable?","材料何时可以互换？","Specified concrete or plaster ingredients may be exchanged only within the listed material group and in the same proportions; gypsum-perlite and gypsum-vermiculite plaster are also treated as equivalent.","混凝土或抹灰材料只能在所列同组内并按相同比例替换；石膏珍珠岩与石膏蛭石抹灰也视为等同。","S1C4, p. 76"],
      ["What applies to lightweight protection around steel columns?","钢柱轻质防火保护适用什么要求？","The lightweight fire-resisting covering must also comply with the nominated Volume One provisions.","轻质耐火包覆还必须符合第一卷指定条文。","S1C5, p. 76"],
      ["Does a non-loadbearing element need structural adequacy?","非承重构件需要结构承载耐火性能吗？","If it is genuinely non-loadbearing, it need not satisfy the structural-adequacy component even where the DTS provision states all three FRL criteria.","若确为非承重构件，即使 DTS 条文列出三个 FRL 指标，也不必满足结构承载力指标。","S1C6, p. 76"]
    ]),
  specification("s2", "Descriptions of elements referred to in Specification 1", "规范 1 所引用构件的说明", "S2C1–S2C27, pp. 77–82",
    "Specification 2 defines the exact materials, proportions, dimensions, reinforcement, clearances, exposure conditions and measurement rules behind the FRL tables in Specification 1. A table value is not valid by itself: the real construction must also match these descriptions.",
    "规范 2 规定规范 1 FRL 表格背后的准确材料、配比、尺寸、加固、净距、受火条件和测量规则。仅满足表中数值并不足够；实际构造还必须符合这些说明。", [
      ["Why must Specification 2 be read with Specification 1?","为什么规范 2 必须与规范 1 一起阅读？","It defines the construction represented by the FRL tables; without matching these descriptions, the table rating cannot simply be claimed.","它定义 FRL 表格所代表的构造；不符合这些说明就不能直接采用表中等级。","S2C1, p. 77"],
      ["What mortar is required for masonry units?","砌体单元需要什么砂浆？","Ashlar, calcium-silicate, concrete and fired-clay units must use cement or composition mortar complying with AS 3700; gypsum blocks use gypsum-sand or lime mortar.","方石、硅酸钙、混凝土和烧结黏土单元须使用符合 AS 3700 的水泥或混合砂浆；石膏块使用石膏砂浆或石灰砂浆。","S2C2–S2C3, p. 77"],
      ["Why do plaster mix and coat rules matter?","为什么抹灰配比和涂层规则重要？","The prescribed gypsum, perlite, vermiculite, cement, lime and sand proportions and coat arrangements form part of the tested or tabulated fire protection.","规定的石膏、珍珠岩、蛭石、水泥、石灰和砂配比及涂层方式属于测试或表列防火构造的一部分。","S2C4–S2C6, p. 77"],
      ["When must wall plaster be reinforced?","墙面抹灰何时必须加固？","Fire-protective plaster over 19 mm thick requires the specified corrosion-protected expanded metal lath or galvanised wire mesh and positioning.","超过 19 mm 的防火抹灰必须采用规定的防腐金属网或镀锌钢丝网并正确定位。","S2C7, pp. 77–78"],
      ["What limitations apply to ashlar masonry?","方石砌体有什么限制？","It cannot be used in the listed stone types or in the relevant part of a building containing more than two storeys.","不得使用条文列出的石材，也不得用于包含超过两层的相关建筑部分。","S2C8, p. 78"],
      ["How are solid and hollow masonry thicknesses calculated?","实心和空心砌体厚度如何计算？","Units with no more than 25% voids use manufacturing dimensions and joints; units over 25% use equivalent thickness, based on net volume divided by one vertical-face area.","孔洞不超过 25% 时采用制造尺寸和灰缝；超过 25% 时采用等效厚度，即净体积除以一个竖向面的面积。","S2C9–S2C12, p. 78"],
      ["What wall slenderness limits apply?","墙体高厚比有什么限制？","For the listed wall types, height between lateral supports divided by overall thickness cannot exceed 20 for loadbearing walls or 27 for non-loadbearing walls.","对所列墙体，侧向支撑间高度与总厚度之比，承重墙不得超过 20，非承重墙不得超过 27。","S2C13, p. 78"],
      ["How can plaster affect a wall or column thickness calculation?","抹灰如何影响墙或柱的厚度计算？","Equal plaster on both wall faces may add one side's thickness in specified cases, while plaster on protected columns is additional to the tabulated principal-material thickness.","某些情况下墙两侧等厚抹灰可计入一侧厚度；柱的抹灰厚度则应在表列主体材料厚度之外另加。","S2C14–S2C15, p. 79"],
      ["What installation details apply to plaster on metal lath?","金属网抹灰有哪些安装细节？","Walls, columns and beams have specific channel spacing, clearances, symmetry and measurement points that must be followed.","墙、柱和梁都有具体的龙骨间距、净距、对称性和测量位置要求。","S2C16–S2C18, p. 79"],
      ["When is a column or beam exposed on no more than three sides?","柱或梁何时视为最多三面受火？","A column adjoining sufficiently thick solid masonry or concrete, or a beam continuously touching a concrete slab or block floor or roof, may qualify.","柱与足够厚的实心砌体或混凝土相接，或梁连续紧贴混凝土板或砌块楼屋面时，可能符合条件。","S2C19–S2C20, pp. 79–80"],
      ["Must spaces around a protected steel column be filled?","受保护钢柱周围空隙必须填实吗？","Spaces between protection and steel, including re-entrant parts, must be solidly filled with fire-protective material; hollow-section interiors need not be filled.","防护层与钢材之间及凹入部分必须用防火材料填实；空心截面内部无需填充。","S2C21, p. 80"],
      ["What controls hollow terracotta blocks?","空心陶土砌块受什么限制？","Maximum percentages of cores or perforations increase with block thickness and must remain within S2C22.","孔洞最大比例随砌块厚度变化，并必须符合 S2C22。","S2C22, p. 80"],
      ["How must masonry and block protection around steel be reinforced?","钢构件周围的砌体和砌块保护如何加固？","Specified steel wire or mesh is required in every second masonry course, or every course for gypsum and hollow terracotta blocks, with laps at corners.","普通砌体每隔一皮、石膏块和空心陶土块每一皮均需设置规定钢丝或网，并在转角搭接。","S2C23–S2C24, p. 80"],
      ["What reinforcement applies to concrete, poured gypsum or sprayed plaster protection?","混凝土、浇注石膏或喷涂抹灰保护需要什么加固？","The clauses prescribe mesh or wire type, location, diameter, spacing and fixing intervals according to material thickness, member orientation and shape.","条文按材料厚度、构件方向和形状规定网或钢丝类型、位置、直径、间距和固定距离。","S2C25–S2C26, pp. 80–81"],
      ["From where is steel fire-protection thickness measured?","钢构件防火保护厚度从哪里测量？","Measure from the steel face or edge, splice plate, rivet or bolt closest to the outside, subject to the stated allowances for thicker protection and certain flanges.","从最靠近外侧的钢材表面或边缘、拼接板、铆钉或螺栓处测量，但较厚保护层及某些翼缘可采用规定的允许值。","S2C27, pp. 81–82"]
    ]),
  specification("s3", "Fire hazard properties", "火灾危险特性", "S3C1–S3C6, p. 83",
    "Specification 3 explains how an assembly's spread-of-flame, smoke-development, ignition-screening and core-protection performance is tested. Specimens must represent the proposed construction, including joints and service penetrations. Any concession or smaller pilot specimen is limited to the construction and dimensions justified by the test.",
    "规范 3 说明如何测试组合构件的火焰传播、烟气产生、阻止点燃和保护芯材性能。试件必须代表拟建构造，包括接缝和设备穿孔。任何豁免或小型试件结果都只适用于试验所证明的构造和尺寸范围。", [
      ["What is Specification 3 for?","规范 3 有什么作用？","It sets procedures for determining fire hazard properties of assemblies tested to AS/NZS 1530.3.","它规定按 AS/NZS 1530.3 测定组合构件火灾危险特性的程序。","S3C1, p. 83"],
      ["What must be demonstrated about an assembly's core?","必须证明组合构件芯材的什么性能？","Where required by Specification 7, testing must establish whether the assembly can screen and protect its core material.","当规范 7 要求时，测试必须确定组合构件能否遮蔽并保护其芯材。","S3C2, p. 83"],
      ["Which test measures flame spread and smoke development?","哪项试验测量火焰传播和烟气产生？","AS/NZS 1530.3 is used to determine the Spread-of-Flame Index and Smoke-Developed Index.","AS/NZS 1530.3 用于确定火焰传播指数和烟气产生指数。","S3C3(a), p. 83"],
      ["Which test assesses ignition prevention and core screening?","哪项试验评估防止点燃和芯材遮蔽？","AS 1530.4 is used for the ability to prevent ignition and screen core material from free air.","AS 1530.4 用于评估防止点燃及使芯材与自由空气隔离的能力。","S3C3(b), p. 83"],
      ["Why must test specimens include every joint type?","为什么试件必须包含每种接缝？","Joints can change fire and smoke behaviour, so the tested assembly must represent all joints proposed in the building.","接缝会改变火和烟的表现，因此试件必须代表建筑中拟采用的所有接缝。","S3C4(a), p. 83"],
      ["Why must penetrations and recesses be tested?","为什么必须测试穿孔和凹槽？","Pipes, switches and other fittings can expose the core or create fire paths, so proposed perforations and recesses must be represented.","管道、开关等配件可能暴露芯材或形成火灾通道，因此拟采用的穿孔和凹槽必须在试件中体现。","S3C4(b), p. 83"],
      ["When is the specimen-detail requirement relaxed?","何时可以放宽试件细节要求？","A previously tested joint or opening may be accepted when it was larger than the proposed one, used the same construction and passed the test conditions.","若先前测试的接缝或开口更大、构造相同并通过试验条件，则可接受。","S3C5, p. 83"],
      ["Can a laboratory use a smaller pilot specimen?","实验室可以使用较小的试验试件吗？","Yes, for the AS 1530.4 screening test, if it is at least 900 mm by 900 mm and adequately represents the proposed construction.","可以。对于 AS 1530.4 遮蔽试验，试件至少为 900 mm × 900 mm，并能充分代表拟建构造。","S3C6, p. 83"],
      ["Can pilot-test results be applied to a larger construction?","小型试验结果可以用于更大的构造吗？","Not beyond the dimensional limits defined by the testing laboratory.","不得超过测试实验室规定的尺寸范围。","S3C6, p. 83"],
      ["What is the practical evidence check for Specification 3?","使用规范 3 时应进行什么实际证据检查？","Confirm the report's test standard, specimen size, joints, penetrations, construction details and stated field-of-application limits all match the proposed assembly.","确认报告中的试验标准、试件尺寸、接缝、穿孔、构造细节和适用范围限制均与拟建组合构件一致。","S3C1–S3C6, p. 83"]
    ])
);

const s2ClauseTopics = [
  ["S2C1","Scope","范围",77],["S2C2","Mortar for masonry","砌体砂浆",77],["S2C3","Gypsum blocks","石膏块",77],
  ["S2C4","Gypsum-sand mortar and plaster","石膏砂浆和抹灰",77],["S2C5","Gypsum-perlite and gypsum-vermiculite plaster","石膏珍珠岩和石膏蛭石抹灰",77],
  ["S2C6","Cement, sand and lime plaster","水泥、砂和石灰抹灰",77],["S2C7","Plaster reinforcement","抹灰加固",78],
  ["S2C8","Ashlar stone masonry","方石砌体",78],["S2C9","Dimensions of masonry","砌体尺寸",78],["S2C10","Solid units","实心砌块",78],
  ["S2C11","Hollow units","空心砌块",78],["S2C12","Equivalent thickness","等效厚度",78],["S2C13","Wall height-to-thickness ratio","墙体高厚比",78],
  ["S2C14","Plaster thickness on walls","墙体抹灰厚度",79],["S2C15","Plaster thickness on columns","柱抹灰厚度",79],
  ["S2C16","Metal-lath plaster on walls","墙体金属网抹灰",79],["S2C17","Metal-lath plaster on columns","柱金属网抹灰",79],
  ["S2C18","Metal-lath plaster on beams","梁金属网抹灰",79],["S2C19","Exposure of columns","柱的受火面",79],["S2C20","Exposure of beams","梁的受火面",80],
  ["S2C21","Filling column spaces","柱周空隙填充",80],["S2C22","Hollow terracotta blocks","空心陶土砌块",80],
  ["S2C23","Masonry protection reinforcement","砌体保护层加固",80],["S2C24","Gypsum and terracotta block reinforcement","石膏及陶土块加固",80],
  ["S2C25","Concrete and poured-gypsum reinforcement","混凝土及浇注石膏加固",80],["S2C26","Sprayed plaster reinforcement","喷涂抹灰加固",81],
  ["S2C27","Measuring fire-protection thickness","防火保护厚度测量",81]
];

const specification2 = window.NCC_CHAPTERS.find((chapter) => chapter.id === "s2");
for (const [clause, topic, topicZh, page] of s2ClauseTopics) {
  specification2.questions.push(
    [`What does ${clause} require you to understand about ${topic.toLowerCase()}?`, `${clause} 要求理解哪些关于${topicZh}的内容？`, `This clause defines the construction details that must be satisfied for ${topic.toLowerCase()} when relying on the Specification 1 fire-resistance tables. Read its dimensions, materials and limitations as mandatory parts of the listed system.`, `当使用规范 1 的耐火等级表时，本条款规定了${topicZh}必须满足的构造细节。其尺寸、材料和限制都是表列系统的强制组成部分。`, `${clause}, p. ${page}`],
    [`What should you verify before claiming compliance with ${clause}?`, `声称符合 ${clause} 之前应核对什么？`, `Check that the installed construction matches every relevant detail in ${clause}, including material type, proportions, thickness, reinforcement, spacing, clearances and measurement method where stated. A similar-looking construction is not automatically equivalent.`, `应核对实际施工是否符合 ${clause} 的每项相关细节，包括条文规定的材料类型、配比、厚度、加固、间距、净距和测量方法。外观相似的构造并不自动等同。`, `${clause}, p. ${page}`]
  );
}

for (const chapter of window.NCC_CHAPTERS.filter((item) => ["s1","s3"].includes(item.id))) {
  const originalQuestions = [...chapter.questions];
  for (const [question, questionZh, answer, answerZh, citation] of originalQuestions) {
    chapter.questions.push([
      `How would you check this in practice: ${question}`,
      `实际应用时如何核对：${questionZh}`,
      `Start with the rule explained above, then verify the proposed building, material or document against every condition, application, limitation and exemption in the cited local NCC clause. Record the evidence used rather than relying on memory or assumption. Key rule: ${answer}`,
      `先从上述规则开始，然后根据所引用的本地 NCC 条款，核对拟建建筑、材料或文件是否满足每项条件、适用范围、限制和豁免。应记录所使用的证据，不要依赖记忆或假设。核心规则：${answerZh}`,
      citation
    ]);
  }
}

const requiredClauseTopics = {
  a1: [["A1G1","Scope of Volume One",38],["A1G2","Scope of Volume Two",38],["A1G3","Scope of Volume Three",38],["A1G4","Interpretation",39]],
  a2: [["A2G1","Compliance pathways",41],["A2G2","Performance Solutions",41],["A2G3","Deemed-to-Satisfy Solutions",42],["A2G4","Combined solutions",43]],
  a3: [["A3G1","State and Territory compliance",45]],
  a4: [["A4G1","Referenced documents",46],["A4G2","Conflicts with referenced documents",47],["A4G3","Adoption limits",47]],
  a5: [["A5G1","Suitability",49],["A5G2","Evidence of suitability",50],["A5G3","BCA evidence",50],["A5G4","PCA evidence",52],["A5G5","Fire resistance",55],["A5G6","Fire hazard and combustibility",55],["A5G7","Incipient fire spread",56],["A5G8","Aluminium composite panel labels",56],["A5G9","NatHERS evidence",56]],
  a6: [["A6G1","Determining classification",57],["A6G2","Class 1",58],["A6G3","Class 2",59],["A6G4","Class 3",59],["A6G5","Class 4",60],["A6G6","Class 5",60],["A6G7","Class 6",61],["A6G8","Class 7",63],["A6G9","Class 8",64],["A6G10","Class 9",65],["A6G11","Class 10",66],["A6G12","Multiple classifications",67]],
  a7: [["A7G1","United buildings",69],["A7G2","Alterations to united buildings",69]],
  s1: [["S1C1","Scope",71],["S1C2","FRL rating pathways",71],["S1C3","FRLs determined by calculation",75],["S1C4","Interchangeable materials",76],["S1C5","Lightweight column protection",76],["S1C6","Non-loadbearing elements",76]],
  s3: [["S3C1","Scope",83],["S3C2","General testing requirement",83],["S3C3","Form of test",83],["S3C4","Test specimens",83],["S3C5","Tested-detail concession",83],["S3C6","Smaller specimens",83]]
};

for (const [chapterId, clauses] of Object.entries(requiredClauseTopics).filter(([chapterId]) => ["s1", "s3"].includes(chapterId))) {
  const chapter = window.NCC_CHAPTERS.find((item) => item.id === chapterId);
  for (const [clause, topic, page] of clauses) {
    const clausePattern = new RegExp(`\\b${clause}\\b`);
    let clauseCount = chapter.questions.filter((question) => clausePattern.test(question[4])).length;
    while (clauseCount < 2) {
      const questionNumber = clauseCount + 1;
      chapter.questions.push([
        questionNumber === 1 ? `What is the central rule in ${clause} about ${topic.toLowerCase()}?` : `How should ${clause} be checked in a real project?`,
        questionNumber === 1 ? `${clause} 关于${topic}的核心规则是什么？` : `在实际项目中应如何核对 ${clause}？`,
        questionNumber === 1
          ? `${clause} contains the NCC requirements for ${topic.toLowerCase()}. Identify who and what it applies to, then read every application, limitation, exemption and note before deciding how the rule affects the building.`
          : `Check the proposed work directly against every requirement in ${clause}. Confirm the building classification and jurisdiction, verify dimensions and evidence where relevant, and record how each condition is satisfied.`,
        questionNumber === 1
          ? `${clause} 规定了有关${topic}的 NCC 要求。应先确定适用对象和范围，再阅读所有适用条款、限制、豁免和注释，然后判断该规则如何影响建筑。`
          : `应将拟建工程直接与 ${clause} 的每项要求核对。确认建筑分类和司法辖区，在相关情况下核实尺寸和证据，并记录每项条件如何得到满足。`,
        `${clause}, p. ${page}`
      ]);
      clauseCount += 1;
    }
  }
}
