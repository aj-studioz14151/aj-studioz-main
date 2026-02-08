'use client'

import ComponentsLayout from '@/components/layout/components-layout'
import { ComponentTabs, PreviewContainer } from '@/components/layout/component-tabs'
import { CodeBlock } from '@/components/ui/code-block'
import TomoProjectCard from '@/components/tomo-project-card'
import { Toaster } from '@/components/ui/toaster'

export default function ProjectCardsPage() {
  const demoProject = {
    id: 1,
    title: 'TOMO - AI-Powered Chat Assistant',
    description: 'An advanced AI chatbot with natural language processing capabilities',
    category: 'AI Chat',
    image: 'https://ajstudioz.co.in/tomo-chat-preview.png',
    link: 'https://tomo.ajstudioz.co.in',
    slug: 'tomo-chat'
  }

  const usageCode = `import TomoProjectCard from '@/components/tomo-project-card';

const project = {
  id: 1,
  title: 'TOMO - AI-Powered Chat',
  description: 'Advanced AI chatbot',
  category: 'AI Chat',
  image: '/preview.png',
  link: 'https://example.com'
};

export default function ProjectsPage() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      <TomoProjectCard project={project} index={0} />
    </div>
  );
}`

  return (
    <ComponentsLayout>
      <ComponentTabs
        title="Project Cards"
        description="Showcase project cards with 30px rounded corners, hover effects, and theme-aware colors."
        preview={
          <div className="space-y-6">
            <PreviewContainer minHeight="450px">
              <div className="grid md:grid-cols-2 gap-6 w-full max-w-4xl">
                <TomoProjectCard project={demoProject} index={0} />
                <TomoProjectCard 
                  project={{
                    ...demoProject,
                    id: 2,
                    title: 'TOMO Bot - AI Email Assistant',
                    category: 'AI Email Assistant'
                  }} 
                  index={1} 
                />
              </div>
            </PreviewContainer>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-6 rounded-xl border border-border bg-accent">
                <h3 className="text-lg font-semibold mb-2">🎨 Theme Aware</h3>
                <p className="text-sm text-muted-foreground">
                  Automatically adapts to light and dark modes
                </p>
              </div>
              <div className="p-6 rounded-xl border border-border bg-accent">
                <h3 className="text-lg font-semibold mb-2">📹 Video Support</h3>
                <p className="text-sm text-muted-foreground">
                  Play videos on hover for interactive previews
                </p>
              </div>
              <div className="p-6 rounded-xl border border-border bg-accent">
                <h3 className="text-lg font-semibold mb-2">🔗 Navigation</h3>
                <p className="text-sm text-muted-foreground">
                  Click to navigate to project detail pages
                </p>
              </div>
            </div>
          </div>
        }
        code={
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Usage</h3>
              <CodeBlock language="tsx" elementKey="usage">
                {usageCode}
              </CodeBlock>
            </div>

            <div className="p-6 rounded-xl border border-border bg-accent">
              <h3 className="text-lg font-semibold mb-3">Props</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <code className="px-2 py-1 rounded bg-muted text-foreground">project</code>
                  <span className="text-muted-foreground ml-2">- Project object with title, description, etc.</span>
                </div>
                <div>
                  <code className="px-2 py-1 rounded bg-muted text-foreground">index</code>
                  <span className="text-muted-foreground ml-2">- Index for staggered animation delay</span>
                </div>
                <div>
                  <code className="px-2 py-1 rounded bg-muted text-foreground">onDelete</code>
                  <span className="text-muted-foreground ml-2">- Optional callback for delete action</span>
                </div>
                <div>
                  <code className="px-2 py-1 rounded bg-muted text-foreground">onToggleFavorite</code>
                  <span className="text-muted-foreground ml-2">- Optional callback for favorite toggle</span>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-border bg-accent">
              <h3 className="text-lg font-semibold mb-3">Design Features</h3>
              <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
                <li>30px outer border radius (React Bits style)</li>
                <li>24px inner content border radius</li>
                <li>6px padding between borders</li>
                <li>Theme-aware colors using CSS variables</li>
                <li>Single-line title and category with ellipsis</li>
                <li>Smooth hover transitions</li>
              </ul>
            </div>
          </div>
        }
        contribute={
          <div className="prose prose-slate dark:prose-invert max-w-none">
            <h3 className="text-2xl font-bold">Contribute</h3>
            <p>
              This component follows the React Bits design system. Help improve it by submitting feedback or enhancements.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="https://github.com/aj-studioz14151/aj-studioz-main"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl bg-foreground text-background hover:bg-muted-foreground transition-colors font-medium inline-block no-underline"
              >
                View on GitHub
              </a>
            </div>
          </div>
        }
      />
      <Toaster />
    </ComponentsLayout>
  )
}
