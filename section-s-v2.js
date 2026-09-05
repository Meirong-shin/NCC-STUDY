const sectionSProvisionMap = {
  s1: [
    ["S1C1", "Scope", "范围", 71],
    ["S1C2", "Rating", "耐火等级评定", 71],
    ["S1C3", "FRLs determined by calculation", "通过计算确定耐火等级", 75],
    ["S1C4", "Interchangeable materials", "可互换材料", 76],
    ["S1C5", "Columns covered with lightweight construction", "采用轻质构造保护的柱", 76],
    ["S1C6", "Non-loadbearing elements", "非承重构件", 76]
  ],
  s2: [
    ["S2C1", "Scope", "范围", 77],
    ["S2C2", "Mortar for masonry", "砌体砂浆", 77],
    ["S2C3", "Gypsum blocks", "石膏砌块", 77],
    ["S2C4", "Gypsum-sand mortar and plaster", "石膏砂浆和抹灰", 77],
    ["S2C5", "Gypsum-perlite and gypsum-vermiculite plaster", "石膏珍珠岩和石膏蛭石抹灰", 77],
    ["S2C6", "Plaster of cement and sand or cement, lime and sand", "水泥砂浆或水泥石灰砂浆抹灰", 77],
    ["S2C7", "Plaster reinforcement", "抹灰加固", 77],
    ["S2C8", "Ashlar stone masonry", "方石砌体", 78],
    ["S2C9", "Dimensions of masonry", "砌体尺寸", 78],
    ["S2C10", "Solid units", "实心砌块", 78],
    ["S2C11", "Hollow units", "空心砌块", 78],
    ["S2C12", "Equivalent thickness", "等效厚度", 78],
    ["S2C13", "Height-to-thickness ratio of certain walls", "特定墙体的高厚比", 78],
    ["S2C14", "Increase in thickness by plastering — walls", "通过抹灰增加墙体厚度", 79],
    ["S2C15", "Increase in thickness by plastering — columns", "通过抹灰增加柱厚度", 79],
    ["S2C16", "Gypsum-perlite or gypsum-vermiculite plaster or metal lath — walls", "墙体石膏珍珠岩或石膏蛭石抹灰及金属网", 79],
    ["S2C17", "Gypsum-perlite or gypsum-vermiculite plaster or metal lath — columns", "柱石膏珍珠岩或石膏蛭石抹灰及金属网", 79],
    ["S2C18", "Gypsum-perlite or gypsum-vermiculite plaster or metal lath — beams", "梁石膏珍珠岩或石膏蛭石抹灰及金属网", 79],
    ["S2C19", "Exposure of columns", "柱的受火面", 79],
    ["S2C20", "Exposure of beams", "梁的受火面", 80],
    ["S2C21", "Filling of column spaces", "柱周空隙填充", 80],
    ["S2C22", "Hollow terracotta blocks", "空心陶土砌块", 80],
    ["S2C23", "Reinforcing for column and beam protection — masonry", "柱梁砌体保护层加固", 80],
    ["S2C24", "Reinforcing for column and beam protection — gypsum blocks and hollow terracotta blocks", "柱梁石膏块及空心陶土块保护层加固", 80],
    ["S2C25", "Reinforcing for column and beam protection — structural concrete and poured gypsum", "柱梁结构混凝土及浇注石膏保护层加固", 80],
    ["S2C26", "Reinforcing for column and beam protection — gypsum-perlite or gypsum-vermiculite plaster sprayed to contour", "柱梁轮廓喷涂石膏珍珠岩或石膏蛭石保护层加固", 81],
    ["S2C27", "Measurement of thickness of column and beam protection", "柱梁防火保护层厚度测量", 81]
  ],
  s3: [
    ["S3C1", "Scope", "范围", 83],
    ["S3C2", "General requirement", "一般要求", 83],
    ["S3C3", "Form of test", "试验形式", 83],
    ["S3C4", "Test specimens", "试件", 83],
    ["S3C5", "Concession", "放宽条件", 83],
    ["S3C6", "Smaller specimen permitted", "允许使用较小试件", 83]
  ]
};

const sectionSPlainEnglish = {
  S1C1: "Specification 1 explains the accepted ways to determine the fire-resistance level, or FRL, of a building element.",
  S1C2: "An element can receive an FRL by matching a listed table construction, matching a tested prototype, using an accredited assessment of only minor changes to a tested prototype, using the nominated structural design standard, or using an accepted calculation. The chosen method must cover the actual material, dimensions, protection, exposure, restraint, support and loading. Fire-protected timber must also follow Specification 10 where it applies.",
  S1C3: "A calculated FRL must predict how the real element will perform in the Standard Fire Test. The calculation must address structural adequacy, integrity and insulation as relevant, and consider temperatures, material strength, dimensions, protection, supports, restraint and the design load. It must use reliable test information and accepted engineering principles.",
  S1C4: "Some ingredients used in concrete or plaster may be exchanged, but only with another ingredient in the same permitted material group and without changing the stated proportions. Gypsum-perlite and gypsum-vermiculite plaster are treated as interchangeable for this purpose.",
  S1C5: "When lightweight construction provides fire protection to a steel column, it must satisfy the additional construction requirements identified in Volume One. The FRL table alone is not enough.",
  S1C6: "A genuinely non-loadbearing element does not need the structural-adequacy part of an FRL, even when the relevant DTS provision displays all three FRL numbers. It must still meet the required integrity and insulation periods.",
  S2C1: "Specification 2 defines the exact construction represented by the nominated FRL tables in Specification 1. A table value can only be used when the real element also matches these descriptions.",
  S2C2: "Ashlar stone, calcium-silicate, concrete and fired-clay masonry units must be laid in cement mortar or composition mortar that complies with AS 3700.",
  S2C3: "Gypsum blocks must be laid using gypsum-sand mortar or lime mortar. A different bedding material cannot be assumed to have the same fire performance.",
  S2C4: "Gypsum-sand mortar and plaster must use the stated gypsum-to-sand proportions. The sand quantity is measured by loose dry volume, so the mix must be controlled rather than estimated on site.",
  S2C5: "Gypsum-perlite or gypsum-vermiculite plaster must use one of the permitted mixes and be applied in the required coat arrangement. The base and finishing coats together must provide the required protection thickness.",
  S2C6: "Cement-based fire-protective plaster must use cement and sand, or cement, lime and sand, in the allowed proportions. A permitted finishing coat may be added, but it does not change the required underlying construction.",
  S2C7: "Fire-protective plaster on a wall needs reinforcement when it is more than 19 mm thick. Use the specified corrosion-protected expanded metal lath or galvanised wire mesh, positioned and fixed as required so the plaster remains supported during fire exposure.",
  S2C8: "Ashlar masonry cannot be used for this fire-rating method in a part of a building containing more than two storeys. The stone types excluded by the clause must also not be used.",
  S2C9: "The fire-rating thickness of calcium-silicate, concrete and fired-clay masonry is not always its simple overall width. Use the solid-unit, hollow-unit and equivalent-thickness rules in the following clauses.",
  S2C10: "A masonry unit is treated as solid when holes or cores occupy no more than 25% of its gross volume. Its wall thickness is then calculated using the unit's manufacturing dimension together with the relevant joints.",
  S2C11: "A masonry unit with more than 25% holes or cores is treated as hollow. Its fire-rating thickness must be based on equivalent thickness rather than its full outside width.",
  S2C12: "Equivalent thickness is the unit's net material volume divided by the area of one vertical face. This converts a hollow unit into the thickness of an equivalent solid layer for the FRL tables.",
  S2C13: "For the wall types named in the clause, divide the height between lateral supports by the wall's overall thickness. The ratio must not exceed 20 for a loadbearing wall or 27 for a non-loadbearing wall.",
  S2C14: "Where the clause permits plaster to contribute to wall thickness, the wall must be plastered equally on both faces. Only the thickness on one face is added to the masonry or concrete thickness, and the stated exclusions still apply.",
  S2C15: "When an FRL table says a column is plastered, the listed principal-material thickness does not include the plaster. The required plaster thickness must be provided in addition to the tabulated column protection.",
  S2C16: "For fire-protective plaster on walls, the metal lath and supporting channels must follow the stated spacing, fixing and location rules. The protection must be arranged consistently on the fire-exposed construction rather than merely achieving an average plaster thickness.",
  S2C17: "Plaster protection around a steel column must use the specified metal-lath support, clearances, channel spacing and symmetrical arrangement. Measure protection at the locations required by the clause, including around flanges and projecting steelwork.",
  S2C18: "Plaster protection to a steel beam must use the stated lath, channel spacing, clearances and fixing arrangement. The protective enclosure must remain correctly positioned around the beam and any relevant flange or projection.",
  S2C19: "A column can be treated as exposed on no more than three sides when one or more sides are in contact with qualifying solid masonry or concrete of sufficient thickness. Otherwise, use the FRL table for the greater number of exposed sides.",
  S2C20: "A beam, joist, girder or truss can be treated as exposed on no more than three sides when its top is in direct and continuous contact with the qualifying concrete slab, hollow-block floor or roof described by the clause.",
  S2C21: "Fill the spaces between a steel column and its fire protection, including re-entrant spaces, solidly with the required fire-protective material. The inside of a hollow steel section does not have to be filled.",
  S2C22: "Hollow terracotta blocks must stay within the maximum core or perforation percentage allowed for their thickness. Thicker blocks may have a different permitted percentage, so select the correct value from the clause rather than using one limit for every block.",
  S2C23: "Calcium-silicate, fired-clay or concrete masonry protecting a steel column or beam must contain the specified wire or mesh reinforcement. Install it at the required course intervals and lap it properly at corners.",
  S2C24: "Gypsum-block and hollow-terracotta-block protection around steel columns or beams requires the specified reinforcement in every course, with the required corner laps and continuity.",
  S2C25: "Structural-concrete or poured-gypsum protection to steel members needs reinforcement suited to the member and protection thickness. Follow the stated wire or mesh type, diameter, spacing, position and fixing requirements.",
  S2C26: "Contour-sprayed gypsum-perlite or gypsum-vermiculite plaster needs reinforcement when the applicable table requires it. Select reinforcement from the correct table for the member's orientation and shape, place it at the required depth, and observe the stated meaning of vertical and horizontal surfaces.",
  S2C27: "Measure steel fire-protection thickness from the steel surface or from the splice plate, rivet or bolt closest to the outside face. Apply the special measurement allowances only where the clause permits them; do not measure from an easier point that overstates protection.",
  S3C1: "Specification 3 gives the testing procedure used to determine the fire-hazard properties of assemblies tested to AS/NZS 1530.3.",
  S3C2: "The assembly's fire-hazard properties and, where required, its ability to shield the core material must be determined using the tests and specimen rules in the following clauses.",
  S3C3: "Use AS/NZS 1530.3 to determine Spread-of-Flame Index and Smoke-Developed Index. Use the nominated AS 1530.4 test to determine whether the assembly prevents ignition and screens its core from free air.",
  S3C4: "The test specimen must represent the proposed assembly. Include every proposed joint type and every relevant perforation, recess or fitting—such as pipes or switches—that could affect fire behaviour or expose the core.",
  S3C5: "A separate specimen detail may be unnecessary when an already tested joint, opening or recess is larger than the proposed detail, uses the same construction and has already satisfied the relevant test. The concession cannot be extended to a different or more severe detail without evidence.",
  S3C6: "A laboratory may use a pilot specimen for the core-screening test when it is at least 900 mm by 900 mm and properly represents the proposed construction. The result only applies up to the size limits set by the laboratory; it cannot automatically justify larger construction."
};

const sectionSPlainChinese = {
  S1C1:"规范 1 说明确定建筑构件耐火等级（FRL）的认可方法。",
  S1C2:"构件可通过符合表列构造、与测试原型一致、由认可实验室评估原型的轻微变更、采用指定结构设计标准或认可计算来确定 FRL。所选方法必须涵盖实际材料、尺寸、防护、受火面、约束、支撑和荷载；适用时，受防火保护的木结构还须符合规范 10。",
  S1C3:"计算所得 FRL 必须预测实际构件在标准耐火试验中的表现。计算应按需要涵盖结构承载力、完整性和隔热性，并考虑温度、材料强度、尺寸、防护、支撑、约束和设计荷载，同时采用可靠试验资料和认可工程原理。",
  S1C4:"混凝土或抹灰中的某些成分只能用同一允许材料组内的成分替换，并保持规定配比。石膏珍珠岩抹灰与石膏蛭石抹灰在此视为可互换。",
  S1C5:"轻质构造为钢柱提供防火保护时，还须符合第一卷指定的附加构造要求；仅满足 FRL 表格并不足够。",
  S1C6:"真正的非承重构件不需要满足 FRL 的结构承载力部分，即使 DTS 条文列出三个 FRL 数值；但仍须满足规定的完整性和隔热时间。",
  S2C1:"规范 2 定义规范 1 指定 FRL 表格所代表的准确构造。只有实际构件也符合这些说明时，才能采用表中数值。",
  S2C2:"方石、硅酸钙、混凝土和烧结黏土砌块必须使用符合 AS 3700 的水泥砂浆或混合砂浆砌筑。",
  S2C3:"石膏砌块必须使用石膏砂浆或石灰砂浆砌筑，不能假设其他砌筑材料具有相同耐火性能。",
  S2C4:"石膏砂浆和抹灰必须采用规定的石膏与砂配比。砂量按松散干燥体积计量，不能在现场凭经验估算。",
  S2C5:"石膏珍珠岩或石膏蛭石抹灰必须采用允许的配合比和规定的分层施工方式；底层与面层合计须达到所需保护厚度。",
  S2C6:"水泥基防火抹灰须按允许配比使用水泥和砂，或水泥、石灰和砂。允许的面层不能改变规定的基层构造。",
  S2C7:"墙体防火抹灰超过 19 mm 时须使用规定的防腐钢板网或镀锌钢丝网加固，并按要求定位和固定。",
  S2C8:"采用本耐火评定方法时，方石砌体不得用于超过两层的建筑部分，也不得使用条款排除的石材。",
  S2C9:"硅酸钙、混凝土和烧结黏土砌体的耐火计算厚度不一定等于总宽度，须采用后续条款的实心、空心和等效厚度规则。",
  S2C10:"孔洞或芯孔不超过砌块总体积 25% 时按实心砌块处理，墙厚按制造尺寸及相关灰缝计算。",
  S2C11:"孔洞或芯孔超过总体积 25% 时按空心砌块处理，其耐火计算厚度须采用等效厚度而不是外部总宽度。",
  S2C12:"等效厚度等于砌块材料净体积除以一个竖向面的面积，用来换算 FRL 表格所需的等效实心层厚度。",
  S2C13:"对指定墙体，用侧向支撑间高度除以墙体总厚度。承重墙比值不得超过 20，非承重墙不得超过 27。",
  S2C14:"允许抹灰计入墙厚时，墙体两面须采用相同厚度抹灰；只能计入一侧厚度，并遵守规定的排除情况。",
  S2C15:"FRL 表格注明柱需抹灰时，表列主体材料厚度不含抹灰；规定抹灰厚度须另外提供。",
  S2C16:"墙体防火抹灰的金属网和支撑槽须符合规定的间距、固定和位置要求，不能只满足平均抹灰厚度。",
  S2C17:"钢柱抹灰保护须符合规定的金属网支撑、净距、槽钢间距和对称布置，并在指定位置测量厚度。",
  S2C18:"钢梁抹灰保护须符合规定的金属网、槽钢间距、净距和固定方式，使保护层保持正确位置。",
  S2C19:"柱的一面或多面与符合厚度要求的实心砌体或混凝土接触时，可按最多三面受火处理；否则须采用更多受火面的 FRL 表。",
  S2C20:"梁、搁栅、主梁或桁架顶部与规定楼板或屋面直接连续接触时，可按最多三面受火处理。",
  S2C21:"钢柱与防火材料之间及凹入部位的空隙须用规定防火材料填实；空心钢截面内部无需填充。",
  S2C22:"空心陶土砌块的芯孔或穿孔比例须低于其厚度对应的最大值；不同厚度应采用条款中的相应数值。",
  S2C23:"保护钢柱或钢梁的硅酸钙、烧结黏土或混凝土砌体须设置规定钢丝或网片，并按要求间隔安装及在转角搭接。",
  S2C24:"钢柱或钢梁周围的石膏块和空心陶土块保护层每一皮都须按要求加固，并保证转角搭接和连续性。",
  S2C25:"钢构件的结构混凝土或浇注石膏保护层须按构件和厚度采用规定的钢丝或网片类型、直径、间距、位置和固定方式。",
  S2C26:"轮廓喷涂石膏珍珠岩或石膏蛭石抹灰在适用表格要求时须加固。应按构件方向和形状选表、按规定深度放置，并采用条款对竖向和水平表面的定义。",
  S2C27:"钢构件防火保护厚度应从钢材表面或最靠外的拼接板、铆钉或螺栓处测量；只有条款允许时才能采用特殊测量宽限。",
  S3C1:"规范 3 规定按照 AS/NZS 1530.3 测定组合构件火灾危险特性的试验程序。",
  S3C2:"组合构件的火灾危险特性，以及在要求时遮蔽芯材的能力，须按后续条款规定的试验和试件规则确定。",
  S3C3:"使用 AS/NZS 1530.3 确定火焰传播指数和烟气产生指数；使用指定 AS 1530.4 试验判断组合构件能否防止点燃并隔离芯材与自由空气。",
  S3C4:"试件必须代表拟建组合构件，包括每种接缝，以及可能影响火灾表现或暴露芯材的穿孔、凹槽和管道、开关等配件。",
  S3C5:"若已测试的接缝、开口或凹槽更大、构造相同且通过相关试验，可能无需单独测试拟用细节；没有证据时不能把放宽用于不同或更不利的细节。",
  S3C6:"芯材遮蔽试验可使用至少 900 mm × 900 mm 且能代表拟建构造的小型试件，但结果只能用于实验室规定的尺寸上限内。"
};

for (const [chapterId, provisions] of Object.entries(sectionSProvisionMap)) {
  const chapter = window.NCC_CHAPTERS.find((item) => item.id === chapterId);
  chapter.questions = provisions.flatMap(([code, topic, topicZh, page]) => {
    const plainEnglish = sectionSPlainEnglish[code];
    const specificationLabel = `Specification ${chapterId.slice(1)}`;
    const overviewQuestion = topic === "Scope"
      ? `${code} — What does ${code} say ${specificationLabel} covers, and what should be checked when using it?`
      : `${code} — What does ${code} require for ${topic.toLowerCase()}, and how should it be checked in practice?`;
    const overviewQuestionZh = topic === "Scope"
      ? `${code}——${code} 说明规范 ${chapterId.slice(1)} 涵盖什么内容？使用时应核对什么？`
      : `${code}——${code} 对${topicZh}有什么要求？实际应用时应如何核对？`;
    return [
      [
        overviewQuestion,
        overviewQuestionZh,
        `${plainEnglish} In practice, compare the actual element with the local source excerpt and its referenced tables. Check the relevant materials, dimensions, proportions, test method, exposure, restraint, support and loading. Keep the drawings, specifications, calculations, product information, test reports and certificates that show the construction stays within every stated limit.`,
        `${sectionSPlainChinese[code]} 实际应用时，应把真实构件与下方本地原文及其引用表格进行比较，核对相关材料、尺寸、配比、试验方法、受火面、约束、支撑和荷载，并保存图纸、技术规范、计算、产品资料、试验报告和证书，以证明构造符合所有规定限制。`,
        `${code}, p. ${page}`
      ]
    ];
  });
}

const specificationLearningModules = {
  s1: [[
    "How an FRL is selected and proved",
    "如何选择并证明耐火等级（FRL）",
    `<p>Specification 1 explains how to establish the Fire-Resistance Level of a wall, column, beam, floor, roof or ceiling. An FRL contains up to three time periods: structural adequacy, integrity and insulation.</p>
    <h4>Accepted ways to establish an FRL</h4><ol>
      <li><strong>Use an NCC table:</strong> select the correct element and material, meet the minimum dimensions, and also match every relevant construction description in Specification 2.</li>
      <li><strong>Use a fire-tested prototype:</strong> the proposed element must match the tested construction, including materials, dimensions, restraint and exposure.</li>
      <li><strong>Assess a minor variation:</strong> an accredited testing laboratory must confirm that a small difference from the tested prototype will still achieve the claimed FRL and state the limits.</li>
      <li><strong>Use a nominated design standard:</strong> select the standard appropriate to steel, composite, concrete, timber or masonry construction.</li>
      <li><strong>Calculate the FRL:</strong> use accepted engineering principles and reliable test data to predict structural adequacy, integrity and insulation during the Standard Fire Test.</li>
    </ol><h4>Special rules</h4><ul><li>Only permitted concrete or plaster ingredients may be interchanged, within the stated material group and proportions.</li><li>Lightweight protection to steel columns must also meet the nominated Volume One requirements.</li><li>A genuinely non-loadbearing element does not need the structural-adequacy component, but it must still meet required integrity and insulation periods.</li></ul>
    <p class="key-point"><strong>Key lesson:</strong> An FRL number is valid only when the evidence and the real construction match.</p>`,
    `<p>规范 1 说明如何确定墙、柱、梁、楼板、屋面或天花板的耐火等级。FRL 最多包含三个时间数值：结构承载力、完整性和隔热性。</p><h4>确定 FRL 的认可方法</h4><ol><li><strong>使用 NCC 表格：</strong>选择正确构件和材料，满足最低尺寸，并符合规范 2 的全部相关构造说明。</li><li><strong>使用耐火测试原型：</strong>拟建构件必须与测试构造的材料、尺寸、约束和受火条件一致。</li><li><strong>评估轻微变更：</strong>认可实验室必须确认轻微差异仍能达到所声明 FRL，并说明限制。</li><li><strong>使用指定设计标准：</strong>按钢、组合、混凝土、木或砌体结构选择适用标准。</li><li><strong>计算 FRL：</strong>使用认可工程原理和可靠试验数据，预测标准耐火试验中的承载力、完整性和隔热性。</li></ol><h4>特殊规则</h4><ul><li>混凝土或抹灰成分只能在允许材料组和规定配比内替换。</li><li>钢柱轻质防护还须满足第一卷指定要求。</li><li>真正的非承重构件无需满足结构承载力，但仍须满足完整性和隔热时间。</li></ul><p class="key-point"><strong>重点：</strong>只有证据与实际构造相符时，FRL 数值才有效。</p>`,
    "S1C1–S1C6, pp. 71–76"
  ]],
  s2: [
    ["Materials used in masonry and fire-protective plaster","砌体和防火抹灰所用材料",`<p>This group defines the materials represented by the FRL tables. Masonry mortar must use the required AS 3700 cement or composition mortar, while gypsum blocks need gypsum-sand or lime mortar.</p><h4>Plaster controls</h4><ul><li>Gypsum-sand, gypsum-perlite, gypsum-vermiculite and cement-based plaster must use the permitted ingredients and proportions.</li><li>Required base and finishing coats together must provide the nominated protection.</li><li>Wall plaster thicker than 19 mm needs the specified corrosion-protected metal lath or galvanised wire reinforcement.</li><li>Ashlar masonry is restricted by building height and excluded stone types.</li></ul><p class="key-point"><strong>Key lesson:</strong> Similar-looking mortar or plaster cannot replace the prescribed mixture without valid evidence.</p>`,`<p>本组说明 FRL 表格所代表的材料。砌体砂浆须采用符合 AS 3700 的水泥砂浆或混合砂浆；石膏砌块须使用石膏砂浆或石灰砂浆。</p><h4>抹灰控制</h4><ul><li>石膏砂浆、石膏珍珠岩、石膏蛭石和水泥基抹灰须采用允许的成分和配比。</li><li>底层和面层合计须达到规定保护要求。</li><li>墙体抹灰超过 19 mm 时须使用规定的防腐金属网或镀锌钢丝加固。</li><li>方石砌体受到建筑层数和石材类型限制。</li></ul><p class="key-point"><strong>重点：</strong>没有有效证据时，外观相似的砂浆或抹灰不能代替规定配合比。</p>`,"S2C1–S2C8, pp. 77–78"],
    ["How masonry and plaster thickness is calculated","如何计算砌体和抹灰厚度",`<p>The FRL tables rely on carefully defined thickness measurements.</p><ul><li>A unit with no more than 25% holes or cores is treated as solid.</li><li>A unit with more than 25% holes or cores is treated as hollow and uses equivalent thickness.</li><li>Equivalent thickness equals the unit's net material volume divided by the area of one vertical face.</li><li>For specified walls, the height between lateral supports divided by overall thickness must not exceed 20 for loadbearing walls or 27 for non-loadbearing walls.</li><li>Where plaster is allowed to add to wall thickness, equal plaster is needed on both faces and only one face is counted.</li><li>Column plaster is additional to the principal-material thickness shown in the table.</li></ul><p class="key-point"><strong>Key lesson:</strong> Do not use the outside dimension automatically; first determine which measurement rule applies.</p>`,`<p>FRL 表格采用经过严格定义的厚度测量方法。</p><ul><li>孔洞或芯孔不超过 25% 的砌块按实心处理。</li><li>超过 25% 时按空心处理并采用等效厚度。</li><li>等效厚度等于材料净体积除以一个竖向面的面积。</li><li>指定墙体的支撑间高度与总厚度之比，承重墙不得超过 20，非承重墙不得超过 27。</li><li>允许抹灰计入墙厚时，两面须等厚且只计一面。</li><li>柱抹灰厚度须在表列主体材料厚度之外另加。</li></ul><p class="key-point"><strong>重点：</strong>不能自动采用外部尺寸，必须先确定适用的测量规则。</p>`,"S2C9–S2C15, pp. 78–79"],
    ["Fire protection around walls, columns and beams","墙、柱和梁周围的防火保护",`<p>This group controls how plaster and metal-lath protection is supported around structural elements.</p><ul><li>Walls, columns and beams each have specific requirements for lath, channels, spacing, clearances, fixing and measurement positions.</li><li>A column may use the table for no more than three exposed sides only when a qualifying solid masonry or concrete wall protects the other side.</li><li>A beam may receive similar treatment when its top is in direct and continuous contact with the qualifying floor or roof construction.</li><li>Spaces between a steel column and its protection, including re-entrant spaces, must be filled solidly with fire-protective material. The inside of a hollow steel section need not be filled.</li></ul><p class="key-point"><strong>Key lesson:</strong> Fire protection depends on its complete support and exposure arrangement, not just its nominal thickness.</p>`,`<p>本组规定结构构件周围抹灰和金属网防护的支撑方式。</p><ul><li>墙、柱和梁分别有金属网、槽钢、间距、净距、固定和测量位置要求。</li><li>只有另一侧由符合要求的实心砌体或混凝土墙保护时，柱才能采用最多三面受火的表格。</li><li>梁顶部与符合要求的楼板或屋面直接连续接触时，可采用类似处理。</li><li>钢柱与保护层之间及凹入部位须用防火材料填实；空心钢截面内部无需填充。</li></ul><p class="key-point"><strong>重点：</strong>防火保护取决于完整的支撑和受火布置，不只是名义厚度。</p>`,"S2C16–S2C21, pp. 79–80"],
    ["Reinforcement and measuring protection thickness","保护层加固和厚度测量",`<p>The final group explains how fire-protective construction is reinforced and measured.</p><ul><li>Hollow terracotta blocks must stay within the permitted core or perforation percentage for their thickness.</li><li>Masonry protection needs the specified wire or mesh at the required course intervals and corner laps.</li><li>Gypsum-block and terracotta-block protection generally requires reinforcement in every course.</li><li>Concrete, poured gypsum and contour-sprayed plaster use specified reinforcement types, diameters, spacing, position and fixing.</li><li>Steel protection thickness is measured from the steel surface or the outermost splice plate, rivet or bolt, subject only to stated allowances.</li></ul><p class="key-point"><strong>Key lesson:</strong> Record reinforcement before it is concealed and measure protection from the correct reference point.</p>`,`<p>最后一组说明防火构造如何加固和测量。</p><ul><li>空心陶土砌块须满足其厚度对应的芯孔或穿孔比例上限。</li><li>砌体保护层须按规定皮数间隔设置钢丝或网片，并在转角搭接。</li><li>石膏块和陶土块保护层通常每一皮都须加固。</li><li>混凝土、浇注石膏和轮廓喷涂抹灰采用规定的加固类型、直径、间距、位置和固定方式。</li><li>钢材保护厚度应从钢材表面或最外侧拼接板、铆钉或螺栓处测量，仅可采用明确允许的宽限。</li></ul><p class="key-point"><strong>重点：</strong>加固被覆盖前应做好记录，并从正确基准点测量保护厚度。</p>`,"S2C22–S2C27, pp. 80–82"]
  ],
  s3: [["Testing assemblies for fire and smoke behaviour","组合构件火灾和烟气性能测试",`<p>Specification 3 explains how an assembly's flame-spread, smoke-development, ignition-screening and core-protection performance is tested.</p><h4>Representative specimens</h4><ul><li>The specimen must include every joint type proposed in the building.</li><li>It must also include relevant perforations, recesses and fittings, such as pipes and switches, that could expose the core or alter fire behaviour.</li><li>An existing test may cover a smaller proposed detail when the tested opening or joint was larger, used the same construction and passed the relevant test.</li></ul><h4>Tests and size limits</h4><ul><li>AS/NZS 1530.3 determines Spread-of-Flame Index and Smoke-Developed Index.</li><li>The nominated AS 1530.4 procedure checks ignition prevention and screening of the core from free air.</li><li>A pilot specimen may be used when it is at least 900 mm by 900 mm and represents the construction, but the result cannot be used beyond the laboratory's stated size limit.</li></ul><p class="key-point"><strong>Key lesson:</strong> A test result applies only to the construction details and size range actually represented by the evidence.</p>`,`<p>规范 3 说明如何测试组合构件的火焰传播、烟气产生、防止点燃和保护芯材的性能。</p><h4>代表性试件</h4><ul><li>试件须包含建筑中拟采用的每种接缝。</li><li>还须包含可能暴露芯材或改变火灾表现的穿孔、凹槽和管道、开关等配件。</li><li>若已测试的开口或接缝更大、构造相同并通过相关试验，可涵盖较小的拟用细节。</li></ul><h4>试验和尺寸限制</h4><ul><li>AS/NZS 1530.3 确定火焰传播指数和烟气产生指数。</li><li>指定 AS 1530.4 程序检查防止点燃和隔离芯材与自由空气的能力。</li><li>代表拟建构造的小型试件至少为 900 mm × 900 mm，结果不得超出实验室规定的尺寸范围。</li></ul><p class="key-point"><strong>重点：</strong>试验结果只适用于证据实际代表的构造细节和尺寸范围。</p>`,"S3C1–S3C6, p. 83"]]
};

for (const [chapterId, modules] of Object.entries(specificationLearningModules)) {
  const chapter = window.NCC_CHAPTERS.find((item) => item.id === chapterId);
  chapter.contentMode = "modules";
  chapter.questions = modules;
}
