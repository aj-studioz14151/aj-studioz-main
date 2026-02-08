import { Badge } from "@/components/ui/badge";
import TomoProjectCard from "@/components/tomo-project-card";
import { BookProjectsModal } from "@/components/book-projects-modal";
import { projects } from "@/lib/projects-data";

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