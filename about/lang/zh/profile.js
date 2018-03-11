const cht_profile = {
    about: {
        firstName: "文彬",
        lastName: "韓",
        state: "國立清華大學",
        phone: "(886) 987-999-556",
        email: "vincent.han.tw@gmail",
        bio: `<i>想成為一位時尚的專業工程師</i><br>
            目前是一位研究自然語言處理及機器學習的研究生，同時也有前端開發經驗，也正在學習使用 Node.js 後端，期待能將機器學習的成果用前端顯示出來。<br>
            除此之外，我也喜歡參加 Conferences 和黑客松。`,
        media: [{
            name: "LinkedIn",
            icon: "fa-linkedin",
            link: "https://www.linkedin.com/in/hanvincent/"
        }, {
            name: "Github",
            icon: "fa-github",
            link: "https://github.com/HanVincent"
        }, {
            name: "Blog",
            icon: "fa-book",
            link: "https://HanVincent.github.io"
        }, {
            name: "CV",
            icon: "fa-download",
            link: "assets/w.b.han.pdf"
        }],
        programming: ["python", "html5", "css3", "bootstrap", "javascript", "jquery", "vuejs", "nodejs",
            "java", "git", "babel", "webpack"],
        language: [
            "TOEIC: 895，專精英文的閱讀及寫作",
        ]
    },

    experience: {
        name: "工作經驗",
        items: [{
            name: "前端工程師",
            company: "LayerDirect Co., Ltd.",
            location: "台北",
            time: "2017/05 - 2017/09",
            description: [
                "利用框架 Vue.js 優化至少 20% 的冗餘程式碼，開發 SPA 網頁",
                "教導同事 JavaScript 觀念，及確認程式碼乾淨且無誤",
                "和 UI 設計師合作，完成預期樣貌和功能，同時加強自己解決問題的能力",
                "在沒有前輩的公司中工作，須要自律且自學，因此有較強的學習能力",
            ]
        }, {
            name: "中華民國陸軍",
            company: "義務役",
            location: "台南",
            time: "2017/02 - 2017/04",
            description: [
                "在團隊中生活與加強體力"
            ]
        }, {
            name: "前端工程實習生",
            company: "Positive Grid 佳格數位有限公司",
            location: "台北",
            time: "2016/09 - 2017/01",
            description: [
                "解決使用者介面的問題，分離可重複使用元件，套用 Redux",
                "於尋找問題根源時發現使用者可以越權之漏洞",
                "每天 Scrum 會議報告進度，學習更快速地找到問題",
                "向前輩導師學習 Agile, JavaScript, AngularJS, CSS"
            ]
        }, {
            name: "全端工程實習生",
            company: "NCU IISR Lab",
            location: "桃園",
            time: "2015/07 - 2015/08",
            description: [
                "建立可以搜尋相關衛所文本的網站",
                "HTML, JavaScript, PHP, MySQL"
            ]
        }]
    },

    education: {
        name: "學歷",
        items: [{
            name: "國立清華大學",
            subheading: "資訊工程研究所",
            location: "新竹",
            time: "2017/09 - Now",
            description: [
                "106-1 GPA 4.3/4.3",
                "研究自然語言處理和機器學習"
            ]
        }, {
            name: "國立中央大學",
            subheading: "資訊工程學系",
            location: "桃園",
            time: "2013/09 - 2017/01",
            description: [
                "總 GPA 4.06/4.3，專業科目 GPA: 4.09/4.3，輔修創意學分學程",
                "以系排 6% 成績提前畢業並得過一次書卷獎",
                "於 2016 年在 NTCIR-12 發表 'NCU IISR System for NTCIR-12 MobileClick'"
            ]
        }]
    },

    projects: {
        name: "專案",
        items: [{
            title: "Steeve",
            link: "https://github.com/TensorFun",
            subtitle: "搜尋工作之聊天機器人",
            host: "AtoS IT Challenge 2018",
            time: "2017/11 - Now",
            description: [
                "於國際型聊天機器人比賽中擠入前二十（共 205 組），並進入開發階段",
                "TensorFun 隊長，帶領團隊從零到有完成聊天機器人",
                "建置不同模型並比較其之間的不同",
                "Python, TF-IDF, SVM, CNN, RNN(future)"
            ]
        }, {
            title: "What Does The Box Say",
            link: "https://github.com/HanVincent/What-does-the-box-say",
            subtitle: "線上遊戲",
            host: "Software Engineering Course",
            time: "2016/09 - 2017/01",
            description: [
                "完成可以多人連線且大地圖的遊戲",
                "使用 Java packages 完成 UDP 廣播和指導隊員完成遊戲核心邏輯和",
                "教導學習用 git"
            ]
        }, {
            title: "Sentimental Analysis on Movie Comments",
            link: "https://github.com/HanVincent/Sentimental_Analysis_on_Movie_Comments",
            subtitle: "加州大學聖地牙哥分校暑假短期實習",
            host: "Prof. Julian McAuley",
            time: "2016/07 - 2016/08",
            description: [
                "Kaggle 上有關 NLP 的競賽",
                "使用 NLP 整理文字後再用 Linear Regression 達到 60% 正確率",
                "在英語環境中做研究，訓練自己的英文能力及獨立性",
                "Python, NLP, Linear Regression"
            ]
        }, {
            title: "Pixel Game",
            link: "https://github.com/pm847",
            subtitle: "網頁線上遊戲",
            host: "OpenStack Application Hackathon",
            time: "2016/03 - 2016/03",
            description: [
                "獲得最佳技術獎（共 38 組隊伍）",
                "臨時組成六人團隊，並於兩天內從腦力激盪到完成成品",
                "一人負責前端部分，設計出柔和色彩的網頁介面以及使用 AJAX 和後端溝通"
            ]
        }, {
            title: "NCU IISR System for NTCIR-12 MobileClick",
            link: "https://github.com/HanVincent/NTCIR_MobileClick2_Contest",
            subtitle: "重要資訊排名",
            host: "National Institute of Informatics, Japan",
            time: "2015/09 - 2016/01",
            description: [
                "透過 pair-wise 特徵達到 nDCG@3 正確率 75%",
                "TFIDF, SVM, Word Embedding, NLP methods"
            ]
        }, {
            title: "Air Hockey",
            link: "https://github.com/HanVincent/Air_Hockey_Game",
            subtitle: "網頁單機遊戲",
            host: "Web App Course by Mozilla",
            time: "2015/09 - 2016/01",
            description: [
                "完成可以運行於 Firefox OS 的單機遊戲，且上架於 Market",
                "可以調整遊戲設定，並且可和電腦對抗或兩人對戰",
                "HTML, JavaScript, jQuery"
            ]
        }]
    },

    interests: {
        name: "興趣",
        paragraphs: `<p>空閒時，喜歡學習新知識，像是寒假時看 Udemy 課程建置出一個網頁版聊天室，此外，我也正在將 "What does the fox say" 遊戲改成網頁版，因為這遊戲發想很有趣，很適合改成網頁版，像是 slither.io 的概念。</p>
        <p>除了當該發者之外，我也喜歡看影集和 YouTube，很推薦六人行和越獄風雲，我也很推薦 YouTuber 啾啾鞋，每次看他的影片都能學到額外的知識。另外為了身體健康著想，我也會去健身房運動</p>`
    },

    awards: {
        name: "獎項",
        icon: "fa-trophy",
        items: [{
            time: 2017,
            award: "金色證書: 895",
            host: "TOEIC"
        }, {
            time: 2016,
            award: "資工系大學部專題成果展佳作",
            host: "國立中央大學"
        }, {
            time: 2016,
            award: "殷省三先生紀念獎助學金",
            host: "國立中央大學"
        }, {
            time: 2016,
            award: "資工系 Web App 成果展人氣獎",
            host: "國立中央大學"
        }, {
            time: 2015,
            award: "通識中心創意成果展競賽第二名",
            host: "國立中央大學"
        }, {
            time: 2015,
            award: "資工系「計算機網路」課程創意競賽第三名",
            host: "國立中央大學"
        }, {
            time: 2014,
            award: "書卷獎",
            host: "國立中央大學"
        }]
    },

    extracurricular: {
        name: "課外活動",
        items: [{
            position: "社長 &amp; 副社長",
            organization: "中央大學慈青社",
            location: "桃園",
            time: "2014/09 - 2015/06",
            description: [
                "規劃社團課程內容，根據社員的能力分派任務主辦社課及校外活動",
                "協助社長辦理活動以及文件處理"
            ]
        }, {
            position: "課程組組長",
            organization: "中央資工營",
            location: "桃園",
            time: "2014/12 - 2015/07",
            description: [
                "訓練六位組員穩定台風並且克服恐懼",
                "教導組員如何和其他組員合作，並鼓勵學生勇於回答問題",
                "和其他組組長溝通協調，共同完成大項活動"
            ]
        }, {
            position: "黑客松",
            organization: "",
            location: "",
            time: "",
            description: [
                "2016/11 - 第二屆星展銀行黑客松",
                "2016/10 - 'Evolution!!' 曉數碼遊戲黑客松",
                "2016/04 - 大數據黑客松",
                "2016/03 - OpenStack 應用黑客松"
            ]
        }, {
            position: "其他",
            organization: "",
            location: "",
            time: "",
            description: [
                "2014/09 - 2015/06 麵店服務生",
                "2014/08 - 2014/09 中央資工迎新宿營 活動組組員",
                "2014/07/20 - 07/28 廣州暨南大學學生領袖研習營 ",
                "2014/07/08 - 07/15 重慶大學三峽文化交流營",
                "2013/12 - 2014/07 中央松濤資工營 課程組組員",
                "2013/10 - 2013/12 中央返鄉服務 美宣組組員",
                "2013/09 - 2015/01 中央大學教學發展中心工讀生"
            ]
        }]
    }
}