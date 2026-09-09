export const site = {
  name: "Infinity Techies",
  tagline: "Ideas Today. A Brighter Tomorrow.",
  positioning: "Technology that moves ideas forward.",
  description:
    "Infinity Techies designs, engineers and delivers digital products, software platforms and AI-powered systems for businesses, startups and organizations — in India and internationally.",
  url: "https://infinitytechies.com",
  email: "hello@infinitytechies.com",
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "",
};

export const navLinks = [
  { href: "/solutions", label: "Solutions" },
  { href: "/industries", label: "Industries" },
  { href: "/work", label: "Work" },
  { href: "/company", label: "Company" },
];

export type Capability = {
  title: string;
  description: string;
};

export const capabilities: Capability[] = [
  {
    title: "AI & Intelligent Systems",
    description:
      "AI applications, machine learning, intelligent automation and AI-powered workflows.",
  },
  {
    title: "Software Engineering",
    description: "Scalable web platforms, backend systems, APIs and enterprise software.",
  },
  {
    title: "Digital Products",
    description: "Product strategy, UX/UI, architecture, development and deployment.",
  },
  {
    title: "Data & Analytics",
    description: "Data platforms, analytics, dashboards and intelligent decision systems.",
  },
  {
    title: "Web & Mobile",
    description: "High-performance websites and mobile applications.",
  },
  {
    title: "Cloud & DevOps",
    description: "Cloud architecture, deployment, CI/CD, infrastructure and reliability.",
  },
];

export type ProblemSolution = {
  problem: string;
  solution: string;
};

export const problemSolutions: ProblemSolution[] = [
  {
    problem: "Need to automate a manual process?",
    solution: "We build systems that remove repetitive work.",
  },
  {
    problem: "Have an idea for a digital product?",
    solution: "We turn concepts into working products.",
  },
  {
    problem: "Want to integrate AI into your business?",
    solution: "We design practical AI-powered workflows.",
  },
  {
    problem: "Need reliable engineering capability?",
    solution: "We provide technical expertise from concept to deployment.",
  },
];

export type FeaturedProject = {
  slug: string;
  name: string;
  tagline: string;
  problem: string;
  solution: string;
  technology: string[];
  outcome?: string;
};

// Only real, verifiable project data. No fabricated clients or metrics —
// add `outcome` only once a project has a real, confirmed result.
export const featuredProjects: FeaturedProject[] = [
  {
    slug: "skillsync",
    name: "SkillSync",
    tagline: "AI-powered skill analysis platform.",
    problem:
      "Individuals and teams lack a clear, structured view of skill gaps against real role requirements.",
    solution:
      "An AI-driven analysis engine that maps existing skills against target roles and generates a structured development path.",
    technology: ["Python", "Machine Learning", "React", "Node.js"],
  },
  {
    slug: "crop-insurance-analytics",
    name: "Crop Insurance Analytics",
    tagline: "Real-time crop image analytics for insurance assessment.",
    problem:
      "Manual crop-damage assessment for insurance claims is slow and inconsistent across large agricultural regions.",
    solution:
      "Computer-vision pipelines that assess crop imagery automatically, giving faster, more consistent inputs for claim validation.",
    technology: ["React", "Node.js", "TensorFlow", "OpenCV", "FastAPI", "AWS"],
  },
  {
    slug: "delivery-delay-prediction",
    name: "Delivery Delay Prediction",
    tagline: "Predictive model for e-commerce logistics.",
    problem:
      "Delivery delays are typically discovered after they happen, leaving no room to intervene.",
    solution:
      "A predictive model trained on order, logistics and external data to flag likely delays before they occur.",
    technology: ["Python", "Pandas", "Scikit-learn", "FastAPI", "MLflow", "Docker"],
  },
];

export const industries = [
  "FinTech",
  "Healthcare",
  "Education",
  "Retail",
  "Startups",
  "Professional Services",
];

export type ProcessStage = {
  number: string;
  title: string;
  description: string;
};

export const processStages: ProcessStage[] = [
  { number: "01", title: "Discover", description: "Understand the business problem." },
  { number: "02", title: "Define", description: "Create the technical strategy." },
  { number: "03", title: "Design", description: "Design the experience and architecture." },
  { number: "04", title: "Build", description: "Engineer the solution." },
  { number: "05", title: "Launch", description: "Deploy, measure and improve." },
];

export const whyUs = [
  {
    title: "Flexible engagement",
    description: "Work with us project-by-project, or as an extension of your team.",
  },
  {
    title: "Engineering-first approach",
    description: "Every decision is grounded in what's technically sound, not just what looks good.",
  },
  {
    title: "Transparent collaboration",
    description: "Clear communication and visibility into progress, from kickoff to launch.",
  },
  {
    title: "Scalable architecture",
    description: "Systems built to handle growth, not just the first version.",
  },
  {
    title: "Global delivery",
    description: "We work with businesses in India and internationally, across time zones.",
  },
];

export const studentServices = [
  "Project development",
  "Technical mentorship",
  "Documentation",
  "Deployment",
  "Presentation support",
  "Viva guidance",
];

export const footerNav = {
  solutions: [
    { label: "AI & Automation", href: "/solutions#ai" },
    { label: "Software Engineering", href: "/solutions#engineering" },
    { label: "Digital Products", href: "/solutions#products" },
    { label: "Data & Analytics", href: "/solutions#data" },
    { label: "Web & Mobile", href: "/solutions#web-mobile" },
    { label: "Cloud & DevOps", href: "/solutions#cloud" },
  ],
  company: [
    { label: "About", href: "/company" },
    { label: "Our Work", href: "/work" },
    { label: "Careers", href: "/company#careers" },
    { label: "Contact", href: "/contact" },
  ],
  students: [
    { label: "Student Solutions", href: "/company#students" },
    { label: "Project Support", href: "/contact?type=student" },
  ],
  social: [
    { label: "LinkedIn", href: "https://linkedin.com" },
    { label: "Instagram", href: "https://instagram.com" },
    { label: "GitHub", href: "https://github.com" },
  ],
};
