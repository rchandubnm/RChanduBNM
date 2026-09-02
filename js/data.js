/**
 * ============================================================
 *  PORTFOLIO CONTENT — edit everything here.
 *  This file holds every word and every link on the site.
 *  Change a value below and refresh index.html — nothing else
 *  needs to be touched for content updates.
 * ============================================================
 */

const PORTFOLIO_DATA = {

  meta: {
    name: "Ramanadham Chandu Badrinath Manikanta",
    shortName: "Chandu Badrinath",
    initials: "RCBNM",
    role: "Java Developer & AI/ML Engineer",
    roleCycle: ["Java Developer", "AI/ML Engineer", "Systems Builder", "Patent Holder"],
    tagline: "I turn ambiguous requirements into working software — REST APIs, graph algorithms, and AI/ML pipelines, forged during defence and industry internships.",
    location: "India",
    email: "rchandubnm@gmail.com",
    universityEmail: "badrinath_ramanadham@srmap.edu.in",
    resumePdf: "assets/resume.pdf",
    social: {
      github: "https://github.com/chandubadrinathmanikanta",
      linkedin: "https://www.linkedin.com/in/rcbnm",
    },
    githubUsername: "chandubadrinathmanikanta",
  },

  // Nodes for the animated hero schematic — the domains that connect back to RCBNM
  network: [
    { id: "java",     label: "Java / Spring Boot" },
    { id: "aiml",      label: "AI / ML Pipelines" },
    { id: "defence",   label: "Defence-Grade Systems" },
    { id: "graph",     label: "Graph Algorithms" },
    { id: "cv",        label: "Computer Vision" },
    { id: "patents",   label: "Patents & Research" },
  ],

  heroStats: [
    { value: "2",     label: "Patents filed · 1 granted" },
    { value: "8.71",  label: "M.Tech GPA" },
    { value: "2.8M+", label: "Tweets processed in pipeline" },
    { value: "3",     label: "Internships incl. Indian Army AARIC" },
  ],

  about: {
    lead: "I'm an M.Tech Data Science candidate at SRM University AP with a Java-first backend, strong Object-Oriented Design and DSA fundamentals, and hands-on AI/ML delivery from a defence-sector internship. I like taking a vague spec and shipping something that actually runs.",
    paragraphs: [
      "My recent work sits at the intersection of backend engineering and applied AI: building and validating defence-grade software that integrates AI/ML pipelines with RESTful services and secure cloud infrastructure at the Indian Army's AI Research & Incubation Center (AARIC), and building GPU-accelerated computer-vision systems and large-scale NLP pipelines on the side.",
      "Before that, I was designing UAV computer-vision systems for aerial data analysis, and building self-directed projects — like a graph-based debt-settlement optimizer — to keep core Java and DSA sharp alongside the ML work.",
    ],
    infoList: [
      { label: "Full name", value: "Ramanadham Chandu Badrinath Manikanta" },
      { label: "Email", value: "rchandubnm@gmail.com" },
      { label: "University mail", value: "badrinath_ramanadham@srmap.edu.in" },
      { label: "Languages spoken", value: "English, Hindi, Telugu" },
    ],
  },

  experience: [
    {
      period: "Jan 2026 – Mar 2026",
      title: "Full Stack AI/ML Engineer",
      org: "Indian Army Internship Program — AARIC",
      location: "Bengaluru, India",
      points: [
        "Worked on the development of the ML Flow Laboratory, Infrastructure and Platform for the Army Software Development Centre.",
        "Built and validated defence-grade software integrating AI/ML pipelines with RESTful services and secure cloud infrastructure.",
        "Applied strong OOP and system-design fundamentals across backend components.",
        "Developed the internal AARIC webpage for the Army Artificial Intelligence Research & Incubation Center.",
        "Rated \"Outstanding\" for overall performance during the internship.",
      ],
      images: [
        { file: "assets/experience/aaric-bengaluru.webp", caption: "AARIC — Bengaluru" },
        { file: "assets/experience/aaric-official-meet-1.webp", caption: "AARIC — Official Meet" },
        { file: "assets/experience/aaric-official-meet-2.webp", caption: "AARIC — Official Meet" },
        { file: "assets/experience/aaric-team.webp", caption: "AARIC — Team" },
      ],
      certificate: { file: "assets/experience/aaric-certificate.webp", caption: "Indian Army Internship Programme — Certificate of Internship, S.No IAIP/2025-26/10" },
    },
    {
      period: "May 2025 – Jul 2025",
      title: "UAV Computer Vision & Data Analytics Intern",
      org: "SECENAI Semiconductors and Test Solutions Pvt. Ltd.",
      location: "Hybrid",
      points: [
        "Delivered drone-based computer-vision systems translating aerial and sensor data into actionable, data-driven decisions.",
        "Contributed to analytics and insights derived from aerial and sensor data to support data-driven decision-making.",
      ],
      certificate: { file: "assets/experience/secenai-certificate.webp", caption: "SECENAI Semiconductors and Test Solutions — Internship Certificate" },
    },
    {
      period: "Jun 2022 – Aug 2022",
      title: "Salesforce Developer Intern",
      org: "Smart Internz, India",
      location: "Remote",
      points: [
        "Mastered Apex programming and process automation across 10+ Trailhead modules.",
        "Developed Flows and Lightning Web Components for automation.",
      ],
      certificate: { file: "assets/experience/salesforce-certificate.webp", caption: "Smart Internz — Salesforce Internship Certificate" },
    },
    {
      period: "Jun 2022 – Aug 2022",
      title: "Software Developer Intern",
      org: "Jayaho, a subsidiary of CCC Digital India Pvt Ltd.",
      location: "Remote",
      points: [
        "Built a Restaurant Management System with full database integration.",
      ],
      certificate: { file: "assets/experience/jayaho-certificate.webp", caption: "Jayaho — Internship Certificate" },
    },
    {
      period: "14–16 Nov 2022",
      title: "Workshop Intern — \"War of Drones\"",
      org: "Fopple Drone Technologies Pvt. Ltd. × Hatchlab Research Centre, SRM University AP",
      location: "On-site",
      points: [
        "Completed a 3-day industry workshop on UAV systems under MHRD's Institution's Innovation Council, 'Atmanirbhar Bharat' initiative.",
        "Got hands-on with IoT-based Smart Agriculture Drones — build, flight controls, and live handling with the remote.",
      ],
      images: [
        { file: "assets/experience/fopple-agriculture-drone.webp", caption: "Fopple Drones — Smart Agriculture Drone" },
        { file: "assets/experience/fopple-drone-handling.webp", caption: "Fopple Drones — Drone Handling with Remote" },
        { file: "assets/experience/fopple-ceo.webp", caption: "Fopple Drones — with the CEO, Gopi Raja" },
      ],
      certificate: { file: "assets/experience/fopple-certificate.webp", caption: "Certificate of Internship — \"War of Drones\" Workshop, Fopple Drone Technologies" },
    },
  ],

  projects: [
    {
      title: "Expense Splitter & Settlement Optimizer",
      tags: ["Java", "Spring Boot", "Graph Algorithms"],
      description: "A debt-simplification engine using graph algorithms to minimize the number of transactions needed to settle shared group expenses, exposed through REST APIs built with a clean controller/service/repository layering.",
      metrics: [],
      terminal: [
        "$ java -jar settlement-optimizer.jar --group trip-goa",
        "> loaded 6 members, 14 raw transactions",
        "> reducing debt graph...",
        "> settlements required: 14 → 5",
        "> done in 12ms"
      ],
    },
    {
      title: "Real-Time Object Classification & Tracking",
      tags: ["Python", "YOLOv8", "DeepSORT", "Computer Vision"],
      description: "A GPU-accelerated multi-object detection and tracking system for classification and real-time video overlays.",
      metrics: ["75.95% precision", "60.67% recall", "61.08% F1", "69.96% mAP@0.5"],
      terminal: [
        "$ python track.py --model yolov8 --tracker deepsort",
        "> mAP@0.5: 69.96%   mAP@0.5:0.95: 53.23%",
        "> precision: 75.95%   recall: 60.67%",
        "> tracking objects across frames in real time"
      ],
    },
    {
      title: "Real-Time Sentiment Analysis on Twitter Data",
      tags: ["Python", "MongoDB", "VADER", "NLP"],
      description: "A pipeline that ingests, classifies, and stores 2.8M+ live tweets with emoji-aware sentiment analysis.",
      metrics: ["85% accuracy on 1,000-tweet sample"],
      terminal: [
        "$ python stream_pipeline.py --sink mongodb",
        "> ingested 2,800,000+ tweets",
        "> emoji-aware VADER scoring enabled",
        "> sample accuracy: 85% (n=1,000)"
      ],
    },
  ],

  skills: {
    "Languages": ["Java", "Python", "C", "C++", "SQL"],
    "Frameworks & Tools": ["Spring Boot", "FastAPI", "Streamlit", "TensorFlow", "PyTorch", "Scikit-learn", "YOLOv5–v8", "DeepSORT", "VADER", "Git", "Jira", "n8n", "Copilot", "Docker"],
    "Databases & Platforms": ["MySQL", "PostgreSQL", "MongoDB", "Linux", "Power BI", "MS Excel"],
    "Concepts": ["REST APIs", "OOPs", "Collections Framework", "Multithreading", "Generative AI", "RAG", "LLM Fine-tuning", "Prompt Engineering", "Computer Vision", "NLP", "Automation", "Process Optimization"],
  },

  patents: [
    {
      status: "Granted",
      date: "12/01/2026",
      idLabel: "Patent No. 577906 · Application No. 202441023005",
      title: "A System and a Method for Monitoring Safety Measures During Workouts",
      description: "An IoT-based system for real-time workout safety monitoring, granted a 20-year term by The Patent Office, Government of India.",
      certificate: { file: "assets/achievements/patent-granted-certificate.webp", caption: "Patent Certificate — Patent No. 577906, Granted 12/01/2026" },
    },
    {
      status: "Published",
      date: "02/10/2023",
      idLabel: "Patent Application No. 202341067956",
      title: "An Attendance Marking System and a Method Thereof",
      description: "An automated attendance system combining computer vision, network integration, and biometrics.",
    },
  ],

  publications: [
    {
      date: "01/2023",
      title: "Comparative Paper on Sentiment Analysis using Machine Learning",
      description: "Large-scale text classification benchmarked across 160K+ reviews.",
      url: "https://publications.muet.edu.pk/index.php/muetrj/article/view/2618",
    },
  ],

  education: [
    {
      period: "Sep 2024 – Jun 2026",
      degree: "Master of Technology, Data Science",
      school: "SRM University AP, Amaravati, India",
      detail: "GPA: 8.71 · 100% Merit Scholarship",
    },
    {
      period: "Sep 2020 – Jun 2024",
      degree: "B.Tech, Computer Science Engineering (AI & ML)",
      school: "SRM University AP, Amaravati, India",
      detail: "GPA: 8.43",
    },
  ],

  certifications: [
    { file: "assets/certs/cert-13-hackerrank-swe-intern.webp", title: "Software Engineer Intern", issuer: "HackerRank", url: "https://www.hackerrank.com/certificates/iframe/2798995e91f3" },
    { file: "assets/certs/cert-09-skillup-java.webp", title: "Java Certification Course", issuer: "SkillUp (Simplilearn)" },
    { file: "assets/certs/cert-10-hackerrank-problem-solving-basic.webp", title: "Problem Solving (Basic)", issuer: "HackerRank", url: "https://www.hackerrank.com/certificates/iframe/f8c117d3c34b" },
    { file: "assets/certs/cert-11-hackerrank-problem-solving-intermediate.webp", title: "Problem Solving (Intermediate)", issuer: "HackerRank", url: "https://www.hackerrank.com/certificates/iframe/4c27a021e52e" },
    { file: "assets/certs/cert-12-hackerrank-java-basic.webp", title: "Java (Basic)", issuer: "HackerRank", url: "https://www.hackerrank.com/certificates/iframe/bc09184fc763" },
    { file: "assets/certs/cert-07-udemy-python-dsa.webp", title: "Python: Basics to Data Structures", issuer: "Udemy" },
    { file: "assets/certs/cert-08-udemy-c-programming.webp", title: "Mastering the C Programming Language", issuer: "Udemy", url: "https://www.udemy.com/certificate/UC-06a87160-9a86-4350-9ee0-aa251058e01a/" },
    { file: "assets/certs/cert-04-perfect-plan-b-ml.webp", title: "Machine Learning App on Google Colab", issuer: "Perfect Plan B E-Learning" },
    { file: "assets/certs/cert-06-vi-ai-ml-fundamentals.webp", title: "Fundamentals of AI and ML", issuer: "VI" },
    { file: "assets/certs/cert-05-techlearn-flipkart-nlp.webp", title: "How Flipkart Helps Small Business Grow Using NLP", issuer: "TechLearn" },
    { file: "assets/certs/cert-01-aaruush-data-analytics-iot.webp", title: "Role of Data Analytics and IoT in Cyber Security", issuer: "SkillVertex" },
    { file: "assets/certs/cert-02-avalanche-iit-roorkee.webp", title: "Building on a Blockchain Platform", issuer: "Avalanche · IIT Roorkee" },
    { file: "assets/certs/cert-03-masai-web-dev.webp", title: "Basics of Web Development", issuer: "Masai" },
  ],

  // Verified credentials without a certificate image on file — shown as
  // text cards, name links to the badge/verification URL where available.
  // `expires` (ISO date) drives auto-hide: once past that date the card
  // stops rendering on its own, no manual edit needed.
  textCredentials: [
    { title: "Oracle APEX Cloud Developer Certified Professional", issuer: "Oracle", issued: "Oct 2025", expires: "2027-10-31", note: "Building AI-powered, low-code applications on Oracle APEX, including RAG and vector search.", url: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=42D75E883945864B532C52BDE913F29E299DB4DCD474E419BAD437F5E8428745" },
    { title: "Oracle Analytics Cloud 2025 Certified Professional", issuer: "Oracle", issued: "Oct 2025", expires: "2027-10-23", note: "Dimensional modelling, data visualization, and machine learning within Oracle Analytics Cloud.", url: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=B3E3CBB5C55D7091D9CBE0E96D9C2EE833B38D98DE9D80569C86C2642AD7489D" },
    { title: "Oracle Cloud Infrastructure 2025 Certified Foundations Associate", issuer: "Oracle", issued: "Oct 2025", expires: "2027-10-23", note: "Core OCI services, security and identity model, billing, and governance fundamentals.", url: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=DD736A86B0ACAD5CB4282E51D7F9E89500A78F123CAF056F552C25EF72EE422C" },
    { title: "Oracle Data Platform 2025 Certified Foundations Associate", issuer: "Oracle", issued: "Oct 2025", expires: "2027-10-23", note: "Oracle cloud data management, Autonomous Database, and MySQL/NoSQL services.", url: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=F3869500468A31BFD7A88DAADBB017BB0CFF84029E47B0B5A0FA296358E1E577" },
    { title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate", issuer: "Oracle", issued: "Oct 2025", expires: "2027-10-23", note: "AI/ML fundamentals, generative AI, and OCI's AI tooling portfolio.", url: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=8A1C2E26972E30E68765124134272DF9D29BC15A87F350016A14F00363F3CD02" },
    { title: "Oracle Database@AWS Certified Architect Professional", issuer: "Oracle", issued: "Oct 2025", expires: "2027-10-31", note: "Designing, deploying, and securing Oracle AI Database@AWS environments, including HA/DR and migration.", url: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=CA9FA7068D827CEDC3A1A38A9B2CF510FAA5B261D663FE5D5164BE1B368ACCEB" },
  ],

  achievements: [
    { title: "100% Merit Scholarship", detail: "Awarded during M.Tech at SRM University AP", year: "2024" },
    { title: "Selected — Indian Army Internship Programme", detail: "Full Stack AI/ML Engineer, 2025–26", year: "2025" },
    { title: "Gold Medal, Artificial Intelligence", detail: "SRM University Research Day (5th Edition) — for \"Comparative Study on Sentimental Analysis using Machine Learning Techniques\"", year: "2022",
      images: [
        { file: "assets/achievements/gold-medal-2022.webp", caption: "Gold Medal — Research Day 2022" },
        { file: "assets/achievements/gold-medal-2022-stage.webp", caption: "Gold Medal — Research Day 2022, on stage" },
      ] },
    { title: "Silver Medal, Image Processing & Computer Vision", detail: "SRM University 7th Research Day — for \"Integration of Computer Vision and Internet of Things (IoT) for Safe Gym\"", year: "2023",
      images: [
        { file: "assets/achievements/silver-medal-2023.webp", caption: "Silver Medal — Research Day 2023" },
        { file: "assets/achievements/silver-medal-2023-stage.webp", caption: "Silver Medal — Research Day 2023, on stage" },
      ] },
    { title: "Hackathon Finalist — Krishi IoB", detail: "Built a blockchain solution for agriculture, Devfolio hackathon", year: "2021" },
  ],

  activities: [
    {
      title: "Lead role, project team",
      org: "SRM University, CSE",
      period: "2020 – Present",
      description: "Led mini-projects assigned by faculty and coordinated team delivery across several semesters.",
    },
    {
      title: "Krishi IoB — Build a Blockchain",
      org: "Devfolio Hackathon",
      period: "May 2021",
      description: "Built a blockchain-based agriculture solution as part of a team submission.",
      link: "https://devfolio.co/submissions/krishi-iob-build-a-blockchain-2d27",
    },
    {
      title: "National Abacus Competition (two-time medalist)",
      org: "Eb-Abacus / Genius Abacus & Vedic Maths",
      period: "Nov 2011 & Nov 2012",
      description: "1st place (Chennai) and 3rd place (Warangal) at national-level abacus competitions.",
    },
    {
      title: "State Abacus Champion",
      org: "Eb-Abacus, Guntur",
      period: "Nov 2012",
      description: "Secured 1st place at the state-level abacus competition.",
    },
  ],

  certCount: 13,
};
