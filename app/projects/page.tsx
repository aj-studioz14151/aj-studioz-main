import { Badge } from "@/components/ui/badge";
import TomoProjectCard from "@/components/tomo-project-card";
import { BookProjectsModal } from "@/components/book-projects-modal";
import AppIntegrationComponent from "@/components/app-integration";

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
  }
];

const categoryColors: { [key: string]: string } = {
  "AI Development Tool": "bg-[#C5A059]/10 text-[#C5A059] dark:bg-[#C5A059]/20 dark:text-[#C5A059]",
  "AI Email Assistant": "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
  "AI Chat": "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300",
  "AI Research Tool": "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300",
  "Staff Portal": "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200"
};

export default function ProjectsPage() {
  const categories = [...new Set(projects.map(project => project.category))];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-background text-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Our Projects
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto">
            Explore our innovative TOMO suite of AI-powered tools and platforms, 
            built by AJ STUDIOZ to revolutionize productivity and creativity.
          </p>
          <div className="mt-8 flex justify-center">
            <BookProjectsModal />
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <div className="mb-12 text-center">
            <h2 className="text-2xl font-bold mb-6">Project Categories</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <Badge 
                  key={category}
                  variant="secondary" 
                  className={`px-4 py-2 text-sm font-medium ${categoryColors[category]}`}
                >
                  {category}
                </Badge>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <TomoProjectCard
                key={project.id}
                project={project}
                index={index}
              />
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-20 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">The TOMO Ecosystem</h2>
              <p className="text-lg text-muted-foreground mb-8">
                At AJ STUDIOZ, we've built the TOMO suite of AI-powered tools to revolutionize how teams work, 
                code, and communicate. Each project represents our commitment to innovation, user experience, 
                and cutting-edge AI technology.
              </p>
              <div className="grid md:grid-cols-3 gap-8 mt-12">
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#C5A059] mb-2">{projects.length}</div>
                  <p className="text-muted-foreground">TOMO Products</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#C5A059] mb-2">{categories.length}</div>
                  <p className="text-muted-foreground">AI Solutions</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#C5A059] mb-2">24/7</div>
                  <p className="text-muted-foreground">Always Available</p>
                </div>
              </div>
              
              {/* Call to Action */}
              <div className="mt-16 text-center">
                <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Workflow?</h3>
                <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Discover how TOMO's AI-powered tools can enhance your productivity, streamline your development, 
                  and revolutionize your team's collaboration.
                </p>
                <BookProjectsModal />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Integration Services Section */}
      <AppIntegrationComponent />
    </div>
  );
}