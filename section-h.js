const hClauseQuestions = (clauses) => clauses.flatMap(([code, topic, topicZh, page]) => {
  const category = code[2];
  const meanings = {
    O: ["objective and the harm the NCC intends to prevent", "目标以及 NCC 旨在防止的危害"],
    F: ["functional outcome the building must provide", "建筑必须提供的功能结果"],
    P: ["mandatory performance outcome that every solution must satisfy", "每个方案都必须满足的强制性能结果"],
    V: ["verification method and the evidence needed to use it", "验证方法及使用该方法所需的证据"],
    D: ["Deemed-to-Satisfy pathway and the conditions for using it", "视为满足路径及其使用条件"]
  };
  const [meaning, meaningZh] = meanings[category];
  return [
    [`What must you understand about ${code} — ${topic}?`, `关于 ${code}——${topicZh}，必须理解什么？`, `${code} explains the ${meaning} for ${topic.toLowerCase()}. Read it together with its applications, limitations, exemptions, State or Territory variations and referenced provisions.`, `${code} 说明了有关${topicZh}的${meaningZh}。阅读时还必须结合其适用条款、限制、豁免、州或领地变更及引用条文。`, `${code}, p. ${page}`],
    [`How should ${code} be applied or checked in practice?`, `实际项目中应如何应用或核对 ${code}？`, `First confirm that ${code} applies to the building class, component and location. Then compare the proposal with every stated criterion for ${topic.toLowerCase()}, keep the supporting design or test evidence, and check connected provisions before concluding compliance.`, `首先确认 ${code} 是否适用于该建筑类别、构件和地点。然后把方案与${topicZh}的每项标准逐一比较，保留设计或测试证据，并检查相关条文后再作出合规结论。`, `${code}, p. ${page}`]
  ];
});

const hChapter = (id, title, titleZh, pages, summaryEn, summaryZh, clauses) => ({ id, section: "H", title: `${id.toUpperCase()} ${title}`, titleZh: `${id.toUpperCase()} ${titleZh}`, source: "NCC 2025 Volume Two", summaryEn, summaryZh, summaryCitation: pages, questions: hClauseQuestions(clauses) });

const h1 = window.NCC_CHAPTERS.find((chapter) => chapter.id === "h1");
h1.summaryEn = "Part H1 establishes structural safety for Class 1 and 10 buildings. Its hierarchy moves from the safety objective and functional statement to mandatory requirements for structural reliability and flood areas, verification methods, and detailed DTS pathways covering the site, foundations, framing, building envelope, glazing, earthquake and flood hazards, decks, balconies and piles.";
h1.summaryZh = "H1 部分规定 1 类和 10 类建筑的结构安全。其层级从安全目标和功能陈述，发展到结构可靠性及洪水区域的强制性能要求、验证方法，以及涉及场地、基础、框架、围护、玻璃、地震和洪水危险、露台、阳台和桩基的详细 DTS 路径。";
h1.summaryCitation = "H1O1–H1D12, pp. 89–110";
h1.questions = hClauseQuestions([
  ["H1O1","Objective","目标",89],["H1F1","Functional statement","功能陈述",89],["H1P1","Structural reliability and resistance","结构可靠性和抵抗能力",89],["H1P2","Buildings in flood areas","洪水区域建筑",92],
  ["H1V1","Structural reliability of components","构件结构可靠性",93],["H1V2","Structural robustness","结构稳健性",94],["H1D1","DTS provisions","DTS 条文",94],["H1D2","Structural provisions","结构规定",95],
  ["H1D3","Site preparation","场地准备",95],["H1D4","Footings and slabs","基础和楼板",96],["H1D5","Masonry","砌体",98],["H1D6","Framing","框架",100],["H1D7","Roof and wall cladding","屋顶和墙面覆层",105],
  ["H1D8","Glazing","玻璃",107],["H1D9","Earthquake areas","地震区域",109],["H1D10","Flood hazard areas","洪水危险区域",109],["H1D11","Deck and balcony attachment","露台和阳台连接",109],["H1D12","Piled footings","桩基础",110]
]);

window.NCC_CHAPTERS.push(
  hChapter("h2", "Damp and weatherproofing", "防潮和防风雨", "H2O1–H2D8, pp. 111–119",
    "Part H2 protects people and buildings from surface water, rain penetration, rising damp and uncontrolled swimming-pool drainage. It explains the required outcomes, a verification pathway for external-wall weatherproofing, and DTS provisions for drainage, foundations, masonry, subfloor ventilation, cladding, glazing and external waterproofing.",
    "H2 部分保护人员和建筑免受地表水、雨水渗透、地面返潮和泳池排水失控的影响。它说明所需结果、外墙防风雨验证路径，以及排水、基础、砌体、地板下通风、覆层、玻璃和外部防水的 DTS 条文。", [
      ["H2O1","Objective","目标",111],["H2F1","Surface water","地表水",111],["H2F2","Weatherproofing and dampness","防风雨和潮湿",111],["H2F3","Swimming-pool drainage","泳池排水",111],
      ["H2P1","Rainwater management","雨水管理",112],["H2P2","Weatherproofing","防风雨",112],["H2P3","Rising damp","地面返潮",112],["H2P4","Swimming-pool drainage","泳池排水",113],["H2V1","Weatherproofing verification","防风雨验证",113],
      ["H2D1","DTS provisions","DTS 条文",116],["H2D2","Drainage","排水",116],["H2D3","Footings and slabs","基础和楼板",117],["H2D4","Masonry","砌体",117],["H2D5","Subfloor ventilation","地板下通风",118],["H2D6","Roof and wall cladding","屋顶和墙面覆层",118],["H2D7","Glazing","玻璃",118],["H2D8","External waterproofing","外部防水",118]
    ]),
  hChapter("h3", "Fire safety", "消防安全", "H3O1–H3D6, pp. 120–125",
    "Part H3 addresses fire spread and early warning in Class 1 buildings. It connects the life-safety objective to mandatory separation and alarm outcomes, four verification methods for different fire-spread boundaries, and DTS provisions for material properties, external walls, separating construction, garage-top dwellings, smoke alarms and evacuation lighting.",
    "H3 部分处理 1 类建筑的火灾蔓延和早期警报。它把生命安全目标与强制性的防火分隔和警报结果联系起来，并提供针对不同火势蔓延边界的四种验证方法，以及材料性能、外墙、分隔构造、车库上方住宅、烟雾报警器和疏散照明的 DTS 条文。", [
      ["H3O1","Objective","目标",120],["H3F1","Protection from fire spread","防止火势蔓延",120],["H3F2","Fire detection and early warning","火灾探测和早期警报",120],["H3P1","Spread of fire","火势蔓延",120],["H3P2","Automatic warning for occupants","住户自动警报",121],
      ["H3V1","Fire spread between buildings on one allotment","同一地块建筑间火势蔓延",121],["H3V2","Fire spread from an allotment boundary","从地块边界蔓延的火势",122],["H3V3","Fire spread between adjoining allotments","相邻地块建筑间火势蔓延",122],["H3V4","Fire spread between Class 2–9 buildings","与 2 至 9 类建筑间的火势蔓延",122],
      ["H3D1","DTS provisions","DTS 条文",123],["H3D2","Fire hazard properties and non-combustibility","火灾危险特性和不燃性",123],["H3D3","External-wall fire separation","外墙防火分隔",124],["H3D4","Separating walls and floors","分隔墙和楼板",124],["H3D5","Garage-top dwellings","车库上方住宅",125],["H3D6","Smoke alarms and evacuation lighting","烟雾报警器和疏散照明",125]
    ])
);

window.NCC_CHAPTERS.push(
  hChapter("h4", "Health and amenity", "健康和舒适性", "H4O1–H4D9, pp. 126–134",
    "Part H4 protects health and amenity through requirements for wet areas, room heights, sanitary and laundry facilities, light, ventilation, sound insulation, and condensation management. Each subject is traced from its objective and performance outcome to verification or DTS pathways.",
    "H4 部分通过湿区、房间高度、卫生和洗衣设施、采光、通风、隔声及冷凝管理要求保护健康和舒适性。每个主题均从目标和性能结果连接到验证或 DTS 路径。", [
      ["H4O1","Wet-area objective","湿区目标",126],["H4O2","Room-height objective","房间高度目标",126],["H4O3","Facilities objective","设施目标",126],["H4O4","Lighting objective","采光目标",126],["H4O5","Ventilation objective","通风目标",126],["H4O6","Sound-insulation objective","隔声目标",127],["H4O7","Condensation-management objective","冷凝管理目标",127],
      ["H4F1","Wet-area function","湿区功能",127],["H4F2","Room-height function","房间高度功能",127],["H4F3","Facilities function","设施功能",127],["H4F4","Lighting function","采光功能",128],["H4F5","Ventilation function","通风功能",128],["H4F6","Sound-insulation function","隔声功能",128],["H4F7","Condensation-management function","冷凝管理功能",128],
      ["H4P1","Wet areas","湿区",128],["H4P2","Room heights","房间高度",128],["H4P3","Personal-hygiene facilities","个人卫生设施",129],["H4P4","Lighting","采光",129],["H4P5","Ventilation","通风",129],["H4P6","Sound insulation","隔声",130],["H4P7","Condensation and water vapour","冷凝和水蒸气",130],
      ["H4V1","Room or space height verification","房间或空间高度验证",130],["H4V2","Natural-light verification","自然采光验证",129],["H4V3","Indoor-air-quality verification","室内空气质量验证",131],["H4V4","Sound-insulation verification","隔声验证",132],["H4V5","Condensation verification","冷凝管理验证",132],
      ["H4D1","DTS provisions","DTS 条文",133],["H4D2","Wet areas","湿区",133],["H4D3","Wet-area materials and installation","湿区材料和安装",133],["H4D4","Room heights","房间高度",133],["H4D5","Facilities","设施",133],["H4D6","Light","采光",134],["H4D7","Ventilation","通风",134],["H4D8","Sound insulation","隔声",134],["H4D9","Condensation management","冷凝管理",133]
    ]),
  hChapter("h5", "Safe movement and access", "安全通行和出入", "H5O1–H5D4, pp. 135–138",
    "Part H5 reduces injuries while people enter and move through buildings. It covers walking surfaces, stairs, ramps, landings, slip resistance, barriers, handrails and openable windows. It also includes a detailed verification test for wire barriers and identifies South Australian variations that must be checked in Schedule 8.",
    "H5 部分旨在减少人员进入建筑和在建筑内移动时的伤害。内容涵盖行走表面、楼梯、坡道、平台、防滑、栏杆、扶手和可开启窗，并包括钢丝栏杆的详细验证试验及须在附表 8 核对的南澳变更。", [
      ["H5O1","Safe-access objective","安全通行目标",135],["H5O2","South Australian additional objective","南澳附加目标",135],["H5F1","Safety from falling","防止坠落",135],["H5F2","South Australian functional statement","南澳功能陈述",135],
      ["H5P1","Movement within buildings","建筑内通行",135],["H5P2","Fall-prevention barriers","防坠落栏杆",135],["H5P3","South Australian performance requirement","南澳性能要求",136],["H5V1","Wire-barrier verification","钢丝栏杆验证",136],
      ["H5D1","DTS provisions","DTS 条文",138],["H5D2","Stairways and ramps","楼梯和坡道",138],["H5D3","Barriers and handrails","栏杆和扶手",138],["H5D4","South Australian DTS provision","南澳 DTS 条文",138]
    ]),
  hChapter("h6", "Energy efficiency", "能源效率", "H6O1–H6D2, pp. 139–146",
    "Part H6 requires Class 1 buildings to reduce energy use while maintaining suitable thermal conditions. It separates building thermal performance from energy usage, provides reference-building and envelope-sealing verification methods, and links DTS compliance to the applicable Housing Provisions and jurisdictional variations.",
    "H6 部分要求 1 类建筑在保持适宜热环境的同时减少能源使用。它区分建筑热性能和能源使用，提供参考建筑及围护结构气密性验证方法，并把 DTS 合规连接到适用的住房条文和司法辖区变更。", [
      ["H6O1","Energy-efficiency objective","能源效率目标",139],["H6F1","Energy-efficiency function","能源效率功能",139],["H6P1","Thermal performance","热性能",140],["H6P2","Energy usage","能源使用",140],["H6V1","Application of verification methods","验证方法的适用",140],["H6V2","Reference-building verification","参考建筑验证",140],["H6V3","Envelope-sealing verification","围护结构气密性验证",140],["H6D1","DTS provisions","DTS 条文",145],["H6D2","Application of Part H6","H6 的适用",145]
    ]),
  hChapter("h7", "Ancillary provisions and additional construction requirements", "附属规定和附加施工要求", "H7O1–H7D5, pp. 147–155",
    "Part H7 brings together special hazards and ancillary construction: swimming-pool access and circulation systems, heating appliances, alpine conditions, bushfire-prone sites and private bushfire shelters. Applicability depends strongly on the building, equipment, climate and site hazard designation.",
    "H7 部分汇集特殊危险和附属施工要求：泳池出入及循环系统、取暖设备、高山地区、丛林火灾易发场地和私人丛林火灾避难所。是否适用高度取决于建筑、设备、气候和场地危险认定。", [
      ["H7O1","Ancillary-safety objective","附属安全目标",147],["H7F1","Swimming-pool access","泳池出入",147],["H7F2","Heating appliances","取暖设备",148],["H7F3","Alpine areas","高山地区",148],["H7F4","Bushfire areas","丛林火灾地区",148],["H7F5","Private bushfire shelters","私人丛林火灾避难所",148],
      ["H7P1","Swimming-pool access","泳池出入",148],["H7P2","Pool reticulation systems","泳池循环系统",149],["H7P3","Heating appliances","取暖设备",149],["H7P4","Buildings in alpine areas","高山地区建筑",149],["H7P5","Buildings in bushfire-prone areas","丛林火灾易发区建筑",149],["H7P6","Private bushfire shelters","私人丛林火灾避难所",150],
      ["H7V1","Combustion-appliance verification","燃烧设备验证",151],["H7V2","Bushfire verification","丛林火灾验证",151],["H7D1","DTS provisions","DTS 条文",153],["H7D2","Swimming pools","泳池",153],["H7D3","Alpine construction","高山地区施工",154],["H7D4","Bushfire-prone construction","丛林火灾易发区施工",154],["H7D5","Heating appliances, fireplaces and flues","取暖设备、壁炉和烟道",153]
    ]),
  hChapter("h8", "Livable housing design", "宜居住宅设计", "H8O1–H8D2, pp. 156–158",
    "Part H8 requires specified Class 1a dwellings to include accessible and adaptable features. It establishes the objective, functional and performance outcomes and then connects the DTS pathway to the livable-housing provisions, subject to applications, exemptions and jurisdictional variations.",
    "H8 部分要求指定的 1a 类住宅包含无障碍和可适应性功能。它规定目标、功能和性能结果，再把 DTS 路径连接到宜居住宅条文，同时受适用范围、豁免和司法辖区变更约束。", [
      ["H8O1","Livable-housing objective","宜居住宅目标",156],["H8F1","Livable-housing function","宜居住宅功能",156],["H8P1","Livable-housing performance","宜居住宅性能",156],["H8D1","DTS provisions","DTS 条文",157],["H8D2","Livable-housing design","宜居住宅设计",157]
    ])
);
