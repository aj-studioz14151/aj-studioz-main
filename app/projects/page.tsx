import { Badge } from "@/components/ui/badge";
import TomoProjectCard from "@/components/tomo-project-card";
import { BookProjectsModal } from "@/components/book-projects-modal";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string | string[];
  link: string;
  features: string[];
  category: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "TOMO Vibecoding Tool",
    description: "TOMO is an AI-powered code editor that enables users to code and build websites in seconds, featuring multi-page support, auto-deployment, free hosting with global CDN, open-source AI models like Llama and Mistral, Hugging Face integration, and optimized performance.",
    image: "/dev-aj-tool-vercel-app-1024x768desktop-acda78.png",
    link: "https://dev-aj-tool.vercel.app/",
    category: "AI Development Tool",
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
    title: "TOMO Bot - AI Email Assistant",
    description: "TOMO bot is an AI assistant developed by AJ STUDIOZ that helps users compose, send, and manage professional emails efficiently, with commands like 'Send a thank you email to [email]' or 'Help me write a professional email'.",
    image: "/workflow-one-gamma-vercel-app-1024x768desktop-f1ea93.png",
    link: "https://workflow-one-gamma.vercel.app/",
    category: "AI Email Assistant",
    features: [
      "Send Thank You: Quickly generate and send thank-you emails",
      "Professional Email: Assist in writing polished professional correspondence",
      "Compose Email: Streamline email creation and management"
    ]
  },
  {
    id: 3,
    title: "TOMO - AI-Powered Chat Assistant",
    description: "TOMO is an advanced AI-powered chat assistant featuring intelligent tools, voice chat, image generation, and real-time search for future-forward AI conversations.",
    image: ["/tomo-chat-web.jpeg", "/hello-its-vercel-app-1024x768desktop-72ac20.png"],
    link: "https://chat.tomoacademy.site",
    category: "AI Chat",
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
    title: "TOMO Academy - Internal Management Tool",
    description: "TOMO Academy is a premium digital platform and comprehensive internal tool designed to streamline operations, manage a team of 14+ creators, and optimize YouTube channel success, built specifically for content creation workflows.",
    image: "/tomo-forge-hub-vercel-app-1024x768desktop-dbc84d.png",
    link: "",
    category: "Staff Portal",
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
    title: "Morphic",
    description: "Morphic is a user-friendly web platform providing AI models and tools for interactive exploration, including model selection like DeepSeek R1, question-answering on topics such as Nvidia's growth and Tesla vs. Rivian comparisons, with features like Search and DeepDive.",
    image: "/epdi-vercel-app-1024x768desktop-dd33ea.png",
    link: "https://epdi.vercel.app",
    category: "AI Research Tool",
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
    title: "AJ STUDIOZ Internal Dev Tool",
    description: "AJ STUDIOZ internal dev tool is an AI-powered tool for generating stunning React components, apps, and interfaces using natural language prompts, with streaming support and multiple models including v0, Claude, Grok, and DeepSeek.",
    image: "/v0-clone-eight-chi-vercel-app-1024x768desktop-269994.png",
    link: "https://v0-clone-eight-chi.vercel.app/",
    category: "AI Development Tool",
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
    title: "AJ STUDIOZ - AI-Powered Research & Search Engine",
    description: "AJ STUDIOZ serves as an intelligent AI research companion, delivering a fast, accurate, and powerful search engine tailored for all research requirements.",
    image: "/meow-ajstudioz-co-in-1024x768desktop-052090 (1).png",
    link: "https://www.meow.ajstudioz.co.in/",
    category: "AI Research Tool",
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
    title: "TOMO ACADEMY Website",
    description: "TOMO ACADEMY is a beginner-friendly educational platform offering free, step-by-step tutorials in C programming, probability & statistics, and data visualization, delivered bilingually in Tamil and English via progressive video series for self-paced STEM learning.",
    image: "/tomo-academy-gb8o-vercel-app-1024x768desktop-c714b6.png",
    link: "https://tomoacademy.site",
    category: "Education Platform",
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
    title: "cURL Tester - Online cURL Command Testing Tool",
    description: "cURL Tester by AJ STUDIOZ is a professional online tool for inputting, previewing, sending cURL commands, and viewing responses to assist developers in testing and debugging API requests efficiently.",
    image: "/v0-aj-studioz-curl-tester-vercel-app-1024x768desktop-d5d1b9.png",
    link: "https://curl.ajstudioz.co.in",
    category: "Developer Tool",
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
    title: "MEOW CHAT - Free AI Chat with Multiple Models",
    description: "MEOW CHAT by AJ STUDIOZ is a free AI chat platform supporting multiple models for engaging conversations focused on summaries, code generation, design ideas, research, inspiration, deep thinking, and gentle learning.",
    image: "/meowchat-ajstudioz-co-in-1024x768desktop-ebe418.png",
    link: "https://www.meowchat.ajstudioz.co.in/",
    category: "AI Chat",
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
    title: "TOMO BUSINESS - Digital Card Builder",
    description: "TOMO BUSINESS is a modern networking tool for creating premium digital profiles that replace physical cards, enabling instant NFC sharing on any smartphone without apps, customizable domains like tomo.business/yourname, and real-time connection analytics.",
    image: "/tomo-business-vercel-app-1024x768desktop-4a9161.png",
    link: "https://tomo-business.vercel.app/",
    category: "Business Tool",
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
    title: "TOMO MEOW - Professional Document Formatter",
    description: "TOMO MEOW by AJ STUDIOZ is a professional document formatter tool that converts plain text or Markdown into styled documents with real-time preview and exports to PDF or DOCX, ideal for notes, code, and reports like Java I/O Streams tutorials.",
    image: ["/docustyle-studio-vercel-app-1024x768desktop-13d1ab.png", "/tomo-meow-studio-vercel-app-1024x768desktop-478946.png"],
    link: "https://doc.tomoacademy.site/",
    category: "Document Tool",
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
    title: "MVK Transports Mecheri - Advanced Transport Solutions",
    description: "MVK Transports, operating since 2019 from Mecheri, provides reliable, efficient, technology-driven transport services with 5+ years experience, 100% reliability, and 24/7 support.",
    image: "/mvk-transports-vercel-app-1024x768desktop-0c37c6 (1).png",
    link: "https://mvk-transports.vercel.app/",
    category: "Transport Services",
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
    title: "AJ STORAGE - File Storage with QR Generation",
    description: "AJ STORAGE by AJ STUDIOZ is a file storage system that allows users to upload files and instantly generates QR codes for easy sharing and access. Store documents, images, and files securely with QR-based retrieval.",
    image: "/cloud-zeta-snowy-vercel-app-1024x768desktop-650d42.png",
    link: "https://cloud-zeta-snowy.vercel.app/",
    category: "File Storage",
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
    title: "AJ STUDIOZ CHAT",
    description: "AJ STUDIOZ CHAT is an AI chat platform supporting guest access, powered by Lynxa models for versatile interactions including coding assistance, essay writing, technical queries, and weather checks.",
    image: "/chat-ajstudioz-co-in-1024x768desktop-217e5d.png",
    link: "https://chat.ajstudioz.co.in/",
    category: "AI Chat",
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

const categoryColors: { [key: string]: string } = {
  "AI Development Tool": "bg-[#C5A059]/10 text-[#C5A059] dark:bg-[#C5A059]/20 dark:text-[#C5A059]",
  "AI Email Assistant": "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
  "AI Chat": "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300",
  "AI Research Tool": "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300",
  "Staff Portal": "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200",
  "Education Platform": "bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-300",
  "Developer Tool": "bg-cyan-100 text-cyan-800 dark:bg-cyan-900/30 dark:text-cyan-300",
  "Business Tool": "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300",
  "Document Tool": "bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300",
  "Transport Services": "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300",
  "File Storage": "bg-teal-100 text-teal-800 dark:bg-teal-900/30 dark:text-teal-300"
};

export default function ProjectsPage() {
  const categories = [...new Set(projects.map(project => project.category))];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-background text-foreground py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Popular Services
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore AJ STUDIOZ's innovative AI-powered tools and platforms designed to revolutionize productivity and creativity.
          </p>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="py-8">
        <div className="container mx-auto px-4">
          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <TomoProjectCard
                key={project.id}
                project={project}
                index={index}
              />
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-16 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">The AJ STUDIOZ Ecosystem</h2>
              <p className="text-base text-muted-foreground mb-6">
                At AJ STUDIOZ, we've built innovative AI-powered tools to revolutionize how teams work, 
                code, and communicate. Each project represents our commitment to innovation, user experience, 
                and cutting-edge AI technology.
              </p>
              <div className="grid md:grid-cols-3 gap-8 mt-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#C5A059] mb-2">15</div>
                  <p className="text-muted-foreground">Products</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#C5A059] mb-2">10</div>
                  <p className="text-muted-foreground">AI Solutions</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#C5A059] mb-2">24/7</div>
                  <p className="text-muted-foreground">Always Available</p>
                </div>
              </div>
              
              {/* Call to Action */}
              <div className="mt-12 text-center">
                <h3 className="text-xl font-bold mb-3">Ready to Transform Your Workflow?</h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Discover how AJ STUDIOZ's AI-powered tools can enhance your productivity, streamline your development, 
                  and revolutionize your team's collaboration.
                </p>
                <BookProjectsModal />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}