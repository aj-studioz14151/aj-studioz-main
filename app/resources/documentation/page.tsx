"use client";

import { CodeBlock } from '@/components/ui/code-block';
import PricingCard from '@/components/pricing/pricing-card';
import { Toaster } from '@/components/ui/toaster';
import { INDIVIDUAL_PLANS } from '@/components/pricing/constants';
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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

export default function PricingPage() {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {INDIVIDUAL_PLANS.map(plan => (
        <PricingCard key={plan.id} plan={plan} isYearly={false} />
      ))}
    </div>
  );
}`;

  const javascriptExample = `// Modern JavaScript Example
const fetchUserData = async (userId) => {
  try {
    const response = await fetch(\`/api/users/\${userId}\`);
    const userData = await response.json();
    return userData;
  } catch (error) {
    console.error('Error fetching user:', error);
    throw error;
  }
};

// Usage
fetchUserData(123).then(user => {
  console.log('User data:', user);
});`;

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
            
            <div className="pt-4 border-t border-border mt-4">
              <div className="text-xs font-medium text-muted-foreground mb-2 px-3">RESOURCES</div>
              <Link href="/resources/codeblocks" className="flex items-center gap-3 px-3 py-2 text-sm rounded-lg hover:bg-muted text-muted-foreground hover:text-foreground">
                <Code className="h-4 w-4" />
                Code Blocks Demo
              </Link>
              <Link href="/resources/pricing" className="flex items-center gap-3 px-3 py-2 text-sm rounded-lg hover:bg-muted text-muted-foreground hover:text-foreground">
                <Package className="h-4 w-4" />
                Pricing Demo
              </Link>
              <a href="https://github.com/kamesh6592-cell" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-3 py-2 text-sm rounded-lg hover:bg-muted text-muted-foreground hover:text-foreground">
                <ExternalLink className="h-4 w-4" />
                GitHub
              </a>
            </div>
          </div>
        </ScrollArea>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex">
        <div className="flex-1 max-w-3xl">
          <ScrollArea className="h-screen">
            <div className="p-8">
              {/* Overview Section */}
              {activeSection === "overview" && (
                <div className="space-y-8">
                  <div>
                    <h1 className="text-3xl font-bold mb-4">AJ STUDIOZ Components</h1>
                    <p className="text-lg text-muted-foreground mb-6">
                      Professional React components with premium styling. Install instantly via NPX CLI for Next.js and React/Vite projects.
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      <Badge variant="secondary">TypeScript Ready</Badge>
                      <Badge variant="secondary">Dark/Light Theme</Badge>
                      <Badge variant="secondary">Copy to Clipboard</Badge>
                      <Badge variant="secondary">Responsive Design</Badge>
                    </div>
                  </div>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Zap className="h-5 w-5 text-primary" />
                        Quick Start
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CodeBlock language="bash" elementKey="quickstart">
                        {installationCode}
                      </CodeBlock>
                    </CardContent>
                  </Card>
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
                  </div>

                  <div className="space-y-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Terminal className="h-5 w-5" />
                          NPX Installation
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CodeBlock language="bash" elementKey="npx-install">
                          {installationCode}
                        </CodeBlock>
                        <p className="text-sm text-muted-foreground mt-3">
                          The CLI automatically detects your project type (Next.js or Vite) and installs the appropriate components and dependencies.
                        </p>
                      </CardContent>
                    </Card>

                    <div className="grid md:grid-cols-2 gap-4">
                      <Card>
                        <CardHeader>
                          <CardTitle className="text-lg">Next.js Projects</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-2">
                          <div className="flex items-center gap-2 text-sm">
                            <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                            Uses Geist_Mono fonts
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                            Updates globals.css
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                            next-themes integration
                          </div>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader>
                          <CardTitle className="text-lg">React/Vite Projects</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-2">
                          <div className="flex items-center gap-2 text-sm">
                            <div className="h-2 w-2 bg-blue-500 rounded-full"></div>
                            Standard monospace fonts
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <div className="h-2 w-2 bg-blue-500 rounded-full"></div>
                            Updates index.css
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <div className="h-2 w-2 bg-blue-500 rounded-full"></div>
                            No Next.js dependencies
                          </div>
                        </CardContent>
                      </Card>
                    </div>
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
                  </div>

                  <Card>
                    <CardHeader>
                      <CardTitle>Installation</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CodeBlock language="bash" elementKey="codeblocks-install-detail">
                        npx @ajstudioz14151/codeblocks-component@1.1.0 add
                      </CodeBlock>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Basic Usage</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CodeBlock language="typescript" elementKey="codeblocks-usage-detail">
                        {codeBlockUsage}
                      </CodeBlock>
                    </CardContent>
                  </Card>

                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Supported Languages</h3>
                    <div className="grid grid-cols-3 gap-2">
                      {['JavaScript', 'TypeScript', 'Python', 'Java', 'C++', 'SQL', 'HTML', 'CSS', 'JSON'].map(lang => (
                        <Badge key={lang} variant="outline">{lang}</Badge>
                      ))}
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
                  </div>

                  <Card>
                    <CardHeader>
                      <CardTitle>Installation</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CodeBlock language="bash" elementKey="pricing-install-detail">
                        npx @ajstudioz14151/pricing-component@1.2.0 add
                      </CodeBlock>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Basic Usage</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CodeBlock language="typescript" elementKey="pricing-usage-detail">
                        {pricingUsage}
                      </CodeBlock>
                    </CardContent>
                  </Card>
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
                  </div>

                  <Card>
                    <CardHeader>
                      <CardTitle>Import Components</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CodeBlock language="typescript" elementKey="import-components">
{`// Import Code Block
import { CodeBlock } from '@/components/ui/code-block';
import { Toaster } from '@/components/ui/toaster';

// Import Pricing Card
import PricingCard from '@/components/pricing/pricing-card';
import { INDIVIDUAL_PLANS } from '@/components/pricing/constants';`}
                      </CodeBlock>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Theme Integration</CardTitle>
                    </CardHeader>
                    <CardContent>
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
                    </CardContent>
                  </Card>
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
                  </div>

                  <Card>
                    <CardHeader>
                      <CardTitle>Advanced Code Block</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CodeBlock language="javascript" elementKey="advanced-example">
                        {javascriptExample}
                      </CodeBlock>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Documentation Page</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CodeBlock language="typescript" elementKey="docs-example">
{`import { CodeBlock } from '@/components/ui/code-block';

export default function DocsPage() {
  const apiExample = \`
// API Example
const response = await fetch('/api/users');
const users = await response.json();
  \`;

  return (
    <div className="space-y-6">
      <h1>API Documentation</h1>
      
      <CodeBlock language="javascript" elementKey="api-demo">
        {apiExample}
      </CodeBlock>
      
      <p>This endpoint returns a list of users...</p>
    </div>
  );
}`}
                      </CodeBlock>
                    </CardContent>
                  </Card>
                </div>
              )}
            </div>
          </ScrollArea>
        </div>

        {/* Right Preview Panel */}
        <div className="w-80 border-l border-border bg-card/30">
          <ScrollArea className="h-screen">
            <div className="p-6">
              <div className="text-sm font-medium text-muted-foreground mb-4">LIVE PREVIEW</div>
              
              {(activeSection === "codeblocks" || activeSection === "examples" || activeSection === "usage") && (
                <div className="space-y-4">
                  <div>
                    <div className="text-xs text-muted-foreground mb-2">Code Block Example</div>
                    <CodeBlock language="javascript" elementKey="preview-js">
{`// AJ STUDIOZ Example
const message = 'Hello World!';
console.log(message);

// Features:
// ✅ Syntax highlighting  
// ✅ Copy to clipboard
// ✅ Theme support`}
                    </CodeBlock>
                  </div>
                  
                  <div>
                    <div className="text-xs text-muted-foreground mb-2">Python Example</div>
                    <CodeBlock language="python" elementKey="preview-python">
{`# Python Example
def greet(name):
    return f"Hello, {name}!"

message = greet("AJ STUDIOZ")
print(message)`}
                    </CodeBlock>
                  </div>
                </div>
              )}

              {(activeSection === "pricing" || activeSection === "overview") && (
                <div className="space-y-4">
                  <div>
                    <div className="text-xs text-muted-foreground mb-2">Pricing Card Preview</div>
                    <PricingCard plan={INDIVIDUAL_PLANS[1]} isYearly={false} />
                  </div>
                </div>
              )}

              {activeSection === "installation" && (
                <div className="space-y-4">
                  <div>
                    <div className="text-xs text-muted-foreground mb-2">Installation Output</div>
                    <div className="bg-muted p-3 rounded-lg text-xs font-mono space-y-1">
                      <div className="text-green-600">✓ Dependencies installed</div>
                      <div className="text-green-600">✓ Component files created</div>
                      <div className="text-green-600">✓ CSS updated</div>
                      <div className="text-blue-600">🎉 Installation complete!</div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="text-xs text-muted-foreground mb-2">Quick Test</div>
                    <CodeBlock language="bash" elementKey="preview-test">
                      npm run dev
                    </CodeBlock>
                  </div>
                </div>
              )}
              
              <div className="pt-6 border-t border-border mt-6">
                <div className="text-xs font-medium text-muted-foreground mb-3">QUICK LINKS</div>
                <div className="space-y-2">
                  <Link href="/resources/codeblocks" className="flex items-center gap-2 text-sm hover:text-primary">
                    <Code className="h-3 w-3" />
                    Code Blocks Demo
                  </Link>
                  <Link href="/resources/pricing" className="flex items-center gap-2 text-sm hover:text-primary">
                    <Package className="h-3 w-3" />
                    Pricing Demo
                  </Link>
                  <a href="https://github.com/kamesh6592-cell" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm hover:text-primary">
                    <ExternalLink className="h-3 w-3" />
                    View Source
                  </a>
                </div>
              </div>
            </div>
          </ScrollArea>
        </div>
      </div>

      <Toaster />
    </div>
  );
}