 
export const projectsData = [
  {
    id: 1,
    title: "AI Cybersecurity Dashboard",
    slug: "ai-cybersecurity-dashboard",
    category: "AI & Machine Learning",
    shortDescription: "A conceptual dashboard for monitoring network anomalies using machine learning.",
    overview: "This project explores the integration of machine learning models into a real-time network monitoring dashboard. It aims to detect unusual traffic patterns.",
    problem: "Traditional firewalls struggle to detect zero-day attacks. There is a need for intelligent systems that can identify anomalies based on behavior.",
    solution: "Built a Python backend using Scikit-Learn to analyze network logs, paired with a React frontend to visualize threat levels.",
    features: [
      "Real-time traffic visualization",
      "Anomaly detection alerts",
      "Historical data logging",
      "Role-based access control"
    ],
    technologies: ["Python", "React", "Machine Learning", "Django REST", "Chart.js"],
    images: [], // Add image paths here later
    status: "In Development",
    featured: true,
    caseStudy: true,
    liveUrl: null,
    githubUrl: "https://github.com/yourusername/project",
    documentationUrl: null,
    completedAt: "2024-01-15"
  },
  {
    id: 2,
    title: "Inventory Management System",
    slug: "inventory-management-system",
    category: "Business Systems",
    shortDescription: "A web application to track stock levels, sales, and supplier information.",
    overview: "A comprehensive system designed for small retail businesses to manage their stock efficiently.",
    problem: "Small businesses often rely on spreadsheets which lead to data loss and inaccurate stock counts.",
    solution: "Created a centralized Django application with a React frontend for a seamless user experience.",
    features: [
      "Stock level tracking",
      "Sales recording",
      "Low-stock alerts",
      "Supplier management"
    ],
    technologies: ["Django", "React", "PostgreSQL", "REST API"],
    images: [],
    status: "Completed",
    featured: false,
    caseStudy: false,
    liveUrl: "https://demo.example.com",
    githubUrl: "https://github.com/yourusername/inventory",
    documentationUrl: null,
    completedAt: "2023-11-20"
  },
  {
    id: 3,
    title: "Trading Journal App",
    slug: "trading-journal-app",
    category: "Web Applications",
    shortDescription: "A personal tool to log trades, analyze performance, and track market trends.",
    overview: "A specialized journal for forex and crypto traders to log their daily trades and emotions.",
    problem: "Traders often forget why they entered a trade, leading to repeated mistakes.",
    solution: "Developed a React SPA with local storage integration (later moved to Firebase) to track metrics.",
    features: [
      "Trade logging",
      "Profit/Loss calculation",
      "Emotional tagging",
      "Performance charts"
    ],
    technologies: ["React", "JavaScript", "Chart.js", "Firebase"],
    images: [],
    status: "Prototype",
    featured: false,
    caseStudy: false,
    liveUrl: null,
    githubUrl: null,
    documentationUrl: null,
    completedAt: "2024-02-10"
  }
];

export const categories = ["All Projects", "Websites", "Web Applications", "Business Systems", "AI & Machine Learning", "Cybersecurity", "Mobile Applications", "Other Projects"];