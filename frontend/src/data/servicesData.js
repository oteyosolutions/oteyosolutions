 
export const servicesData = [
  {
    id: 1,
    slug: "website-development",
    title: "Website Development",
    icon: "code",
    shortDescription: "Professional, responsive websites that establish your online presence and help you connect with customers.",
    description: "I design and develop modern, responsive websites that help businesses, professionals and entrepreneurs present their services online and reach more customers.",
    features: ["Business websites", "Portfolio websites", "Landing pages", "Personal websites", "Responsive design", "Website redesign", "Frontend development", "Backend integration"],
    benefits: ["Professional online presence", "Mobile-friendly layouts", "Easy navigation", "Better presentation", "Clear contact options", "SEO-friendly structure"],
    technologies: ["HTML5", "CSS3", "JavaScript", "React", "Django", "REST APIs"],
    useCases: ["Small business websites", "Personal portfolios", "Company websites", "Product landing pages"],
  },
  {
    id: 2,
    slug: "software-development",
    title: "Custom Software Development",
    icon: "server",
    shortDescription: "Custom software applications designed to organize operations, manage information, and solve specific business problems.",
    description: "I develop custom software applications designed to help businesses organize operations, manage information and solve specific problems.",
    features: ["Business management systems", "Inventory systems", "Booking systems", "Admin dashboards", "Reporting systems", "Custom web applications", "API integration"],
    benefits: ["Based on actual needs", "Organized information", "Reduced manual work", "Better access to records", "Improved workflow", "Flexible functionality"],
    technologies: ["Python", "Django", "Django REST Framework", "React", "PostgreSQL", "SQLite"],
    useCases: ["Retail inventory management", "Salon booking", "Business operations", "Customer record management"],
  },
  {
    id: 3,
    slug: "ai-automation",
    title: "AI and Automation",
    icon: "brain",
    shortDescription: "AI-powered applications and automation solutions that simplify tasks and process information intelligently.",
    description: "I explore and develop AI-powered applications and automation solutions that help simplify tasks, process information and introduce intelligent features into digital products.",
    features: ["AI application development", "Machine learning projects", "AI integration", "Intelligent data processing", "Task automation", "AI prototypes"],
    benefits: ["Reduce repetitive tasks", "Intelligent features", "Improved processing", "New capabilities", "Better workflows"],
    technologies: ["Python", "Machine Learning", "Django", "React", "REST APIs", "AI Model APIs"],
    useCases: ["Intelligent classification", "AI-assisted apps", "Automated processing", "Research prototypes"],
  },
  {
    id: 4,
    slug: "graphic-design",
    title: "Graphic Design",
    icon: "pen-tool",
    shortDescription: "Clean and professional digital designs that help businesses communicate their messages and promote their brands.",
    description: "I create clean and professional digital designs that help businesses communicate their messages, present their brands and promote their products or services.",
    features: ["Social media graphics", "Promotional posters", "Business graphics", "Digital banners", "Branding materials", "Website graphics"],
    benefits: ["Professional presentation", "Consistent communication", "Clear promotional messages", "Suitable for digital platforms"],
    technologies: ["Adobe Photoshop", "Illustrator", "Canva", "Figma"],
    useCases: ["Social media campaigns", "Business branding", "Promotional materials", "Website assets"],
  },
  {
    id: 5,
    slug: "website-maintenance",
    title: "Website Maintenance",
    icon: "wrench",
    shortDescription: "Regular technical support to keep your website updated, secure, and functioning properly.",
    description: "Websites need regular attention to remain useful, secure and functional. I provide website maintenance and technical support to help keep websites running smoothly.",
    features: ["Content updates", "Bug fixing", "Layout corrections", "Troubleshooting", "Performance improvements", "Security updates", "Backups"],
    benefits: ["Improved reliability", "Timely corrections", "Updated content", "Better UX", "Reduced problems"],
    technologies: ["React", "HTML/CSS", "WordPress", "Django", "Git"],
    useCases: ["Monthly maintenance", "One-time fixes", "Emergency support", "Feature updates"],
  },
  {
    id: 6,
    slug: "seo-digital-support",
    title: "SEO and Digital Support",
    icon: "search",
    shortDescription: "Improve your website's structure, performance, and visibility so search engines and visitors understand it better.",
    description: "I help improve website structure, technical performance and basic search-engine optimization so visitors and search engines can understand your website more easily.",
    features: ["On-page SEO", "Title optimization", "Meta descriptions", "Image alt text", "Structure improvements", "Speed improvement", "Mobile usability"],
    benefits: ["Better structure", "Improved search understanding", "More accessible content", "Improved mobile experience"],
    technologies: ["Google Search Console", "Google Analytics", "Lighthouse", "SEO Tools"],
    useCases: ["New website launch", "Website audit", "Performance tuning", "Content organization"],
  }
];

export const packagesData = [
  {
    name: "Basic",
    price: null, // Leave null to show "Request a Quote"
    currency: "KSh",
    description: "Perfect for small personal projects or simple landing pages.",
    features: ["1-3 Page Website", "Mobile Responsive", "Contact Form", "Basic SEO"],
    delivery: "1-2 Weeks",
    featured: false,
    active: true
  },
  {
    name: "Standard",
    price: null,
    currency: "KSh",
    description: "Ideal for growing businesses that need a complete online presence.",
    features: ["Up to 10 Pages", "Custom UI Design", "CMS Integration", "Advanced SEO", "1 Month Support"],
    delivery: "2-4 Weeks",
    featured: true,
    active: true
  },
  {
    name: "Premium",
    price: null,
    currency: "KSh",
    description: "For complex web applications and custom business systems.",
    features: ["Custom Web App", "User Authentication", "Database Setup", "API Integration", "3 Months Support"],
    delivery: "4-8 Weeks",
    featured: false,
    active: true
  },
  {
    name: "Custom",
    price: null,
    currency: "KSh",
    description: "Have something unique in mind? Let's discuss your requirements.",
    features: ["Tailored to your needs", "Custom features", "Scalable architecture"],
    delivery: "Depends on scope",
    featured: false,
    active: true
  }
];

export const faqsData = [
  { q: "What services does OteyoSolutions offer?", a: "OteyoSolutions offers website development, custom software development, AI and automation solutions, graphic design, website maintenance and digital support." },
  { q: "Can you build a website for my small business?", a: "Yes. I can help develop a professional website based on your business, services and requirements." },
  { q: "Can you develop custom software for my business?", a: "Yes. I can discuss your requirements and develop a suitable software solution depending on the project's scope." },
  { q: "How much does a website cost?", a: "The cost depends on the features, design, complexity and requirements. Contact me for a quotation." },
  { q: "How long does a project take?", a: "The timeline depends on the size and complexity of the project. I provide an estimated timeline after understanding the requirements." },
  { q: "Can you redesign my existing website?", a: "Yes. I can review your existing website and discuss possible design, functionality and performance improvements." },
  { q: "Do you provide website maintenance?", a: "Yes. One-time maintenance and ongoing support arrangements can be discussed." },
  { q: "How do I start a project?", a: "Use the project enquiry form or contact me through the available contact channels." }
];