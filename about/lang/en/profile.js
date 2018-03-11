const eng_profile = {
    about: {
        firstName: "Vincent",
        lastName: "Han",
        state: "National Tsing Hua University · Hsinchu , Taiwan",
        phone: "(886) 987-999-556",
        email: "vincent.han.tw@gmail",
        bio: `<i>Be a professional programmer with fashion sense and excellent social skills.</i><br>
            I am a graduate student experienced in Natural Language Processing and Frontend with a keen interest on Machine Learning and Backend.<br>
            Besides, Joining conferences and hackathons is my interest.`,
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
            "java", "git", "webpack"],
        language: [
            "TOEIC: 895",
            "Proficient in reading and writing English",
        ]
    },

    experience: {
        name: "Experience",
        items: [{
            name: "Design Engineer",
            company: "LayerDirect Co., Ltd.",
            location: "Taipei, Taiwan",
            time: "May 2017 - Sept. 2017",
            description: [
                "Reduced at least 20% redundant code by Vue.js and developed SPA web for better maintenance",
                "Corrected colleague's JavaScript concept and algorithm",
                "Incorporated UI design and enhanced the ability of problem solving on my own",
                "Coordinated with two colleagues as a self-taught and self-discipline first employee in a startup pace",
            ]
        }, {
            name: "The Republic of China Army",
            company: "Mandatory Military Service",
            location: "Tainan, Taiwan",
            time: "Feb. 2017 - Apr. 2017",
            description: [
                "Reinforced physical fitness in group life"
            ]
        }, {
            name: "Front-end Engineer, Intern",
            company: "Positive Grid",
            location: "Taipei, Taiwan",
            time: "Sept. 2016 - Jan. 2017",
            description: [
                "Solved Web UI issues, separated components and applied Redux",
                "Found critical system security bug over-allowing administrative privileges",
                "Reported progress of tasks in daily scrum and learned to detect problems rapidly",
                "Learned Agile and Scrum, JavaScript, AngularJS, and CSS from front-end mentors"
            ]
        }, {
            name: "Full Stack Engineer, Intern",
            company: "NCU IISR Lab",
            location: "Taoyuan, Taiwan",
            time: "July 2015 - Aug. 2015",
            description: [
                "Built a web-based location annotation system",
                "HTML, JavaScript, PHP, and MySQL"
            ]
        }]
    },

    education: {
        name: "Education",
        items: [{
            name: "National Tsing Hua University",
            subheading: "M.S. in Computer Science",
            location: "Hsinchu, Taiwan",
            time: "Sept. 2017 - Present",
            description: [
                "106-1 GPA 4.3/4.3",
                "Researching Natural Language Processing and Machine Learning"
            ]
        }, {
            name: "National Central University",
            subheading: "B.S. in Computer Science and Information Engineering",
            location: "Taoyuan, Taiwan",
            time: "Sept. 2013 - Jan. 2017",
            description: [
                "Overall GPA 4.06/4.3, Major GPA: 4.09/4.3, with creativity program",
                "Graduated ahead of schedule with top 6\% rank and received once Academic Excellence Award",
                "Published 'NCU IISR System for NTCIR-12 MobileClick' on NTCIR-12, 2016"
            ]
        }]
    },

    projects: {
        name: "Selected Projects",
        items: [{
            title: "Steeve",
            link: "https://github.com/TensorFun",
            subtitle: "Chatbot for Job Seeking",
            host: "AtoS IT Challenge 2018",
            time: "Nov. 2017 - Present",
            description: [
                "Top-20 (of 205 teams) in international AI Chatbot competition and entered development phase",
                "Team leader in 4-member team to establish a chatbot from crawling data to modeling",
                "Built models and analyzed distinction them",
                "Python, TF-IDF, SVM, CNN, RNN(future)"
            ]
        }, {
            title: "What Does The Box Say",
            link: "https://github.com/HanVincent/What-does-the-box-say",
            subtitle: "Online Multi-player Game",
            host: "Software Engineering Course",
            time: "Sept. 2016 - Jan. 2017",
            description: [
                "Completed a multi-player and large-scale map online game from scratch to implementation",
                "Instructed and supervised teammate to finish game core logic",
                "Accomplished UDP broadcast via Java packages",
                "Taught teammate using git"
            ]
        }, {
            title: "Sentimental Analysis on Movie Comments",
            link: "https://github.com/HanVincent/Sentimental_Analysis_on_Movie_Comments",
            subtitle: "International Summer Research Program in University of California, San Diego",
            host: "Prof. Julian McAuley",
            time: "July 2016 - Aug. 2016",
            description: [
                "Achieved accuracy of 60% in NLP contest on Kaggle",
                "Used Linear Regression with stemming and unigram",
                "Conducted research in English environment and cultivated my independence and toughness",
                "Python, NLP, Linear Regression"
            ]
        }, {
            title: "Pixel Game",
            link: "https://github.com/pm847",
            subtitle: "Online Multi-player Web Game",
            host: "OpenStack Application Hackathon",
            time: "Mar. 2016 - Mar. 2016",
            description: [
                "Awarded 2016 Taiwan OpenStack Application Hackathon Technical Recognition (top 6 of 38 teams)",
                "Cooperated in 6-member impromptu team to prototype an online multi-player game from brainstorming within 48 hours",
                "In charge of front-end, designed harmonious-colored web UI and connected server by jQuery AJAX"
            ]
        }, {
            title: "NCU IISR System for NTCIR-12 MobileClick",
            link: "https://github.com/HanVincent/NTCIR_MobileClick2_Contest",
            subtitle: "Ranking Information for Mobile",
            host: "National Institute of Informatics, Japan",
            time: "Sept. 2015 - Jan. 2016",
            description: [
                "Achieved nDCG@3 accuracy of 75\% by pair-wise features",
                "TFIDF, SVM, Word Embedding, NLP methods"
            ]
        }, {
            title: "Air Hockey",
            link: "https://github.com/HanVincent/Air_Hockey_Game",
            subtitle: "Web Application Game",
            host: "Web App Course by Mozilla",
            time: "Sept. 2015 - Jan. 2016",
            description: [
                "Built web app on Firefox OS based on HTML, JavaScript, and CSS",
                "Implemented 1 or 2 players modes and adjustable game settings"
            ]
        }]
    },

    interests: {
        name: "Interests",
        paragraphs: `<p>In my leisure time, I would like to learn new things. For instance, I followed Udemy course and built up a chat app with Node.js last winter vacation. Also, I am working in progress on web-based "What does the fox say" project because it is a funny game! I want to promote it like slither.io. 
        Moreover, to enhance my professional ability, I also watch MOOC courses for Machine Learning.</p>
        <p>Apart from being a developer, I enjoy watching America series, such as Friends and Prison Break, and YouTube. For example, ChuChuShoe is my favorite YouTuber because I can learn extracurricular knowledge and explore the latest technolgy advancements from him. Besides, I exercise in the gym for healthier body.</p>`
    },

    awards: {
        // Awards &amp; Certifications
        name: "Awards",
        icon: "fa-trophy",
        items: [{
            // 金色證書
            time: 2017,
            award: "Gold Certificate: 895",
            host: "TOEIC"
        }, {
            // 中央資工系大學部專題成果展佳作
            time: 2016,
            award: "Excellence Award for Lab Study Project",
            host: "National Central University, Taiwan"
        }, {
            // 殷省三先生紀念獎助學金
            time: 2016,
            award: "Mr. Yin-Sheng San Memorial Award Scholarship",
            host: "National Central University, Taiwan"
        }, {
            // 2016 中央資工系 Web App 成果展人氣獎
            time: 2016,
            award: "Best Popularity Aaward for Web App",
            host: "National Central University, Taiwan"
        }, {
            // 2015 中央大學通識中心創意成果展競賽第二名
            time: 2015,
            award: "2<sup>nd</sup> Creativity Competition",
            host: "National Central University, Taiwan"
        }, {
            // 2015 中央資工系「計算機網路」課程創意競賽第三名
            time: 2015,
            award: "3<sup>rd</sup> Creativity Competition on Computer Network course",
            host: "National Central University, Taiwan"
        }, {
            // 1022 書卷獎
            time: 2014,
            award: "Academic Excellence Award",
            host: "National Central University, Taiwan"
        }]
    },

    extracurricular: {
        name: "Extracurricular Activities",
        items: [{
            position: "President &amp; Vice President",
            organization: "NCU Tzu Chi Collegiate Association",
            location: "Tauyuan, Taiwan",
            time: "Sept. 2014 - June 2015",
            description: [
                "Managed members in executing club courses and delegated tasks to members based on skills and interests",
                "Assisted president to hold the activities and handled formal documents"
            ]
        }, {
            position: "Leader of Teaching Group",
            organization: "NCU-CSIE Summer Camp",
            location: "Tauyuan, Taiwan",
            time: "Dec. 2014 - July 2015",
            description: [
                "Led a 6-member team to overcome stage fright and coach students steadily in size-50 class",
                "Instructed them to cooperate with other members to motivate students to answer questions",
                "Communicated with other team leaders to host the whole activity perfectly"
            ]
        }, {
            position: "Hackathons",
            organization: "",
            location: "",
            time: "",
            description: [
                "2016/11 - Development Bank of Singapore Hackathon in Taiwan",
                "2016/10 - 'Evolution!!' Akatsuki Game Hackathon - Akatsuki, Taiwan",
                "2016/04 - Big Data x Maker Hackathon - Industriaal Development Bureau, Taiwan",
                "2016/03 - OpenStack Application Hackathon - Taiwan OpenStack Application"
            ]
        }, {
            position: "Others",
            organization: "",
            location: "",
            time: "",
            description: [
                "2016/07 - 2016/08 - International Summer Research Programm in University of California, San Diego",
                "2014/09 - 2015/06 Waiter in Noodle Shop",
                "2014/08 - 2014/09 Member of the Acavity Group, NCU-CSIE orientation camp",
                "2014/07/20 - 07/28 China Jinan University Leaders Camp",
                "2014/07/08 - 07/15 China Chongqing University Cultural Communication Camp ",
                "2013/12 - 2014/07 Member of Teaching Group, NCU-CSIE Summer Camp",
                "2013/10 - 2013/12 Member of the Arts Group, NCU-CSIE Return of Service",
                "2013/09 - 2015/01 Part-time Worker in TLDC of NCU"
            ]
        }]
    }
}