'use client'

import { DocsSidebar } from '@/components/docs/docs-sidebar'
import { TabsLayout } from '@/components/docs/tabs-layout'
import { PreviewContainer } from '@/components/docs/preview-container'
import { CodeBlock } from '@/components/ui/code-block'
import { Toaster } from '@/components/ui/toaster'
import PricingCard from '@/components/pricing/pricing-card'
import { INDIVIDUAL_PLANS } from '@/components/pricing/constants'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function DocumentationPage() {
  const installationCode = `# Install Code Blocks Component
npx @ajstudioz14151/codeblocks-component@1.1.0 add

# Install Pricing Component  
npx @ajstudioz14151/pricing-component@1.2.0 add`

  const codeBlockUsage = `import { CodeBlock } from '@/components/ui/code-block';
import { Toaster } from '@/components/ui/toaster';

export default function MyPage() {
  return (
    <div>
      <CodeBlock language="javascript" elementKey="demo">
        {\`console.log('Hello, World!');\`}
      </CodeBlock>
      <Toaster />
    </div>
  );
}`

  const pricingUsage = `import PricingCard from '@/components/pricing/pricing-card';
import { INDIVIDUAL_PLANS } from '@/components/pricing/constants';

export default function MyPage() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {INDIVIDUAL_PLANS.map(plan => (
        <PricingCard key={plan.id} plan={plan} isYearly={false} />
      ))}
    </div>
  );
}`

  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <Link 
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>

        {/* Page Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Documentation
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Learn how to integrate and use AJ STUDIOZ components with comprehensive guides, examples, and API references.
          </p>
        </div>

        {/* Layout: Sidebar + Content */}
        <div className="flex gap-8">
          <DocsSidebar />

          {/* Main Content */}
          <div className="flex-1 min-w-0 space-y-16">
            {/* Introduction Section */}
            <section id="introduction">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Introduction
              </h2>
              <div className="prose prose-slate dark:prose-invert max-w-none">
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Welcome to AJ STUDIOZ documentation. Our component library provides beautifully designed, 
                  accessible components that you can copy and paste into your apps. Built with React, TypeScript, 
                  and Tailwind CSS.
                </p>
                <div className="flex gap-2 mt-6">
                  <Badge variant="secondary">React 18+</Badge>
                  <Badge variant="secondary">TypeScript</Badge>
                  <Badge variant="secondary">Tailwind CSS</Badge>
                  <Badge variant="secondary">Next.js 14+</Badge>
                </div>
              </div>
            </section>

            {/* Installation Section */}
            <section id="installation">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Installation
              </h2>
              <div className="space-y-6">
                <p className="text-muted-foreground text-lg">
                  Install components directly into your project using our CLI tool:
                </p>
                
                <CodeBlock language="bash" elementKey="install">
                  {installationCode}
                </CodeBlock>

                <div className="bg-accent border border-border rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                    <span className="text-2xl">💡</span>
                    Prerequisites
                  </h3>
                  <ul className="text-muted-foreground space-y-2 ml-6 list-disc">
                    <li>Node.js 18.0 or later</li>
                    <li>React 18.0 or later</li>
                    <li>Tailwind CSS configured in your project</li>
                    <li>Next.js 14+ (recommended)</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Configuration Section */}
            <section id="configuration">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Configuration
              </h2>
              <div className="space-y-6">
                <p className="text-muted-foreground text-lg">
                  After installation, configure your Tailwind CSS to include our component paths:
                </p>
                
                <CodeBlock language="javascript" elementKey="config">
                  {`// tailwind.config.js
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}`}
                </CodeBlock>
              </div>
            </section>

            {/* Code Blocks Component */}
            <section id="codeblocks">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Code Blocks
              </h2>
              
              <TabsLayout
                preview={
                  <PreviewContainer>
                    <div className="w-full max-w-2xl">
                      <CodeBlock language="javascript" elementKey="demo-preview">
                        {`// Example Code Block
const greeting = 'Hello, World!';

function sayHello(name) {
  return \`\${greeting} \${name}!\`;
}

console.log(sayHello('Developer'));`}
                      </CodeBlock>
                    </div>
                  </PreviewContainer>
                }
                code={
                  <CodeBlock language="tsx" elementKey="codeblock-usage">
                    {codeBlockUsage}
                  </CodeBlock>
                }
                docs={
                  <div className="prose prose-slate dark:prose-invert max-w-none">
                    <h3 className="text-xl font-semibold text-foreground mb-4">Features</h3>
                    <ul className="text-muted-foreground space-y-2">
                      <li>Syntax highlighting with Sugar High</li>
                      <li>Copy to clipboard functionality</li>
                      <li>Line wrapping toggle</li>
                      <li>Line numbers</li>
                      <li>Multiple language support</li>
                      <li>Toast notifications</li>
                    </ul>
                  </div>
                }
              />
            </section>

            {/* Pricing Cards Component */}
            <section id="pricing">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Pricing Cards
              </h2>
              
              <TabsLayout
                preview={
                  <PreviewContainer minHeight="600px" centered={false}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                      {INDIVIDUAL_PLANS.map(plan => (
                        <PricingCard key={plan.id} plan={plan} isYearly={false} />
                      ))}
                    </div>
                  </PreviewContainer>
                }
                code={
                  <CodeBlock language="tsx" elementKey="pricing-usage">
                    {pricingUsage}
                  </CodeBlock>
                }
                docs={
                  <div className="prose prose-slate dark:prose-invert max-w-none">
                    <h3 className="text-xl font-semibold text-foreground mb-4">Features</h3>
                    <ul className="text-muted-foreground space-y-2">
                      <li>Responsive grid layout</li>
                      <li>Monthly/Yearly toggle</li>
                      <li>Feature comparison</li>
                      <li>Call-to-action buttons</li>
                      <li>Popular badge support</li>
                      <li>Dark mode compatible</li>
                    </ul>
                  </div>
                }
              />
            </section>

            {/* Authentication Section */}
            <section id="authentication">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Authentication
              </h2>
              <div className="space-y-6">
                <p className="text-muted-foreground text-lg">
                  Learn how to authenticate with the AJ STUDIOZ API:
                </p>
                
                <CodeBlock language="typescript" elementKey="auth">
                  {`// Authentication Example
const API_KEY = process.env.AJSTUDIOZ_API_KEY;

const headers = {
  'Authorization': \`Bearer \${API_KEY}\`,
  'Content-Type': 'application/json'
};

const response = await fetch('https://api.ajstudioz.co.in/v1/endpoint', {
  method: 'POST',
  headers,
  body: JSON.stringify({ /* your data */ })
});`}
                </CodeBlock>
              </div>
            </section>

            {/* API Endpoints Section */}
            <section id="endpoints">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                API Endpoints
              </h2>
              <div className="space-y-6">
                <p className="text-muted-foreground text-lg">
                  Explore available API endpoints:
                </p>
                
                <div className="grid gap-4">
                  <div className="border border-border rounded-xl p-6 bg-accent">
                    <div className="flex items-center gap-3 mb-3">
                      <Badge className="bg-green-500/10 text-green-500 hover:bg-green-500/20">GET</Badge>
                      <code className="text-sm font-mono text-foreground">/api/v1/projects</code>
                    </div>
                    <p className="text-muted-foreground">Retrieve all projects</p>
                  </div>

                  <div className="border border-border rounded-xl p-6 bg-accent">
                    <div className="flex items-center gap-3 mb-3">
                      <Badge className="bg-blue-500/10 text-blue-500 hover:bg-blue-500/20">POST</Badge>
                      <code className="text-sm font-mono text-foreground">/api/v1/projects</code>
                    </div>
                    <p className="text-muted-foreground">Create a new project</p>
                  </div>

                  <div className="border border-border rounded-xl p-6 bg-accent">
                    <div className="flex items-center gap-3 mb-3">
                      <Badge className="bg-yellow-500/10 text-yellow-500 hover:bg-yellow-500/20">PUT</Badge>
                      <code className="text-sm font-mono text-foreground">/api/v1/projects/:id</code>
                    </div>
                    <p className="text-muted-foreground">Update an existing project</p>
                  </div>

                  <div className="border border-border rounded-xl p-6 bg-accent">
                    <div className="flex items-center gap-3 mb-3">
                      <Badge className="bg-red-500/10 text-red-500 hover:bg-red-500/20">DELETE</Badge>
                      <code className="text-sm font-mono text-foreground">/api/v1/projects/:id</code>
                    </div>
                    <p className="text-muted-foreground">Delete a project</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      <Toaster />
    </main>
  )
}
