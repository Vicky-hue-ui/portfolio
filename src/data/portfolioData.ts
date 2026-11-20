import { Project, Experience, Education, Certification, SkillCategory } from '../types';

export const PERSONAL_INFO = {
  name: "Vicky Samal",
  role: "Software Developer | Full-Stack MERN | Machine Learning",
  location: "Bengaluru, Karnataka, India (560077)",
  coordinates: "13.03° N, 77.63° E",
  timezone: "Asia/Kolkata",
  email: "vickyff699@gmail.com",
  gmailComposeUrl: "https://mail.google.com/mail/?view=cm&fs=1&to=vickyff699@gmail.com&su=Portfolio%20Inquiry%20-%20Vicky%20Samal",
  phone: "+91 8310506391",
  github: "https://github.com/Vicky-hue-ui",
  githubHandle: "@Vicky-hue-ui",
  photoUrl: "/vicky-samal.jpg",
  availability: {
    status: "Open for Opportunities",
    classes: "Morning BCA Classes (8:00 AM – 1:00 PM IST)",
    shifts: "Available for Night-Shift & Flexible/Remote Roles",
    noticePeriod: "Immediate Joiner"
  },
  bio: "Results-driven Software Developer experienced with full-stack MERN development, Python, database management, RESTful APIs, and machine learning. Focused on responsive web applications, efficient software solutions, and modern developer tools to improve code quality and performance.",
  languages: [
    { name: "English", level: "Professional Working Proficiency" },
    { name: "Hindi", level: "Native / Fluent" },
    { name: "Kannada", level: "Professional / Conversational" },
    { name: "Odiya", level: "Native" }
  ],
  interests: [
    { name: "Fitness & Calisthenics", icon: "dumbbell", desc: "Disciplined daily strength training & cardiovascular endurance" },
    { name: "Travelling", icon: "compass", desc: "Exploring cultural heritage and natural landscapes" },
    { name: "Reading", icon: "book-open", desc: "Software architecture, technology trends & personal growth" },
    { name: "Cooking", icon: "utensils", desc: "Experimenting with balanced regional cuisines and nutrition" }
  ]
};

export const STATUS_PILLS = [
  { label: "Core Stack", text: "Full-Stack MERN + Python ML", code: "‹DEV/›" },
  { label: "Availability", text: "Open for Night Shifts & Remote Roles", code: "AVAILABLE" },
  { label: "Academics", text: "BCA @ Aditya IMS, Bengaluru", code: "2024–27" },
  { label: "Location", text: "Bengaluru, India (IST +5:30)", code: "BLR" },
  { label: "Direct Mail", text: "Gmail: vickyff699@gmail.com", code: "GMAIL" },
  { label: "Focus", text: "Scalable Web Architectures & REST APIs", code: "‹API/›" },
];

export const PROJECTS: Project[] = [
  {
    id: "cinesphere",
    title: "CineSphere",
    tagline: "Modern Cinema & Movie Intelligence Discovery Hub",
    description: "Full-stack movie exploration platform built with React, Node.js, and Express. Delivers dynamic genre filtering, real-time search queries, cast filmographies, movie trailers, and responsive media streaming integration.",
    category: "Full-Stack MERN",
    tags: ["React.js", "Node.js", "Express", "REST API", "Tailwind CSS", "JavaScript ES6+"],
    metrics: "Instant movie search with debounced API queries & rich responsive media layout",
    githubUrl: "https://github.com/Vicky-hue-ui/cinesphere",
    liveUrl: "https://github.com/Vicky-hue-ui/cinesphere",
    featured: true,
    highlights: [
      "Engineered asynchronous RESTful API pipelines to fetch trending titles, ratings, and detailed trailers",
      "Created an intuitive, dark-mode cinema interface with dynamic genre tags and modular card states",
      "Optimized client-side rendering and mobile touch interactions for zero layout jitter"
    ]
  },
  {
    id: "foodiee",
    title: "Foodiee",
    tagline: "Dynamic Food Delivery & Interactive Menu Ordering App",
    description: "Responsive full-stack food delivery application featuring an interactive digital menu, category filters, real-time cart state management, checkout simulation, and clean component architecture.",
    category: "Full-Stack MERN",
    tags: ["MongoDB", "Express.js", "React.js", "Node.js", "REST APIs", "CSS3"],
    metrics: "Full CRUD ordering workflow with real-time bill calculation & item status",
    githubUrl: "https://github.com/Vicky-hue-ui/foodiee",
    liveUrl: "https://github.com/Vicky-hue-ui/foodiee",
    featured: true,
    highlights: [
      "Built resilient backend endpoints for food menu catalog, category browsing, and order tracking",
      "Implemented seamless cart state synchronization with instant quantity adjustments and pricing rules",
      "Designed responsive mobile-first UI components ensuring effortless food ordering on any screen size"
    ]
  },
  {
    id: "portfolio-3d",
    title: "Personal 3D Portfolio Website",
    tagline: "High-Performance Interactive 3D Portfolio with WebGL & Editorial Motion",
    description: "Adrien Quechon-inspired creative developer portfolio featuring Three.js 3D hero stage with custom holographic avatar core, 0-100% preloader, binary terminal accents, audio feedback, and full mobile optimization.",
    category: "Frontend & APIs",
    tags: ["React.js", "Three.js", "TypeScript", "Tailwind CSS", "WebGL", "Vite"],
    metrics: "60 FPS WebGL rendering with automated low-DPR mobile throttling & 2D fallback",
    githubUrl: "https://github.com/Vicky-hue-ui",
    liveUrl: "https://github.com/Vicky-hue-ui",
    featured: true,
    highlights: [
      "Designed interactive 3D WebGL core with pointer parallax, holographic avatar mesh, and touch drag support",
      "Built lightweight mode toggle ensuring high accessibility on battery-saver and low-spec devices",
      "Integrated live Bengaluru IST clock badge, one-click email copy with confetti, and direct Gmail compose"
    ]
  },
  {
    id: "cat-api-app",
    title: "Cat API Dynamic Explorer",
    tagline: "Asynchronous API Explorer & Dynamic Breed Analyzer",
    description: "Lightweight and robust web application consuming the public Cat API. Handles asynchronous JSON requests, breed metadata parsing, image caching, and graceful error boundaries.",
    category: "Frontend & APIs",
    tags: ["JavaScript (ES6+)", "Node.js", "Express", "Fetch API", "JSON", "HTML5/CSS3"],
    metrics: "Sub-200ms API response parsing with dynamic image lazy loading and state fallback",
    githubUrl: "https://github.com/Vicky-hue-ui",
    liveUrl: "https://github.com/Vicky-hue-ui",
    featured: false,
    highlights: [
      "Engineered clean async/await fetch pipeline handling rate limits and network latency states",
      "Rendered dynamic breed cards with temperament metrics, origin flags, and lifespan statistics",
      "Created responsive grid layouts with CSS Flexbox/Grid and subtle hover micro-interactions"
    ]
  },
  {
    id: "ml-predictive-suite",
    title: "ML Predictive Modeling & Data Engine",
    tagline: "Python Machine Learning & Statistical Explorations",
    description: "Collection of data processing and predictive machine learning models leveraging Scikit-learn, Pandas, and NumPy for regression, classification, and exploratory data analysis.",
    category: "Python & ML",
    tags: ["Python", "Scikit-Learn", "Pandas", "NumPy", "Predictive Modeling", "Data Analysis"],
    metrics: "Data preprocessing, feature engineering, and cross-validated predictive scoring",
    githubUrl: "https://github.com/Vicky-hue-ui",
    liveUrl: "https://github.com/Vicky-hue-ui",
    featured: true,
    highlights: [
      "Formulated feature scaling, one-hot encoding, and missing value imputation pipelines",
      "Trained classification and regression estimators with cross-validation and hyperparameter tuning",
      "Extracted actionable insights from multidimensional datasets with statistical evaluation metrics"
    ]
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: "exp-forage-cybersecurity",
    role: "Cybersecurity Virtual Intern",
    company: "Forage",
    period: "08/2025 – 12/2025",
    location: "Virtual / Remote",
    type: "Virtual",
    description: "Conducted simulated enterprise cybersecurity operations, threat modeling, and vulnerability assessments to safeguard infrastructure and data integrity.",
    achievements: [
      "Analyzed threat vectors and designed phishing email simulation tests to understand social engineering attack surfaces",
      "Evaluated system vulnerabilities, recommended security protocol enhancements, and drafted executive incident reports",
      "Applied analytical problem-solving to isolate malicious behaviors and strengthen network defense perimeters"
    ],
    skills: ["Vulnerability Assessment", "Threat Awareness", "Security Protocols", "Incident Analysis", "Problem-Solving"]
  },
  {
    id: "exp-software-intern",
    role: "Software Developer Intern",
    company: "Software Development Firm",
    period: "09/2025",
    location: "Bengaluru, India",
    type: "Internship",
    description: "Collaborated with the engineering team on core JavaScript web development tasks, frontend architecture, and cross-browser stabilization.",
    achievements: [
      "Identified and resolved critical UI rendering bugs across mobile and desktop browser engines",
      "Constructed modular, reusable frontend components utilizing HTML5, modern CSS3, and JavaScript ES6+",
      "Improved site navigation workflows and elevated cross-browser responsiveness and page speed metrics"
    ],
    skills: ["JavaScript (ES6+)", "HTML5 / CSS3", "UI Debugging", "Responsive Design", "Cross-Browser Compatibility"]
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: "cert-cybersecurity",
    title: "Cybersecurity Job Simulation",
    issuer: "Mastered & New York Jobs CEO Council (Forage)",
    date: "Sep 2025",
    description: "Designed and interpreted simulated phishing email campaigns to identify vulnerabilities and educate against cybersecurity threat vectors.",
    topics: ["Phishing Simulations", "Threat Vector Identification", "Security Policies", "Vulnerability Remediation"]
  },
  {
    id: "cert-jpmorgan",
    title: "Software Engineering Job Simulation",
    issuer: "JPMorgan Chase & Co. (Forage)",
    date: "Sep 2025",
    description: "Built and tested software components including Kafka integration, in-memory H2 database integration, and high-throughput REST API controllers.",
    topics: ["Kafka Messaging", "H2 Database", "REST API Controllers", "Microservices Setup", "Unit Testing"]
  },
  {
    id: "cert-ibm-pm",
    title: "Project Management Fundamentals",
    issuer: "IBM SkillsBuild",
    date: "Feb 2026",
    description: "Comprehensive training in modern Agile & Waterfall project planning, scope definition, sprint tracking, task coordination, and delivery management.",
    topics: ["Agile Methodologies", "Sprint Planning", "Risk Mitigation", "Task Coordination", "Milestone Tracking"]
  },
  {
    id: "cert-ibm-ai",
    title: "Getting Started With Artificial Intelligence",
    issuer: "IBM SkillsBuild",
    date: "Feb 2026",
    description: "Foundational mastery of Artificial Intelligence principles, supervised & unsupervised machine learning, neural networks, and real-world industrial use cases.",
    topics: ["AI Fundamentals", "Machine Learning Paradigms", "Deep Learning Overview", "Ethical AI", "Enterprise Applications"]
  }
];

export const EDUCATION: Education[] = [
  {
    id: "edu-bca",
    institution: "Aditya Institute of Management Studies",
    degree: "Bachelor of Computer Applications (BCA)",
    period: "08/2024 – 08/2027",
    location: "Bengaluru, Karnataka, India",
    score: "Currently Pursuing (Morning Batch)",
    details: [
      "Specializing in Software Development, Database Management Systems, Data Structures & Algorithms, and Modern Web Architectures",
      "Maintains morning academic schedule (8:00 AM – 1:00 PM), fully enabling evening/night development shifts and remote software engineering",
      "Active participant in technical coding clubs, software hackathons, and developer conferences in Bengaluru"
    ]
  },
  {
    id: "edu-pu",
    institution: "Govt PU College",
    degree: "Pre-University Course (PCMC: Physics, Chemistry, Math, Computer Science)",
    period: "05/2022 – 03/2024",
    location: "Bangalore, Karnataka, India",
    score: "69.67%",
    details: [
      "Strong foundation in Computer Science fundamentals, C/C++ programming syntax, Boolean logic, and advanced mathematics",
      "Practical coursework in algorithms, data structuring, and binary computation"
    ]
  },
  {
    id: "edu-sslc",
    institution: "Soniya English High School",
    degree: "Secondary School Leaving Certificate (SSLC)",
    period: "Completed 04/2022",
    location: "Bangalore, Karnataka, India",
    score: "75.84%",
    details: [
      "Distinction in Mathematics and Science",
      "Active leadership roles in school science exhibitions and computer literacy programs"
    ]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Programming Languages",
    description: "Core algorithmic and systems languages",
    skills: [
      { name: "JavaScript (ES6+)", level: "Advanced", highlight: true },
      { name: "Python", level: "Proficient", highlight: true },
      { name: "C / C++", level: "Solid Foundation" },
      { name: "SQL", level: "Proficient", highlight: true }
    ]
  },
  {
    category: "Web & Full-Stack Development",
    description: "Modern MERN ecosystem & server architectures",
    skills: [
      { name: "React.js", level: "Advanced", highlight: true },
      { name: "Node.js", level: "Proficient", highlight: true },
      { name: "Express.js", level: "Proficient", highlight: true },
      { name: "MongoDB", level: "Proficient", highlight: true },
      { name: "RESTful APIs", level: "Advanced", highlight: true },
      { name: "HTML5 & CSS3", level: "Advanced" },
      { name: "Tailwind CSS", level: "Advanced" },
      { name: "Three.js / WebGL", level: "Intermediate", highlight: true }
    ]
  },
  {
    category: "AI & Machine Learning",
    description: "Data intelligence, modeling & quantitative analysis",
    skills: [
      { name: "Scikit-Learn", level: "Proficient", highlight: true },
      { name: "Pandas", level: "Advanced", highlight: true },
      { name: "NumPy", level: "Advanced" },
      { name: "Predictive Modeling", level: "Intermediate", highlight: true },
      { name: "Feature Engineering", level: "Intermediate" },
      { name: "Data Visualization", level: "Proficient" }
    ]
  },
  {
    category: "Developer Suite & AI Workflows",
    description: "Accelerated development, version control & tools",
    skills: [
      { name: "GitHub Copilot", level: "Daily Workflow", highlight: true },
      { name: "Cursor AI", level: "Advanced", highlight: true },
      { name: "LLM APIs Integration", level: "Intermediate", highlight: true },
      { name: "Git & GitHub", level: "Advanced", highlight: true },
      { name: "VS Code", level: "Advanced" },
      { name: "Postman / Thunder Client", level: "Proficient" }
    ]
  }
];
