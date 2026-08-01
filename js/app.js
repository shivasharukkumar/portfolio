/* ============================================================
   PORTFOLIO CONTENT — EDIT THIS FILE ONLY
   ------------------------------------------------------------
   This is the single source of truth for every piece of
   content on the site: projects, skills, timeline, internships,
   and profile info. The UI (js/app.js) never hardcodes content —
   it just reads these objects and renders them. To add / edit /
   remove a project, edit the PROJECTS array below. Nothing else
   needs to change.

   Fields marked EDITABLE contain placeholder text and should be
   replaced with your real details. No fake stats, numbers, or
   claims have been invented — replace placeholders honestly.
   ============================================================ */

const PROFILE = {
  name: "Shiva Sharuk Kumar S",
  title: "Mechatronics Engineering Student | Robotics & Automation Enthusiast | Developer",
  tagline:
    "I build innovative projects that combine mechanical systems, electronics, automation, IoT, and software to solve real-world problems.",
  photo: "images/profile.png", // path to your photo, such as "images/profile.jpg" — leave blank to keep the placeholder.
  email: "rushivasharuk@gmail.com", // EDITABLE
  github: "https://github.com/shivasharukkumar", // EDITABLE
  linkedin: "https://www.linkedin.com/in/shivasharuk/", // EDITABLE
  resumeUrl: "#", // link to your resume PDF
  location: "Tamil Nadu, India", // EDITABLE
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
/* type: "education" | "experience" — order chronological, most recent first
   is fine, the UI sorts by the `order` field ascending (earliest -> latest
   along the trace) */
const TIMELINE = [
  {
    id: "school",
    order: 1,
    type: "education",
    title: "Higher Secondary Education", // EDITABLE
    org: "S A V Balakrishna Matriculation Higher Secondary School", // EDITABLE
    period: "2020 – 2024", // EDITABLE
    description:
      "Completed higher secondary education with a focus on Mathematics, Chemistry, Computer Science and Physics.", // EDITABLE
  },
  {
    id: "degree",
    order: 2,
    type: "education",
    title: "B.E. Mechatronics Engineering",
    org: "Kumaraguru College Of Technology / Anna University", // EDITABLE
    period: "2024 – 2028 (Ongoing)", // EDITABLE
    description:
      "Currently pursuing a B.E. in Mechatronics Engineering, covering mechanical design, control systems, electronics, embedded programming, and automation.", // EDITABLE
  },
  {
    id: "internship-mpf",
    order: 3,
    type: "experience",
    title: "Engineering Intern",
    org: "Balaj Engineering",
    period: "June",
    description:
      "Hands-on exposure to press tools & dies, manufacturing processes, quality inspection, plant layout, safety procedures, with a focus on identifying automation opportunities on the shop floor.",
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
   All technical details below are placeholders describing the stated
   project idea only — replace `overview`, `problem`, `solution`, `features`,
   `hardware`, `software`, `howItWorks`, `challenges`, and `future` with your
   real project write-up. */
const PROJECTS = [
  {
    id: "smart-bridge-monitoring",
    title: "Smart Bridge Monitoring System",
    category: "iot",
    tags: ["Embedded", "IoT"],
    status: "In Progress", // EDITABLE
    tech: ["ESP32", "Sensors", "C++", "IoT Dashboard"],
    image: "bridge",
    thumbnail: "", // path to a real project photo, such as "images/projects/bridge.jpg" — leave blank to keep the generated schematic thumbnail.
    gallery: [], // array of image paths for the project detail page
    shortDescription:
      "A real-time structural health monitoring system that continuously tracks a bridge's condition and flags anomalies before they escalate into failures.",
    overview:
      "describe what this system monitors — strain, vibration, tilt, load, or a combination — and why continuous monitoring matters for structural safety compared to periodic manual inspection.",
    problem:
      "the real-world problem this addresses: structural stress and fatigue in bridges usually go undetected until a scheduled inspection, by which point damage may already be advanced. Continuous monitoring closes that gap.",
    solution:
      "your approach: which sensors are mounted where on the structure, how readings are sampled and transmitted, what thresholds trigger an alert, and who receives that alert and how.",
    features: [
      "real-time sensor data acquisition from multiple points on the structure",
      "threshold-based alerting when readings exceed safe limits",
      "remote dashboard visualization for live and historical readings",
      "data logging for long-term trend analysis",
      "low-power operation for extended unattended deployment",
    ],
    hardware: [
      "ESP32",
      "sensors used (strain gauge, accelerometer, tilt sensor)",
      "power supply / battery setup",
      "enclosure for outdoor/field deployment",
    ],
    software: ["C++ / Arduino framework", "dashboard / backend stack", "database for historical readings"],
    howItWorks:
      "step-by-step of the data flow: sensors sample structural readings at set intervals, the ESP32 processes and transmits them over Wi-Fi or another link, the backend stores the data, and the dashboard renders live values while triggering an alert if any reading crosses a defined threshold.",
    challenges:
      "obstacles faced: calibrating sensors accurately against a real structure, keeping power consumption low enough for unattended operation, and maintaining a stable connection in an outdoor environment.",
    future:
      "planned improvements: solar-powered operation for fully autonomous deployment, and ML-based anomaly detection to catch subtler patterns than simple thresholds.",
    github: "", // add repo link
    demo: "", // add live demo link if any
  },
  {
    id: "maze-solver-robot",
    title: "Maze Solver Robot",
    category: "robotics",
    tags: ["Robotics", "Embedded"],
    status: "Completed", // EDITABLE
    tech: ["Arduino", "IR/Ultrasonic Sensors", "C++"],
    image: "maze",
    thumbnail: "",
    gallery: [],
    shortDescription:
      "An autonomous robot that senses its surroundings in real time and solves a maze using wall/path detection paired with a pathfinding algorithm.",
    overview:
      "describe the robot's chassis and build, the sensing approach used to perceive the maze, and the overall maze-solving strategy chosen and why.",
    problem:
      "the challenge of autonomous navigation without human control: the robot has to perceive walls and openings, decide a direction, and correct course in real time with no outside input.",
    solution:
      "sensor layout + algorithm (wall-following, flood-fill, or another approach) used to solve the maze, including how the robot handles dead ends and decision points.",
    features: [
      "autonomous obstacle/wall detection",
      "real-time path decision making",
      "maze-solving algorithm implementation",
      "consistent turning and speed control for accurate navigation",
      "recovery behavior for dead ends or missed turns",
    ],
    hardware: [
      "Arduino Uno/Nano",
      "IR / Ultrasonic sensors",
      "Motor driver",
      "DC motors / chassis",
      "battery pack",
    ],
    software: ["C++ / Arduino IDE"],
    howItWorks:
      "describe the control loop in detail: the robot continuously senses walls on each side, feeds those readings into the maze-solving algorithm to decide a direction, drives the motors accordingly, and repeats this loop until it reaches the maze exit.",
    challenges:
      "sensor noise affecting wall readings, turning accuracy on tight corners, and tuning the algorithm so it reliably finds a path without getting stuck.",
    future:
      "upgrade to LiDAR/camera-based navigation for more precise sensing, and add live mapping so the solved path can be visualized afterward.",
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
    thumbnail: "",
    gallery: [],
    shortDescription:
      "A compact ESP32-based desktop assistant that displays live information — time, notifications, and sensor data — on an OLED screen.",
    overview:
      "A desktop companion built around an ESP32 and a small OLED display that renders an animated character face with physics-based eye movement, showing live time and weather instead of a static readout.",
    problem:
      "Most desk gadgets show a single static reading or need a companion phone app just to interact with. The goal was a small, standalone device that feels alive and responsive entirely on its own.",
    solution:
      "The ESP32 handles Wi-Fi, NTP time sync, and OpenWeatherMap API calls, then renders the results as an animated face on the OLED. A TTP223 capacitive touch sensor detects gestures and switches between expressions and display modes.",
    features: [
      "30 distinct face expressions with physics-based eye animation for natural-feeling movement",
      "Touch gesture detection via a TTP223 module to switch expressions and modes",
      "Live weather data pulled from the OpenWeatherMap API over Wi-Fi",
      "NTP-synced clock so the displayed time stays accurate without manual setting",
    ],
    hardware: ["ESP32", "SSD1306 OLED display", "TTP223 capacitive touch sensor"],
    software: ["C++ / Arduino framework", "OpenWeatherMap API", "NTP time sync"],
    howItWorks:
      "On boot the ESP32 connects to Wi-Fi, syncs the time over NTP, and polls OpenWeatherMap for current conditions. Between updates it continuously renders an animated face on the OLED, with eye movement driven by a physics-based animation loop; touching the TTP223 sensor cycles through the 30 expressions and switches between clock, weather, and expression modes.",
    challenges:
      "Making the eye animation feel physically natural rather than mechanical on a small monochrome display, handling Wi-Fi reconnection cleanly without freezing the animation loop, and tuning touch sensitivity to avoid false triggers.",
    future:
      "Add more interaction modes, bring in additional sensors, and build a companion mobile app for remote configuration.",
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
    thumbnail: "",
    gallery: [],
    shortDescription:
      "A real-time web platform where users create or join rooms to play multiplayer games together instantly, with no installation required.",
    overview:
      "\"2 VS 2 Multiplayer\" is a real-time platform hosting five classic games — Tic-Tac-Toe, Connect Four, Dots and Boxes, Rock Paper Scissors, and Memory Match — playable from both a web client and a Flutter mobile app, with a shared backend keeping game state in sync across devices.",
    problem:
      "Wanted a single platform where friends could jump into quick, casual games together in real time from either a browser or a phone, without each game needing its own separate app or server.",
    solution:
      "A Node.js backend using WebSockets manages rooms and game state for all five games, with a PostgreSQL database (hosted on Neon) persisting user and match data. The web client is deployed on Netlify and the backend on Render, while a Flutter app delivers the same experience natively on mobile.",
    features: [
      "Five real-time multiplayer games in one platform: Tic-Tac-Toe, Connect Four, Dots and Boxes, Rock Paper Scissors, and Memory Match",
      "Shared backend and room system so web and mobile players can play together",
      "Flutter mobile app alongside a web client, both talking to the same real-time backend",
      "Cloud-hosted stack: Render for the backend, Netlify for the web client, Neon for PostgreSQL",
    ],
    hardware: [],
    software: ["Node.js", "WebSockets", "PostgreSQL (Neon)", "Flutter", "React (web client)"],
    howItWorks:
      "Players join a room from either the web client or the Flutter app; the Node.js backend tracks room state over WebSockets and broadcasts moves to both players in real time, with PostgreSQL storing persistent data like accounts and match history.",
    challenges:
      "Currently debugging a mobile-only connectivity issue where the Flutter app only stays connected while the website is also open — pointing to how the app manages its WebSocket/background connection lifecycle independently of the browser.",
    future:
      "Resolve the mobile connectivity issue so the app works fully standalone, then add matchmaking and more games.",
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
    thumbnail: "",
    gallery: [],
    shortDescription:
      "A ride-booking mobile app that lets users request rides, track drivers in real time, and manage their trips end to end.",
    overview:
      "describe app scope: whether it covers the rider flow, driver flow, or both, and what the core user journey looks like from opening the app to completing a trip.",
    problem:
      "the transportation/booking problem being addressed: finding a ride quickly, knowing what it will cost up front, and being able to track it in real time.",
    solution: "app architecture and key screens/flows: how a request moves from rider to driver and back, and what happens at each step in between.",
    features: [
      "ride request and booking flow",
      "live location tracking",
      "fare estimation",
      "driver assignment / matching",
      "trip history and status updates",
    ],
    hardware: [],
    software: ["Flutter", "Dart", "backend/API used", "maps / location service used"],
    howItWorks:
      "how a ride request travels from app to backend to driver: the rider submits a request with pickup/drop details, the backend matches it to an available driver, and both parties see live location updates until the trip is completed.",
    challenges:
      "real-time location updates without draining battery or overloading the backend, and managing app state cleanly across the booking, in-progress, and completed trip stages.",
    future: "payment integration, and a ratings/review system for both riders and drivers.",
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
    thumbnail: "",
    gallery: [],
    shortDescription:
      "A digital prescription management system that streamlines the doctor-to-pharmacy workflow and reduces manual paperwork and prescription errors.",
    overview:
      "Built for Dr. Murugasen Hospital, this is a role-based platform covering doctor, receptionist, and pharmacist workflows — from patient consultation and prescription creation through to pharmacy fulfillment — with JWT-based authentication controlling what each role can see and do.",
    problem:
      "Paper prescriptions and manual record-keeping make it easy to lose history, hard to reference past visits, and slow to hand information off between a doctor's desk and the pharmacy counter.",
    solution:
      "Doctors record consultations and prescriptions digitally against a patient's record; receptionists manage registration and scheduling; the system passes prescriptions straight through to the pharmacist's queue for fulfillment and billing, all behind role-based JWT authentication.",
    features: [
      "Role-based access for doctor, receptionist, and pharmacist accounts",
      "Digital prescription creation tied directly to a patient's record",
      "JWT authentication controlling access per role",
      "Progressive Web App (PWA) support for offline-friendly access",
    ],
    hardware: [],
    software: ["React/JS frontend", "Node.js/Express backend", "PostgreSQL (Neon)", "JWT authentication"],
    howItWorks:
      "A doctor logs in, pulls up or creates a patient record, and writes a prescription; that prescription is immediately visible in the pharmacist's dashboard for billing and dispensing, while the receptionist role handles patient registration and appointment flow feeding into the same database.",
    challenges:
      "Designing clean role separation so each of the three account types only sees what's relevant to them, and keeping the system usable offline via the PWA and a companion Electron desktop app.",
    future:
      "Deeper analytics dashboards, and continued refinement of the offline Electron desktop apps.",
    github: "",
    demo: "https://muruganhospital.netlify.app",
  },
  {
    id: "pharmacy-billing-system",
    title: "Pharmacy Billing System",
    category: "web",
    tags: ["Web Development"],
    status: "Completed", // EDITABLE
    tech: ["Web Stack", "Database"],
    image: "pharmacy",
    thumbnail: "",
    gallery: [],
    shortDescription:
      "A pharmacy billing system that manages inventory, generates bills, and tracks sales within a single streamlined workflow.",
    overview:
      "The pharmacy side of the Dr. Murugasen Hospital platform: a billing module built around a 300-item medicine master list, handling GST-inclusive invoicing and stock movement as prescriptions arrive from the doctor's queue.",
    problem:
      "Manually calculating GST-inclusive bills and tracking stock against a large medicine list is slow and error-prone, especially with prescriptions arriving continuously from multiple doctors.",
    solution:
      "The system maintains a master list of around 300 medicines with pricing and GST rates, so a pharmacist can generate an itemized, tax-compliant bill directly from an incoming prescription while stock levels update automatically.",
    features: [
      "GST-compliant billing generated directly from a 300-item medicine master list",
      "Automatic stock updates as items are billed against a prescription",
      "Shared backend with the hospital's doctor and receptionist modules for a single source of truth",
      "Offline-capable via a companion Electron desktop app using node:sqlite",
    ],
    hardware: [],
    software: ["Node.js/Express backend", "PostgreSQL (Neon)", "Electron + node:sqlite (offline desktop app)"],
    howItWorks:
      "A prescription lands in the pharmacist's queue, its line items are matched against the medicine master list, a GST-inclusive bill is generated, and stock quantities are deducted accordingly.",
    challenges:
      "Keeping the 300-item medicine list and GST calculations accurate and fast, and building offline Electron desktop apps around node:sqlite so billing can continue without an internet connection.",
    future: "Add barcode scanning and low-stock alerts on top of the existing billing flow.",
    github: "",
    demo: "https://muruganhospital.netlify.app",
  },
  {
    id: "predictive-maintenance-system",
    title: "Predictive Maintenance System",
    category: "aiml",
    tags: ["AI/ML", "Automation"],
    status: "Concept", // EDITABLE
    tech: ["Python", "Machine Learning", "Sensors"],
    image: "predictive",
    thumbnail: "",
    gallery: [],
    shortDescription:
      "A machine learning system that predicts equipment failure in advance from sensor data, helping reduce unplanned downtime.",
    overview:
      "describe the target equipment or process, what sensor readings are collected from it, and how those readings relate to eventual failure.",
    problem:
      "the cost of unplanned downtime / reactive maintenance: fixing equipment only after it fails is expensive and disruptive compared to catching warning signs early.",
    solution:
      "the ML approach (classification/regression on sensor readings) used to predict failure, including how the model is trained and how confident predictions are surfaced to a maintenance team.",
    features: [
      "sensor data collection pipeline",
      "failure prediction model",
      "maintenance alert dashboard",
      "historical trend visualization for each monitored asset",
      "configurable alert thresholds per equipment type",
    ],
    hardware: ["sensors used (vibration, temperature, current, etc.)"],
    software: ["Python", "ML libraries used (scikit-learn, TensorFlow)", "dashboard / backend stack"],
    howItWorks:
      "data flow from sensor to model to alert: readings are collected continuously, fed into the trained model to produce a failure-risk score, and surfaced on a dashboard with an alert raised once the risk crosses a set threshold.",
    challenges:
      "labeled failure data scarcity, since real failure events are rare and hard to collect enough of, and keeping the model's accuracy reliable across different operating conditions.",
    future: "real hardware deployment on live equipment, and a retraining pipeline so the model improves as more data comes in.",
    github: "",
    demo: "",
  },
  {
    id: "sinthana",
    title: "Sinthana சிந்தனை — Live Classroom Polling Platform",
    category: "web",
    tags: ["Web Development"],
    status: "Completed",
    tech: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Socket.IO",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Firebase Auth",
    ],
    image: "sinthana",
    thumbnail: "",
    gallery: [],
    shortDescription:
      "A real-time, Mentimeter-style classroom polling platform: hosts run live multiple-choice, poll, true/false, rating, word-cloud, and Q&A questions, while students join by code or QR and answer instantly from their phones.",
    overview:
      "\"Sinthana\" (சிந்தனை, Tamil for \"thought\") is a full-stack live audience-response app built from scratch: a React/Vite client for hosts and students, and a Node/Express/Socket.IO backend backed by PostgreSQL, with Google Sign-In through Firebase so every answer can be traced back to a named participant.",
    problem:
      "Classroom engagement tools like Mentimeter cover this workflow well but are closed, paid platforms. The goal was to build the same live-polling loop — host creates a question, a room full of students answer in real time, results appear instantly — end-to-end myself: authentication, real-time transport, scoring, and the database schema behind it.",
    solution:
      "Hosts create a session and get a 6-digit join code plus a scannable QR. Students sign in with Google and join the session; each question the host opens is broadcast over a Socket.IO room and answers stream back live, rendered as charts (multiple choice/poll/rating), a true/false split, or a live word cloud. Because every user is authenticated, the host can click into any result and see exactly which student gave which answer.",
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
    howItWorks:
      "A host creates a session and questions through the dashboard; the server assigns a join code and opens a Socket.IO room (session:<id> for everyone, session:<id>:host for host-only events). Students authenticate with Google, join by code or QR, and submit answers that the server validates, scores, and stores against their user ID. Results are pushed back over the socket in real time to redraw the host's charts and the live progress bar; final standings are computed from the answers table for the leaderboard tab.",
    challenges:
      "Enforcing question timers on the server (not just the client) so results stay fair even if a student's connection lags; tracing every answer back to a specific person without ever exposing student emails to other students, only to the host in the drill-down view; and working around a browser Cross-Origin-Opener-Policy warning that can interfere with Firebase's Google sign-in popup.",
    future:
      "A PATCH endpoint to rename a session or reorder questions by drag-and-drop; reconnect/resume support so a student who refreshes mid-question sees their previous answer again; rate limiting on the join and answer endpoints; and an .xlsx export option (one sheet per question) alongside the current CSV export.",
    github: "",
    demo: "",
  },
];

/* Category metadata used for the filter chips
   (label + machine key must match PROJECTS[].category) */
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