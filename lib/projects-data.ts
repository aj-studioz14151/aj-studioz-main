export interface Project {
  id: number;
  slug: string;
  title: string;
  description: string;
  image: string | string[];
  link: string;
  features: string[];
  category: string;
  videoUrl?: string;
  fullDescription?: string;
  technologies?: string[];
  status?: 'Live' | 'Internal' | 'Beta';
  year?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    slug: "tomo-vibecoding-tool",
    title: "TOMO Vibecoding Tool",
    description: "TOMO is an AI-powered code editor that enables users to code and build websites in seconds, featuring multi-page support, auto-deployment, free hosting with global CDN, open-source AI models like Llama and Mistral, Hugging Face integration, and optimized performance.",
    fullDescription: "TOMO Vibecoding Tool revolutionizes web development by combining AI-powered code generation with instant deployment. Built for developers and non-developers alike, it leverages cutting-edge open-source models to transform ideas into production-ready websites in seconds. The platform includes comprehensive multi-page support, automatic deployment pipelines, and global CDN hosting—all completely free.",
    image: "/dev-aj-tool-vercel-app-1024x768desktop-acda78.png",
    link: "https://dev-aj-tool.vercel.app/",
    category: "AI Development Tool",
    status: "Live",
    year: "2024",
    technologies: ["React", "Next.js", "Llama", "Mistral", "Hugging Face", "Edge Computing"],
    features: [
      "Multi Pages: Supports dynamic routing, navigation, and SEO-ready complex websites",
      "Auto Deploy: Instant live updates without CI/CD setup",
      "Free Hosting: Global CDN for fast performance",
      "Open Source Models: Powered by Llama, Mistral, CodeLlama for transparency",
      "Hugging Face Integration: Access to advanced models and datasets",
      "Blazing Fast UX: Edge computing and caching for developers and non-developers"
    ]
  },
  {
    id: 2,
    slug: "tomo-bot-email-assistant",
    title: "TOMO Bot - AI Email Assistant",
    description: "TOMO bot is an AI assistant developed by AJ STUDIOZ that helps users compose, send, and manage professional emails efficiently, with commands like 'Send a thank you email to [email]' or 'Help me write a professional email'.",
    fullDescription: "TOMO Bot is your intelligent email companion that understands natural language commands and helps you craft professional communications effortlessly. Whether you need to send thank you notes, business proposals, or follow-up emails, TOMO Bot handles the heavy lifting while maintaining your personal voice and professional standards.",
    image: "/workflow-one-gamma-vercel-app-1024x768desktop-f1ea93.png",
    link: "https://workflow-one-gamma.vercel.app/",
    category: "AI Email Assistant",
    status: "Live",
    year: "2024",
    technologies: ["AI/ML", "Natural Language Processing", "Email API", "React"],
    features: [
      "Send Thank You: Quickly generate and send thank-you emails",
      "Professional Email: Assist in writing polished professional correspondence",
      "Compose Email: Streamline email creation and management"
    ]
  },
  {
    id: 3,
    slug: "tomo-ai-chat-assistant",
    title: "TOMO - AI-Powered Chat Assistant",
    description: "TOMO is an advanced AI-powered chat assistant featuring intelligent tools, voice chat, image generation, and real-time search for future-forward AI conversations.",
    fullDescription: "TOMO Chat represents the next generation of AI assistants, combining multimodal capabilities with real-time information access. From voice conversations to image generation, TOMO adapts to your needs while providing accurate, contextual responses. The platform supports various authentication methods for seamless access.",
    image: ["/tomo-chat-web.jpeg", "/hello-its-vercel-app-1024x768desktop-72ac20.png"],
    link: "https://chat.tomoacademy.site",
    category: "AI Chat",
    status: "Live",
    year: "2024",
    technologies: ["GPT", "Voice AI", "DALL-E", "Real-time Search", "Firebase Auth"],
    features: [
      "Intelligent Tools: Advanced AI capabilities for smart interactions",
      "Voice Chat: Supports voice-based conversations",
      "Image Generation: Creates images within chats",
      "Real-Time Search: Integrates live web search",
      "Access: User login via email/password or Google; sign-up available"
    ]
  },
  {
    id: 4,
    slug: "tomo-academy-internal",
    title: "TOMO Academy - Internal Management Tool",
    description: "TOMO Academy is a premium digital platform and comprehensive internal tool designed to streamline operations, manage a team of 14+ creators, and optimize YouTube channel success, built specifically for content creation workflows.",
    fullDescription: "TOMO Academy serves as the operational backbone for content creation teams, providing comprehensive tools for team management, content scheduling, performance analytics, and workflow automation. With role-based access and Firebase security, it ensures secure, efficient operations for growing creator teams.",
    image: "/tomo-forge-hub-vercel-app-1024x768desktop-dbc84d.png",
    link: "",
    category: "Staff Portal",
    status: "Internal",
    year: "2023",
    technologies: ["React", "Firebase", "Analytics", "QR System", "Kanban"],
    features: [
      "Team Management: Digital employee profiles with ID cards and QR codes for identity verification",
      "Content Hub: Track YouTube uploads, scheduling, and performance metrics",
      "Task Board: Kanban-style project management with assignments, deadlines, and progress tracking",
      "Analytics: Insights into channel performance, team productivity, and content metrics",
      "Secure Access: Role-based permissions with Firebase authentication and audit trails",
      "Automation: Workflows for onboarding, notifications, and reporting"
    ]
  },
  {
    id: 5,
    slug: "morphic-ai-research",
    title: "Morphic",
    description: "Morphic is a user-friendly web platform providing AI models and tools for interactive exploration, including model selection like DeepSeek R1, question-answering on topics such as Nvidia's growth and Tesla vs. Rivian comparisons, with features like Search and DeepDive.",
    fullDescription: "Morphic transforms research and exploration by combining multiple AI models with real-time search capabilities. Whether you're analyzing technical papers, comparing companies, or exploring new concepts, Morphic's DeepDive feature provides comprehensive, cited answers with source integration.",
    image: "/epdi-vercel-app-1024x768desktop-dd33ea.png",
    link: "https://epdi.vercel.app",
    category: "AI Research Tool",
    status: "Live",
    year: "2024",
    technologies: ["DeepSeek R1", "Web Search API", "arXiv Integration", "React"],
    features: [
      "Model Selection: Choose from AI models like DeepSeek R1 for queries",
      "Search & DeepDive: Real-time search and in-depth analysis tools",
      "Query Examples: 'What is DeepSeek R1?', 'Why is Nvidia growing rapidly?', 'Tesla vs Rivian'",
      "History & Sidebar: Toggleable sidebar, conversation history, and menu access",
      "Summary Integration: Generates summaries from sources like arXiv papers"
    ]
  },
  {
    id: 6,
    slug: "aj-studioz-dev-tool",
    title: "AJ STUDIOZ Internal Dev Tool",
    description: "AJ STUDIOZ internal dev tool is an AI-powered tool for generating stunning React components, apps, and interfaces using natural language prompts, with streaming support and multiple models including v0, Claude, Grok, and DeepSeek.",
    fullDescription: "This powerful development tool accelerates React development by generating production-ready components from natural language descriptions. Supporting multiple AI models including Claude, Grok, and DeepSeek, it provides real-time streaming output and instant preview capabilities for rapid prototyping.",
    image: "/v0-clone-eight-chi-vercel-app-1024x768desktop-269994.png",
    link: "https://v0-clone-eight-chi.vercel.app/",
    category: "AI Development Tool",
    status: "Live",
    year: "2024",
    technologies: ["React", "Claude", "Grok", "DeepSeek", "v0", "Streaming AI"],
    features: [
      "AI Generation: Create React UIs from descriptions like 'Landing page' or 'Todo app'",
      "Model Selection: Switch between v0, Claude, Grok, DeepSeek",
      "Streaming: Real-time code generation output",
      "Component Export: Generate production-ready React components",
      "Live Preview: Instant visualization of generated components"
    ]
  },
  {
    id: 7,
    slug: "meow-search-engine",
    title: "AJ STUDIOZ - AI-Powered Research & Search Engine",
    description: "AJ STUDIOZ serves as an intelligent AI research companion, delivering a fast, accurate, and powerful search engine tailored for all research requirements.",
    fullDescription: "MEOW Search Engine redefines research with AI-driven precision. Built to handle complex queries across diverse domains, it delivers fast, accurate results while understanding context and intent. Perfect for academic research, market analysis, or general information discovery.",
    image: "/meow-ajstudioz-co-in-1024x768desktop-052090 (1).png",
    link: "https://www.meow.ajstudioz.co.in/",
    category: "AI Research Tool",
    status: "Live",
    year: "2024",
    technologies: ["AI Search", "Natural Language Processing", "Web Indexing"],
    features: [
      "Fast Search: Lightning-fast AI-driven search engine",
      "Accurate Results: Precision-focused research companion",
      "Research Optimization: Tailored for comprehensive research tasks",
      "AI Intelligence: Advanced algorithms for relevant findings",
      "Universal Research: Supports diverse research domains"
    ]
  },
  {
    id: 8,
    slug: "tomo-academy-website",
    title: "TOMO ACADEMY Website",
    description: "TOMO ACADEMY is a beginner-friendly educational platform offering free, step-by-step tutorials in C programming, probability & statistics, and data visualization, delivered bilingually in Tamil and English via progressive video series for self-paced STEM learning.",
    fullDescription: "TOMO ACADEMY democratizes STEM education through comprehensive, bilingual video tutorials. Designed for beginners, the platform covers programming fundamentals, statistical analysis, and data visualization with progressive learning paths. The bilingual approach (Tamil and English) ensures accessibility for diverse learners.",
    image: "/tomo-academy-gb8o-vercel-app-1024x768desktop-c714b6.png",
    link: "https://tomoacademy.site",
    category: "Education Platform",
    status: "Live",
    year: "2023",
    technologies: ["Next.js", "Video Platform", "CMS", "Bilingual System"],
    features: [
      "C Programming: Basics, systems programming foundations, and practical examples",
      "Statistics & Probability: Frequency distributions, histograms, polygons, curves, ogives",
      "Data Visualization: Chart types, dimensions/measures, effective representation techniques",
      "Bilingual Learning: Tamil and English content for accessibility",
      "Progressive Videos: Step-by-step tutorials for self-paced learning",
      "Beginner-Friendly: Designed for STEM learners at any level"
    ]
  },
  {
    id: 9,
    slug: "curl-tester",
    title: "cURL Tester - Online cURL Command Testing Tool",
    description: "cURL Tester by AJ STUDIOZ is a professional online tool for inputting, previewing, sending cURL commands, and viewing responses to assist developers in testing and debugging API requests efficiently.",
    fullDescription: "cURL Tester simplifies API testing and debugging with an intuitive interface for executing cURL commands. Track request history, preview commands before execution, and analyze responses instantly. Essential for developers working with REST APIs and web services.",
    image: "/v0-aj-studioz-curl-tester-vercel-app-1024x768desktop-d5d1b9.png",
    link: "https://curl.ajstudioz.co.in",
    category: "Developer Tool",
    status: "Live",
    year: "2024",
    technologies: ["React", "HTTP Client", "API Testing"],
    features: [
      "cURL Input & Preview: Enter commands like curl -X GET with headers",
      "Send & Response: Execute requests and display results instantly",
      "Request History: Tracks previous requests for reference",
      "Copy Functionality: Quick copy of cURL previews",
      "API Testing: Efficient debugging tool for developers",
      "Professional Interface: Clean, intuitive command testing environment"
    ]
  },
  {
    id: 10,
    slug: "meow-chat",
    title: "MEOW CHAT - Free AI Chat with Multiple Models",
    description: "MEOW CHAT by AJ STUDIOZ is a free AI chat platform supporting multiple models for engaging conversations focused on summaries, code generation, design ideas, research, inspiration, deep thinking, and gentle learning.",
    fullDescription: "MEOW CHAT offers versatile AI conversations across multiple specialized modes. From technical coding assistance to creative inspiration and deep analytical thinking, the platform adapts to your communication style and needs. All features are available completely free.",
    image: "/meowchat-ajstudioz-co-in-1024x768desktop-ebe418.png",
    link: "https://www.meowchat.ajstudioz.co.in/",
    category: "AI Chat",
    status: "Live",
    year: "2024",
    technologies: ["Multiple AI Models", "React", "Real-time Chat"],
    features: [
      "Summary: Condense information efficiently",
      "Code: Generate or assist with programming",
      "Design: Creative design prompts and ideas",
      "Research: In-depth topic exploration",
      "Inspiration: Creative thinking and ideation",
      "Deep Thinking: Complex problem analysis",
      "Gentle Learning: Educational conversations"
    ]
  },
  {
    id: 11,
    slug: "tomo-business",
    title: "TOMO BUSINESS - Digital Card Builder",
    description: "TOMO BUSINESS is a modern networking tool for creating premium digital profiles that replace physical cards, enabling instant NFC sharing on any smartphone without apps, customizable domains like tomo.business/yourname, and real-time connection analytics.",
    fullDescription: "TOMO BUSINESS revolutionizes professional networking with digital business cards that work instantly via NFC technology. Create custom-branded profiles with personalized domains, track engagement with real-time analytics, and eliminate the need for physical cards or receiver apps.",
    image: "/tomo-business-vercel-app-1024x768desktop-4a9161.png",
    link: "https://tomo-business.vercel.app/",
    category: "Business Tool",
    status: "Live",
    year: "2024",
    technologies: ["NFC", "React", "Analytics", "Custom Domains"],
    features: [
      "NFC Instant Share: Tap-to-share profile on smartphones; no receiver app needed",
      "Custom Domain: Professional links like tomo.business/yourname, SEO-friendly",
      "Mobile Optimized: Instant loading and premium appearance on all devices",
      "Real-time Analytics: Track connections and engagement",
      "Replaces Physical Cards: Modern digital networking solution",
      "No App Required: Works instantly on any smartphone"
    ]
  },
  {
    id: 12,
    slug: "tomo-meow-formatter",
    title: "TOMO MEOW - Professional Document Formatter",
    description: "TOMO MEOW by AJ STUDIOZ is a professional document formatter tool that converts plain text or Markdown into styled documents with real-time preview and exports to PDF or DOCX, ideal for notes, code, and reports like Java I/O Streams tutorials.",
    fullDescription: "TOMO MEOW transforms plain text into beautifully formatted documents with professional styling. Supporting syntax highlighting for code, elegant table formatting, and real-time preview, it exports to PDF or DOCX for seamless document creation and sharing.",
    image: ["/docustyle-studio-vercel-app-1024x768desktop-13d1ab.png", "/tomo-meow-studio-vercel-app-1024x768desktop-478946.png"],
    link: "https://doc.tomoacademy.site/",
    category: "Document Tool",
    status: "Live",
    year: "2024",
    technologies: ["Markdown", "PDF Export", "DOCX Export", "Syntax Highlighting"],
    features: [
      "Syntax Highlighting: Colored code display for programming languages",
      "Beautiful Tables: Formatted tabular data with professional styling",
      "Professional Styling: Polished layouts for documents and reports",
      "Auto-Detect Formatting: Intelligent plain text parsing",
      "Export PDF/DOCX: Download formatted content in multiple formats",
      "Real-time Preview: Instant formatted view as you type",
      "Mobile Responsive: Works seamlessly on all devices"
    ]
  },
  {
    id: 13,
    slug: "mvk-transports",
    title: "MVK Transports Mecheri - Advanced Transport Solutions",
    description: "MVK Transports, operating since 2019 from Mecheri, provides reliable, efficient, technology-driven transport services with 5+ years experience, 100% reliability, and 24/7 support.",
    fullDescription: "MVK Transports delivers comprehensive logistics solutions with advanced technology integration. From GPS-tracked goods transportation to complete relocation services and construction logistics, the company has built a reputation for 100% reliability since 2019.",
    image: "/mvk-transports-vercel-app-1024x768desktop-0c37c6 (1).png",
    link: "https://mvk-transports.vercel.app/",
    category: "Transport Services",
    status: "Live",
    year: "2019",
    technologies: ["GPS Tracking", "Real-time Monitoring", "Logistics Management"],
    features: [
      "Goods Transportation: Real-time GPS tracking, temperature control, insurance coverage",
      "24/7 Monitoring: Round-the-clock support and tracking",
      "Relocation Services: Expert packing, fragile handling, assembly, storage options",
      "Construction Logistics: Heavy machinery, bulk materials, site delivery",
      "Project Management: End-to-end logistics coordination",
      "5+ Years Experience: Established since 2019 with 100% reliability"
    ]
  },
  {
    id: 14,
    slug: "aj-storage",
    title: "AJ STORAGE - File Storage with QR Generation",
    description: "AJ STORAGE by AJ STUDIOZ is a file storage system that allows users to upload files and instantly generates QR codes for easy sharing and access. Store documents, images, and files securely with QR-based retrieval.",
    fullDescription: "AJ STORAGE combines cloud storage with innovative QR code technology for instant file sharing. Upload any file type, receive a unique QR code, and share access effortlessly. Perfect for quick document sharing in professional or educational settings.",
    image: "/cloud-zeta-snowy-vercel-app-1024x768desktop-650d42.png",
    link: "https://cloud-zeta-snowy.vercel.app/",
    category: "File Storage",
    status: "Live",
    year: "2024",
    technologies: ["Cloud Storage", "QR Code Generation", "File Management"],
    features: [
      "File Upload: Store documents, images, and various file types",
      "QR Code Generation: Instant QR codes for uploaded files",
      "Easy Sharing: Share files via QR code scanning",
      "Quick Access: Retrieve files by scanning QR codes",
      "Secure Storage: Safe file storage and management",
      "Multiple Formats: Support for various file types"
    ]
  },
  {
    id: 15,
    slug: "aj-studioz-chat",
    title: "AJ STUDIOZ CHAT",
    description: "AJ STUDIOZ CHAT is an AI chat platform supporting guest access, powered by Lynxa models for versatile interactions including coding assistance, essay writing, technical queries, and weather checks.",
    fullDescription: "AJ STUDIOZ CHAT features the Lynxa family of AI models, each optimized for specific use cases. From fast daily conversations to advanced student assistance with document analysis, the platform offers tiered AI capabilities with convenient export options for all conversations.",
    image: "/chat-ajstudioz-co-in-1024x768desktop-217e5d.png",
    link: "https://chat.ajstudioz.co.in/",
    category: "AI Chat",
    status: "Live",
    year: "2024",
    technologies: ["Lynxa AI", "Document Analysis", "PDF Export", "Guest Access"],
    features: [
      "Lynxa Lite ⚡: ChatGPT-style fast responses for daily conversations",
      "Lynxa Pro 🚀: Powerful model with artifacts for coding and complex tasks",
      "Lynxa Student Pro 🎓: Advanced student assistant for PDFs, docs, images",
      "Guest Access: No login required for quick conversations",
      "Export Options: Save conversations to PDF/Word with branding",
      "Versatile AI: Coding, essays, technical queries, weather info"
    ]
  }
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(p => p.slug === slug);
}

export function getProjectById(id: number): Project | undefined {
  return projects.find(p => p.id === id);
}
