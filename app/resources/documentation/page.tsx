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

        {/* Right Reference Panel */}
        <div className="w-80 border-l border-border bg-card/30">
          <ScrollArea className="h-screen">
            <div className="p-6">
              {/* Reference Section for Code Blocks */}
              {(activeSection === "codeblocks") && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Reference</h3>
                    <div className="space-y-4">
                      <div className="border border-border rounded-lg overflow-hidden">
                        <div className="grid grid-cols-3 gap-4 p-3 bg-muted/50 text-xs font-medium text-muted-foreground border-b border-border">
                          <div>Name</div>
                          <div>Description</div>
                          <div>Default</div>
                        </div>
                        <div className="space-y-0">
                          <div className="grid grid-cols-3 gap-4 p-3 text-xs border-b border-border">
                            <code className="text-primary">language</code>
                            <span className="text-muted-foreground">string</span>
                            <span>-</span>
                          </div>
                          <div className="grid grid-cols-3 gap-4 p-3 text-xs border-b border-border">
                            <code className="text-primary">children</code>
                            <span className="text-muted-foreground">string</span>
                            <span>-</span>
                          </div>
                          <div className="grid grid-cols-3 gap-4 p-3 text-xs">
                            <code className="text-primary">elementKey</code>
                            <span className="text-muted-foreground">string</span>
                            <span>-</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-sm font-semibold">Supported Languages</h4>
                    <div className="grid grid-cols-1 gap-2 text-xs">
                      {['JavaScript', 'TypeScript', 'Python', 'Java', 'C++', 'SQL', 'HTML', 'CSS', 'JSON'].map(lang => (
                        <div key={lang} className="flex items-center gap-2 p-2 bg-muted rounded">
                          <div className="h-2 w-2 bg-primary rounded-full"></div>
                          <code>{lang.toLowerCase()}</code>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Reference Section for Pricing */}
              {(activeSection === "pricing") && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Reference</h3>
                    <div className="space-y-4">
                      <div className="border border-border rounded-lg overflow-hidden">
                        <div className="grid grid-cols-3 gap-4 p-3 bg-muted/50 text-xs font-medium text-muted-foreground border-b border-border">
                          <div>Name</div>
                          <div>Description</div>
                          <div>Default</div>
                        </div>
                        <div className="space-y-0">
                          <div className="grid grid-cols-3 gap-4 p-3 text-xs border-b border-border">
                            <code className="text-primary">plan</code>
                            <span className="text-muted-foreground">PricingPlan</span>
                            <span>-</span>
                          </div>
                          <div className="grid grid-cols-3 gap-4 p-3 text-xs">
                            <code className="text-primary">isYearly</code>
                            <span className="text-muted-foreground">boolean</span>
                            <span>false</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-sm font-semibold">Plan Structure</h4>
                    <CodeBlock language="typescript" elementKey="plan-structure">
{`interface PricingPlan {
  id: string;
  name: string;
  price: string;
  yearlyPrice?: string;
  features: string[];
  popular?: boolean;
}`}
                    </CodeBlock>
                  </div>
                </div>
              )}

              {/* Usage Examples */}
              {(activeSection === "usage") && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Examples</h3>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-sm font-semibold">Custom composition</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      Custom code blocks can be created by using <code className="bg-muted px-1 rounded text-primary">CodeBlock</code> component composition.
                    </p>
                    <p className="text-sm text-muted-foreground mb-3">
                      <code className="bg-muted px-1 rounded text-primary">CodeBlock</code> can be used to render code within the base container, with custom markup around it.
                    </p>

                    <CodeBlock language="typescript" elementKey="custom-composition">
{`interface Point {
  x: number;
  y: number;
}

function printPoint(p: Point) {
  console.log('Point(' + p.x + ', ' + p.y + ')');
}`}
                    </CodeBlock>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-sm font-semibold">With Custom Header</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      In this example, a header is being added above the code block with a bespoke <code className="bg-muted px-1 rounded text-primary">CopyButton</code>.
                    </p>
                    
                    <CodeBlock language="javascript" elementKey="with-header">
{`// Advanced usage with custom wrapper
export function DocumentationCode({ title, children }) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <h4 className="font-mono text-sm">{title}</h4>
        <CopyButton text={children} />
      </div>
      <CodeBlock language="javascript">
        {children}
      </CodeBlock>
    </div>
  );
}`}
                    </CodeBlock>
                  </div>
                </div>
              )}

              {/* Examples Section */}
              {(activeSection === "examples") && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Examples</h3>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-sm font-semibold">API Documentation</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      Perfect for API documentation with request/response examples.
                    </p>
                    
                    <CodeBlock language="javascript" elementKey="api-docs">
{`// Fetch user data
const response = await fetch('/api/users/123');
const user = await response.json();

// Response format
{
  "id": 123,
  "name": "John Doe",
  "email": "john@example.com",
  "createdAt": "2024-01-15T10:30:00Z"
}`}
                    </CodeBlock>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-sm font-semibold">Tutorial Content</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      Interactive code examples for tutorials and learning materials.
                    </p>
                    
                    <CodeBlock language="python" elementKey="tutorial">
{`# Machine Learning Example
import numpy as np
from sklearn.model_selection import train_test_split

# Load and prepare data
X, y = load_dataset()
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

# Train model
model = RandomForestClassifier(n_estimators=100)
model.fit(X_train, y_train)`}
                    </CodeBlock>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-sm font-semibold">Configuration Files</h4>
                    <CodeBlock language="json" elementKey="config">
{`{
  "compilerOptions": {
    "target": "es2022",
    "lib": ["dom", "dom.iterable", "es6"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}`}
                    </CodeBlock>
                  </div>
                </div>
              )}

              {/* Installation Reference */}
              {activeSection === "installation" && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Installation Output</h3>
                    <div className="space-y-4">
                      <div className="bg-muted p-3 rounded-lg text-xs font-mono space-y-1">
                        <div className="text-green-600">✓ Dependencies installed</div>
                        <div className="text-green-600">✓ Component files created</div>
                        <div className="text-green-600">✓ CSS updated</div>
                        <div className="text-blue-600">🎉 Installation complete!</div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-sm font-semibold">Project Structure</h4>
                    <div className="bg-muted p-3 rounded-lg text-xs font-mono space-y-1">
                      <div>components/</div>
                      <div className="ml-4">├── ui/</div>
                      <div className="ml-6">│   ├── code-block.tsx</div>
                      <div className="ml-6">│   ├── toaster.tsx</div>
                      <div className="ml-6">│   └── theme-toggle.tsx</div>
                      <div className="ml-4">├── pricing/</div>
                      <div className="ml-6">│   ├── pricing-card.tsx</div>
                      <div className="ml-6">│   └── constants.ts</div>
                      <div className="ml-4">└── codeblocks/</div>
                      <div className="ml-6">    └── theme-provider.tsx</div>
                    </div>
                  </div>
                </div>
              )}

              {/* Overview Reference */}
              {activeSection === "overview" && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Quick Reference</h3>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold mb-2">Code Blocks</h4>
                      <CodeBlock language="bash" elementKey="overview-codeblocks">
                        npx @ajstudioz14151/codeblocks-component@1.1.0 add
                      </CodeBlock>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold mb-2">Pricing Cards</h4>
                      <CodeBlock language="bash" elementKey="overview-pricing">
                        npx @ajstudioz14151/pricing-component@1.2.0 add
                      </CodeBlock>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-sm font-semibold">Component Features</h4>
                    <div className="space-y-2 text-xs">
                      <div className="flex items-center gap-2 p-2 bg-muted rounded">
                        <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                        <span>TypeScript Support</span>
                      </div>
                      <div className="flex items-center gap-2 p-2 bg-muted rounded">
                        <div className="h-2 w-2 bg-blue-500 rounded-full"></div>
                        <span>Theme Integration</span>
                      </div>
                      <div className="flex items-center gap-2 p-2 bg-muted rounded">
                        <div className="h-2 w-2 bg-purple-500 rounded-full"></div>
                        <span>Copy Functionality</span>
                      </div>
                      <div className="flex items-center gap-2 p-2 bg-muted rounded">
                        <div className="h-2 w-2 bg-orange-500 rounded-full"></div>
                        <span>Responsive Design</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </ScrollArea>
        </div>
      </div>

      <Toaster />
    </div>
  );
}