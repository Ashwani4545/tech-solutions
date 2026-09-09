export const site = {
  name: "Infinity Tech Nexus",
  tagline: "Practical technology, built by people who ship.",
  description:
    "Infinity Tech Nexus builds web platforms, apps, and data products for businesses, and pairs students with real projects and mentorship.",
  url: "https://infinitytechnexus.com",
  email: "contact@infinitytechnexus.com",
  responseTime: "Within 48 hours",
};

export const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const stats = [
  { value: 20, suffix: "+", label: "Projects delivered" },
  { value: 15, suffix: "+", label: "Clients & partners" },
  { value: 10, suffix: "+", label: "Technologies in active use" },
  { value: 48, suffix: "h", label: "Typical response time" },
];

export type Service = {
  title: string;
  description: string;
  tech?: string[];
};

export const businessServices: Service[] = [
  {
    title: "Web development",
    description:
      "Responsive, SEO-ready websites and web apps deployed on modern, scalable infrastructure.",
  },
  {
    title: "App development",
    description:
      "Custom mobile and web applications for iOS, Android, and cross-platform delivery.",
  },
  {
    title: "DevOps",
    description:
      "CI/CD pipelines and infrastructure automation for reliable, repeatable deployments.",
  },
  {
    title: "IoT solutions",
    description:
      "Connected devices and monitoring systems for automation-driven operations.",
  },
  {
    title: "Data & automation",
    description:
      "Analytics dashboards, workflow automation, and AI-assisted decision tools.",
  },
  {
    title: "Branding",
    description:
      "Logos, visual identity systems, and design language that hold up across every surface.",
  },
];

export const softwareServices: Service[] = [
  {
    title: "Web development",
    description: "Responsive, fast, SEO-optimized web platforms with server-side rendering.",
    tech: ["React", "Next.js", "Node.js", "TypeScript", "PostgreSQL"],
  },
  {
    title: "App development",
    description: "Cross-platform mobile apps with native performance from a single codebase.",
    tech: ["React Native", "Flutter", "Firebase", "Swift", "Kotlin"],
  },
  {
    title: "SaaS solutions",
    description: "Full-stack platforms with multi-tenant architecture and subscription billing.",
    tech: ["Next.js", "Stripe", "AWS", "Docker", "Redis"],
  },
  {
    title: "API development",
    description: "REST and GraphQL APIs on a scalable microservices architecture.",
    tech: ["FastAPI", "GraphQL", "Node.js", "Docker", "JWT"],
  },
  {
    title: "UI/UX design",
    description: "User research, prototyping, and interfaces built to be used, not just seen.",
    tech: ["Figma", "Adobe XD", "Prototyping", "User research"],
  },
];

export const studentServices: Service[] = [
  {
    title: "Academic project assistance",
    description: "End-to-end guidance — ideation, development, documentation, and viva prep.",
  },
  {
    title: "Mentorship",
    description: "Tech stack guidance and architecture decisions from people who build for a living.",
  },
  {
    title: "Portfolio building",
    description: "GitHub projects, deployment help, and resume-ready work recruiters actually look at.",
  },
  {
    title: "Skill development",
    description: "Senior guidance paired with real project work, not tutorials.",
  },
  {
    title: "Content writing",
    description: "Technical writing for blogs, documentation, and product marketing.",
  },
];

export type ProjectStatus = "Ongoing" | "Completed";

export type DomainProject = {
  id: string;
  status: ProjectStatus;
  code: string;
  title: string;
  description: string;
  tech: string[];
};

export type ProjectDomain = {
  slug: "web" | "iot" | "data-science";
  title: string;
  shortLabel: string;
  summary: string;
  ongoing: DomainProject[];
  completed: DomainProject[];
};

export const projectDomains: ProjectDomain[] = [
  {
    slug: "web",
    title: "Web Development",
    shortLabel: "Web",
    summary: "Modern websites and web applications, from marketing sites to full platforms.",
    ongoing: [
      {
        id: "web-ongoing-1",
        status: "Ongoing",
        code: "WEB-2026-001",
        title: "AI-based real-time crop image analytics for crop insurance (PMFBY)",
        description:
          "Real-time crop image analytics for PMFBY insurance assessment — automated damage detection, faster claim validation, and data-driven risk evaluation.",
        tech: ["React", "Node.js", "MongoDB", "TensorFlow", "OpenCV", "FastAPI", "AWS S3", "Docker"],
      },
      {
        id: "web-ongoing-2",
        status: "Ongoing",
        code: "WEB-2026-002",
        title: "LLM-based sales predictive model",
        description:
          "AI-driven sales forecasting using large language models to predict trends and customer behavior.",
        tech: ["Python", "TensorFlow", "Scikit-learn", "LLM", "PostgreSQL", "AWS"],
      },
      {
        id: "web-ongoing-3",
        status: "Ongoing",
        code: "WEB-2026-003",
        title: "Real-time emergency response system",
        description:
          "Incident tracking, location-based dispatch, and live coordination for emergency response teams.",
        tech: ["Vue.js", "Express", "MySQL"],
      },
    ],
    completed: [
      {
        id: "web-completed-1",
        status: "Completed",
        code: "WEB-2025-015",
        title: "Tourism website (KashiDarshanam)",
        description:
          "A tourism portal showcasing religious and cultural heritage sites in Varanasi, with booking features.",
        tech: ["HTML5", "CSS3", "JavaScript"],
      },
      {
        id: "web-completed-2",
        status: "Completed",
        code: "WEB-2025-012",
        title: "Courier management system",
        description:
          "Real-time package tracking, automated dispatch routing, delivery notifications, and a customer portal.",
        tech: ["PHP", "HTML", "CSS", "JavaScript", "MySQL"],
      },
      {
        id: "web-completed-3",
        status: "Completed",
        code: "WEB-2025-008",
        title: "Recruitment management system",
        description: "Job postings, applicant tracking, and interview scheduling in one system.",
        tech: ["PHP", "MySQL", "Bootstrap", "jQuery", "AJAX"],
      },
    ],
  },
  {
    slug: "iot",
    title: "Internet of Things",
    shortLabel: "IoT",
    summary: "Smart devices and connected systems for monitoring and automation.",
    ongoing: [
      {
        id: "iot-ongoing-1",
        status: "Ongoing",
        code: "IOT-2026-001",
        title: "Smart agriculture monitoring system",
        description:
          "Crop monitoring with soil sensors, weather tracking, and automated irrigation control.",
        tech: ["Arduino", "ESP32", "MQTT"],
      },
      {
        id: "iot-ongoing-2",
        status: "Ongoing",
        code: "IOT-2026-002",
        title: "Industrial equipment monitoring",
        description:
          "Real-time monitoring for industrial machinery with predictive maintenance alerts and analytics.",
        tech: ["Raspberry Pi", "LoRaWAN", "AWS IoT"],
      },
      {
        id: "iot-ongoing-3",
        status: "Ongoing",
        code: "IOT-2026-003",
        title: "Smart city traffic management",
        description:
          "Intelligent traffic signal control using real-time vehicle detection and flow optimization.",
        tech: ["OpenCV", "TensorFlow", "Edge computing"],
      },
    ],
    completed: [
      {
        id: "iot-completed-1",
        status: "Completed",
        code: "IOT-2025-012",
        title: "Smart home automation system",
        description: "Home automation with voice control, a mobile app, and energy monitoring.",
        tech: ["ESP8266", "Node-RED", "MQTT"],
      },
      {
        id: "iot-completed-2",
        status: "Completed",
        code: "IOT-2025-009",
        title: "Environmental monitoring network",
        description:
          "A distributed sensor network for air quality, temperature, and humidity across urban areas.",
        tech: ["Arduino", "ZigBee", "ThingsBoard"],
      },
      {
        id: "iot-completed-3",
        status: "Completed",
        code: "IOT-2025-006",
        title: "Fleet GPS tracking system",
        description:
          "Real-time vehicle tracking with route optimization, driver behavior monitoring, and fuel management.",
        tech: ["GPS module", "GSM", "Google Maps API"],
      },
    ],
  },
  {
    slug: "data-science",
    title: "Data Science — ML & AI",
    shortLabel: "Data Science",
    summary: "Machine learning and analytics solutions that turn data into decisions.",
    ongoing: [
      {
        id: "ds-ongoing-1",
        status: "Ongoing",
        code: "DS-2026-001",
        title: "LLM-based predictive model for investors",
        description:
          "A model predicting whether an investor should invest, using historical data and behavioral patterns.",
        tech: ["Python", "TensorFlow", "Pandas", "Scikit-learn", "FastAPI", "Docker", "LangChain", "AWS S3"],
      },
      {
        id: "ds-ongoing-2",
        status: "Ongoing",
        code: "DS-2026-002",
        title: "Event-driven customer experience & retention intelligence platform",
        description:
          "Combines delivery delay prediction, customer segmentation, churn forecasting, and automated business actions.",
        tech: ["PyTorch", "OpenCV", "CNN"],
      },
      {
        id: "ds-ongoing-3",
        status: "Ongoing",
        code: "DS-2026-003",
        title: "Energy consumption optimization with IoT and ML",
        description:
          "Learns normal energy usage from historical sensor data, then flags abnormal consumption and faulty devices in real time.",
        tech: ["Transformers", "BERT", "Hugging Face"],
      },
    ],
    completed: [
      {
        id: "ds-completed-1",
        status: "Completed",
        code: "DS-2025-018",
        title: "E-commerce product delivery delay prediction",
        description: "Predicts delivery delays from order, logistics, and external factors.",
        tech: ["Python", "Pandas", "NumPy", "Scikit-learn", "FastAPI", "MLflow", "Docker"],
      },
      {
        id: "ds-completed-2",
        status: "Completed",
        code: "DS-2025-014",
        title: "Car accident analysis by clustering",
        description:
          "An automated clustering pipeline that groups accident data into meaningful clusters and updates continuously as new data arrives.",
        tech: ["Python", "Pandas", "Scikit-learn", "Docker"],
      },
      {
        id: "ds-completed-3",
        status: "Completed",
        code: "DS-2025-010",
        title: "Sentiment feedback on regional news media",
        description: "Real-time sentiment analysis for tracking brand perception across social platforms.",
        tech: ["NLTK", "Twitter API", "REST APIs", "Plotly", "Docker"],
      },
    ],
  },
];

export type PortfolioCategory = "fullstack" | "datascience" | "automation" | "ecommerce" | "mobile";

export type PortfolioItem = {
  tag: string;
  category: PortfolioCategory;
  title: string;
  description: string;
  tech: string;
  outcome: string;
  link: string;
};

export const portfolioItems: PortfolioItem[] = [
  {
    tag: "Full-stack",
    category: "fullstack",
    title: "Project Marketplace",
    description:
      "A platform connecting students with real projects — role-based access, payments, and analytics dashboards.",
    tech: "Next.js, Node, PostgreSQL, Stripe",
    outcome: "Reduced onboarding friction and improved delivery tracking.",
    link: "Demo & code on request",
  },
  {
    tag: "Data Science",
    category: "datascience",
    title: "Demand Forecasting",
    description:
      "Time-series models forecasting demand for multi-region inventory, with alerts and reporting for ops teams.",
    tech: "Python, Prophet, Pandas, Airflow",
    outcome: "Improved stock accuracy and reduced overage.",
    link: "Notebooks & deck on request",
  },
  {
    tag: "Automation",
    category: "automation",
    title: "Workflow Automation",
    description:
      "Automated data ingestion and QA pipelines with alerting, cutting manual effort for weekly ops.",
    tech: "Node, Python, Airflow, Slack webhooks",
    outcome: "Faster reporting cycles and fewer defects.",
    link: "Demo available",
  },
  {
    tag: "E-Commerce",
    category: "ecommerce",
    title: "Online Store Platform",
    description:
      "A complete e-commerce solution with inventory management, payment processing, and customer analytics.",
    tech: "React, Express, MongoDB, PayPal API",
    outcome: "Increased sales conversion and customer retention.",
    link: "Live demo available",
  },
  {
    tag: "Mobile App",
    category: "mobile",
    title: "Fitness Tracker",
    description:
      "A cross-platform app for tracking workouts, nutrition, and health metrics, with social features.",
    tech: "React Native, Firebase, Node.js",
    outcome: "10k+ downloads with a 4.5-star rating.",
    link: "Download on stores",
  },
  {
    tag: "Dashboard",
    category: "datascience",
    title: "Analytics Dashboard",
    description:
      "A real-time business intelligence dashboard with custom visualizations and automated reporting.",
    tech: "Vue.js, D3.js, Python, PostgreSQL",
    outcome: "Reduced reporting time by 70%.",
    link: "Case study available",
  },
];

export const testimonials = [
  {
    quote:
      "Infinity Tech Nexus delivered our web platform on time with premium quality. Their attention to detail and modern design approach set them apart.",
    name: "Rahul Sharma",
    role: "Startup Founder",
  },
  {
    quote:
      "As a student, the mentorship and project support I received was invaluable. I built a real portfolio and landed my first freelance project.",
    name: "Priya Patel",
    role: "Computer Science Student",
  },
  {
    quote:
      "Their data science team built a predictive model that improved our delivery accuracy by 35%. Highly professional and technically excellent.",
    name: "Amit Gupta",
    role: "E-Commerce Director",
  },
];
