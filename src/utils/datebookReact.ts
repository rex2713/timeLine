

export interface datebookType {
  stage: string
  year: string
  month?: string
  title: string
  image?: string
  content?: string
  url?: { title: string; link: string }
}
const stage =["前身","成立","轉型"]
export const datebookList: datebookType[] = [
  {
    stage: stage[2],
    year: "2023",
    month: "12",
    title: "第三屆董事會暨監察人就任",
    // image: datebook_202312_1,
    content:
      "董事會完成改選，由多位專家學者如張益肇、葉丙成、孫明德等組成，國家通訊傳播委員會前主委詹婷怡接任董事長，深耕四大發展目標：人才培育、智慧醫療、數位轉型、AI 準則倡議。",
  },
  {
    stage: stage[2],
    year: "2023",
    month: "7",
    title: "發布 2023 上半年台灣 AI 生態系地圖",
    content:
      "本次地圖針對企業所使用的 AI 技術以及產業市場進行分類，並特別提出著重於生成式 AI 技術的新創企業，以及台灣首推出供產業使用的企業級大型語言模型。",
    // image: datebook_202307_1,
    url: { title: "地圖連結", link: "https://edge.aif.tw/2023first-ai-map/" },
  },
  {
    stage: stage[2],
    year: "2023",
    month: "7",
    title: "企業「AI 陪跑計畫」啟動",
    // image: datebook_202307_2,
    content:
      "由星醫美學集團贊助，與大店長讀書會、iCHEF 合作「AI 陪跑計畫」，針對零售、服務與餐飲業提供 AI 課程及進階解決方案，並號召組成「AI 陪跑團」，協助企業透過AI 轉型並賦能數據團隊。",
    url: {
      title: "了解更多",
      link: "https://edge.aif.tw/aimi2023-about-guiderunners/",
    },
  },
  {
    stage: stage[2],
    year: "2023",
    month: "6",
    title: "與電通集團合辦《AIGC 行銷全攻略》公開課",
    content:
      "結合 AIF 的 AI 技術知識與電通集團行銷專業，共同開辦《AIGC 行銷全攻略》公開課，在 AIGC 浪潮下，培養行銷人員與 AI 協作的能力，創造獨特價值，課程滿意度達 96.4%。",
    // image: datebook_202306,
  },
  {
    stage: stage[2],
    year: "2023",
    month: "4",
    title: "「 AI EXPO Taiwan 2023 」",
    // image: datebook_202304_1,
    content:
      "與 DIGITIMES 電子時報共同主辦，共吸引 150 家企業與品牌和全台 30 所大專院校與人工智慧研究中心共襄盛舉，展出規模與來訪數量快速成長，報名人數達 11,500人，較上屆成長 337%，創下活動新高記錄。",
  },
  {
    stage: stage[2],
    year: "2023",
    month: "4",
    title: "舉辦第二屆「AI Junior Award」",
    // image: datebook_202304_2,
    content:
      "本屆競賽主題為「AI For Green」，呼應 SDGs 全球永續標準以及產業界對於 ESG 人才的需求，鼓勵學生藉由 AI 技術協助企業完成雙軸轉型，共吸引 28 支隊伍、120 位同學報名參賽。",
  },
  {
    stage: stage[2],
    year: "2023",
    month: "4",
    title: "主辦「AI 技術與行銷創新峰會」",
    // image: datebook_202304_3,
    content:
      "由星醫美學集團贊助、與「大店長讀書會」合辦「AI 技術與行銷創新峰會」，吸引近 350 位行銷從業人員、AI 技術人才參加，超過 180 間企業共襄盛舉，對於台灣服務、零售產業別具意義。",
    url: { title: "了解更多", link: "https://www.aimi2023.aif.tw/" },
  },
  {
    stage: stage[2],
    year: "2023",
    month: "2",
    title: "首度頒布 「AI Map 年度之星」",
    // image: datebook_202302_1,
    content:
      "發布 2022 下半年台灣 AI 生態系地圖，並選出 Authme、凸版蓋特資訊、訊能集思 為「2022 下半年台灣  AI 生態系地圖未來之星 Next Star」。",
    url: {
      title: "了解更多",
      link: "https://edge.aif.tw/2022secondhalf-ai-map/",
    },
  },
  {
    stage: stage[2],
    year: "2023",
    month: "2",
    title: "「2022 產業 AI 化大調查」發布",
    // image: datebook_202302_2,
    content:
      "為了解台灣產業在 AI 浪潮下的應用情境，基金會攜手 DIGITIMES 電子時報、美商訊能集思科技、電通行銷集團及 KPMG 等多家企業合作《產業 AI 化大調查》，深入檢視企業 AI 推動成果與數位化狀況。",
    url: {
      title: "了解更多",
      link: "https://edge.aif.tw/press-2022-ai-research/",
    },
  },
  {
    stage: stage[2],
    year: "2022",
    month: "10",
    title: "舉辦第二屆「AI Starts」 頒獎典禮及成果發表",
    // image: datebook_202210,
    content:
      "與數發部、資策會及台灣智慧雲端服務共同推動「AI Starts 計畫」，募集 22 個 AI 解決方案，並挑選出 6 組新創團隊，與 6 家成熟企業進行媒合，由 AIF 顧問全程輔導，提出 AI 轉型解決方案。",
    url: {
      title: "了解更多",
      link: "https://edge.aif.tw/aistarts-1026report/",
    },
  },
  {
    stage: stage[2],
    year: "2022",
    month: "9",
    title: "與工研院合辦「Trusted AI」研討會",
    // image: datebook_202209,
    content:
      "與工研院攜手成立「FAST AI 聯盟」，邀請三十餘位來自中小企業、新創以及公協會的管理者，共同探討如何建立可信任 AI 平台，快速導入 AI 並創造新的核心能力，創造新優勢。",
    url: {
      title: "了解更多",
      link: "https://edge.aif.tw/press-fastai-1213/",
    },
  },
  {
    stage: stage[2],
    year: "2022",
    month: "5",
    title: "與電子時報合辦首屆「AI EXPO Taiwan」",
    // image: datebook_202205_1,
    content:
      "隨著產業 AI 化的腳步加快，為接軌產業 AI 化的現在與未來，連結成熟企業與新創、產業界與學術界等共同描繪產業轉型的關鍵，AIF 與 DIGITIMES 電子時報首度合辦「AI EXPO Taiwan 2022」。",
    url: {
      title: "了解更多",
      link: "https://aif.tw/topics/2022-aiexpo/",
    },
  },
  {
    stage: stage[2],
    year: "2022",
    month: "5",
    title: "舉辦首屆「AI Junior Award」",
    // image: datebook_202205_2,
    content:
      "在與電子時報 DIGITIMES 合辦的「AI EXPO TAIWAN 2022」中，為強化產學界資源連結，培育 AI 及相關軟體人才 ，舉辦首屆「AI Junior Award」，為台灣尋找、培養可以「想像未來」的人才。",
    url: {
      title: "了解活動",
      link: "https://edge.aif.tw/junior-award-observe/",
    },
  },
  {
    stage: stage[2],
    year: "2022",
    month: "5",
    title: "與電通行銷傳播集團進行策略合作",
    // image: datebook_202205_3,
    content:
      "財團法人人工智慧科技基金會（AIF）與電通行銷傳播集團（dentsu）正式宣布進行策略合作，結合彼此專業經驗與優勢，攜手協助台灣產業轉型、布局未來。",
    url: {
      title: "了解更多",
      link: "https://edge.aif.tw/dentsu-aif-cooperate/",
    },
  },
  {
    stage: stage[2],
    year: "2021",
    month: "12",
    title: "合辦「德國 AI 標準化路徑圖研討工作坊」",
    // image: datebook_202112_2,
    content:
      "與人工智慧協會以及台灣人工智慧學校校友們共同舉辦，線上線下共約 120 人參與，分享近半年共同研讀「德國 AI 標準化藍圖」的心得與洞察，並提出對於台灣AI發展藍圖的建議及行動方案。",
    url: {
      title: "閱讀文章",
      link: "https://edge.aif.tw/about-ai-roadmap/",
    },
  },
  {
    stage: stage[2],
    year: "2021",
    month: "12",
    title: "溫怡玲、孫明德合著《孫主任的經濟筆記》",
    // image: datebook_202112_1,
    content:
      "結合總體經濟學重要指標與時事，深入淺出分析中美貿易戰及疫情之後，全球與台灣經濟的可能走向和關鍵變數。為第一本台灣本土總體經濟科普書籍，出版當日即再刷。",
  },
  {
    stage: stage[2],
    year: "2021",
    month: "7",
    title: "首次發布「台灣 AI 生態系地圖」",
    // image: datebook_202107,
    content:
      "2021 年上半年開始與 AppWorks Accelerator 合作「台灣 AI 生態系地圖」，透過每半年更新一次的地圖，持續發掘更多潛力在地新創，並盤點 AI 發展能量，發揮產業連結角色。",
    url: {
      title: "地圖連結",
      link: "https://edge.aif.tw/2021-ai-start-up-map/",
    },
  },
  {
    stage: stage[2],
    year: "2021",
    month: "6",
    title: "舉辦  Transformer workshop 付費公開課",
    // image: datebook_202106,
    content:
      "以 Transformer-based 深度學習技術為軸，舉辦【AI 高手養成】變形金剛 Transformer 傳說三部曲 : #1 RNN 的黃昏 #2 崛起的帝國 #3 侵略視覺聯邦，透過深入淺出的講解與簡易的實作來瞭解其基礎理論到進階應用的發展。",
    url: {
      title: "了解更多",
      link: "https://www.accupass.com/event/2104140724232032139020",
    },
  },
  {
    stage: stage[2],
    year: "2021",
    month: "5",
    title: "舉辦首屆「AI Starts」提升AI新創量能",
    // image: datebook_202105,
    content:
      "與資策會、台經院合作，募集新創AI解決方案，並挑選出 5 組新創團隊，與傳統中小企業進行媒合，同步提升轉型動力與新創量能。",
  },
  {
    stage: stage[2],
    year: "2021",
    month: "3",
    title: "與鴻海研究院合辦「NExT Forum」前瞻技術論壇",
    // image: datebook_202103,
    content:
      "以量子計算、新世代通訊、人工智慧、資通安全、半導體五大領域，每季協助鴻海研究院辦理 NExT Forum 學術論壇，提供前導文章、論壇會後科普文章、行銷宣傳、議程設計與內容規劃等。",
  },
  {
    stage: stage[1],
    year: "2020",
    month: "12",
    title: "第二屆董事會暨監察人就任",
    // image: datebook_202012,
    content:
      "邀請簡立峰、陳來助、詹婷怡，以及李昌鴻等多位產業專家加入董事會，持續深化產官學與跨產業的經驗資源連結，並由李維斌接任董事長、溫怡玲接任執行長。",
    url: {
      title: "了解更多",
      link: "https://edge.aif.tw/aif-vision/",
    },
  },
  {
    stage: stage[1],
    year: "2020",
    month: "11",
    title: "與天下雜誌集團合作發表數位轉型白皮書",
    // image: datebook_202011,
    content:
      "與天下創新學院、瑞士洛桑國際管理發展學院合作，首度進行橫跨台灣、瑞典、瑞士三國大調查，分析後疫情時代，企業如何透過數位轉型強化韌性及復原力。",
    url: {
      title: "相關文章",
      link: "https://edge.aif.tw/subscribe/20201201/",
    },
  },
  {
    stage: stage[1],
    year: "2020",
    month: "9",
    title: "第一次舉辦 AI Cafe 技術討論活動",
    // image: datebook_202009,
    content:
      "透過知勢內容平台與不定期線下聚會活動，讓更多人認識人工智慧，並持續擴大 AI 科普影響力，以推動台灣產業 AI 化與轉型。",
    url: {
      title: "了解更多",
      link: "https://edge.aif.tw/ai_cafe_report/",
    },
  },
  {
    stage: stage[1],
    year: "2020",
    month: "8",
    title: "原創科技產業媒體「知勢」網站上線",
    // image: datebook_202008_2,
    content:
      "以內容策展方式，為讀者提供具影響力且可信賴的科技知識與趨勢。集結台灣各領域專家，包括人工智慧、資料科學、AIoT、5G 等前端科技學者與研究者，解析最新技術及其應用。",
  },
  {
    stage: stage[1],
    year: "2020",
    month: "8",
    title: "終止承辦「台灣人工智慧學校」專案",
    // image: datebook_202008_1,
    content:
      "為更符合企業與產業的需求與期待，AIF 在 2020 年第四季進行轉型，專注於培育人才、賦能企業，藉由客製化專案、課程培訓、產學合作，深化連結技術、應用與專業領域，加速產業 AI 化。",
  },
  {
    stage: stage[1],
    year: "2020",
    month: "6",
    title: "校友會發起，申請通過成立台灣人工智慧協會",
    // image: datebook_202006,
    content:
      "AIF 協助完成申請程序，正式獲准成立。並由台灣人工智慧學校校友會會長蔣珮瑋擔任第一屆理事長，成為推動台灣產業 AI 化重要推手之一。",
  },
  {
    stage: stage[1],
    year: "2020",
    month: "5",
    title: "董事會改組",
    // image: datebook_202005,
    content: "李維斌博士繼任董事長。董事會任命溫怡玲擔任執行長。",
  },
  {
    stage: stage[1],
    year: "2020",
    month: "4",
    title: "陳昇瑋博士辭世",
    // image: datebook_202004,
    content:
      "董事長兼執行長陳昇瑋博士意外辭世，AIF 承繼其未竟之志，持續推動台灣產業 AI 化與轉型。",
    url: {
      title: "閱讀更多",
      link: "/about/promoter-swc",
    },
  },
  {
    stage: stage[1],
    year: "2020",
    month: "3",
    title: "人工智慧學校新竹分校停止招生",
    // image: datebook_202008_1,
  },
  {
    stage: stage[1],
    year: "2020",
    month: "2",
    title: "啟動 AIF 轉型工程",
    // image: datebook_202002,
    content:
      "決定縮小台灣人工智慧學校規模，並於年底結束專案委託。開始進行 AI 顧問培訓、籌辦原創科技產業媒體，以及「人工智慧博雅課程」研發。",
  },
  {
    stage: stage[1],
    year: "2019",
    month: "12",
    title: "協助校友會申請成立社團法人",
  },
  {
    stage: stage[1],
    year: "2019",
    month: "11",
    title: "舉辦第二屆校友年會，公佈「2019 產業 AI 化大調查結果」",
    // image: datebook_201911,
    content:
      "人工智慧科技基金會針對台灣人工智慧學校校友進行首次「產業 AI 化大調查」。探索當前 AI 在產業中發展的狀況。",
  },
  {
    stage: stage[1],
    year: "2019",
    month: "7",
    title: "人工智慧學校新竹分校課程轉型為智慧製造專班",
    // image: datebook_201907,
    content:
      "與新竹不同產業接觸的過程中發現，許多中高階主管具有基礎技術背景與能力，但對 AI 不甚了解。因此，特別設計兼具講座課程與實作課程的「智慧製造專班」，掌握基本理論與實作能力。",
  },
  {
    stage: stage[1],
    year: "2019",
    month: "6",
    title: "陳昇瑋、溫怡玲合著《人工智慧在台灣》出版",
    // image: datebook_201906,
    content:
      "為第一本從台灣產業角度出發的人工智慧專書，集結作者協助產業推動 AI 化經驗與全球趨勢觀察，提出對於產官學界建言。為當年度天下雜誌出版社暢銷書榜首。",
  },
  {
    stage: stage[1],
    year: "2019",
    month: "5",
    title: "智慧醫療專班，北、中、南同步開始招生",
    // image: datebook_201905,
    content:
      "由長庚醫院、台大醫院等醫學中心共同贊助，四期合計有近千位醫療產業從業人員參與，其中臨床醫生超過 600 位。",
  },
  {
    stage: stage[1],
    year: "2019",
    month: "3",
    title: "人工智慧學校南部分校第一期開課",
    // image: datebook_201903,
    content:
      "因應南部企業對於人工智慧的需求，台灣人工智慧學校在國家實驗研究院人工智慧產學研聯盟的促成下，與中山大學合作辦理「台灣人工智慧學校南部分校」",
  },
  {
    stage: stage[1],
    year: "2019",
    month: "1",
    title: "人工智慧學校成立週年成果展",
    // image: datebook_201901,
    content:
      "於華山文創園區舉行，邀請台北、新竹、台中三分校校友，展示績優專案成果，並舉辦記者會與大眾分享產業 AI 化人才培育初步成果。",
  },
  {
    stage: stage[1],
    year: "2018",
    month: "11",
    title: "舉辦第一屆校友年會，並選出第一屆校友會執委會",
    // image: datebook_201811,
    content:
      "首屆校友會吸引上千名 AI 人才於中央研究院人文社會科學館。執行長陳昇瑋於會中宣布：「校友會正式成立。」期望凝聚校友的力量，結合不同產業的經驗，共同推動台灣人工智慧的發展。",
  },
  {
    stage: stage[1],
    year: "2018",
    month: "8",
    title: "人工智慧學校台中分校第一期開課",
    // image: datebook_201808,
    content:
      "台中分校承蒙「中亞聯大」等學校在硬體設備的協助，以及台中市政府的支持下，得以順利開辦。期盼產學研界共同合作，為台中地區培育更多優秀的 AI 人才。",
  },
  {
    stage: stage[1],
    year: "2018",
    month: "7",
    title: "人工智慧學校新竹分校第一期開課",
    // image: datebook_201807,
    content:
      "新竹分校於 7 月 21 日假清華大學旺宏館舉行第一期開學典禮。典禮上，產官學界代表齊聚，共同關注台灣產業 AI 發展的可能與局限，期待匯集此股能量，讓台灣各行業重新找回競爭力。",
  },
  {
    stage: stage[1],
    year: "2018",
    month: "1",
    title: "台灣人工智慧學校台北總校第一期開課",
    // image: datebook_201801_1,
    content:
      "台灣人工智慧學校於 1 月 27 日舉行首屆開學典禮，期許台灣產業人才學成後，能以人工智慧加上領域知識，不論在產官學研界，皆能將擔任推動及發展人工智慧的種子，帶動產業升級。",
  },
  {
    stage: stage[1],
    year: "2018",
    month: "1",
    title: "人工智慧科技基金會成立",
    // image: datebook_201801_2,
    content:
      "鑑於人工智慧的重要，並解決台灣產業缺乏人才困擾，由陳昇瑋博士創立並擔任董事長，承辦「台灣人工智慧學校」專案。期能建立「自己的問題自己解決」文化，打破被技術殖民的慣性。",
    url: {
      title: "閱讀更多",
      link: "/about/pioneer-swc",
    },
  },
  {
    stage: stage[0],
    year: "2017",
    month: "8",
    title: "2014～2017 台灣資料科學協會時期",
    // image: datebook_2017,
    content:
      "2016 年由陳昇瑋博士正式發起創設，旨在推廣資料科學的認知、技術及應用，為台灣最大資料科學知識社群。帶領社會大眾認識資料科學，並且協助企業建立數據文化，帶來創新與價值。",
  },
  {
    stage: stage[0],
    year: "2014",
    month: "8",
    title: "2014～2017 台灣資料科學協會時期",
    // image: datebook_2017,
    content:
      "2016 年由陳昇瑋博士正式發起創設，旨在推廣資料科學的認知、技術及應用，為台灣最大資料科學知識社群。帶領社會大眾認識資料科學，並且協助企業建立數據文化，帶來創新與價值。",
  },
]
