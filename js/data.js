/* ============================================================
   PORTFOLIO CONTENT — EDIT THIS FILE ONLY
   ------------------------------------------------------------
   This is the single source of truth for every piece of
   content on the site: projects, skills, timeline, internships,
   and profile info. The UI (js/app.js) never
   hardcodes content — it just reads these objects and renders
   them. To add / edit / remove a project, edit the PROJECTS
   array below. Nothing else needs to change.

   Fields marked  EDITABLE  contain placeholder text and should
   be replaced with your real details. No fake stats, numbers,
   or claims have been invented — replace placeholders honestly.
   ============================================================ */

const PROFILE = {
  name: "Shiva Sharuk Kumar S",
  title: "Mechatronics Engineering Student | Robotics & Automation Enthusiast | Developer",
  tagline: "I build innovative projects that combine mechanical systems, electronics, automation, IoT, and software to solve real-world problems.",
  photo: "images/profile.png", // EDITABLE — path to your photo, e.g. "images/profile.jpg". Leave blank to keep the placeholder.
  email: "rushivasharuk@gmail.com",           // EDITABLE
  github: "https://github.com/shivasharukkumar", // EDITABLE
  linkedin: "https://www.linkedin.com/in/shiva-sharuk-kumar-s-321579252/", // EDITABLE
  resumeUrl: "#",                             // EDITABLE — link to your resume PDF
  location: "Tamil Nadu, India",              // EDITABLE
  about: `I'm a Mechatronics Engineering student who likes taking a problem apart until
  it's mechanical, electrical, and software pieces — then rebuilding it as something
  that actually works on a bench, not just on paper. Most of what I build sits at the
  intersection of hardware and code: a robot needs a frame and a control loop, a sensor
  needs a PCB and a driver, a factory process needs a PLC program and a dashboard.
  I'm currently sharpening that stack across robotics, industrial automation, embedded
  systems, and web/app development, with computer vision and applied ML as the layer
  I'm actively growing into.`, // EDITABLE
  interests: [
    "Robotics",
    "Industrial Automation",
    "PLC",
    "IoT",
    "Embedded Systems",
    "Computer Vision",
    "Web & App Development",
    "AI and Machine Learning",
  ],
};

/* ---------- SKILLS ---------- */
const SKILLS = [
  {
    category: "Programming",
    icon: "code",
    items: ["C", "C++", "Python", "JavaScript", "Dart"],
  },
  {
    category: "Embedded & Electronics",
    icon: "cpu",
    items: ["ESP32", "STM32", "IOT", "Arduino", "Sensors", "Embedded Systems"],
  },
  {
    category: "Automation",
    icon: "settings",
    items: ["PLC", "Industrial Automation", "Robotics", "MATLAB", "Simulink"],
  },
  {
    category: "Design & Engineering",
    icon: "compass",
    items: ["AutoCAD", "Fusion 360", "KiCad", "PCB Design"],
  },
  {
    category: "Web & App Development",
    icon: "globe",
    items: ["HTML", "CSS", "React", "Node.js", "Flutter"],
  },
];

/* ---------- EDUCATION + EXPERIENCE TIMELINE ---------- */
/* type: "education" | "experience"  — order chronological, most recent first is fine,
   the UI sorts by the `order` field ascending (earliest -> latest along the trace) */
const TIMELINE = [
  {
    id: "school",
    order: 1,
    type: "education",
    title: "Higher Secondary Education", // EDITABLE
    org: "S A V Balakrishna Matriculation Higher Secondary School",             // EDITABLE
    period: "2020 – 2024",               // EDITABLE
    description: "Completed higher secondary education with a focus on Mathematics, Chemistry, Computer Science and Physics.", // EDITABLE
  },
  {
    id: "degree",
    order: 2,
    type: "education",
    title: "B.E. Mechatronics Engineering",
    org: "Kumaraguru College Of technology / Anna University", // EDITABLE
    period: "2024 – 2028 (Ongoing)",        // EDITABLE
    description: "Currently pursuing a B.E. in Mechatronics Engineering, covering mechanical design, control systems, electronics, embedded programming, and automation.", // EDITABLE
  },
  {
    id: "internship-mpf",
    order: 3,
    type: "experience",
    title: "Engineering Intern",
    org: "Balaj Engineering",
    period: "June",
    description: "Hands-on exposure to press tools & dies, manufacturing processes, quality inspection, plant layout, safety procedures, with a focus on identifying automation opportunities on the shop floor.",
    highlights: [
      "Press tools and dies",
      "Manufacturing processes",
      "Quality inspection",
      "Plant layout",
      "Safety procedures",
      "Automation opportunities in manufacturing",
    ],
  },
];



/* ---------- PROJECTS ---------- */
/* status: "Completed" | "In Progress" | "Prototype" | "Concept"
   category: one of "robotics" | "iot" | "embedded" | "automation" | "web" | "mobile" | "aiml"
   All technical details below are placeholders describing the stated project idea only —
   replace `overview`, `problem`, `solution`, `features`, `hardware`, `software`, `howItWorks`,
   `challenges`, and `future` with your real project write-up. */
const PROJECTS = [
  {
    id: "smart-bridge-monitoring",
    title: "Smart Bridge Monitoring System",
    category: "iot",
    tags: ["Embedded", "IoT"],
    status: "In Progress", // EDITABLE
    tech: ["ESP32", "Sensors", "C++", "IoT Dashboard"],
    image: "bridge",
    thumbnail: "", // EDITABLE — path to a real project photo, e.g. "images/projects/bridge.jpg". Leave blank to keep the generated schematic thumbnail.
    gallery: [], // EDITABLE — array of image paths for the project detail page, e.g. ["images/projects/bridge-1.jpg", "images/projects/bridge-2.jpg"]
    shortDescription: "A sensor-based structural health monitoring system that tracks a bridge's condition in real time and flags anomalies before they become failures.",
    overview: "EDITABLE — describe what this system monitors (e.g. strain, vibration, tilt, load) and why it matters for structural safety.",
    problem: "EDITABLE — the real-world problem this addresses (e.g. delayed detection of structural stress/fatigue in bridges).",
    solution: "EDITABLE — your approach: which sensors, how data is collected, how alerts are generated.",
    features: [
      "EDITABLE — e.g. real-time sensor data acquisition",
      "EDITABLE — e.g. threshold-based alerting",
      "EDITABLE — e.g. remote dashboard visualization",
    ],
    hardware: ["ESP32", "EDITABLE — sensors used (e.g. strain gauge, accelerometer, tilt sensor)"],
    software: ["C++ / Arduino framework", "EDITABLE — dashboard / backend stack"],
    howItWorks: "EDITABLE — step-by-step of the data flow from sensor to dashboard/alert.",
    challenges: "EDITABLE — obstacles faced (e.g. sensor calibration, power, connectivity).",
    future: "EDITABLE — planned improvements (e.g. solar power, ML-based anomaly detection).",
    github: "",  // EDITABLE — add repo link
    demo: "",    // EDITABLE — add live demo link if any
  },
  {
    id: "maze-solver-robot",
    title: "Maze Solver Robot",
    category: "robotics",
    tags: ["Robotics", "Embedded"],
    status: "Completed", // EDITABLE
    tech: ["Arduino", "IR/Ultrasonic Sensors", "C++"],
    image: "maze",
    thumbnail: "", // EDITABLE — path to a real project photo, e.g. "images/projects/maze.jpg". Leave blank to keep the generated schematic thumbnail.
    gallery: [], // EDITABLE — array of image paths for the project detail page, e.g. ["images/projects/maze-1.jpg", "images/projects/maze-2.jpg"]
    shortDescription: "An autonomous robot that navigates and solves a maze using sensor-based wall/path detection and a pathfinding algorithm.",
    overview: "EDITABLE — describe the robot's chassis, sensing approach, and the maze-solving strategy used.",
    problem: "EDITABLE — the challenge of autonomous navigation without human control.",
    solution: "EDITABLE — sensor layout + algorithm (e.g. wall-following, flood-fill) used to solve the maze.",
    features: [
      "EDITABLE — e.g. autonomous obstacle/wall detection",
      "EDITABLE — e.g. real-time path decision making",
      "EDITABLE — e.g. maze-solving algorithm implementation",
    ],
    hardware: ["Arduino Uno/Nano", "IR / Ultrasonic sensors", "Motor driver", "DC motors / chassis"],
    software: ["C++ / Arduino IDE"],
    howItWorks: "EDITABLE — describe the control loop: sense walls, decide direction, drive motors, repeat.",
    challenges: "EDITABLE — e.g. sensor noise, turning accuracy, algorithm tuning.",
    future: "EDITABLE — e.g. upgrade to LiDAR/camera-based navigation, add mapping.",
    github: "",
    demo: "",
  },
  {
    id: "esp32-oled-assistant",
    title: "ESP32 Smart OLED Assistant",
    category: "embedded",
    tags: ["Embedded", "IoT"],
    status: "Completed", // EDITABLE
    tech: ["ESP32", "OLED Display", "C++", "Wi-Fi"],
    image: "oled",
    thumbnail: "", // EDITABLE — path to a real project photo, e.g. "images/projects/oled.jpg". Leave blank to keep the generated schematic thumbnail.
    gallery: [], // EDITABLE — array of image paths for the project detail page, e.g. ["images/projects/oled-1.jpg", "images/projects/oled-2.jpg"]
    shortDescription: "A compact desktop assistant built on ESP32 that displays live information (time, notifications, sensor data) on an OLED screen.",
    overview: "EDITABLE — describe what information the assistant displays and its use case.",
    problem: "EDITABLE — why a small always-on display assistant is useful.",
    solution: "EDITABLE — how ESP32 + Wi-Fi + OLED come together to show live info.",
    features: [
      "EDITABLE — e.g. Wi-Fi connected clock/weather",
      "EDITABLE — e.g. custom OLED UI screens",
      "EDITABLE — e.g. notification display",
    ],
    hardware: ["ESP32", "SSD1306 OLED display", "EDITABLE — any additional sensors/buttons"],
    software: ["C++ / Arduino framework", "EDITABLE — any APIs used (NTP, weather, etc.)"],
    howItWorks: "EDITABLE — how the ESP32 fetches/reads data and renders it to the OLED.",
    challenges: "EDITABLE — e.g. display library limitations, Wi-Fi reconnection handling.",
    future: "EDITABLE — e.g. add touch input, more display modes, companion app.",
    github: "",
    demo: "",
  },
  {
    id: "multiplayer-games-platform",
    title: "Multiplayer Games Platform",
    category: "web",
    tags: ["Web Development"],
    status: "In Progress", // EDITABLE
    tech: ["JavaScript", "Node.js", "React", "WebSockets"],
    image: "games",
    thumbnail: "", // EDITABLE — path to a real project photo, e.g. "images/projects/games.jpg". Leave blank to keep the generated schematic thumbnail.
    gallery: [], // EDITABLE — array of image paths for the project detail page, e.g. ["images/projects/games-1.jpg", "images/projects/games-2.jpg"]
    shortDescription: "A web platform where users can join rooms and play simple multiplayer games together in real time.",
    overview: "EDITABLE — describe the platform: what games, how rooms/matchmaking work.",
    problem: "EDITABLE — the need this platform fulfills (casual real-time multiplayer play in-browser).",
    solution: "EDITABLE — the real-time architecture (e.g. WebSockets, room-based state sync).",
    features: [
      "EDITABLE — e.g. real-time multiplayer rooms",
      "EDITABLE — e.g. account/session handling",
      "EDITABLE — e.g. in-browser gameplay with no installs",
    ],
    hardware: [],
    software: ["React", "Node.js", "WebSockets", "EDITABLE — database used"],
    howItWorks: "EDITABLE — client-server flow: connect, join room, sync game state, render.",
    challenges: "EDITABLE — e.g. state synchronization, latency handling.",
    future: "EDITABLE — e.g. add more games, matchmaking, leaderboards.",
    github: "",
    demo: "",
  },
  {
    id: "smart-ride-booking",
    title: "Smart Ride Booking Application",
    category: "mobile",
    tags: ["Mobile Apps"],
    status: "In Progress", // EDITABLE
    tech: ["Flutter", "Dart", "Firebase/API"],
    image: "ride",
    thumbnail: "", // EDITABLE — path to a real project photo, e.g. "images/projects/ride.jpg". Leave blank to keep the generated schematic thumbnail.
    gallery: [], // EDITABLE — array of image paths for the project detail page, e.g. ["images/projects/ride-1.jpg", "images/projects/ride-2.jpg"]
    shortDescription: "A ride-booking mobile app concept allowing users to request rides, track drivers, and manage trips.",
    overview: "EDITABLE — describe app scope: rider flow, driver flow, or both.",
    problem: "EDITABLE — the transportation/booking problem being addressed.",
    solution: "EDITABLE — app architecture and key screens/flows.",
    features: [
      "EDITABLE — e.g. ride request and booking flow",
      "EDITABLE — e.g. live location tracking",
      "EDITABLE — e.g. fare estimation",
    ],
    hardware: [],
    software: ["Flutter", "Dart", "EDITABLE — backend/API used"],
    howItWorks: "EDITABLE — how a ride request travels from app to backend to driver.",
    challenges: "EDITABLE — e.g. real-time location updates, state management.",
    future: "EDITABLE — e.g. payment integration, ratings system.",
    github: "",
    demo: "",
  },
  {
    id: "hospital-prescription-management",
    title: "Hospital Prescription Management System",
    category: "web",
    tags: ["Web Development"],
    status: "Completed", // EDITABLE
    tech: ["Web Stack", "Database"],
    image: "hospital",
    thumbnail: "", // EDITABLE — path to a real project photo, e.g. "images/projects/hospital.jpg". Leave blank to keep the generated schematic thumbnail.
    gallery: [], // EDITABLE — array of image paths for the project detail page, e.g. ["images/projects/hospital-1.jpg", "images/projects/hospital-2.jpg"]
    shortDescription: "A system for managing patient prescriptions digitally — reducing manual paperwork and prescription errors.",
    overview: "EDITABLE — describe the system's scope (doctor, pharmacist, patient views).",
    problem: "EDITABLE — issues with manual/paper-based prescription handling.",
    solution: "EDITABLE — the digital workflow this system introduces.",
    features: [
      "EDITABLE — e.g. digital prescription creation",
      "EDITABLE — e.g. patient record lookup",
      "EDITABLE — e.g. prescription history tracking",
    ],
    hardware: [],
    software: ["EDITABLE — frontend stack", "EDITABLE — backend/database used"],
    howItWorks: "EDITABLE — describe the flow from doctor entry to pharmacy fulfillment.",
    challenges: "EDITABLE — e.g. data validation, access control between roles.",
    future: "EDITABLE — e.g. integration with pharmacy billing, analytics dashboard.",
    github: "",
    demo: "",
  },
  {
    id: "pharmacy-billing-system",
    title: "Pharmacy Billing System",
    category: "web",
    tags: ["Web Development"],
    status: "Completed", // EDITABLE
    tech: ["Web Stack", "Database"],
    image: "pharmacy",
    thumbnail: "", // EDITABLE — path to a real project photo, e.g. "images/projects/pharmacy.jpg". Leave blank to keep the generated schematic thumbnail.
    gallery: [], // EDITABLE — array of image paths for the project detail page, e.g. ["images/projects/pharmacy-1.jpg", "images/projects/pharmacy-2.jpg"]
    shortDescription: "A billing system for pharmacies to manage inventory, generate bills, and track sales.",
    overview: "EDITABLE — describe the system's core purpose and users.",
    problem: "EDITABLE — the inefficiency in manual pharmacy billing/inventory tracking.",
    solution: "EDITABLE — how the system automates billing and stock tracking.",
    features: [
      "EDITABLE — e.g. inventory management",
      "EDITABLE — e.g. automated bill generation",
      "EDITABLE — e.g. sales/stock reports",
    ],
    hardware: [],
    software: ["EDITABLE — frontend stack", "EDITABLE — backend/database used"],
    howItWorks: "EDITABLE — flow from adding stock to generating a customer bill.",
    challenges: "EDITABLE — e.g. stock sync accuracy, receipt formatting.",
    future: "EDITABLE — e.g. barcode scanning, low-stock alerts.",
    github: "",
    demo: "",
  },
  {
    id: "predictive-maintenance-system",
    title: "Predictive Maintenance System",
    category: "aiml",
    tags: ["AI/ML", "Automation"],
    status: "Concept", // EDITABLE
    tech: ["Python", "Machine Learning", "Sensors"],
    image: "predictive",
    thumbnail: "", // EDITABLE — path to a real project photo, e.g. "images/projects/predictive.jpg". Leave blank to keep the generated schematic thumbnail.
    gallery: [], // EDITABLE — array of image paths for the project detail page, e.g. ["images/projects/predictive-1.jpg", "images/projects/predictive-2.jpg"]
    shortDescription: "A system that predicts equipment failure in advance using sensor data and machine learning, reducing unplanned downtime.",
    overview: "EDITABLE — describe the target equipment/process and the data used to predict failure.",
    problem: "EDITABLE — the cost of unplanned downtime / reactive maintenance.",
    solution: "EDITABLE — the ML approach (e.g. classification/regression on sensor readings) used to predict failure.",
    features: [
      "EDITABLE — e.g. sensor data collection pipeline",
      "EDITABLE — e.g. failure prediction model",
      "EDITABLE — e.g. maintenance alert dashboard",
    ],
    hardware: ["EDITABLE — sensors used (vibration, temperature, current, etc.)"],
    software: ["Python", "EDITABLE — ML libraries used (e.g. scikit-learn, TensorFlow)"],
    howItWorks: "EDITABLE — data flow from sensor to model to alert.",
    challenges: "EDITABLE — e.g. labeled failure data scarcity, model accuracy.",
    future: "EDITABLE — e.g. real hardware deployment, model retraining pipeline.",
    github: "",
    demo: "",
  },
  {
    id: "sinthana",
    title: "Sinthana சிந்தனை — Live Classroom Polling Platform",
    category: "web",
    tags: ["Web Development"],
    status: "Completed",
    tech: ["React", "Vite", "Tailwind CSS", "Socket.IO", "Node.js", "Express", "PostgreSQL", "Firebase Auth"],
    image: "sinthana",
    thumbnail: "", // EDITABLE — path to a real project photo, e.g. "images/projects/sinthana.jpg". Leave blank to keep the generated schematic thumbnail.
    gallery: [], // EDITABLE — array of image paths for the project detail page, e.g. ["images/projects/sinthana-1.jpg", "images/projects/sinthana-2.jpg"]
    shortDescription: "A real-time, Mentimeter-style classroom polling platform — hosts run live multiple-choice, poll, true/false, rating, word-cloud, and Q&A questions while students join by code or QR and answer instantly from their phones.",
    overview: "\"Sinthana\" (சிந்தனை, Tamil for \"thought\") is a full-stack live audience-response app built from scratch: a React/Vite client for hosts and students, and a Node/Express/Socket.IO backend backed by PostgreSQL, with Google Sign-In through Firebase so every answer can be traced back to a named participant.",
    problem: "Classroom engagement tools like Mentimeter cover this workflow well but are closed, paid platforms. The goal was to build the same live-polling loop — host creates a question, a room full of students answer in real time, results appear instantly — end-to-end myself: authentication, real-time transport, scoring, and the database schema behind it.",
    solution: "Hosts create a session and get a 6-digit join code plus a scannable QR. Students sign in with Google and join the session; each question the host opens is broadcast over a Socket.IO room and answers stream back live, rendered as charts (multiple choice/poll/rating), a true/false split, or a live word cloud. Because every user is authenticated, the host can click into any result and see exactly which student gave which answer.",
    features: [
      "Six question types: multiple choice, poll, true/false, rating, word cloud, and Q&A",
      "Google Sign-In (Firebase) — every answer is tied to a real, named participant for host drill-down",
      "Join by 6-digit code or by scanning a QR code (auto-joins if already signed in)",
      "Optional countdown timers that are enforced server-side, not just in the UI, so a slow or disconnected student's tab can't stall the question",
      "Speed + accuracy scoring on questions with a marked correct answer, with full points for fast correct answers decaying toward a floor as time runs out",
      "Host-only leaderboard ranking participants by total points across the session",
      "Live \"X of Y answered\" progress bar while a question is open",
      "CSV export of every response for a session",
      "Access control: only the session host can view the roster, drill into named answers, or export data; student emails are hidden from other students",
    ],
    hardware: [],
    software: [
      "React 18 + Vite + Tailwind CSS (client)",
      "Recharts for live result visualizations",
      "Socket.IO client + server for real-time session/host rooms",
      "Node.js + Express REST API",
      "PostgreSQL — users, sessions, questions, participants, and answers tables",
      "Firebase Authentication (Google Sign-In) verified server-side with firebase-admin",
    ],
    howItWorks: "A host creates a session and questions through the dashboard; the server assigns a join code and opens a Socket.IO room (session:<id> for everyone, session:<id>:host for host-only events). Students authenticate with Google, join by code or QR, and submit answers that the server validates, scores, and stores against their user ID. Results are pushed back over the socket in real time to redraw the host's charts and the live progress bar; final standings are computed from the answers table for the leaderboard tab.",
    challenges: "Enforcing question timers on the server (not just the client) so results stay fair even if a student's connection lags; tracing every answer back to a specific person without ever exposing student emails to other students, only to the host in the drill-down view; and working around a browser Cross-Origin-Opener-Policy warning that can interfere with Firebase's Google sign-in popup.",
    future: "A PATCH endpoint to rename a session or reorder questions by drag-and-drop; reconnect/resume support so a student who refreshes mid-question sees their previous answer again; rate limiting on the join and answer endpoints; and an .xlsx export option (one sheet per question) alongside the current CSV export.",
    github: "",
    demo: "",
  },
];

/* Category metadata used for the filter chips (label + machine key must match PROJECTS[].category) */
const CATEGORIES = [
  { key: "all", label: "All" },
  { key: "robotics", label: "Robotics" },
  { key: "iot", label: "IoT" },
  { key: "embedded", label: "Embedded" },
  { key: "automation", label: "Automation" },
  { key: "web", label: "Web Development" },
  { key: "mobile", label: "Mobile Apps" },
  { key: "aiml", label: "AI/ML" },
];
