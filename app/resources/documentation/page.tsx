"use client";

import { CodeBlock } from '@/components/ui/code-block';
import PricingCard from '@/components/pricing/pricing-card';
import { Toaster } from '@/components/ui/toaster';
import { INDIVIDUAL_PLANS } from '@/components/pricing/constants';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Download, Terminal, Code, Package, Sparkles, BookOpen, Zap, Settings, FileText, ExternalLink } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function DocumentationPage() {
  const [activeSection, setActiveSection] = useState("overview");

  // Navigation items
  const navItems = [
    { id: "overview", label: "Overview", icon: BookOpen },
    { id: "installation", label: "Installation", icon: Download },
    { id: "codeblocks", label: "Code Blocks", icon: Code },
    { id: "pricing", label: "Pricing Cards", icon: Package },
    { id: "usage", label: "Usage", icon: FileText },
    { id: "examples", label: "Examples", icon: Zap },
  ];

  const installationCode = `# Code Blocks Component
npx @ajstudioz14151/codeblocks-component@1.1.0 add

# Pricing Component  
npx @ajstudioz14151/pricing-component@1.2.0 add`;

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
}`;

  const pricingUsage = `import PricingCard from '@/components/pricing/pricing-card';
import { INDIVIDUAL_PLANS } from '@/components/pricing/constants';

export default function MyPage() {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {INDIVIDUAL_PLANS.map(plan => (
        <PricingCard key={plan.id} plan={plan} isYearly={false} />
      ))}
    </div>
  );
}`;

  return (
    <div className="min-h-screen bg-background flex">
      {/* Left Sidebar */}
      <div className="w-64 border-r border-border bg-card/50">
        <div className="p-6 border-b border-border">
          <Link href="/resources/documentation" className="flex items-center gap-2">
            <div className="h-8 w-8 bg-primary rounded-lg flex items-center justify-center">
              <Sparkles className="h-4 w-4 text-primary-foreground" />
            </div>
            <div>
              <div className="font-semibold text-sm">AJ STUDIOZ</div>
              <div className="text-xs text-muted-foreground">Components</div>
            </div>
          </Link>
        </div>
        
        <ScrollArea className="h-[calc(100vh-100px)]">
          <div className="p-4 space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`w-full flex items-center gap-3 px-3 py-2 text-sm rounded-lg transition-colors ${
                    activeSection === item.id
                      ? 'bg-primary text-primary-foreground'
                      : 'hover:bg-muted text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {item.label}
                </button>
              );
            })}
          </div>
        </ScrollArea>
      </div>

      {/* Main Content - 2 Column Layout */}
      <div className="flex-1">
        <ScrollArea className="h-screen">
          <div className="max-w-5xl mx-auto p-8">
            {/* Overview Section */}
            {activeSection === "overview" && (
              <div className="space-y-8">
                <div>
                  <h1 className="text-3xl font-bold mb-4">AJ STUDIOZ Components</h1>
                  <p className="text-lg text-muted-foreground mb-6">
                    Professional React components with premium styling. Install instantly via NPX CLI for Next.js and React/Vite projects.
                  </p>
                  {/* Inline Navigation */}
                  <div className="flex items-center gap-2 mb-6">
                    <Badge variant="outline" className="cursor-pointer hover:bg-muted">Installation</Badge>
                    <Badge variant="outline" className="cursor-pointer hover:bg-muted">Features</Badge>
                    <Badge variant="outline" className="cursor-pointer hover:bg-muted">Examples</Badge>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold mb-4">Quick Start</h3>
                  <CodeBlock language="bash" elementKey="quickstart">
                    {installationCode}
                  </CodeBlock>
                </div>
              </div>
            )}

            {/* Installation Section */}
            {activeSection === "installation" && (
              <div className="space-y-8">
                <div>
                  <h1 className="text-3xl font-bold mb-4">Installation</h1>
                  <p className="text-muted-foreground mb-6">
                    Install AJ STUDIOZ components using our NPX CLI with automatic project detection.
                  </p>
                  <div className="flex items-center gap-2 mb-6">
                    <Badge variant="outline" className="cursor-pointer hover:bg-muted">NPX CLI</Badge>
                    <Badge variant="outline" className="cursor-pointer hover:bg-muted">Auto Detection</Badge>
                    <Badge variant="outline" className="cursor-pointer hover:bg-muted">Dependencies</Badge>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold mb-4">NPX Installation</h3>
                  <CodeBlock language="bash" elementKey="npx-install">
                    {installationCode}
                  </CodeBlock>
                  <p className="text-sm text-muted-foreground mt-3">
                    The CLI automatically detects your project type (Next.js or Vite) and installs the appropriate components and dependencies.
                  </p>
                </div>
              </div>
            )}

            {/* Code Blocks Section */}
            {activeSection === "codeblocks" && (
              <div className="space-y-8">
                <div>
                  <h1 className="text-3xl font-bold mb-4">Code Blocks Component</h1>
                  <p className="text-muted-foreground mb-6">
                    Syntax-highlighted code blocks with copy functionality and theme support.
                  </p>
                  <div className="flex items-center gap-2 mb-6">
                    <Badge variant="outline" className="cursor-pointer hover:bg-muted">Usage</Badge>
                    <Badge variant="outline" className="cursor-pointer hover:bg-muted">Preview</Badge>
                    <Badge variant="outline" className="cursor-pointer hover:bg-muted">Reference</Badge>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold mb-4">Installation</h3>
                  <CodeBlock language="bash" elementKey="codeblocks-install">
                    npx @ajstudioz14151/codeblocks-component@1.1.0 add
                  </CodeBlock>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold mb-4">Basic Usage</h3>
                  <CodeBlock language="typescript" elementKey="codeblocks-usage">
                    {codeBlockUsage}
                  </CodeBlock>
                </div>

                {/* Live Preview */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold mb-4">Live Preview</h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-sm font-medium mb-3">JavaScript Example</h4>
                      <CodeBlock language="javascript" elementKey="preview-js">
{`// AJ STUDIOZ Code Blocks - Live Example
const message = 'Hello, World!';
console.log(message);

// Features:
// ✅ Syntax highlighting
// ✅ Copy to clipboard
// ✅ Theme support`}
                      </CodeBlock>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium mb-3">Python Example</h4>
                      <CodeBlock language="python" elementKey="preview-python">
{`# Python Data Analysis Example
import pandas as pd
import numpy as np

def analyze_data(data):
    return {
        'mean': np.mean(data),
        'std': np.std(data),
        'count': len(data)
    }

# Usage
dataset = [1, 2, 3, 4, 5]
results = analyze_data(dataset)`}
                      </CodeBlock>
                    </div>
                  </div>
                </div>

                {/* Component Reference */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold mb-4">Component Reference</h3>
                  <div className="border border-border rounded-lg overflow-hidden">
                    <div className="grid grid-cols-4 gap-4 p-3 bg-muted/50 text-sm font-medium text-muted-foreground border-b border-border">
                      <div>Name</div>
                      <div>Type</div>
                      <div>Default</div>
                      <div>Description</div>
                    </div>
                    <div className="space-y-0">
                      <div className="grid grid-cols-4 gap-4 p-3 text-sm border-b border-border">
                        <code className="text-primary">language</code>
                        <span className="text-muted-foreground">string</span>
                        <span>-</span>
                        <span>Programming language for syntax highlighting</span>
                      </div>
                      <div className="grid grid-cols-4 gap-4 p-3 text-sm border-b border-border">
                        <code className="text-primary">children</code>
                        <span className="text-muted-foreground">string</span>
                        <span>-</span>
                        <span>Code content to display</span>
                      </div>
                      <div className="grid grid-cols-4 gap-4 p-3 text-sm">
                        <code className="text-primary">elementKey</code>
                        <span className="text-muted-foreground">string</span>
                        <span>-</span>
                        <span>Unique identifier for the code block</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Pricing Section */}
            {activeSection === "pricing" && (
              <div className="space-y-8">
                <div>
                  <h1 className="text-3xl font-bold mb-4">Pricing Cards Component</h1>
                  <p className="text-muted-foreground mb-6">
                    Beautiful pricing cards with premium styling and customizable plans.
                  </p>
                  <div className="flex items-center gap-2 mb-6">
                    <Badge variant="outline" className="cursor-pointer hover:bg-muted">Usage</Badge>
                    <Badge variant="outline" className="cursor-pointer hover:bg-muted">Preview</Badge>
                    <Badge variant="outline" className="cursor-pointer hover:bg-muted">Reference</Badge>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold mb-4">Installation</h3>
                  <CodeBlock language="bash" elementKey="pricing-install">
                    npx @ajstudioz14151/pricing-component@1.2.0 add
                  </CodeBlock>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold mb-4">Basic Usage</h3>
                  <CodeBlock language="typescript" elementKey="pricing-usage">
                    {pricingUsage}
                  </CodeBlock>
                </div>

                {/* Live Preview */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold mb-4">Live Preview</h3>
                  <div className="space-y-4">
                    <h4 className="text-sm font-medium mb-3">Pricing Card Examples</h4>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="text-xs text-muted-foreground mb-3">Individual Plan</h5>
                        <PricingCard plan={INDIVIDUAL_PLANS[1]} isYearly={false} />
                      </div>
                      <div>
                        <h5 className="text-xs text-muted-foreground mb-3">Pro Plan</h5>
                        <PricingCard plan={INDIVIDUAL_PLANS[2]} isYearly={true} />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Component Reference */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold mb-4">Component Reference</h3>
                  <div className="border border-border rounded-lg overflow-hidden">
                    <div className="grid grid-cols-4 gap-4 p-3 bg-muted/50 text-sm font-medium text-muted-foreground border-b border-border">
                      <div>Name</div>
                      <div>Type</div>
                      <div>Default</div>
                      <div>Description</div>
                    </div>
                    <div className="space-y-0">
                      <div className="grid grid-cols-4 gap-4 p-3 text-sm border-b border-border">
                        <code className="text-primary">plan</code>
                        <span className="text-muted-foreground">PricingPlan</span>
                        <span>-</span>
                        <span>Plan configuration object</span>
                      </div>
                      <div className="grid grid-cols-4 gap-4 p-3 text-sm">
                        <code className="text-primary">isYearly</code>
                        <span className="text-muted-foreground">boolean</span>
                        <span>false</span>
                        <span>Whether to show yearly pricing</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Usage Section */}
            {activeSection === "usage" && (
              <div className="space-y-8">
                <div>
                  <h1 className="text-3xl font-bold mb-4">Usage Guide</h1>
                  <p className="text-muted-foreground mb-6">
                    Learn how to use AJ STUDIOZ components in your projects.
                  </p>
                  <div className="flex items-center gap-2 mb-6">
                    <Badge variant="outline" className="cursor-pointer hover:bg-muted">Import</Badge>
                    <Badge variant="outline" className="cursor-pointer hover:bg-muted">Theme</Badge>
                    <Badge variant="outline" className="cursor-pointer hover:bg-muted">Advanced</Badge>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold mb-4">Import Components</h3>
                  <CodeBlock language="typescript" elementKey="import-components">
{`// Import Code Block
import { CodeBlock } from '@/components/ui/code-block';
import { Toaster } from '@/components/ui/toaster';

// Import Pricing Card
import PricingCard from '@/components/pricing/pricing-card';
import { INDIVIDUAL_PLANS } from '@/components/pricing/constants';`}
                  </CodeBlock>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold mb-4">Theme Integration</h3>
                  <CodeBlock language="typescript" elementKey="theme-integration">
{`// Add to your layout.tsx
import { ThemeProvider } from '@/components/codeblocks/theme-provider';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}`}
                  </CodeBlock>
                </div>
              </div>
            )}

            {/* Examples Section */}
            {activeSection === "examples" && (
              <div className="space-y-8">
                <div>
                  <h1 className="text-3xl font-bold mb-4">Examples</h1>
                  <p className="text-muted-foreground mb-6">
                    Real-world examples of using AJ STUDIOZ components.
                  </p>
                  <div className="flex items-center gap-2 mb-6">
                    <Badge variant="outline" className="cursor-pointer hover:bg-muted">Basic</Badge>
                    <Badge variant="outline" className="cursor-pointer hover:bg-muted">Advanced</Badge>
                    <Badge variant="outline" className="cursor-pointer hover:bg-muted">Integration</Badge>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold mb-4">Documentation Page</h3>
                  <p className="text-muted-foreground mb-3">
                    Example of using CodeBlock for documentation.
                  </p>
                  <CodeBlock language="typescript" elementKey="docs-example">
{`import { CodeBlock } from '@/components/ui/code-block';

export default function DocsPage() {
  return (
    <div className="space-y-6">
      <h1>API Documentation</h1>
      
      <CodeBlock language="javascript" elementKey="api-demo">
        console.log("Hello World!");
      </CodeBlock>
      
      <p>This example shows basic usage...</p>
    </div>
  );
}`}
                  </CodeBlock>
                </div>
              </div>
            )}
          </div>
        </ScrollArea>
      </div>

      <Toaster />
    </div>
  );
}