// ============================================================
//  EDIT THIS FILE ONLY — add a new project by copying one block
//  and pasting it at the top of the PROJECTS list.
//
//  category: "personal" | "work" | "freelance"
//  company : shown as a small label (optional)
//  link    : live site / store link (optional)
//  github  : repo link (optional)
// ============================================================

const PROFILE = {
  name: "Keroles Masoud Issac",
  title: "Backend Engineer",
  location: "Al-Maadi, Cairo, Egypt",
  bio: "Backend Engineer with 5+ years of experience designing scalable systems with PHP (Laravel) and Node.js (NestJS). Currently building expertise in Java (Spring Boot) and expanding into Python and Django. Strong in REST APIs, database modeling, authentication and clean architecture. I also integrate AI features into backend systems.",
  email: "keroles.masoud.issac@gmail.com",
  phones: ["+201207964740"], // add more numbers here, with country code
  github: "https://github.com/boiar",
  linkedin: "https://www.linkedin.com/in/keroles-masoud",
  cv: "https://docs.google.com/document/d/1eRg5vfbgzIav8Hz1pSOaPp_Q6QW2pQqvt6_OxUNd_zU/edit?tab=t.0", // optional
};

const EXPERIENCE = [
  {
    role: "Senior Backend Engineer",
    company: "Ezzat Medical Education (UK)",
    period: "Jan 2025 – Present",
    points: [
      "Architected and delivered high-impact features that drove product revenue growth and enhanced user value.",
      "Optimized system architecture to improve security and maintainability for high-throughput backend services.",
      "Improved code quality by conducting technical code reviews and enforcing SOLID principles.",
      "Mentored 2 junior developers on architecture and Git workflows.",
    ],
    tech: ["PHP", "Laravel", "MySQL", "Node.js", "Express.js", "Redis"],
  },
  {
    role: "Mid-Level Backend Engineer",
    company: "Al-Tarek IT (Oman)",
    period: "Jul 2022 – Jan 2025",
    points: [
      "Mentored multiple junior developers and elevated team performance.",
      "Translated complex business requirements into technical specifications.",
      "Designed systems based on clean architecture and design patterns.",
      "Led the migration of a legacy monolith to Laravel 10/11, reducing server response time.",
    ],
    tech: ["PHP", "Laravel", "CodeIgniter", "MySQL", "Node.js", "Express.js", "Redis", "MongoDB", "PostgreSQL"],
  },
  {
    role: "Backend Engineer (Freelancer)",
    company: "Freelance",
    period: "Apr 2021 – Jun 2022",
    points: [
      "Managed the full SDLC from requirements gathering to production deployment.",
      "Built e-commerce platforms, ERP systems and tourism portals.",
      "Delivered 9+ end-to-end web solutions with a 100% on-time delivery rate.",
    ],
    tech: ["PHP", "Laravel", "CodeIgniter", "MySQL", "Redis", "MongoDB"],
  },
  {
    role: "Junior Backend",
    company: "Easy App (7-month contract)",
    period: "Oct 2020 – Apr 2021",
    points: [
      "Contributed to project solutions and completed assigned development tasks on time.",
      "Worked closely with senior developers, learning best practices.",
    ],
    tech: ["PHP", "Laravel", "MySQL"],
  },
];

const SKILLS = {
  "Backend": ["PHP", "Laravel", "CodeIgniter", "Node.js", "Express.js", "NestJS", "TypeScript", "Java", "Spring Boot", "Spring MVC", "Spring Data", "Spring Security", "Hibernate", "Python", "WebSocket", "REST APIs", "GraphQL", "gRPC", "Redis", "Apache Kafka", "RabbitMQ"],
  "Frontend": ["HTML", "CSS", "JavaScript", "Bootstrap", "jQuery", "Angular"],
  "Databases": ["MySQL", "PostgreSQL", "SQLite", "MongoDB", "ACID Transactions", "Indexing", "Partitioning", "Sharding"],
  "DevOps": ["Linux", "Docker", "Nginx", "Apache", "DigitalOcean", "Load Balancer", "CI/CD (GitHub Actions)", "Git", "cPanel", "hPanel"],
  "Security": ["OAuth2", "Keycloak", "JWT", "API Authentication & Authorization"],
  "Testing": ["TDD", "PHPUnit", "Jest", "JUnit"],
  "Architecture & Tools": ["Microservices", "MVC & HMVC", "SOLID", "Postman & Swagger", "Prometheus & Grafana", "Payments (Stripe, PayPal, Paymob, HyperPay, Tamara, Tabby)"],
};

const EDUCATION = [
  { title: "B.Sc. Computer Science", place: "Minia University", year: "2022" },
  { title: "Summer Training", place: "ITI", year: "2021" },
];

const LANGUAGES = ["Arabic – native", "English – very good, written and spoken"];

const PROJECTS = [
  // ---------- Personal ----------
  {
    title: "Microservice Demo Architecture",
    category: "personal",
    description: "Containerized, event-driven microservices separating user, product, order and notification domains for scalability and modularity.",
    tech: ["Laravel", "NestJS", "MySQL", "MongoDB", "PostgreSql", "Redis", "RabbitMq", "Nginx", "JWT", "Docker", "PHPUnit", "Jest", "Java", "Spring Boot"],
    github: "https://github.com/boiar/Microservice-Demo-Architecture",
  },
  {
    title: "Collaborative Task Manager",
    category: "personal",
    description: "Real-time project management tool: boards, lists and tasks with file uploads, deadlines and multilingual support.",
    tech: ["NestJS", "Node.js", "MySQL", "TypeORM", "WebSockets", "JWT", "i18n", "Jest"],
    github: "https://github.com/boiar/collaborative-task-manager",
  },
  {
    title: "Ideas App",
    category: "personal",
    description: "NestJS backend for sharing and managing ideas, inspired by Reddit and Twitter: auth, CRUD, voting, bookmarks and comments.",
    tech: ["NestJS", "MySQL", "REST API"],
    github: "https://github.com/boiar/ideas-app",
  },
  {
    title: "Coder News",
    category: "personal",
    description: "Project timeline app to create, manage and share milestones. Built as a training project following an educational course.",
    tech: ["Node.js", "Express", "SQLite", "JWT", "Swagger", "REST API"],
    github: "https://github.com/boiar/coder-news",
  },

  // ---------- Work: Ezzat Medical Education (Jan 2025 – now) ----------
  {
    title: "SCA Approach",
    category: "work",
    company: "Ezzat Medical Education",
    description: "Educational platform for medical learning and e-learning services. Maintained the site and added features per client requirements.",
    tech: ["PHP", "Laravel", "MySQL", "JavaScript", "Bootstrap", "jQuery"],
    link: "https://sca-approach.co.uk/",
  },

  // ---------- Work: Al-Tarek IT (Jul 2022 – Jan 2025) ----------
  {
    title: "Shipping Services Platform",
    category: "work",
    company: "Al-Tarek IT",
    description: "Multilingual website for shipping services offered by multiple shipping companies.",
    tech: ["PHP", "Laravel", "MySQL", "JavaScript", "Bootstrap", "jQuery"],
    link: "https://altarekit.com/projects/bahaa/altarek/ar/index.html",
  },
  {
    title: "Employees Internal System",
    category: "work",
    company: "Al-Tarek IT",
    description: "Multilingual employee management system: task and responsibility distribution, project management, import/export operations.",
    tech: ["PHP", "Laravel", "MySQL", "JavaScript", "Bootstrap", "jQuery"],
  },
  {
    title: "Social Media Marketing Platform",
    category: "work",
    company: "Al-Tarek IT",
    description: "Multilingual website for selling social media marketing services.",
    tech: ["PHP", "CodeIgniter", "MySQL", "JavaScript", "Bootstrap", "jQuery"],
    link: "https://lottagency.com/clients/register",
  },
  {
    title: "Shinefy – Car Wash App",
    category: "work",
    company: "Al-Tarek IT",
    description: "Backend API and website for a multilingual mobile app for car washing and maintenance.",
    tech: ["PHP", "Laravel", "MySQL", "REST API"],
    link: "https://shinefy.co/",
  },
  {
    title: "Paper Packaging Website",
    category: "work",
    company: "Al-Tarek IT",
    description: "Multilingual e-commerce site for paper bags and cups.",
    tech: ["PHP", "Laravel", "MySQL", "JavaScript", "Bootstrap", "jQuery"],
  },
  {
    title: "Stock Exchange Telegram Bot",
    category: "work",
    company: "Al-Tarek IT",
    description: "Telegram chat bot providing information about stock exchange shares.",
    tech: ["PHP", "Laravel", "MySQL", "Telegram Bot API"],
    link: "https://web.telegram.org/k/#@TASIFVbot",
  },
  {
    title: "Kafou Energy",
    category: "work",
    company: "Al-Tarek IT",
    description: "Website for energy management services and solutions.",
    tech: ["PHP", "CodeIgniter", "MySQL", "JavaScript", "Bootstrap", "jQuery"],
    link: "https://kafouenergy.com/",
  },
  {
    title: "Kafou Medical",
    category: "work",
    company: "Al-Tarek IT",
    description: "Website for selling medical products.",
    tech: ["PHP", "CodeIgniter", "MySQL", "JavaScript", "Bootstrap", "jQuery"],
    link: "https://kafoumedical.com/",
  },
  {
    title: "GTC Internal Management System",
    category: "work",
    company: "Al-Tarek IT",
    description: "Management system for Gulf Transport Company: tasks, projects, import/export operations and stock.",
    tech: ["PHP", "Laravel", "MySQL", "JavaScript", "Bootstrap", "jQuery"],
    link: "https://www.gulftransport.co/en",
  },
  {
    title: "Mihni",
    category: "work",
    company: "Al-Tarek IT",
    description: "Freelancing jobs and tasks marketplace, as a website and mobile app. Built the backend.",
    tech: ["PHP", "Laravel", "Node.js", "MySQL", "JavaScript"],
    link: "https://mihni.altarekit.com/",
  },
  {
    title: "Tarkeebat Company Website",
    category: "work",
    company: "Al-Tarek IT",
    description: "Company website for Tarkeebat in Saudi Arabia.",
    tech: ["PHP", "JavaScript", "Bootstrap", "jQuery"],
    link: "https://tarkeebat.sa/",
  },
  {
    title: "Alwaseet Company Website",
    category: "work",
    company: "Al-Tarek IT",
    description: "Company website for Alwaseet in Saudi Arabia.",
    tech: ["PHP", "Laravel", "JavaScript", "Bootstrap", "jQuery"],
    link: "https://alwaseet.sa/",
  },

  // ---------- Freelance (Oct 2020 – now) ----------
  {
    title: "The Collective",
    category: "freelance",
    description: "ERP system for Helmy Riad's art and framing business",
    tech: ["PHP", "Laravel", "MySQL", "Filament", "Tailwind CSS"],
    link: "https://thecollective-helmyriad.com/",
  },
  {
    title: "Tnzeem Tourism Agency",
    category: "freelance",
    description: "Tourism agency platform serving travelers in Saudi Arabia. Backend built with Django and a PostgreSQL database, exposed through a REST API.",
    tech: ["Python", "Django", "PostgreSQL", "REST API"],
    link: "https://tnzeem.com/",
  },
  {
    title: "Flow Zoom",
    category: "freelance",
    description: "Digital marketing platform for the Saudi market. Backend built with Django and a PostgreSQL database, exposed through a REST API.",
    tech: ["Python", "Django", "PostgreSQL", "REST API"],
    link: "https://flowzoom.sa/",
  },
  {
    title: "Tnzeem Marketing",
    category: "freelance",
    description: "Website and backend for a marketing agency, built with Django and PostgreSQL and exposed through a REST API.",
    tech: ["Python", "Django", "PostgreSQL", "REST API"],
    link: "https://tnzeem.net/",
  },
  {
    title: "Al-Tnzeem Institute",
    category: "freelance",
    description: "Training institute platform built around each learner's needs and goals. Backend built with NestJS and PostgreSQL, exposed through a REST API.",
    tech: ["Node.js", "NestJS", "PostgreSQL", "REST API"],
    link: "https://tnzeem-mhd.com/",
  },

  {
    title: "Easy App",
    category: "freelance",
    description: "Mobile app for delivering orders from restaurants, supermarkets and local markets.",
    tech: ["PHP", "Laravel", "MySQL", "REST API"],
  },
  {
    title: "MY TIME",
    category: "freelance",
    description: "Multilingual app for booking salons and beauty specialists, and for them to showcase their services, in Saudi Arabia.",
    tech: ["PHP", "Laravel", "MySQL", "REST API"],
    link: "https://play.google.com/store/apps/details?id=com.awqati.mytime",
  },
  {
    title: "Master Smoke",
    category: "freelance",
    description: "Multilingual, multi-currency ERP, POS and HR system for a vape retailer in Canada and the USA.",
    tech: ["PHP", "Laravel", "Node.js", "MySQL", "JavaScript"],
  },
  {
    title: "Sunrise Tours",
    category: "freelance",
    description: "Multilingual website for booking tourism tours in Egypt.",
    tech: ["PHP", "CodeIgniter", "MySQL", "JavaScript", "Bootstrap", "jQuery"],
    link: "http://sunrise-tours.net",
  },
  {
    title: "Courses Platform",
    category: "freelance",
    description: "Website for booking online courses.",
    tech: ["PHP", "CodeIgniter", "MySQL", "JavaScript", "Bootstrap", "jQuery"],
  },
  {
    title: "Craftsmen Services App",
    category: "freelance",
    description: "Mobile app that helps craftsmen find jobs and users find the nearest craftsman in their city.",
    tech: ["PHP", "Laravel", "MySQL", "REST API"],
  },
  {
    title: "Spiral Code",
    category: "freelance",
    description: "Platform for golf training programs in the UAE. Maintained the site and added features per client requirements.",
    tech: ["PHP", "CodeIgniter", "MySQL", "JavaScript", "Bootstrap", "jQuery"],
    link: "https://thespiralcode.com/",
  },
  {
    title: "SA-Tourz",
    category: "freelance",
    description: "Multilingual app for booking tourist trips with tour guides in Saudi Arabia.",
    tech: ["PHP", "Laravel", "MySQL", "REST API"],
    // TODO: add the real SA-Tourz link (old doc pointed to the MY TIME store page by mistake)
  },
];

const CATEGORIES = [
  { key: "all", label: "All" },
  { key: "personal", label: "Personal" },
  { key: "work", label: "Work" },
  { key: "freelance", label: "Freelance" },
];
