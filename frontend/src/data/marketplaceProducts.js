 
// --- CATEGORIES ---
export const marketplaceCategories = [
  { id: 'ai', name: 'AI Models & Tools', slug: 'ai-models-tools', icon: 'brain', count: 2 },
  { id: 'books', name: 'Books & eBooks', slug: 'books-ebooks', icon: 'book', count: 1 },
  { id: 'courses', name: 'Online Courses', slug: 'online-courses', icon: 'graduation', count: 1 },
  { id: 'software', name: 'Software & Apps', slug: 'software-apps', icon: 'server', count: 1 },
  { id: 'templates', name: 'Templates & UI Kits', slug: 'templates-ui-kits', icon: 'layout', count: 1 },
  { id: 'downloads', name: 'Digital Downloads', slug: 'digital-downloads', icon: 'download', count: 1 },
];

// --- PRODUCTS ---
export const marketplaceProducts = [
  // 1. AI Model
  {
    id: 101,
    name: "Customer Support AI Assistant",
    slug: "customer-support-ai-assistant",
    category: "AI Models & Tools",
    productType: "AI Model",
    shortDescription: "A fine-tuned LLM designed to handle customer FAQs and route tickets automatically.",
    fullDescription: "This AI model is trained on 50,000 customer support interactions. It integrates seamlessly into your Django backend to automate tier-1 support.",
    price: 15000,
    currency: "KSh",
    images: [],
    features: ["Intent detection", "Auto-reply generation", "Ticket routing", "Sentiment analysis"],
    tags: ["AI", "Customer Support", "LLM", "Python"],
    version: "1.0.2",
    licence: "Commercial",
    deliveryMethod: "Secure API Access",
    availability: "Available",
    isFeatured: true,
    isPublished: true,
    createdAt: "2024-03-01",
    // AI Specific Fields
    modelArchitecture: "Transformer (BERT-based)",
    framework: "PyTorch",
    modelFormat: "HuggingFace / ONNX",
    hardwareRequirements: "GPU recommended for local inference",
    intendedUse: "Customer service automation",
    accessMethod: "API Key (REST)"
  },
  
  // 2. Book
  {
    id: 102,
    name: "Python for Business Automation",
    slug: "python-business-automation",
    category: "Books & eBooks",
    productType: "eBook",
    shortDescription: "Learn how to automate spreadsheets, emails, and reports using Python.",
    fullDescription: "A 250-page practical guide covering Pandas, OpenPyXL, and SMTP to automate everyday business tasks.",
    price: 1200,
    currency: "KSh",
    images: [],
    features: ["250+ Pages", "Practical Examples", "Source Code included"],
    tags: ["Python", "Automation", "Business"],
    version: "1st Edition",
    licence: "Personal Use",
    deliveryMethod: "Secure PDF Download",
    availability: "Available",
    isFeatured: true,
    isPublished: true,
    createdAt: "2024-02-15",
    // Book Specific Fields
    author: "Kelvin Oteyo",
    publisher: "OteyoSolutions",
    language: "English",
    fileFormat: "PDF / EPUB",
    pageCount: 250,
    preview: "Chapter 1 available on request"
  },

  // 3. Course
  {
    id: 103,
    name: "Full-Stack Django & React Masterclass",
    slug: "django-react-masterclass",
    category: "Online Courses",
    productType: "Course",
    shortDescription: "Build a complete e-commerce platform from scratch using Python, Django, and React.",
    fullDescription: "A 40-hour video course taking you from backend API design to frontend state management and deployment.",
    price: 8500,
    currency: "KSh",
    images: [],
    features: ["40 Hours Video", "Lifetime Access", "Certificate", "Project Source Code"],
    tags: ["Django", "React", "FullStack", "E-commerce"],
    version: "2024 Edition",
    licence: "Personal Use",
    deliveryMethod: "Course Dashboard Access",
    availability: "Available",
    isFeatured: true,
    isPublished: true,
    createdAt: "2024-01-20",
    // Course Specific Fields
    instructor: "Kelvin Oteyo",
    level: "Intermediate",
    duration: "40 Hours",
    modules: 8,
    lessons: 65,
    learningOutcomes: ["Build REST APIs", "Manage state with Context API", "Deploy to production"],
    certificateAvailability: true
  },

  // 4. Software
  {
    id: 104,
    name: "OteyoSales Inventory System",
    slug: "oteyosales-inventory-system",
    category: "Software & Apps",
    productType: "Software",
    shortDescription: "A complete web-based inventory and sales management system for SMEs.",
    fullDescription: "Track stock, generate reports, and manage suppliers from a single dashboard. Built with Django and React.",
    price: 25000,
    currency: "KSh",
    images: [],
    features: ["Stock Tracking", "Sales Reports", "Supplier Management", "Role-Based Access"],
    tags: ["Django", "React", "Business", "SaaS"],
    version: "v2.1",
    licence: "Commercial",
    deliveryMethod: "Source Code & Setup",
    availability: "Available",
    isFeatured: false,
    isPublished: true,
    createdAt: "2023-11-10",
    // Software Specific Fields
    platform: "Web Application",
    supportedDevices: ["Desktop", "Tablet"],
    subscriptionType: "One-time purchase",
    installationInstructions: "Requires Python, Node.js, and PostgreSQL."
  },

  // 5. Template
  {
    id: 105,
    name: "OteyoAdmin Dashboard Template",
    slug: "oteyoadmin-dashboard",
    category: "Templates & UI Kits",
    productType: "Website Template",
    shortDescription: "A premium React dashboard template with 20+ pages and dark mode.",
    fullDescription: "Save hundreds of hours of development. Includes charts, tables, auth screens, and a responsive sidebar.",
    price: 4500,
    currency: "KSh",
    images: [],
    features: ["React 18", "Tailwind CSS", "Chart.js", "Dark Mode"],
    tags: ["React", "Dashboard", "Template", "UI"],
    version: "1.0.0",
    licence: "Extended Commercial",
    deliveryMethod: "Secure ZIP Download",
    availability: "Available",
    isFeatured: true,
    isPublished: true,
    createdAt: "2024-03-05",
    // Template Specific Fields
    framework: "React + Vite",
    includedFiles: ["Source Code", "Documentation", "Figma Files"],
    compatibility: "Node.js 18+",
    previewDemo: "https://demo.oteyosolutions.com"
  },

  // 6. Digital Download
  {
    id: 106,
    name: "50 Business Proposal Templates",
    slug: "business-proposal-templates",
    category: "Digital Downloads",
    productType: "Digital Download",
    shortDescription: "A pack of 50 professionally designed Word and PDF proposal templates.",
    fullDescription: "Win more clients with these pre-written, editable business proposal templates for various industries.",
    price: 800,
    currency: "KSh",
    images: [],
    features: ["50 Templates", "Word & PDF formats", "Editable Colors"],
    tags: ["Business", "Templates", "Documents"],
    version: "2024",
    licence: "Personal Use",
    deliveryMethod: "Secure ZIP Download",
    availability: "Available",
    isFeatured: false,
    isPublished: true,
    createdAt: "2024-02-28",
    // Download Specific Fields
    fileFormat: "ZIP (DOCX, PDF)",
    fileSize: "45 MB",
    includedFiles: ["50 DOCX files", "50 PDF files", "Instruction Guide"]
  }
];