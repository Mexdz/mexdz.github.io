const typedText = document.getElementById("typedText");
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
const navAnchors = document.querySelectorAll(".nav-links a");
const sections = document.querySelectorAll("main section");
const themeToggle = document.getElementById("themeToggle");
const langToggle = document.getElementById("langToggle");

const translations = {
  en: {
    nav_home: "Home",
    nav_about: "About Me",
    nav_education: "Education",
    nav_experience: "Work Experience",
    nav_projects: "Projects",
    nav_skills_certificates: "Skills & Certificates",
    hero_kicker: "Portfolio",
    hero_greeting: "Hi, It's",
    hero_name: "Burak Taha Yaman",
    hero_intro: "I'm a",
    btn_projects: "View Projects",
    btn_about: "About Me",
    about_title: "About <span>Me</span>",
    about_who: "Who I Am",
    about_p1: "I am Burak Taha Yaman, a Software Engineering major currently in my junior year. Over time, I started moving beyond general software development and found myself especially drawn to embedded systems and low-level programming.",
    about_p2: "What makes embedded coding exciting for me is the chance to see physical results from what I build. I genuinely enjoy facing technical problems and solving them like puzzles, step by step, until the system works exactly as intended.",
    about_p3: "My current goal is to learn Embedded C and C++ as deeply as I can, while also focusing on a microprocessor architecture to better understand how hardware and software interact at a much deeper level.",
    about_focus_title: "Focus Area",
    about_focus_text: "Embedded systems, embedded C/C++, and problem-driven development",
    about_goal_title: "Current Goal",
    about_goal_text: "Push my embedded C/C++ knowledge to its limits and study microprocessor architecture in depth",
    about_interest_title: "What I Enjoy",
    about_interest_text: "Turning code into physical outcomes and solving engineering challenges like puzzles",
    about_approach_title: "Academic Stage",
    about_approach_text: "Junior-year Software Engineering student building a stronger embedded systems path",
    about_overview: "Quick Overview",
    about_chip_1: "Software Engineering major, junior year",
    about_chip_2: "Actively transitioning toward embedded systems",
    about_chip_3: "Motivated by physical, real-world output from code",
    about_chip_4: "Enjoys technical debugging and puzzle-like problem solving",
    about_chip_5: "Focused on Embedded C/C++ and microprocessor architecture",
    education_title: "Education",
    edu_1_title: "Centennial High School",
    edu_1_text: "Centennial High School in Columbus, Ohio. I completed only my freshman year there.",
    edu_2_title: "İzzet Baysal Anadolu Lisesi",
    edu_2_text: "Located in Merkez, Bolu. I completed the remaining three years of high school here.",
    edu_3_title: "Ankara University",
    edu_3_text: "Software Engineering major. Expected graduation year: 2027.",
    experience_title: "Work <span>Experience</span>",
    exp_1_role: "Part-time Student",
    exp_1_company: "Ankara University – Kurumsal Veri Yönetimi Koordinatörlüğü",
    exp_1_date: "October 2024 - Present",
    exp_1_location: "Ankara University · Part-time Student Program",
    exp_1_desc: "Working within Ankara University's Corporate Data Management Coordination Office, supporting data-oriented institutional processes, documentation, and coordination tasks connected to university information management systems.",
    projects_title: "Latest <span>Projects</span>",
    project_1_title: "Focus Flow",
    project_1_text: "Mobile-based new generation pomodoro app.",
    project_2_title: "DND Web",
    project_2_text: "Web project with integrated AI.",
    project_3_title: "Notflix",
    project_3_text: "Python and machine learning based movie recommendation project.",
    project_4_title: "LED Roulette",
    project_4_text: "An STM32-based embedded systems project.",
    skills_title: "My <span>Skills</span>",
    technical_skills: "Skills",
    skill_1: "English – TOEFL iBT 107",
    skill_2: "C",
    skill_3: "C++",
    skill_4: "Java",
    certificates_title: "Certificates",
    certificate_1: "Introduction to Programming with C++",
    certificate_2: "Introduction to Programming with Java",
    certificate_3: "Version Control: Git and GitHub",
    certificate_4: "Introduction to Software Testing",
    certificate_5: "GNU/Linux System Administration Level 1",
    certificate_6: "Introduction to Network Administration",
    footer_text: "© 2026 Burak Taha Yaman | All Rights Reserved",
    typed: ["Student", "Team Leader"]
  },
  tr: {
    nav_home: "Ana Sayfa",
    nav_about: "Hakkımda",
    nav_education: "Eğitim",
    nav_experience: "İş Deneyimi",
    nav_projects: "Projeler",
    nav_skills_certificates: "Yetenekler & Sertifikalar",
    hero_kicker: "Portfolyo",
    hero_greeting: "Merhaba, ben",
    hero_name: "Burak Taha Yaman",
    hero_intro: "Ben bir",
    btn_projects: "Projeleri Gör",
    btn_about: "Hakkımda",
    about_title: "Hakkımda",
    about_who: "Ben Kimim",
    about_p1: "Ben Burak Taha Yaman. Yazılım Mühendisliği bölümünde okuyan ve şu anda üçüncü sınıfta olan bir öğrenciyim. Zamanla genel yazılım geliştirme alanından daha derine inmeye başladım ve özellikle gömülü sistemler ile düşük seviyeli programlamaya güçlü bir ilgi duydum.",
    about_p2: "Gömülü yazılımı benim için heyecan verici yapan şey, yazdığım kodun fiziksel sonuçlarını görebilmek. Karşıma çıkan teknik problemleri birer bulmaca gibi adım adım çözmekten gerçekten keyif alıyorum.",
    about_p3: "Şu anki hedefim Embedded C ve C++ konularında mümkün olduğunca derinleşmek ve aynı zamanda bir mikroişlemci mimarisi üzerine yoğunlaşarak donanım ile yazılımın nasıl etkileştiğini çok daha iyi anlamak.",
    about_focus_title: "Odak Alanım",
    about_focus_text: "Gömülü sistemler, embedded C/C++ ve problem odaklı geliştirme",
    about_goal_title: "Şu Anki Hedefim",
    about_goal_text: "Embedded C/C++ bilgimi sınırlarına kadar geliştirmek ve mikroişlemci mimarisini derinlemesine öğrenmek",
    about_interest_title: "Sevdiğim Yön",
    about_interest_text: "Kodun fiziksel sonuçlarını görmek ve mühendislik problemlerini bulmaca gibi çözmek",
    about_approach_title: "Akademik Aşama",
    about_approach_text: "Gömülü sistemler alanında yönünü netleştiren üçüncü sınıf Yazılım Mühendisliği öğrencisi",
    about_overview: "Kısa Özet",
    about_chip_1: "Yazılım Mühendisliği öğrencisi, 3. sınıf",
    about_chip_2: "Aktif olarak gömülü sistemlere yöneliyor",
    about_chip_3: "Kodun gerçek dünyadaki fiziksel çıktılarıyla motive oluyor",
    about_chip_4: "Teknik hata ayıklama ve bulmaca gibi problem çözmeyi seviyor",
    about_chip_5: "Embedded C/C++ ve mikroişlemci mimarisine odaklanıyor",
    education_title: "Eğitim",
    edu_1_title: "Centennial High School",
    edu_1_text: "Columbus, Ohio'daki Centennial High School. Burada yalnızca 9. sınıfı tamamladım.",
    edu_2_title: "İzzet Baysal Anadolu Lisesi",
    edu_2_text: "Bolu Merkez'de yer almaktadır. Lisenin kalan üç yılını burada tamamladım.",
    edu_3_title: "Ankara Üniversitesi",
    edu_3_text: "Yazılım Mühendisliği öğrencisi. Beklenen mezuniyet yılı: 2027.",
    experience_title: "İş <span>Deneyimi</span>",
    exp_1_role: "Kısmi Zamanlı Öğrenci",
    exp_1_company: "Ankara Üniversitesi – Kurumsal Veri Yönetimi Koordinatörlüğü",
    exp_1_date: "Ekim 2024 - Devam Ediyor",
    exp_1_location: "Ankara Üniversitesi · Kısmi Zamanlı Öğrenci Çalışma Programı",
    exp_1_desc: "Ankara Üniversitesi Kurumsal Veri Yönetimi Koordinatörlüğü bünyesinde, üniversitenin bilgi yönetimi sistemleriyle bağlantılı veri odaklı kurumsal süreçler, dokümantasyon ve koordinasyon çalışmalarına destek veriyorum.",
    projects_title: "Son <span>Projeler</span>",
    project_1_title: "Focus Flow",
    project_1_text: "Mobil tabanlı yeni nesil Pomodoro uygulaması.",
    project_2_title: "DND Web",
    project_2_text: "Yapay zekâ entegre edilmiş web projesi.",
    project_3_title: "Notflix",
    project_3_text: "Python ve makine öğrenimi tabanlı film öneri projesi.",
    project_4_title: "LED Roulette",
    project_4_text: "STM32 tabanlı bir gömülü sistem projesi.",
    skills_title: "Yeteneklerim",
    technical_skills: "Yetenekler",
    skill_1: "İngilizce – TOEFL iBT 107",
    skill_2: "C",
    skill_3: "C++",
    skill_4: "Java",
    certificates_title: "Sertifikalar",
    certificate_1: "C++ ile Programlamaya Giriş",
    certificate_2: "Java ile Programlamaya Giriş",
    certificate_3: "Versiyon Kontrolleri: Git ve GitHub",
    certificate_4: "Yazılım Testine Giriş",
    certificate_5: "GNU/Linux Sistem Yönetimi 1. Düzey",
    certificate_6: "Ağ Yöneticiliğine Giriş",
    footer_text: "© 2026 Burak Taha Yaman | Tüm Hakları Saklıdır",
    typed: ["Öğrenci", "Takım Lideri"]
  }
};

let currentLang = "en";
let words = translations[currentLang].typed;
let wordIndex = 0;
let charIndex = 0;
let deleting = false;
let typingTimeout;

function typeLoop() {
  const currentWord = words[wordIndex];

  if (!deleting) {
    typedText.textContent = currentWord.slice(0, charIndex + 1);
    charIndex++;

    if (charIndex === currentWord.length) {
      deleting = true;
      typingTimeout = setTimeout(typeLoop, 1300);
      return;
    }
  } else {
    typedText.textContent = currentWord.slice(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      deleting = false;
      wordIndex = (wordIndex + 1) % words.length;
    }
  }

  typingTimeout = setTimeout(typeLoop, deleting ? 70 : 110);
}

function restartTyping() {
  clearTimeout(typingTimeout);
  wordIndex = 0;
  charIndex = 0;
  deleting = false;
  typedText.textContent = "";
  words = translations[currentLang].typed;
  typeLoop();
}

function applyLanguage(lang) {
  currentLang = lang;
  const dict = translations[lang];

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) el.textContent = dict[key];
  });

  document.querySelectorAll("[data-i18n-html]").forEach(el => {
    const key = el.getAttribute("data-i18n-html");
    if (dict[key]) el.innerHTML = dict[key];
  });

  langToggle.textContent = lang === "en" ? "TR" : "EN";
  document.documentElement.lang = lang;
  restartTyping();
}

function applyTheme(theme) {
  document.body.setAttribute("data-theme", theme);
  themeToggle.innerHTML = theme === "dark"
    ? '<i class="fa-solid fa-moon"></i>'
    : '<i class="fa-solid fa-sun"></i>';
}

if (typedText) typeLoop();

if (menuBtn) {
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
}

navAnchors.forEach(link => {
  link.addEventListener("click", () => navLinks.classList.remove("show"));
});

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navAnchors.forEach(link => link.classList.remove("active"));
        const activeLink = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
        if (activeLink) activeLink.classList.add("active");
      }
    });
  },
  { threshold: 0.45 }
);

sections.forEach(section => observer.observe(section));

langToggle.addEventListener("click", () => {
  applyLanguage(currentLang === "en" ? "tr" : "en");
});

themeToggle.addEventListener("click", () => {
  const currentTheme = document.body.getAttribute("data-theme");
  applyTheme(currentTheme === "dark" ? "light" : "dark");
});
