const sectionAProvisionMap = {
  a3: [["A3G1","State and Territory compliance","州和领地合规",45]],
  a4: [["A4G1","Referenced documents","引用文件",46],["A4G2","Differences between referenced documents and the NCC","NCC 与引用文件的差异",47],["A4G3","Adoption of referenced documents","引用文件的采用",47]],
  a5: [["A5G1","Suitability","适用性",49],["A5G2","Evidence of suitability","适用性证据",50],["A5G3","Evidence of suitability — Volumes One and Two","第一卷和第二卷的适用性证据",50],["A5G4","Evidence of suitability — Volume Three","第三卷的适用性证据",52],["A5G5","Fire-resistance of building elements","建筑构件耐火性能",55],["A5G6","Fire hazard properties and combustibility","火灾危险特性和燃烧性",55],["A5G7","Resistance to the incipient spread of fire","抵抗初期火势蔓延",56],["A5G8","Labelling of Aluminium Composite Panels","铝复合板标识",56],["A5G9","NatHERS","NatHERS",56]],
  a6: [["A6G1","Determining a building classification","确定建筑分类",57],["A6G2","Class 1 buildings","1 类建筑",58],["A6G3","Class 2 buildings","2 类建筑",61],["A6G4","Class 3 buildings","3 类建筑",62],["A6G5","Class 4 buildings","4 类部分",63],["A6G6","Class 5 buildings","5 类建筑",63],["A6G7","Class 6 buildings","6 类建筑",63],["A6G8","Class 7 buildings","7 类建筑",63],["A6G9","Class 8 buildings","8 类建筑",64],["A6G10","Class 9 buildings","9 类建筑",65],["A6G11","Class 10 buildings and structures","10 类建筑和构筑物",66],["A6G12","Multiple classifications","多重分类",67]],
  a7: [["A7G1","United buildings","联合建筑",69],["A7G2","Alterations in a united building","联合建筑的改造",69]]
};

const sectionAPlainEnglish = {
  A3G1: "The NCC is given legal effect separately by each State and Territory. Always use the edition adopted in the project location and read that jurisdiction's schedule, because it may add, replace or remove national provisions. The schedules are organised by jurisdiction, including South Australia in Schedule 8.",
  A4G1: "When the NCC calls up another document, such as an Australian Standard, the referenced parts become part of the NCC requirement. Use the edition listed in Schedule 2 unless the NCC clearly says otherwise, and apply only the portions relevant to the NCC provision.",
  A4G2: "If a referenced document conflicts with the NCC, the NCC takes priority. A requirement in a Standard cannot reduce, replace or override a clearer NCC requirement.",
  A4G3: "A later edition, amendment or replacement of a referenced document does not automatically apply. It only becomes part of the NCC when the NCC adopts it, so confirm the listed edition before relying on it.",
  A5G1: "Materials, products, construction methods and designs must be suitable for their intended job and capable of meeting the relevant NCC requirements. Suitability needs appropriate evidence and correct installation. Workmanship should follow good trade practice, but this NCC rule only controls matters within the NCC's scope.",
  A5G2: "Evidence must suit the product, design and intended use being assessed. Any certificate, report or other document submitted as evidence must be a complete, unabridged copy so its conditions and limitations can be checked.",
  A5G3: "For building work under Volumes One and Two, suitability may be supported by current CodeMark or accreditation certificates, an appropriate certification-body certificate, an accredited laboratory report, a qualified professional's report, or another well-supported technical document. The evidence must identify the exact NCC requirement, explain its technical basis and remain within its stated scope. Calculation methods can also be supported by professional certification or documentation showing compliance with the relevant ABCB protocol.",
  A5G4: "Plumbing products in contact with drinking water need the required health testing or suitable WaterMark evidence. Copper-alloy products covered by the rule must meet the weighted-average lead limit when that requirement applies. Products listed for WaterMark certification need a valid licence; excluded products need suitable certification or testing; unlisted products require a WaterMark risk assessment. Plumbing designs and systems also need DTS compliance or properly supported performance evidence.",
  A5G5: "When a DTS provision requires a fire-resistance level, determine that FRL using Specifications 1 and 2. A product claim or general fire test is not enough unless it follows the applicable FRL pathway and construction description.",
  A5G6: "Use the nominated fire-test standards for the particular property being claimed, such as flame spread, smoke, group number, flammability or non-combustibility. A tested prototype may support the actual product only when it is identical, or when an accredited laboratory confirms that minor differences do not reduce performance and clearly states all limits. An assembly is non-combustible only when its materials satisfy the relevant rule.",
  A5G7: "A ceiling's resistance to early fire spread into the space above must be supported by the Standard Fire Test. The actual ceiling must match the tested prototype, or an accredited laboratory must assess any minor differences and state the materials, construction and restraint needed to retain the result.",
  A5G8: "Aluminium composite panels must carry the identification required by SA TS 5344. The label allows the product and its composition to be traced instead of relying only on appearance or marketing information.",
  A5G9: "When house-energy-rating software is required, its result must be documented by a NatHERS certificate issued under the NatHERS scheme. A screenshot or informal software result is not the required evidence.",
  A6G1: "Classify a building or each relevant part by its actual purpose. The name used by an owner or developer is not decisive. Consider how the space is designed, built or adapted to be used, because classification determines which NCC requirements apply.",
  A6G2: "Class 1 covers dwellings. Class 1a includes a detached house or certain attached dwellings separated in the required way. Class 1b covers small boarding, guest-house, hostel or similar accommodation within the stated limits, and certain small buildings containing four or more short-term holiday cabins. Check occupant numbers, floor area, arrangement and fire-separation conditions.",
  A6G3: "Class 2 is a building containing two or more separate sole-occupancy units, with each unit used as a dwelling. Common areas serving those dwellings are normally part of the Class 2 building.",
  A6G4: "Class 3 is residential accommodation for unrelated people that is not Class 1 or Class 2. Examples include larger boarding houses, hostels, residential parts of hotels or motels, student or worker accommodation, and certain care accommodation. The exact use and living arrangement matter more than the building's name.",
  A6G5: "Class 4 is a single dwelling located within a Class 5, 6, 7, 8 or 9 building. It is a classified part of that larger building, not a separate Class 1 building.",
  A6G6: "Class 5 is an office used for professional or commercial purposes, excluding uses that fit another classification. Typical examples are administrative and professional workplaces.",
  A6G7: "Class 6 covers places where goods or services are supplied directly to the public. This includes shops, cafés, restaurants, bars and similar service businesses, including dining areas connected with them.",
  A6G8: "Class 7 covers storage and vehicle-related buildings. Class 7a is generally a carpark, while Class 7b is used for storage or wholesale display of goods. Confirm whether public retail activity changes the relevant area to Class 6.",
  A6G9: "Class 8 is a laboratory or a building used for production, processing, repairing, packing or finishing goods for trade or sale. It also includes activities where the process creates a risk to health or safety. Storage that is only incidental to the industrial use generally follows the Class 8 use.",
  A6G10: "Class 9 buildings are public buildings. Class 9a covers health-care buildings, including relevant parts; Class 9b covers assembly buildings such as schools, halls and places of worship; and Class 9c covers residential care buildings. Identify the service provided, occupants and evacuation needs before choosing the subclassification.",
  A6G11: "Class 10 covers non-habitable buildings and structures. Class 10a includes private garages, carports and sheds; Class 10b includes structures such as fences, retaining walls, swimming pools and certain antennas; and Class 10c is a private bushfire shelter. A space intended for normal occupation cannot simply be labelled Class 10a.",
  A6G12: "Different parts of one building may have different classifications when they serve different purposes. A small subsidiary use may sometimes take the main classification, but otherwise each part must be classified separately. A part can also have more than one classification when it genuinely serves multiple purposes, so assess boundaries, shared spaces and changing uses carefully.",
  A7G1: "Adjoining Class 2 to 9 buildings may be treated as one united building when openings connect them and the combined buildings comply with the NCC as a single building. Physical connection alone is not enough; the united result must be assessed as one compliant building.",
  A7G2: "Alterations must not accidentally change the compliance basis of a united building. Before closing openings, separating ownership or changing how connected buildings operate, check whether they can each comply as separate buildings or whether other approval and building work are required."
};

const sectionAKeyCheck = {
  A3G1: "Do not assume the national PDF is the final legal rule. Confirm the adopted edition, commencement arrangements and South Australian variations for the project's location and approval date.",
  A4G1: "Check the exact document title, edition and relevant referenced clauses. Requirements outside the NCC reference are not automatically imported.",
  A4G2: "Read both documents together and follow the NCC wherever their requirements cannot operate consistently.",
  A4G3: "Do not substitute a newer Standard merely because it is available; first confirm that the adopted NCC recognises it.",
  A5G1: "Match the evidence and installation to the product's actual location, exposure and intended function—not merely its general product category.",
  A5G2: "Reject extracts that omit test conditions, scope, expiry information or limitations, because those missing pages may change whether the evidence applies.",
  A5G3: "Confirm the issuer is competent, the document is current where required, the tested or assessed item matches the proposed item, and every stated condition is carried into the design and installation.",
  A5G4: "First decide whether the item contacts drinking water and whether it appears on a WaterMark schedule; that decision controls the evidence pathway.",
  A5G5: "Verify both the FRL value and the exact construction represented by the relevant Specifications 1 and 2 pathway.",
  A5G6: "Do not transfer a result to a changed material, thickness, fixing, joint or assembly unless the evidence expressly covers that change.",
  A5G7: "Check the test report's ceiling construction, restraint, joints, penetrations and field-of-application limits against the proposed ceiling.",
  A5G8: "Confirm the physical panel label and supporting product records correspond to the panel delivered to site.",
  A5G9: "Check that the certificate identifies the correct dwelling, software assessment and final design rather than an earlier design version.",
  A6G1: "Record the evidence for intended use, including plans, room functions and operational information, before selecting technical provisions.",
  A6G2: "For Class 1b, verify the numerical limits and accommodation arrangement; exceeding them can move the building into Class 3.",
  A6G3: "Confirm there are at least two separate dwellings and identify each sole-occupancy unit and its common areas.",
  A6G4: "Focus on shared residential accommodation and occupant relationships; do not classify by the business name alone.",
  A6G5: "Confirm there is only one dwelling in the other-class building and clearly mark its boundary on the plans.",
  A6G6: "Separate office areas from any retail, industrial, storage or assembly use that requires another classification.",
  A6G7: "Identify areas where the public receives goods, food or services and distinguish them from back-of-house storage or production areas.",
  A6G8: "Distinguish carparking from goods storage and wholesale display, then check whether any public sales area needs its own classification.",
  A6G9: "Document the process, materials, equipment and hazards; a warehouse does not become Class 8 unless its actual use fits the industrial description.",
  A6G10: "Choose 9a, 9b or 9c from the real activity and occupant characteristics, because their fire, access and evacuation requirements differ.",
  A6G11: "Confirm the structure is non-habitable and select 10a, 10b or 10c from its actual function.",
  A6G12: "Show classification boundaries on the drawings and reassess shared services, fire separation and exits wherever uses meet.",
  A7G1: "Assess fire safety, structure, exits and other requirements across the combined building rather than stopping at the former property or building boundary.",
  A7G2: "Review the original approval and united-building assumptions before changing openings or legal and operational arrangements."
};

const sectionAPlainChinese = {
  A3G1: "NCC 由各州和领地分别通过法律实施。必须使用项目所在地已采用的版本，并查阅该司法辖区的附表，因为附表可能增加、替换或删除全国性条文。南澳大利亚的变更列于附表 8。",
  A4G1: "当 NCC 引用澳大利亚标准等其他文件时，被引用的相关内容会成为 NCC 要求的一部分。除非 NCC 明确另有规定，应使用附表 2 所列版本，并只应用与该 NCC 条文有关的部分。",
  A4G2: "如果引用文件与 NCC 冲突，以 NCC 为准。标准中的要求不能削弱、替代或推翻更明确的 NCC 要求。",
  A4G3: "引用文件的新版本、修订或替代文件不会自动适用。只有 NCC 正式采用后才成为要求，因此使用前必须确认 NCC 所列版本。",
  A5G1: "材料、产品、施工方法和设计必须适合预定用途，并能够满足相关 NCC 要求。适用性需要适当证据和正确安装。施工质量应符合良好行业惯例，但本条只管理 NCC 范围内的事项。",
  A5G2: "证据必须适合正在评估的产品、设计和预定用途。提交的证书、报告或其他文件必须是完整、未删节的副本，以便检查全部条件和限制。",
  A5G3: "对于第一卷和第二卷管辖的建筑工程，可使用有效的 CodeMark 或认可证书、适当认证机构的证书、认可实验室报告、合资格专业人员报告或有充分技术依据的其他文件证明适用性。证据必须指出具体 NCC 要求、说明技术依据，并处于其适用范围内。计算方法也可通过专业认证或证明其符合相关 ABCB 协议的文件来支持。",
  A5G4: "与饮用水接触的管道产品需要规定的健康测试或适当 WaterMark 证据。受该规则约束的铜合金产品在要求生效时必须满足加权平均铅含量上限。列入 WaterMark 认证清单的产品需要有效许可证；排除清单中的产品需要适当认证或测试；未列出的产品需要进行 WaterMark 风险评估。管道设计和系统也必须采用 DTS 合规或有充分依据的性能证据。",
  A5G5: "当 DTS 条文要求耐火等级时，必须使用规范 1 和规范 2 确定该 FRL。产品声明或一般耐火试验本身并不足够，除非它符合适用的 FRL 评定路径和构造说明。",
  A5G6: "应针对所声明的具体性能使用指定的防火试验标准，例如火焰传播、烟气、材料组别、可燃性指数或不燃性。只有实际产品与测试原型完全相同，或认可实验室确认轻微差异不会降低性能并明确全部限制时，测试原型才可用于该产品。组合构件只有在其材料满足相关规则时才能视为不燃。",
  A5G7: "天花板抵抗火势在早期蔓延至上方空间的能力必须由标准耐火试验支持。实际天花板必须与测试原型一致；如有轻微差异，则需认可实验室评估，并说明维持试验结果所需的材料、构造和约束条件。",
  A5G8: "铝复合板必须带有 SA TS 5344 要求的标识。该标识用于追溯产品及其成分，不能只依靠外观或营销资料判断。",
  A5G9: "当要求使用住宅能源评级软件时，其结果必须由按照 NatHERS 体系签发的 NatHERS 证书记录。截图或非正式的软件结果不属于规定证据。",
  A6G1: "应根据建筑或其相关部分的实际用途进行分类。业主或开发商使用的名称并不起决定作用。必须考虑空间被设计、建造或改造后的用途，因为分类决定适用哪些 NCC 要求。",
  A6G2: "1 类是住宅。1a 类包括独立住宅或按要求分隔的某些相连住宅。1b 类包括在规定限制内的小型寄宿屋、宾馆、宿舍或类似住宿，以及某些包含四个或以上短期度假小屋的小型建筑。必须检查人数、楼面面积、布局和防火分隔条件。",
  A6G3: "2 类建筑包含两个或以上独立的独占使用单元，每个单元均作为住宅使用。服务这些住宅的公共区域通常也是该 2 类建筑的一部分。",
  A6G4: "3 类是供互不相关人员居住、但不属于 1 类或 2 类的住宿。例子包括较大型寄宿屋、宿舍、酒店或汽车旅馆的住宿部分、学生或工人住宿以及某些照护住宿。实际用途和居住安排比建筑名称更重要。",
  A6G5: "4 类是位于 5、6、7、8 或 9 类建筑内的一套住宅。它是较大建筑中的一个分类部分，而不是独立的 1 类建筑。",
  A6G6: "5 类是用于专业或商业用途的办公室，但不包括符合其他分类的用途。常见例子包括行政和专业工作场所。",
  A6G7: "6 类包括直接向公众提供商品或服务的场所，例如商店、咖啡馆、餐厅、酒吧及类似服务企业，也包括与其相连的用餐区域。",
  A6G8: "7 类包括储存和车辆相关建筑。7a 类通常是停车场，7b 类用于货物储存或批发展示。必须确认面向公众的零售活动是否使相关区域成为 6 类。",
  A6G9: "8 类是实验室，或用于生产、加工、修理、包装或整理供交易或销售货物的建筑，也包括其工艺会对健康或安全造成风险的活动。仅附属于工业用途的储存通常随主要 8 类用途分类。",
  A6G10: "9 类是公共建筑。9a 类包括医疗建筑及其相关部分；9b 类包括学校、大厅和礼拜场所等集会建筑；9c 类包括养老照护建筑。选择子类别前必须识别所提供的服务、使用者特点和疏散需求。",
  A6G11: "10 类包括非居住建筑和构筑物。10a 类包括私人车库、车棚和棚屋；10b 类包括围栏、挡土墙、游泳池和某些天线等构筑物；10c 类是私人丛林火灾避难所。供正常居住的空间不能简单标为 10a 类。",
  A6G12: "同一建筑中用途不同的部分可以有不同分类。很小的附属用途有时可采用主要分类，否则各部分必须分别分类。当某部分确实具有多种用途时，也可能同时具有多个分类，因此必须仔细评估边界、共享空间和用途变化。",
  A7G1: "相邻的 2 至 9 类建筑在通过开口连接，并且合并后作为一栋建筑满足 NCC 时，可以视为联合建筑。仅有实体连接并不足够；合并后的整体必须按一栋合规建筑进行评估。",
  A7G2: "改造不得意外破坏联合建筑原有的合规基础。在封闭开口、分开产权或改变相连建筑的运作方式前，必须检查它们能否各自作为独立建筑合规，或是否需要其他批准和建筑工程。"
};

const sectionAKeyCheckChinese = {
  A3G1: "不要假设全国版 PDF 就是最终法律要求。应根据项目地点和审批日期确认已采用的版本、生效安排以及南澳大利亚的变更。",
  A4G1: "核对文件的准确名称、版本和被引用条款。引用范围以外的内容不会自动纳入 NCC。",
  A4G2: "应同时阅读两份文件；两者不能一致执行时，以 NCC 为准。", A4G3: "不要仅因已有新版标准就自行替换；应先确认已采用的 NCC 是否认可该版本。",
  A5G1: "应使证据和安装方式对应产品的实际位置、暴露条件和预定功能，而不只是一般产品类别。", A5G2: "如果摘录遗漏试验条件、适用范围、有效期或限制，应拒绝使用，因为缺失页面可能改变证据是否适用。",
  A5G3: "确认签发者具备资格，文件在需要时仍有效，测试或评估对象与拟用对象一致，并把所有规定条件落实到设计和安装中。", A5G4: "首先判断产品是否接触饮用水以及是否列入 WaterMark 清单，因为这决定应采用哪种证据路径。",
  A5G5: "同时核对 FRL 数值以及规范 1 和规范 2 中该评定路径所代表的准确构造。", A5G6: "除非证据明确涵盖变更，否则不得把试验结果用于不同的材料、厚度、固定方式、接缝或组合构件。",
  A5G7: "将试验报告中的天花板构造、约束、接缝、穿孔和适用范围限制与拟建天花板逐项比较。", A5G8: "确认板材实物标识和配套产品记录与运到现场的板材一致。", A5G9: "确认该证书对应正确住宅、软件评估和最终设计，而不是较早的设计版本。",
  A6G1: "选择技术条文前，应记录预定用途的证据，包括图纸、房间功能和运营资料。", A6G2: "对于 1b 类，应核对人数、面积等数值限制和住宿布局；超过限制可能使建筑变为 3 类。",
  A6G3: "确认至少有两个独立住宅，并标明每个独占使用单元及其公共区域。", A6G4: "重点检查共享住宿方式和住户关系，不要只按经营名称分类。", A6G5: "确认其他类别建筑内只有一套住宅，并在图纸上清楚标明边界。",
  A6G6: "将办公室区域与可能需要其他分类的零售、工业、储存或集会用途分开。", A6G7: "识别公众接受商品、餐饮或服务的区域，并与后场储存或生产区域区分。", A6G8: "区分停车、货物储存和批发展示，并检查任何公众销售区域是否需要单独分类。",
  A6G9: "记录工艺、材料、设备和危险；仓库只有在实际用途符合工业用途说明时才属于 8 类。", A6G10: "根据实际活动和使用者特点选择 9a、9b 或 9c，因为它们的防火、通行和疏散要求不同。", A6G11: "确认构筑物不供居住，并按实际功能选择 10a、10b 或 10c。",
  A6G12: "在图纸上标明分类边界，并在不同用途交界处重新检查共用服务、防火分隔和出口。", A7G1: "应跨越原有产权或建筑边界，对合并后的建筑整体评估防火、结构、出口和其他要求。", A7G2: "改变开口、法律关系或运营安排前，应审查原批准和联合建筑所依据的假设。"
};

for (const [chapterId, provisions] of Object.entries(sectionAProvisionMap)) {
  const chapter = window.NCC_CHAPTERS.find((item) => item.id === chapterId);
  chapter.questions = provisions.flatMap(([code, topic, topicZh, page]) => {
    const explanation = sectionAPlainEnglish[code];
    const keyCheck = sectionAKeyCheck[code];
    return [
      [`${code}-Q1 — In plain English, what does ${code} require for ${topic.toLowerCase()}?`, `${code}-Q1——用简单语言说明，${code} 对${topicZh}有什么要求？`, explanation, sectionAPlainChinese[code], `${code}, p. ${page}`],
      [`${code}-Q2 — What is the most important compliance check for ${topic.toLowerCase()}?`, `${code}-Q2——对于${topicZh}，最重要的合规检查是什么？`, keyCheck, sectionAKeyCheckChinese[code], `${code}, p. ${page}`],
      [`${code}-Q3 — What project records should show that ${topic.toLowerCase()} has been applied correctly?`, `${code}-Q3——哪些项目记录应证明${topicZh}已被正确应用？`, `Keep the plans and specifications that identify the affected building or element, the assessment showing why ${code} applies, and any calculations, certificates, reports or approval records used. Also record jurisdictional variations, assumptions, limitations and the final installed or approved condition.`, `应保存识别相关建筑或构件的图纸和技术规范、说明为何适用 ${code} 的评估，以及使用的计算、证书、报告或批准记录。还应记录司法辖区变更、假设、限制和最终施工或批准状态。`, `${code}, p. ${page}`]
    ];
  });
}
