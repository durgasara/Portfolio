export const personalInfo = {
  name: "Sri Durgadevi S",
  titles: ["Full Stack Developer", "Frontend Developer"],
  tagline:
    "I build responsive web and mobile applications using React, React Native, TypeScript and modern web technologies.",
  about:
    "I am an aspiring Software Engineer passionate about building modern, responsive web and mobile applications. I specialize in React, React Native (Expo), HTML, CSS, JavaScript, and TypeScript. I also have foundational backend knowledge, including REST API integration, HTTP methods, and PostgreSQL. I enjoy solving real-world problems through clean code and intuitive user experiences while continuously learning new technologies.",
  email: "sridurgadevisaravanan41@gmail.com",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  resumePath: "/resume.pdf",
};

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];

export const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML5", level: 90 },
      { name: "CSS3", level: 88 },
      { name: "JavaScript", level: 85 },
      { name: "React", level: 88 },
      { name: "React Native", level: 80 },
      { name: "Expo", level: 78 },
      { name: "Tamagui", level: 70 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "REST APIs", level: 75 },
      { name: "API Integration", level: 80 },
      { name: "HTTP Methods", level: 82 },
      { name: "Node.js (Basics)", level: 65 },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "PostgreSQL", level: 70 },
      { name: "pgAdmin", level: 68 },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", level: 85 },
      { name: "GitHub", level: 88 },
      { name: "VS Code", level: 90 },
      { name: "Figma", level: 72 },
    ],
  },
];

export const experiences = [
  {
    company: "Virtusa",
    role: "Full Stack Developer Intern",
    highlights: [
      "Developed responsive React applications.",
      "Integrated backend REST APIs.",
      "Worked with reusable components.",
      "Collaborated using Git.",
    ],
  },
  {
    company: "Teachnook",
    role: "Web Development Intern",
    highlights: [
      "Built a responsive website of historical places with details.",
      "Developed a Weather Forecast App.",
    ],
  },
  {
    company: "Spiro Prime Tech",
    role: "Python Development Intern",
    highlights: [
      "Developed an image detection project using Python and Deep Learning.",
      "Implemented object detection using YOLO.",
    ],
  },
];

export const projects = [
  {
    title: "Construction Site Monitoring & PPE Detection System",
    category: "AI + Computer Vision",
    github: "#",
    live: "#",
    description:
      "Developed an AI-powered construction site monitoring system that detects PPE compliance, including helmets, gloves, boots, and masks. The system sends real-time alerts to site administrators for safety violations and uses RSSI-based localization to identify workers during emergencies or accidents.",
    technologies: ["Python", "YOLOv8", "OpenCV", "Flask", "RSSI"],
  },
  {
    title: "IoT-Based Forest Fire Detection System",
    category: "IoT",
    github: "#",
    live: "#",
    description:
      "Built an IoT-based forest fire detection system that continuously monitors temperature and humidity to detect fire at an early stage. The system sends instant alerts to forest authorities and predicts wind direction to estimate the potential spread of fire.",
    technologies: ["IoT", "Arduino", "Embedded C", "Sensors"],
  },
  {
    title: "Cop Friendly App (eSeva Traffix)",
    category: "Mobile Application",
    github: "#",
    live: "#",
    description:
      "Developed a React Native application for traffic police to manage traffic violations, view penalties, locate nearby officers for assistance, trigger SOS alerts during emergencies, and access AI-powered chat support for improved field operations.",
    technologies: ["React Native", "Expo", "TypeScript", "REST APIs"],
  },
  {
    title: "VCabs - Cab Booking Application",
    category: "Full Stack Web Application",
    github: "https://github.com/Ex-Rockstar/car-booking-frontend/tree/main/vcabs-frontend",
    live: "https://github.com/Ex-Rockstar/car-booking-frontend/tree/main/vcabs-frontend",
    description:
      "Developed a cab booking platform supporting Rental, Reserve, Trip, and Intercity services with multiple seating options. Users can select pickup and drop locations, choose their preferred trip type, and receive fare estimates automatically based on travel distance.",
    technologies: ["React", "TypeScript", "Go", "PostgreSQL", "REST APIs"],
  },
];

export const education = {
  institution: "Sri Sairam Engineering College",
  degree: "Integrated M.Tech Computer Science Engineering",
  cgpa: "8.54",
};

export const certifications = [
  {
    title: "NPTEL",
    description:
      "Completed multiple NPTEL certification courses in computer science and emerging technologies with successful scores.",
  },
  {
    title: "Learnathon",
    description:
      "Earned multiple technical certifications through Learnathon across various industry-recognized courses and technology domains."
  },
  {
    title: "Spoken Tutorial - IIT Bombay",
    description:
      "Completed multiple programming language certifications, including Python, Java, and C/C++, with qualifying scores.",
  },
  {
    title: "LinkedIn Learning",
    description:
      "Earned multiple professional certifications in software development.",
  },
  {
    title: "Internship Certifications",
    description:
      "Received internship completion certificates in Python Development and Full Stack Web Development.",
  },
];

export const floatingTechIcons = [
  "react",
  "javascript",
  "nodejs",
  "python",
  "git",
  "html5",
  "css3",
];
