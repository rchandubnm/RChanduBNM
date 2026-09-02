<div align="center">

# Hi, I'm Chandu 👋

### Java Developer & AI/ML Engineer

I turn ambiguous requirements into working software — REST APIs, graph algorithms, and AI/ML pipelines, forged during defence and industry internships.

<a href="https://www.linkedin.com/in/rcbnm"><img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" /></a>
<a href="mailto:rchandubnm@gmail.com"><img src="https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white" /></a>

<br><br>

|       🪪 Patents        | 🎖️ Certifications | 🐦 Tweets Processed |         🪖 Internships         |
| :---------------------: | :---------------: | :-----------------: | :----------------------------: |
| **2** filed · 1 granted |      **19+**      |      **2.8M+**      | **3**, incl. Indian Army AARIC |

</div>

---

### 🧑‍💻 About Me

I'm an M.Tech Data Science candidate with a Java-first backend, strong OOP and DSA fundamentals, and hands-on AI/ML delivery from a defence-sector internship. I like taking a vague spec and shipping something that actually runs.

My recent work sits at the intersection of backend engineering and applied AI — building and validating defence-grade software that integrates AI/ML pipelines with RESTful services and secure cloud infrastructure at the Indian Army's AARIC, alongside GPU-accelerated computer-vision systems and large-scale NLP pipelines.

---

### 🛠️ Tech Stack

![Java](https://img.shields.io/badge/Java-ED8B00?style=flat-square&logo=openjdk&logoColor=white)
![Python](https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white)
![C++](https://img.shields.io/badge/C++-00599C?style=flat-square&logo=cplusplus&logoColor=white)
![Spring Boot](https://img.shields.io/badge/Spring_Boot-6DB33F?style=flat-square&logo=springboot&logoColor=white)
![FastAPI](https://img.shields.io/badge/FastAPI-009688?style=flat-square&logo=fastapi&logoColor=white)
![TensorFlow](https://img.shields.io/badge/TensorFlow-FF6F00?style=flat-square&logo=tensorflow&logoColor=white)
![PyTorch](https://img.shields.io/badge/PyTorch-EE4C2C?style=flat-square&logo=pytorch&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=flat-square&logo=mysql&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white)
![Linux](https://img.shields.io/badge/Linux-FCC624?style=flat-square&logo=linux&logoColor=black)
![Git](https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white)

`REST APIs` · `OOPs` · `Multithreading` · `RAG` · `LLM Fine-tuning` · `Computer Vision` · `NLP` · `YOLOv8` · `DeepSORT`

---

### 💼 Experience

| Period         | Role                                        | Organization                                        |
| -------------- | ------------------------------------------- | --------------------------------------------------- |
| Jan – Mar 2026 | Full Stack AI/ML Engineer                   | Indian Army Internship Programme — AARIC, Bengaluru |
| May – Jul 2025 | UAV Computer Vision & Data Analytics Intern | SECENAI Semiconductors and Test Solutions Pvt. Ltd. |
| Jun – Aug 2022 | Salesforce Developer Intern                 | Smart Internz, India                                |
| Jun – Aug 2022 | Software Developer Intern                   | Jayaho (CCC Digital India Pvt Ltd.)                 |

---

### 🚀 Featured Projects

**🔗 Expense Splitter & Settlement Optimizer** · `Java` `Spring Boot` `Graph Algorithms`
Graph-based debt-simplification engine, exposed via REST API — cuts 14 raw transactions down to 5.

**🎯 Real-Time Object Classification & Tracking** · `Python` `YOLOv8` `DeepSORT`
GPU-accelerated multi-object detection and tracking — 75.95% precision, 69.96% mAP@0.5.

**💬 Real-Time Sentiment Analysis on Twitter Data** · `Python` `MongoDB` `VADER`
Emoji-aware sentiment pipeline over 2.8M+ live tweets — 85% accuracy on a 1,000-tweet sample.

---

### 📜 Patents

🏆 **Granted — Patent No. 577906**: _A System and a Method for Monitoring Safety Measures During Workouts_ — IoT-based workout safety system, 20-year term, Government of India.
📄 **Published**: _An Attendance Marking System and a Method Thereof_ — computer vision + biometrics.

---

### 🕹️ Debug My Code

A real bug from the settlement optimizer above. Can you spot it before checking the answer?

<details>
<summary>Click to see the snippet</summary>

```java
// Reduces a group's debts to the minimum number of settlements
int settle(int[] balances) {
    int i = 0, j = balances.length - 1;
    int transactions = 0;
    while (i < j) {
        int amount = Math.min(balances[i], balances[j]);
        balances[i] -= amount;
        balances[j] -= amount;
        if (balances[i] == 0) i++;
        transactions++;
    }
    return transactions;
}
```

</details>

<details>
<summary>🔍 Found it? Reveal the fix</summary>

The `j--` step is missing — if `balances[j]` hits zero first, `j` never advances and the loop can spin on a settled creditor. The real fix:

```java
if (balances[i] == 0) i++;
if (balances[j] == 0) j--;
```

Two-pointer debt settlement only works if **both** sides advance when cleared. This is the exact class of bug the actual project's test suite caught during development.

</details>

---

### 🎓 Education

**M.Tech, Data Science** — SRM University AP (2024 – 2026) · 100% Merit Scholarship
**B.Tech, CSE (AI & ML)** — SRM University AP (2020 – 2024)

---

### 📊 GitHub Stats

<div align="center">
<img src="https://github-readme-stats.vercel.app/api?username=chandubadrinathmanikanta&show_icons=true&theme=default&hide_border=true" alt="GitHub Stats" height="165"/>
<img src="https://github-readme-stats.vercel.app/api/top-langs/?username=chandubadrinathmanikanta&layout=compact&hide_border=true" alt="Top Languages" height="165"/>
</div>

---

<div align="center">

📫 **Let's connect** — [LinkedIn](https://www.linkedin.com/in/rcbnm) · [rchandubnm@gmail.com](mailto:rchandubnm@gmail.com)

</div>
