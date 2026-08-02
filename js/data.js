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
  photo: "images/profile.png", //  path to your photo, e.g. "images/profile.jpg". Leave blank to keep the placeholder.
  email: "rushivasharuk@gmail.com",           // EDITABLE
  github: "https://github.com/shivasharukkumar", // EDITABLE
  linkedin: "https://www.linkedin.com/in/shivasharuk/", // EDITABLE
  resumeUrl: "#",                             //  link to your resume PDF
  location: "Tamil Nadu, India",              // EDITABLE
  // EDITABLE — paste a Formspree endpoint here (e.g. "https://formspree.io/f/abcdwxyz") to make
  // the contact form actually send you an email. Get one free at https://formspree.io — sign up,
  // create a new form, point it at your email, and paste the endpoint URL it gives you here.
  // Leave blank and the form will fall back to opening the visitor's email app instead (mailto),
  // which still works with zero setup but requires the visitor to hit send themselves.
  formEndpoint: "",
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
    items: ["ESP32", "STM32", "Raspberry Pi", "Arduino", "Sensors", "Embedded Systems"],
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
    tags: ["Embedded", "IoT", "Structural Health Monitoring"],
    status: "In Progress",
    tech: [
      "ESP32",
      "C++",
      "IoT",
      "Strain Gauge",
      "Load Cell",
      "HX711",
      "SW-420",
      "DHT11",
    ],
    image: "bridge",
    thumbnail: "",
    gallery: [],

    shortDescription:
      "An IoT-based structural health monitoring system designed to continuously monitor bridge conditions using multiple sensors and provide real-time data and alerts.",

    overview:
      "The Smart Bridge Monitoring System is an IoT-based structural health monitoring project designed to continuously observe important physical and environmental parameters of a bridge. The system uses an ESP32 as the central processing unit and collects data from multiple sensors. These include a strain gauge for detecting structural deformation, a load cell with an HX711 amplifier for measuring applied load, an SW-420 vibration sensor for detecting vibration activity, and a DHT11 sensor for monitoring temperature and humidity. The collected information can be transmitted through Wi-Fi to an IoT dashboard, allowing bridge conditions to be monitored remotely.",

    objective:
      "The main objective of this project is to develop a low-cost and scalable monitoring system that can continuously collect bridge condition data and identify potentially abnormal situations at an early stage. Instead of depending only on periodic manual inspections, the proposed system provides continuous sensor-based monitoring and helps make structural condition assessment more data-driven.",

    problem:
      "Bridges are continuously exposed to dynamic loads, vibrations, environmental changes, and long-term structural stress. Periodic inspections may not always detect temporary or developing problems between inspection cycles. Manual inspection can also be time-consuming and resource-intensive. A continuous monitoring system can provide additional information about structural behavior and help identify unusual changes earlier.",

    solution:
      "The proposed solution uses an ESP32-based IoT architecture to collect and process sensor data. The load cell and HX711 module measure changes in applied load, while the strain gauge can be used to observe structural strain. The SW-420 sensor detects vibration activity, and the DHT11 monitors temperature and humidity. The ESP32 processes the sensor readings and evaluates them against predefined threshold values. The data can then be transmitted through Wi-Fi to an IoT dashboard for remote visualization. When readings exceed specified limits, the system can generate an alert for further inspection.",

    features: [
      "Real-time bridge condition monitoring",
      "Load measurement using load cell and HX711",
      "Structural strain monitoring using strain gauge",
      "Vibration detection using SW-420 sensor",
      "Temperature and humidity monitoring using DHT11",
      "ESP32-based sensor data processing",
      "Wi-Fi-based IoT connectivity",
      "Remote monitoring through an IoT dashboard",
      "Threshold-based abnormal condition alerts",
      "LED-based local warning indication",
    ],

    hardware: [
      "ESP32 development board",
      "Strain gauge",
      "Load cell",
      "HX711 load cell amplifier",
      "SW-420 vibration sensor",
      "DHT11 temperature and humidity sensor",
      "LED indicators",
      "Power supply",
      "Connecting wires and prototype components",
    ],

    software: [
      "C++",
      "Arduino IDE",
      "ESP32 Wi-Fi libraries",
      "IoT dashboard",
      "Sensor interface libraries",
    ],

    architecture:
      "The system follows a sensor-to-dashboard monitoring architecture. Multiple sensors are connected to the ESP32, which acts as the central data acquisition and processing unit. Sensor readings are collected at regular intervals and processed locally. The ESP32 uses Wi-Fi connectivity to transmit the collected data to a remote IoT dashboard. The dashboard provides a visual representation of the sensor values and allows the user to monitor the bridge remotely.",

    workflow: [
      "Sensors are installed at selected monitoring points on the bridge model or structure.",
      "The sensors continuously collect structural and environmental data.",
      "The ESP32 reads the sensor values through its connected interfaces.",
      "The collected readings are processed and converted into meaningful values.",
      "The system compares important parameters with predefined threshold values.",
      "If an abnormal reading is detected, the system activates the appropriate alert mechanism.",
      "The sensor data is transmitted through Wi-Fi to the IoT dashboard.",
      "The dashboard displays the live data for remote monitoring and analysis.",
    ],

    howItWorks:
      "The system begins by collecting data from the connected sensors. The load cell measures the applied force and sends a small electrical signal to the HX711 amplifier, which converts the signal into a digital value that can be read by the ESP32. The strain gauge provides information related to structural deformation, while the SW-420 sensor detects vibration activity. The DHT11 provides temperature and humidity measurements. The ESP32 processes all sensor readings and checks whether they are within the expected operating range. The data is then transmitted through Wi-Fi to an IoT dashboard. If the measured values exceed predefined limits, the system can provide an alert to indicate that the structure requires further investigation.",

    monitoringParameters: [
      "Applied load",
      "Structural strain",
      "Vibration activity",
      "Temperature",
      "Humidity",
    ],

    alertConditions: [
      "Load exceeding the configured safe threshold",
      "Unusual vibration activity",
      "Temperature exceeding the configured limit",
      "Humidity exceeding the configured limit",
      "Abnormal changes in structural strain",
    ],

    challenges:
      "One of the major challenges was obtaining reliable sensor readings from low-cost sensors. Load cells and strain gauges require proper calibration to produce meaningful measurements. Vibration sensors can also generate noisy or inconsistent readings depending on the mounting position and surrounding conditions. Another challenge was maintaining reliable Wi-Fi communication while continuously transmitting sensor data. Selecting appropriate threshold values was also important because overly sensitive thresholds could generate false alerts.",

    learning:
      "This project provided practical experience in embedded systems, ESP32 programming, sensor interfacing, IoT communication, real-time data monitoring, sensor calibration, and basic structural health monitoring concepts. It also helped develop an understanding of how multiple sensors can be combined into a single IoT monitoring architecture.",

    future:
      "Future improvements include replacing basic vibration sensors with higher-accuracy accelerometers, adding tilt and displacement sensors, implementing solar-powered operation, adding GPS-based location information, storing historical sensor data in a cloud database, and developing a mobile application for notifications. Machine-learning-based anomaly detection could also be implemented to identify unusual structural behavior automatically instead of depending only on fixed threshold values.",

    github: "",
    demo: "",
  },

  {
    id: "maze-solver-robot",
    title: "Maze Solver Robot",
    category: "robotics",
    tags: ["Robotics", "Embedded", "Autonomous Navigation"],
    status: "Completed",
    tech: [
      "Arduino",
      "C++",
      "IR Sensors",
      "Ultrasonic Sensors",
      "Motor Driver",
      "DC Motors",
    ],
    image: "maze",
    thumbnail: "",
    gallery: [],

    shortDescription:
      "An autonomous robotic system that detects walls and obstacles, makes navigation decisions, and solves a maze without continuous human control.",

    overview:
      "The Maze Solver Robot is an autonomous mobile robot designed to navigate through a maze by sensing its surroundings and making movement decisions automatically. The robot uses a microcontroller as its control unit, sensors to detect walls and obstacles, a motor driver to control the motors, and a mechanical chassis for movement. The project demonstrates the integration of sensing, decision-making, and motion control in an autonomous robotic system.",

    objective:
      "The objective of the project is to design and develop a robot capable of navigating a maze autonomously. The robot should detect walls and obstacles, determine the appropriate direction, control its motors accurately, and eventually reach the destination without continuous manual intervention.",

    problem:
      "Autonomous maze navigation requires a robot to understand its surroundings using limited sensor information. The robot must make navigation decisions in real time while dealing with sensor noise, motor speed differences, turning errors, and physical constraints of the robot chassis.",

    solution:
      "The robot uses IR and/or ultrasonic sensors to detect walls and obstacles. The Arduino processes the sensor readings and applies a maze-solving strategy such as wall-following or flood-fill. Based on the calculated direction, the Arduino controls the motor driver, which drives the DC motors. The robot continuously repeats the sensing, decision-making, and movement cycle until the maze is solved.",

    features: [
      "Autonomous wall detection",
      "Obstacle detection",
      "Real-time navigation decisions",
      "Sensor-based motor control",
      "Maze-solving algorithm implementation",
      "Autonomous movement",
      "Motor speed and direction control",
    ],

    hardware: [
      "Arduino Uno / Nano",
      "IR sensors",
      "Ultrasonic sensors",
      "Motor driver",
      "DC motors",
      "Robot chassis",
      "Wheels",
      "Battery / power supply",
    ],

    software: [
      "C++",
      "Arduino IDE",
      "Embedded control logic",
      "Maze-solving algorithm",
    ],

    architecture:
      "The robot follows a sense-process-act architecture. Sensors provide information about the environment. The Arduino processes the sensor readings and determines the next movement. The motor driver receives control signals from the Arduino and drives the motors. This creates a continuous feedback loop between the robot and its environment.",

    workflow: [
      "The robot starts at the designated starting point.",
      "Sensors measure the walls and obstacles around the robot.",
      "The Arduino reads and processes the sensor values.",
      "The navigation algorithm determines the preferred direction.",
      "The Arduino sends control signals to the motor driver.",
      "The motors move the robot in the selected direction.",
      "The robot repeats the sensing and navigation process.",
      "The robot continues until it reaches the destination.",
    ],

    howItWorks:
      "The robot continuously monitors the surrounding walls using its sensors. The sensor data is sent to the Arduino, which determines the current position of nearby walls. Based on the selected maze-solving algorithm, the controller decides whether the robot should move forward, turn left, turn right, or perform another navigation action. The motor driver controls the DC motors according to these commands. The process repeats continuously, allowing the robot to navigate the maze autonomously.",

    algorithms: [
      "Wall-following algorithm",
      "Flood-fill algorithm",
      "Path decision logic",
    ],

    challenges:
      "The major challenges include obtaining accurate sensor readings, reducing sensor noise, maintaining consistent motor speeds, achieving accurate 90-degree turns, and tuning the navigation algorithm. Differences in motor performance can also cause the robot to deviate from its intended path.",

    learning:
      "This project provided practical experience in robotics, embedded programming, sensor interfacing, motor control, autonomous navigation, and algorithm development. It also improved understanding of how hardware and software work together in a mobile robotic system.",

    future:
      "Future improvements include adding wheel encoders for precise movement, implementing a complete flood-fill algorithm, adding mapping functionality, upgrading to LiDAR or camera-based navigation, and optimizing the robot to find the shortest path through the maze.",

    github: "",
    demo: "",
  },

  {
    id: "esp32-oled-assistant",
    title: "ESP32 Smart OLED Assistant",
    category: "embedded",
    tags: ["Embedded", "IoT", "Smart Device"],
    status: "Completed",
    tech: [
      "ESP32",
      "OLED Display",
      "C++",
      "Wi-Fi",
      "DHT11",
      "NTP",
      "Weather API",
    ],
    image: "oled",
    thumbnail: "",
    gallery: [],

    shortDescription:
      "A compact ESP32-based smart desktop assistant that displays time, weather, sensor data, Wi-Fi information, and system information on an OLED display.",

    overview:
      "The ESP32 Smart OLED Assistant is a compact IoT-based desktop information system built around an ESP32 DevKit V1. The device uses a 128×64 SSD1306 OLED display to present multiple information pages, including a digital clock, indoor temperature and humidity, outdoor weather, Wi-Fi status, IP address, system information, and memory usage. A DHT11 sensor provides environmental data, while Wi-Fi connectivity enables online services and time synchronization.",

    objective:
      "The objective is to create a compact and interactive desktop assistant that provides useful information through a small OLED display. The project demonstrates ESP32 Wi-Fi connectivity, sensor integration, API communication, time synchronization, persistent configuration storage, and embedded user-interface design.",

    problem:
      "Important information such as time, weather, environmental conditions, and network status is often spread across different devices. A small always-on information display can provide this data in a single location without requiring users to constantly check a smartphone or computer.",

    solution:
      "The system combines the ESP32 with an SSD1306 OLED display, DHT11 sensor, TTP223 touch sensor, Wi-Fi connectivity, NTP time synchronization, and online weather information. The ESP32 manages multiple display pages and automatically cycles through them. Wi-Fi credentials can be stored using ESP32 Preferences, while a configuration portal can be used when network credentials need to be entered.",

    features: [
      "Digital clock with NTP time synchronization",
      "Indoor temperature monitoring",
      "Indoor humidity monitoring",
      "Outdoor weather information",
      "Weather forecast display",
      "Wi-Fi connection status",
      "IP address display",
      "System information display",
      "Memory usage monitoring",
      "Automatic Wi-Fi reconnection",
      "Persistent Wi-Fi credential storage",
      "Touch-based interaction",
      "Multiple OLED information pages",
    ],

    hardware: [
      "ESP32 DevKit V1",
      "SSD1306 128×64 OLED display",
      "DHT11 temperature and humidity sensor",
      "TTP223 touch sensor",
      "USB power supply",
      "Connecting wires",
    ],

    software: [
      "C++",
      "Arduino IDE",
      "ESP32 Wi-Fi libraries",
      "NTP time synchronization",
      "Weather API",
      "Preferences / NVS",
      "OLED display libraries",
    ],

    architecture:
      "The ESP32 acts as the central controller. The DHT11 provides indoor environmental data, while the OLED displays processed information. Wi-Fi connects the ESP32 to online services for weather data and NTP time synchronization. Preferences storage maintains configuration data between restarts. The touch sensor provides an input mechanism for user interaction.",

    workflow: [
      "The ESP32 powers on and checks saved Wi-Fi credentials.",
      "The device connects to the configured Wi-Fi network.",
      "NTP synchronization obtains the current date and time.",
      "The DHT11 sensor provides indoor temperature and humidity.",
      "The ESP32 retrieves outdoor weather information.",
      "The system processes all available information.",
      "The OLED displays different information pages.",
      "The device continuously monitors the Wi-Fi connection and reconnects when required.",
    ],

    howItWorks:
      "After startup, the ESP32 attempts to connect to the stored Wi-Fi network. Once connected, it synchronizes the current time using NTP and retrieves weather information through an online API. The DHT11 sensor is read periodically to obtain indoor temperature and humidity. The OLED display cycles through multiple pages, showing information such as the clock, indoor conditions, outdoor weather, Wi-Fi status, IP address, system information, and memory usage. The ESP32 also monitors the network connection and attempts to reconnect if the connection is lost.",

    challenges:
      "The major challenges include maintaining reliable Wi-Fi connectivity, handling reconnection logic, managing online API requests, storing credentials securely, presenting multiple information types on a small OLED display, and designing a readable user interface within the limited 128×64 display resolution.",

    learning:
      "This project provided experience in ESP32 development, embedded user-interface design, OLED programming, Wi-Fi communication, API integration, NTP synchronization, sensor interfacing, persistent storage, and network error handling.",

    future:
      "Future improvements include adding more sensors, voice interaction, customizable themes, touch-based navigation, notifications, smart-home integration, a companion mobile application, and additional weather information. The system could also be expanded into a complete IoT home dashboard.",

    github: "",
    demo: "",
  },

  {
    id: "multiplayer-games-platform",
    title: "Multiplayer Games Platform",
    category: "web",
    tags: ["Web Development", "Real-Time Applications"],
    status: "In Progress",
    tech: [
      "React",
      "JavaScript",
      "Node.js",
      "Express",
      "Socket.IO",
      "WebSockets",
    ],
    image: "games",
    thumbnail: "images/projects/brave_screenshot_2vs2multiplayers.netlify.app.png",
    gallery: [],

    shortDescription:
      "A real-time web gaming platform where users can create or join rooms and play simple multiplayer games directly in the browser.",

    overview:
      "The Multiplayer Games Platform is a web-based real-time gaming project designed to allow users to play casual multiplayer games together through browser-based rooms. The platform is designed around a room-based architecture where players can create or join a game using a unique room code. Real-time communication allows player actions and game states to be synchronized between connected clients.",

    objective:
      "The objective is to create an easy-to-use multiplayer gaming platform where users can start playing games directly from a web browser without installing additional software. The project also demonstrates real-time client-server communication and state synchronization.",

    problem:
      "Casual multiplayer games often require users to install applications or use separate gaming platforms. There is a need for a simple browser-based system that allows users to quickly create a room, invite another player, and play together in real time.",

    solution:
      "The platform uses a React frontend and Node.js backend. Socket.IO or WebSockets provide real-time communication between players. When a player creates a room, a unique room code is generated. Another player can join using that code. Game actions are sent to the server, validated, and synchronized with all players in the room.",

    features: [
      "Real-time multiplayer rooms",
      "Room code-based joining",
      "Browser-based gameplay",
      "Real-time game state synchronization",
      "Multiple casual multiplayer games",
      "Responsive interface",
      "Player connection handling",
      "Client-server communication",
    ],

    games: [
      "Tic-Tac-Toe",
      "Connect Four",
      "Dots and Boxes",
      "Rock Paper Scissors",
      "Memory Cards",
    ],

    hardware: [],

    software: [
      "React",
      "JavaScript",
      "Node.js",
      "Express",
      "Socket.IO",
      "WebSockets",
      "Cloudflare Pages",
      "Render / Railway",
    ],

    architecture:
      "The platform follows a client-server architecture. The React frontend provides the user interface and game boards. The Node.js backend manages rooms and game state. Socket.IO provides real-time communication between clients and the server. The frontend can be hosted separately from the backend while communicating through an API and WebSocket connection.",

    workflow: [
      "A player opens the web application.",
      "The player creates a new game room.",
      "The server generates or assigns a room code.",
      "A second player joins using the room code.",
      "Both players connect to the same real-time room.",
      "Players perform actions through the game interface.",
      "Actions are sent to the server.",
      "The server validates and broadcasts the updated game state.",
      "Both players receive the updated state in real time.",
      "The game continues until a winner is determined or the game ends.",
    ],

    howItWorks:
      "When a player creates a room, the backend creates a unique room and waits for another player. The second player joins using the room code. Once both players are connected, the server maintains the current game state. When a player performs an action, the action is transmitted through Socket.IO to the backend. The server validates the action and broadcasts the updated state to the players. Each client then updates its interface to reflect the latest state.",

    challenges:
      "The main challenges include maintaining consistent game state between multiple clients, handling player disconnections, managing WebSocket connections, preventing invalid moves, dealing with network latency, and deploying the frontend and backend separately while maintaining reliable real-time communication.",

    learning:
      "This project provided experience in React development, Node.js backend development, real-time communication, WebSockets, Socket.IO, room management, game-state synchronization, deployment, and full-stack application architecture.",

    future:
      "Future improvements include user accounts, matchmaking, leaderboards, game history, private rooms, spectator mode, chat functionality, additional games, player statistics, improved reconnection handling, and scalable cloud infrastructure.",

    github: "",
    demo: "https://2vs2multiplayers.netlify.app/",
  },

  {
    id: "smart-ride-booking",
    title: "Smart Ride Booking Application",
    category: "mobile",
    tags: ["Mobile Apps", "Flutter", "Real-Time Applications"],
    status: "In Progress",
    tech: [
      "Flutter",
      "Dart",
      "Node.js",
      "Express",
      "Socket.IO",
      "OpenStreetMap",
      "Geolocator",
      "Dio",
    ],
    image: "ride",
    thumbnail: "",
    gallery: [],

    shortDescription:
      "A Flutter-based ride-booking application concept that allows users to request rides, select locations, view maps, and receive real-time ride updates.",

    overview:
      "The Smart Ride Booking Application is a Flutter-based ride-booking application concept inspired by modern ride-hailing platforms. The project focuses primarily on the passenger-side experience and explores the architecture required for ride requests, location selection, map visualization, backend communication, and real-time ride status updates.",

    objective:
      "The objective is to develop a cross-platform mobile application that provides a convenient interface for users to request transportation and monitor their ride. The project also explores real-time communication between the mobile application and backend services.",

    problem:
      "Traditional transportation booking can involve phone calls, manual coordination, and uncertainty about vehicle availability. A digital ride-booking platform can simplify the process by allowing users to request rides, select pickup and destination locations, and monitor ride status from a mobile device.",

    solution:
      "The application uses Flutter and Dart to provide a cross-platform mobile interface. OpenStreetMap-based tools are used for map visualization, while Geolocator provides location-related functionality. Dio handles HTTP API communication, and Socket.IO is used for real-time communication between the application and backend server.",

    features: [
      "Ride request and booking flow",
      "Pickup location selection",
      "Destination selection",
      "Map-based location visualization",
      "Real-time ride status updates",
      "Location services integration",
      "Backend API communication",
      "Socket.IO real-time communication",
      "Cross-platform Flutter application",
    ],

    hardware: [],

    software: [
      "Flutter",
      "Dart",
      "Node.js",
      "Express",
      "Socket.IO",
      "OpenStreetMap",
      "flutter_map",
      "Geolocator",
      "Dio",
    ],

    architecture:
      "The application follows a mobile-client and backend-server architecture. The Flutter application provides the passenger interface. REST APIs handle standard application requests, while Socket.IO manages real-time events. OpenStreetMap provides map data and visualization, while Geolocator provides location information.",

    workflow: [
      "The user opens the mobile application.",
      "The application obtains the user's current location.",
      "The user selects or confirms a pickup location.",
      "The user selects a destination.",
      "The application calculates and sends the ride request to the backend.",
      "The backend processes the request.",
      "Real-time ride status updates are communicated through Socket.IO.",
      "The application displays the current ride status and location information.",
      "The ride continues until the trip is completed.",
    ],

    howItWorks:
      "The passenger opens the application and selects a pickup point and destination using the map interface. The Flutter application sends the ride request to the Node.js backend through an HTTP API. The backend processes the request and manages the ride state. Socket.IO provides real-time communication for ride status and location updates. The mobile application receives these updates and refreshes the interface accordingly.",

    challenges:
      "The major challenges include implementing accurate location tracking, maintaining stable real-time connections, managing application state, integrating OpenStreetMap, handling backend connectivity, and ensuring that location updates are synchronized correctly between the application and server.",

    learning:
      "This project provided experience in Flutter mobile development, Dart programming, REST API integration, real-time Socket.IO communication, map integration, location services, state management, and mobile-backend architecture.",

    future:
      "Future improvements include developing a dedicated driver application, driver matching, fare calculation, payment integration, ratings and reviews, push notifications, ride history, emergency assistance, trip sharing, and improved real-time driver tracking.",

    github: "",
    demo: "",
  },

  {
    id: "hospital-prescription-management",
    title: "Hospital Prescription Management System",
    category: "web",
    tags: ["Web Development", "Healthcare", "Database"],
    status: "Completed",
    tech: [
      "React",
      "Node.js",
      "Express",
      "Database",
      "Authentication",
      "Role-Based Access",
    ],
    image: "hospital",
    thumbnail: "images/projects/brave_screenshot_muruganhospital.netlify.app.png",
    gallery: ["images/projects/Screenshot%202026-08-01%20212041.png","images/projects/Screenshot%202026-08-01%20211939.png"],

    shortDescription:
      "A digital hospital prescription management system designed to register patients, maintain prescription history, and provide role-based access for receptionists and doctors.",

    overview:
      "The Hospital Prescription Management System is a web-based application designed for Dr. Murugasen Hospital to digitally manage patient registration and prescription records. The system separates receptionist and doctor access. Receptionists can register patients and generate admission numbers, while authorized doctors can access complete patient profiles and previous prescription records.",

    objective:
      "The objective is to replace manual patient registration and paper-based prescription management with a structured digital system. The application aims to make patient information easier to search, improve prescription record management, and ensure that sensitive medical information is accessible only to authorized users.",

    problem:
      "Paper-based medical records can be difficult to organize and retrieve. Searching for previous prescriptions may take time, and manual record management can lead to misplaced documents or incomplete information. The system addresses these challenges by providing a centralized digital workflow.",

    solution:
      "The application provides separate workflows for receptionists and doctors. Receptionists register new patients and generate unique admission numbers such as DMH-2026-000001. Doctors authenticate through a secure login and can view patient profiles, access chronological prescription history, and create or update prescriptions.",

    features: [
      "Patient registration",
      "Automatic admission number generation",
      "Search by patient name",
      "Search by phone number",
      "Search by admission number",
      "Secure doctor login",
      "Role-based access control",
      "Patient profile management",
      "Chronological prescription history",
      "Prescription creation and editing",
      "Prescription printing",
      "Prescription PDF download",
    ],

    roles: [
      "Receptionist",
      "Doctor",
    ],

    hardware: [],

    software: [
      "React / Web frontend",
      "Node.js",
      "Express",
      "Database",
      "Authentication system",
      "Role-based access control",
    ],

    architecture:
      "The system follows a role-based web application architecture. The frontend provides separate interfaces for receptionists and doctors. The backend handles authentication, patient records, and prescription operations. The database stores patient information and prescription history. Access control ensures that sensitive prescription records are available only to authorized doctors.",

    workflow: [
      "The receptionist logs into the system.",
      "A new patient is registered.",
      "The system generates a unique admission number.",
      "The patient's basic details are stored in the database.",
      "The receptionist can search patients using available search fields.",
      "The doctor securely logs into the doctor portal.",
      "The doctor searches for the patient.",
      "The doctor views the patient's profile and previous prescriptions.",
      "A new prescription can be created or an existing record can be updated.",
      "The prescription can be printed or downloaded as a PDF.",
    ],

    howItWorks:
      "When a patient visits the hospital, the receptionist registers the patient and the system generates a unique admission number. The patient can later be located using the name, phone number, or admission number. The doctor logs into a protected interface and searches for the patient. The doctor can view the complete patient profile and previous prescriptions in chronological order. After consultation, a new prescription can be entered and stored in the database. The prescription can then be printed or downloaded for the patient.",

    challenges:
      "The main challenges include implementing role-based access control, protecting prescription information, maintaining accurate patient records, validating registration data, ensuring secure authentication, and preventing unauthorized access to sensitive medical information.",

    learning:
      "This project provided experience in full-stack web application development, database management, authentication, role-based authorization, CRUD operations, search functionality, document generation, and healthcare workflow design.",

    future:
      "Future improvements include online appointment booking, patient login, pharmacy integration, digital medical reports, automated notifications, prescription analytics, doctor scheduling, patient history dashboards, and integration with a pharmacy billing system.",

    github: "",
    demo: "https://muruganhospital.netlify.app/index.html",
  },

  {
    id: "pharmacy-billing-system",
    title: "Pharmacy Billing System",
    category: "web",
    tags: ["Web Development", "Billing", "Inventory Management"],
    status: "Completed",
    tech: [
      "Web Application",
      "SQLite",
      "Database",
      "Billing",
      "Inventory Management",
    ],
    image: "pharmacy",
    thumbnail: "images/projects/brave_screenshot_muruganhospital.netlify.app.png",
    gallery: ["images/projects/Screenshot%202026-08-01%20211939.png"],

    shortDescription:
      "A pharmacy billing and inventory management system designed to simplify medicine stock tracking, bill generation, and sales management.",

    overview:
      "The Pharmacy Billing System is designed to help pharmacies manage medicine inventory and generate customer bills efficiently. The system focuses on maintaining a local database of medicines, tracking available stock, generating bills, and maintaining sales records.",

    objective:
      "The objective is to automate common pharmacy operations such as medicine inventory management, billing, and sales tracking. The system is designed to reduce manual calculations, improve stock accuracy, and simplify day-to-day pharmacy operations.",

    problem:
      "Manual pharmacy billing and inventory management can be time-consuming and may result in calculation errors, incorrect stock counts, and difficulty tracking sales. A digital billing system can automate these processes and provide better visibility into inventory.",

    solution:
      "The system maintains a database containing medicine information such as name, type, quantity, and rate. Pharmacy staff can select medicines while preparing a bill, specify quantities, and automatically calculate the total. Once the sale is completed, the system records the transaction and updates the stock quantity.",

    features: [
      "Medicine inventory management",
      "Medicine name and rate database",
      "Medicine stock tracking",
      "Automated bill calculation",
      "Automated bill generation",
      "Automatic stock quantity updates",
      "Sales record management",
      "Medicine search",
      "Local database storage",
    ],

    hardware: [],

    software: [
      "Windows desktop application",
      "SQLite database",
      "Billing interface",
      "Inventory management module",
      "Database management system",
    ],

    architecture:
      "The application uses a local database architecture suitable for pharmacy operations. The billing interface communicates with the local SQLite database to retrieve medicine information, update stock, and store sales records. This approach allows the application to operate locally without requiring a dedicated external database server.",

    workflow: [
      "The pharmacy staff adds medicines to the inventory.",
      "Medicine names, rates, and stock quantities are stored in the database.",
      "A customer purchases one or more medicines.",
      "The staff searches and selects the required medicines.",
      "The required quantities are entered.",
      "The system calculates the total bill.",
      "The sale is recorded.",
      "The stock quantity is automatically reduced.",
      "The final bill can be generated for the customer.",
    ],

    howItWorks:
      "The pharmacy first maintains a database of available medicines. When a customer purchases a medicine, the staff searches for the product and selects the required quantity. The system retrieves the medicine rate and calculates the total amount. After the transaction is confirmed, the system records the sale and updates the remaining inventory. This process helps maintain accurate stock records while reducing manual billing calculations.",

    challenges:
      "The major challenges include maintaining accurate stock quantities, handling medicine database updates, preventing incorrect billing calculations, managing local database records, and designing an interface that allows pharmacy staff to complete billing operations quickly.",

    learning:
      "This project provided experience in database-driven application development, inventory management, billing logic, SQLite database integration, CRUD operations, data validation, and desktop application workflows.",

    future:
      "Future improvements include barcode scanning, medicine expiry-date tracking, low-stock alerts, GST calculation, printable invoices, supplier management, sales analytics, database backup and restore, multi-user support, and integration with the hospital prescription management system.",

    github: "",
    demo: "https://muruganhospital.netlify.app/index.html",
  },

  {
    id: "predictive-maintenance-system",
    title: "Predictive Maintenance System",
    category: "aiml",
    tags: ["AI/ML", "Automation", "Predictive Maintenance"],
    status: "Concept",
    tech: [
      "Python",
      "Machine Learning",
      "LSTM",
      "Sensors",
      "ACS712",
      "IoT",
    ],
    image: "predictive",
    thumbnail: "",
    gallery: [],

    shortDescription:
      "A predictive maintenance concept that combines industrial sensor data and machine learning to identify abnormal equipment behavior and predict potential failures.",

    overview:
      "The Predictive Maintenance System is an industrial automation and machine-learning concept focused on monitoring equipment health using sensor data. The system can collect parameters such as motor current, vibration, temperature, and other operating conditions. Machine-learning techniques can then be used to analyze time-series data and identify abnormal behavior or potential equipment failures.",

    objective:
      "The objective is to explore how sensor data and machine learning can be combined to move from reactive maintenance toward predictive maintenance. By identifying abnormal patterns before equipment failure, maintenance activities can potentially be planned more effectively.",

    problem:
      "Unexpected equipment failures can cause production downtime, maintenance costs, and reduced productivity. Reactive maintenance only responds after a failure occurs, while predictive maintenance attempts to identify early warning signs and estimate potential equipment problems before a major failure occurs.",

    solution:
      "The proposed system collects real-time industrial sensor data and uses machine-learning techniques to analyze equipment behavior. An ACS712 sensor can monitor motor current, while vibration and temperature sensors provide additional condition-monitoring information. The collected time-series data can be processed and analyzed using machine-learning models, including LSTM networks, to identify abnormal operating patterns and predict potential failures.",

    features: [
      "Industrial sensor data collection",
      "Motor current monitoring",
      "Vibration monitoring",
      "Temperature monitoring",
      "Condition monitoring",
      "Anomaly detection",
      "Machine-learning-based failure prediction",
      "Time-series analysis",
      "Predictive maintenance alerts",
    ],

    hardware: [
      "ESP32 / Microcontroller",
      "ACS712 current sensor",
      "Vibration sensor",
      "Temperature sensor",
      "Industrial equipment under monitoring",
    ],

    software: [
      "Python",
      "Machine Learning",
      "LSTM",
      "TensorFlow / Keras",
      "Data analysis tools",
      "Data visualization tools",
    ],

    architecture:
      "The system follows a sensor-to-machine-learning architecture. Sensors collect real-time equipment data and transmit it to a processing system. The data is stored and prepared for analysis. A machine-learning model analyzes historical and real-time patterns. The output of the model can be used to identify abnormal conditions and generate maintenance alerts.",

    workflow: [
      "Sensors are installed on the equipment being monitored.",
      "Current, vibration, temperature, and other parameters are collected.",
      "The sensor data is transmitted to a processing system.",
      "The collected data is stored for analysis.",
      "The raw data is cleaned and preprocessed.",
      "Relevant features are extracted from the sensor data.",
      "The machine-learning model analyzes the data.",
      "The model identifies abnormal patterns or predicts potential failure.",
      "A maintenance alert can be generated when abnormal behavior is detected.",
    ],

    howItWorks:
      "Sensors continuously monitor the operating condition of industrial equipment. The ACS712 can provide motor current information, while additional sensors can measure vibration and temperature. The collected data is transmitted to a processing system and stored as time-series information. After preprocessing, the data is provided to a machine-learning model. An LSTM model can be explored for analyzing sequential patterns in the data. When the model detects patterns associated with abnormal operation or potential failure, the system can generate an alert for maintenance personnel.",

    challenges:
      "The main challenges include collecting sufficient high-quality sensor data, obtaining accurately labeled failure datasets, dealing with sensor noise, selecting meaningful features, achieving reliable model accuracy, and deploying machine-learning models for real-time industrial monitoring.",

    learning:
      "This project provides experience in industrial condition monitoring, sensor data acquisition, Python programming, data preprocessing, machine learning, time-series analysis, LSTM models, and predictive maintenance concepts.",

    future:
      "Future improvements include deploying the system on real industrial machines, integrating additional sensors, developing a real-time monitoring dashboard, implementing automated model retraining, adding edge AI capabilities, improving failure prediction accuracy, and integrating alerts with industrial automation systems.",

    github: "",
    demo: "",
  },

  {
    id: "sinthana",
    title: "Sinthana சிந்தனை — Live Classroom Polling Platform",
    category: "web",
    tags: ["Web Development", "Real-Time Applications", "Education Technology"],
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
    thumbnail: "images/projects/Screenshot%202026-08-01%20211532.png",
    gallery: ["images/projects/Screenshot%202026-08-01%20211702.png"],

    shortDescription:
      "A real-time, Mentimeter-style classroom polling platform where hosts run interactive questions while students join using a code or QR and answer instantly from their devices.",

    overview:
      "\"Sinthana\" (சிந்தனை, Tamil for \"thought\") is a full-stack live audience-response platform designed for classrooms and interactive sessions. The application allows hosts to create live sessions and interactive questions while students join using a 6-digit code or QR code. The platform supports multiple question formats and provides real-time results through Socket.IO. Google Sign-In through Firebase Authentication allows responses to be associated with named participants.",

    objective:
      "The objective of Sinthana is to create a complete real-time classroom interaction platform that allows teachers or hosts to engage students through live questions, polls, quizzes, and feedback. The project aims to combine authentication, real-time communication, scoring, visualization, and database management into a single full-stack application.",

    problem:
      "Classroom engagement can be difficult when students are passive participants. Existing audience-response platforms can provide interactive polling, but many are closed or paid services. The goal of Sinthana was to develop a complete live-polling platform from scratch where a host can create questions, students can respond instantly, and results can be displayed in real time.",

    solution:
      "Hosts create a session and receive a 6-digit join code and QR code. Students authenticate using Google and join the session. Questions are broadcast through Socket.IO, and students submit their responses through the client application. The server validates, scores, and stores responses in PostgreSQL. Live results are transmitted back to the host and displayed using charts, progress indicators, word clouds, and other visualizations.",

    features: [
      "Multiple-choice questions",
      "Poll questions",
      "True/false questions",
      "Rating questions",
      "Word cloud questions",
      "Q&A questions",
      "Google Sign-In using Firebase Authentication",
      "6-digit session joining code",
      "QR-based session joining",
      "Real-time question broadcasting",
      "Real-time answer synchronization",
      "Server-side countdown timer enforcement",
      "Speed and accuracy scoring",
      "Host-only leaderboard",
      "Live answered participant progress",
      "CSV response export",
      "Role-based access control",
      "Student email privacy",
    ],

    questionTypes: [
      "Multiple Choice",
      "Poll",
      "True / False",
      "Rating",
      "Word Cloud",
      "Q&A",
    ],

    hardware: [],

    software: [
      "React 18",
      "Vite",
      "Tailwind CSS",
      "Recharts",
      "Socket.IO Client",
      "Socket.IO Server",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Firebase Authentication",
      "firebase-admin",
    ],

    architecture:
      "Sinthana follows a full-stack real-time web application architecture. The React and Vite frontend provides interfaces for hosts and students. The Node.js and Express backend provides REST APIs for application operations. Socket.IO handles real-time communication between clients and server. PostgreSQL stores users, sessions, questions, participants, and answers. Firebase Authentication provides Google Sign-In, while firebase-admin verifies authentication tokens on the server.",

    workflow: [
      "The host signs into the platform.",
      "The host creates a new live session.",
      "The server generates a 6-digit join code.",
      "A QR code is generated for convenient joining.",
      "Students sign in using Google Authentication.",
      "Students join the session using the code or QR code.",
      "The host opens a question.",
      "The question is broadcast to all connected students through Socket.IO.",
      "Students submit their answers.",
      "The server validates and stores the responses.",
      "The server calculates scores when applicable.",
      "Live results are sent to the host.",
      "The host views charts and participant progress.",
      "The final leaderboard and response data are available after the session.",
    ],

    howItWorks:
      "A host creates a session and adds questions through the dashboard. The server assigns a unique join code and creates Socket.IO rooms for the session and host-only events. Students authenticate with Google and join using the code or QR code. When the host opens a question, it is broadcast to all connected students. Students submit their answers, which are validated by the server and stored against their authenticated user ID. For scored questions, the server calculates points based on correctness and response time. Results are transmitted back to the host in real time, updating charts and the live progress indicator. At the end of the session, the platform can calculate participant standings and export response data.",

    scoringSystem:
      "For questions with a marked correct answer, the platform uses speed and accuracy-based scoring. Correct answers receive points based on response speed, with the score decreasing as the available response time is consumed. This encourages students to answer both correctly and quickly.",

    accessControl:
      "The platform separates host and student permissions. The host can view the participant roster, inspect named responses, access the leaderboard, and export session data. Students can participate in the session but cannot access private information belonging to other participants. Student email addresses are protected from other students.",

    challenges:
      "One of the major challenges was enforcing question timers on the server rather than relying only on the client. This helps maintain fairness when students have slow or unstable connections. Another challenge was connecting each answer to a specific authenticated participant while preventing student emails from being exposed to other students. Implementing role-based access control and handling browser Cross-Origin-Opener-Policy behavior affecting Firebase Google Sign-In popups were also important technical challenges.",

    learning:
      "This project provided extensive experience in full-stack web development, React, Vite, Tailwind CSS, Node.js, Express, PostgreSQL, Firebase Authentication, Socket.IO, real-time application architecture, REST APIs, database design, authentication, authorization, data visualization, scoring systems, and deployment-related problem solving.",

    future:
      "Future improvements include adding session renaming, drag-and-drop question reordering, reconnect and resume support for students who refresh during an active question, rate limiting for join and answer endpoints, XLSX export with separate sheets for each question, improved analytics, question banks, reusable quizzes, teacher dashboards, and advanced classroom performance reports.",

    github: "https://github.com/shivasharukkumar/mentimeter-clone-1",
    demo: "https://sinthana.pages.dev/",
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
