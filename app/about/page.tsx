import { ProfileCard } from "@/components/profile-card";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-background text-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            About AJ STUDIOZ
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto">
            Pioneering the future of artificial intelligence and conversational technology 
            to transform how businesses connect with their customers.
          </p>
        </div>
      </div>

      {/* Company Story */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  AJ STUDIOZ Technologies is at the forefront of AI innovation, specializing in 
                  creating intelligent chatbot solutions that revolutionize customer interactions. 
                  We believe in making advanced AI technology accessible to businesses of all sizes.
                </p>
                <p className="text-lg text-muted-foreground">
                  Founded with the vision to bridge the gap between human communication and 
                  artificial intelligence, we develop cutting-edge solutions that understand 
                  context, emotion, and intent to deliver exceptional user experiences.
                </p>
              </div>
              <div className="relative">
                <div className="w-full h-64 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-2xl flex items-center justify-center">
                  <img src="/AJ.svg" alt="AJ STUDIOZ" className="w-24 h-24 opacity-50" />
                </div>
              </div>
            </div>

            {/* Technologies & Expertise */}
            <div className="mb-20">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Expertise</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center p-6 rounded-xl border border-border">
                  <div className="w-12 h-12 bg-foreground/10 rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl">🤖</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">AI & Machine Learning</h3>
                  <p className="text-muted-foreground">
                    Advanced natural language processing and deep learning algorithms 
                    that power intelligent conversations.
                  </p>
                </div>
                
                <div className="text-center p-6 rounded-xl border border-border">
                  <div className="w-12 h-12 bg-foreground/10 rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl">💬</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Conversational AI</h3>
                  <p className="text-muted-foreground">
                    Building chatbots that understand context, maintain conversation flow, 
                    and provide human-like interactions.
                  </p>
                </div>
                
                <div className="text-center p-6 rounded-xl border border-border">
                  <div className="w-12 h-12 bg-foreground/10 rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Enterprise Solutions</h3>
                  <p className="text-muted-foreground">
                    Scalable AI solutions designed for enterprise-level performance, 
                    security, and integration capabilities.
                  </p>
                </div>
              </div>
            </div>

            {/* Founders Section */}
            <div className="mb-20">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Meet Our Founders</h2>
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <div className="flex justify-center">
                  <div className="w-full">
                    <ProfileCard
                      name="KAMESH AJ"
                      description="Founder & Visionary entrepreneur pioneering AI technology. Leading the revolution in conversational AI and machine learning solutions for next-generation businesses."
                      image="/WhatsApp Image 2025-11-04 at 13.19.15_d23503e7.jpg"
                      isVerified={true}
                      followers={2840}
                      following={180}
                      enableAnimations={true}
                    />
                    <div className="mt-4 text-center">
                      <a 
                        href="https://www.ajstudioz.co.in/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-foreground text-background rounded-lg hover:bg-muted-foreground transition-colors font-medium text-sm"
                      >
                        View Portfolio →
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-center">
                  <div className="w-full">
                    <ProfileCard
                      name="SJ KANISH"
                      description="Co-Founder & Technology innovator driving AI excellence. Expert in building scalable solutions and transforming ideas into cutting-edge products for modern enterprises."
                      image="/WhatsApp Image 2025-11-04 at 13.19.15_d23503e7.jpg"
                      isVerified={true}
                      followers={1520}
                      following={145}
                      enableAnimations={true}
                    />
                    <div className="mt-4 text-center">
                      <a 
                        href="https://kanish-sj.vercel.app/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-foreground text-background rounded-lg hover:bg-muted-foreground transition-colors font-medium text-sm"
                      >
                        View Portfolio →
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Featured Projects Section */}
            <div className="mb-20">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Featured Projects</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                <div className="p-6 rounded-xl border border-border bg-card">
                  <div className="mb-4">
                    <span className="px-3 py-1 bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300 text-xs font-medium rounded-full">AI Tool</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">NexaRiq</h3>
                  <p className="text-muted-foreground mb-4">
                    An advanced AI-powered platform designed to revolutionize the way we interact with artificial intelligence.
                  </p>
                  <a href="https://nexariq.ajstudioz.co.in/" target="_blank" rel="noopener noreferrer" 
                     className="text-foreground hover:text-muted-foreground font-medium flex items-center gap-2">
                    Visit Project →
                  </a>
                </div>

                <div className="p-6 rounded-xl border border-border bg-card">
                  <div className="mb-4">
                    <span className="px-3 py-1 bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300 text-xs font-medium rounded-full">Development Tool</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">NexaRiq Code Editor</h3>
                  <p className="text-muted-foreground mb-4">
                    A next-generation code editor integrated with AI agents to assist developers in coding.
                  </p>
                  <a href="https://nexariq-agentic-code-editor.vercel.app/" target="_blank" rel="noopener noreferrer" 
                     className="text-foreground hover:text-muted-foreground font-medium flex items-center gap-2">
                    Visit Project →
                  </a>
                </div>

                <div className="p-6 rounded-xl border border-border bg-card">
                  <div className="mb-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 text-xs font-medium rounded-full">Education</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">GPA & CGPA Calculator</h3>
                  <p className="text-muted-foreground mb-4">
                    An intuitive tool for students to accurately calculate their Grade Point Averages.
                  </p>
                  <a href="https://cgpa-calc-aj.vercel.app/" target="_blank" rel="noopener noreferrer" 
                     className="text-foreground hover:text-muted-foreground font-medium flex items-center gap-2">
                    Visit Project →
                  </a>
                </div>
              </div>
              <div className="text-center">
                <a href="/projects" 
                   className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-lg hover:bg-muted-foreground transition-colors font-medium">
                  View All Projects
                  <span>→</span>
                </a>
              </div>
            </div>

            {/* Values */}
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-12">Our Values</h2>
              <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Innovation First</h3>
                  <p className="text-muted-foreground">
                    We constantly push the boundaries of what's possible with AI technology, 
                    staying ahead of industry trends and emerging technologies.
                  </p>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Customer-Centric</h3>
                  <p className="text-muted-foreground">
                    Every solution we build is designed with the end-user in mind, 
                    ensuring exceptional experiences and measurable business results.
                  </p>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Ethical AI</h3>
                  <p className="text-muted-foreground">
                    We develop responsible AI that respects privacy, promotes transparency, 
                    and ensures fair and unbiased interactions.
                  </p>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Continuous Learning</h3>
                  <p className="text-muted-foreground">
                    Our AI systems and team constantly evolve, learning from every interaction 
                    to deliver better solutions and improved performance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}