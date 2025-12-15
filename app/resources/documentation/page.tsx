"use client";

import { CodeBlock } from '@/components/ui/code-block';
import PricingCard from '@/components/pricing/pricing-card';
import { Toaster } from '@/components/ui/toaster';
import { INDIVIDUAL_PLANS } from '@/components/pricing/constants';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Download, Terminal, Code, Package, Sparkles, BookOpen, Zap, Settings, FileText, ExternalLink, ChevronRight, Home, Book, Copy, Check, Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function DocumentationPage() {
  const [activeSection, setActiveSection] = useState("overview");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
      {INDIVIDUAL_PLANS.map(plan => (
        <PricingCard key={plan.id} plan={plan} isYearly={false} />
      ))}
    </div>
  );
}`;

  return (
    <div className="min-h-screen bg-background">
      {/* Mobile Header with Navigation */}
      <div className="md:hidden bg-background border-b border-border p-3 sticky top-0 z-50">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 flex items-center justify-center">
              <Image src="/AJ.svg" alt="AJ STUDIOZ" width={32} height={32} className="w-8 h-8" />
            </div>
            <div>
              <div className="font-semibold text-sm text-foreground">AJ STUDIOZ</div>
              <div className="text-xs text-muted-foreground">Components</div>
            </div>
          </div>
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 hover:bg-muted rounded-lg transition-colors"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-b border-border sticky top-[61px] z-40">
          <div className="p-3 space-y-1 max-h-[50vh] overflow-y-auto">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveSection(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 px-4 py-3 text-sm rounded-lg transition-colors ${
                    activeSection === item.id
                      ? 'bg-primary text-primary-foreground'
                      : 'hover:bg-muted text-foreground'
                  }`}
                >
                  <Icon className="h-4 w-4 flex-shrink-0" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      <div className="flex h-[calc(100vh-61px)] md:h-screen">
        {/* Left Sidebar */}
        <div className="hidden md:block w-64 border-r border-border bg-card/50">
          <div className="p-6 border-b border-border">
            <Link href="/resources/documentation" className="flex items-center gap-3">
              <div className="h-8 w-8 flex items-center justify-center">
                <Image src="/AJ.svg" alt="AJ STUDIOZ" width={32} height={32} className="w-8 h-8" />
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

        {/* Main Content - 3 Column Layout with In-Page Navigation */}
        <div className="flex-1 flex overflow-hidden">
          <div className="flex-1 overflow-hidden">
            <ScrollArea className="h-full">
              <div className="max-w-4xl mx-auto p-3 md:p-6 lg:p-8">
                {/* Overview Section */}
                {activeSection === "overview" && (
                  <div className="space-y-8">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="h-10 w-10 flex items-center justify-center">
                          <Image src="/AJ.svg" alt="AJ STUDIOZ" width={40} height={40} className="w-10 h-10" />
                        </div>
                        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">AJ STUDIOZ Components</h1>
                      </div>
                      <p className="text-sm md:text-base lg:text-lg text-muted-foreground mb-4 md:mb-6">
                        Professional React components with premium styling. Install instantly via NPX CLI for Next.js and React/Vite projects.
                      </p>
                      {/* Inline Navigation */}
                      <div className="flex flex-wrap items-center gap-2 mb-4 md:mb-6">
                        <Badge variant="outline" className="cursor-pointer hover:bg-muted">Installation</Badge>
                        <Badge variant="outline" className="cursor-pointer hover:bg-muted">Features</Badge>
                        <Badge variant="outline" className="cursor-pointer hover:bg-muted">Examples</Badge>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h2 className="text-xl font-semibold mb-4">Quick Start</h2>
                        <p className="text-muted-foreground mb-4">
                          Get started with AJ STUDIOZ components in seconds. Our CLI automatically detects your project type and installs the right dependencies.
                        </p>
                        <CodeBlock language="bash" elementKey="quick-start">
                          {`# Install any component with a single command
npx @ajstudioz14151/codeblocks-component@1.1.0 add

# Or try our pricing cards
npx @ajstudioz14151/pricing-component@1.2.0 add`}
                        </CodeBlock>
                      </div>

                      <div>
                        <h2 className="text-xl font-semibold mb-4">Features</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                          <div className="p-3 md:p-4 rounded-lg border border-border bg-card/30">
                            <div className="flex items-center gap-2 mb-2">
                              <Zap className="h-4 w-4 md:h-5 md:w-5 text-primary" />
                              <h3 className="font-medium text-sm md:text-base">Instant Installation</h3>
                            </div>
                            <p className="text-xs md:text-sm text-muted-foreground">
                              NPX CLI with automatic project detection and dependency management.
                            </p>
                          </div>
                          <div className="p-3 md:p-4 rounded-lg border border-border bg-card/30">
                            <div className="flex items-center gap-2 mb-2">
                              <Sparkles className="h-4 w-4 md:h-5 md:w-5 text-primary" />
                              <h3 className="font-medium text-sm md:text-base">Premium Design</h3>
                            </div>
                            <p className="text-xs md:text-sm text-muted-foreground">
                              Professional styling with dark mode support and customizable themes.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Installation Section */}
                {activeSection === "installation" && (
                  <div className="space-y-8">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="h-10 w-10 flex items-center justify-center">
                          <Image src="/AJ.svg" alt="AJ STUDIOZ" width={40} height={40} className="w-10 h-10" />
                        </div>
                        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">Installation</h1>
                      </div>
                      <p className="text-muted-foreground mb-6">
                        Install AJ STUDIOZ components using our NPX CLI with automatic project detection.
                      </p>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h2 className="text-xl font-semibold mb-4">Step 1: Choose Your Component</h2>
                        <p className="text-muted-foreground mb-4">Select from our available components:</p>
                        
                        <div className="space-y-3 md:space-y-4">
                          <div className="p-3 md:p-4 rounded-lg border border-border bg-card/30">
                            <h3 className="font-medium mb-2 text-sm md:text-base">Code Blocks Component</h3>
                            <p className="text-xs md:text-sm text-muted-foreground mb-3">
                              Syntax-highlighted code blocks with copy functionality
                            </p>
                            <CodeBlock language="bash" elementKey="install-codeblocks">
                              {`npx @ajstudioz14151/codeblocks-component@1.1.0 add`}
                            </CodeBlock>
                          </div>

                          <div className="p-3 md:p-4 rounded-lg border border-border bg-card/30">
                            <h3 className="font-medium mb-2 text-sm md:text-base">Pricing Cards Component</h3>
                            <p className="text-xs md:text-sm text-muted-foreground mb-3">
                              Beautiful pricing cards with premium styling
                            </p>
                            <CodeBlock language="bash" elementKey="install-pricing">
                              {`npx @ajstudioz14151/pricing-component@1.2.0 add`}
                            </CodeBlock>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h2 className="text-xl font-semibold mb-4">Step 2: Installation Process</h2>
                        <p className="text-muted-foreground mb-4">
                          Our CLI automatically detects your project type and handles dependencies:
                        </p>
                        
                        <div className="space-y-4">
                          <div className="flex items-start gap-3">
                            <div className="h-6 w-6 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center font-medium">1</div>
                            <div>
                              <h4 className="font-medium">Project Detection</h4>
                              <p className="text-sm text-muted-foreground">Automatically detects Next.js or React/Vite setup</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <div className="h-6 w-6 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center font-medium">2</div>
                            <div>
                              <h4 className="font-medium">Dependencies</h4>
                              <p className="text-sm text-muted-foreground">Installs required packages and components</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <div className="h-6 w-6 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center font-medium">3</div>
                            <div>
                              <h4 className="font-medium">Configuration</h4>
                              <p className="text-sm text-muted-foreground">Sets up necessary configuration files</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Code Blocks Section */}
                {activeSection === "codeblocks" && (
                  <div className="space-y-8">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="h-10 w-10 flex items-center justify-center">
                          <Image src="/AJ.svg" alt="AJ STUDIOZ" width={40} height={40} className="w-10 h-10" />
                        </div>
                        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">Code Blocks Component</h1>
                      </div>
                      <p className="text-muted-foreground mb-6">
                        Syntax-highlighted code blocks with copy functionality and theme support.
                      </p>
                      {/* Inline Navigation */}
                      <div className="flex items-center gap-2 mb-6">
                        <Badge variant="default">Usage</Badge>
                        <Badge variant="outline" className="cursor-pointer hover:bg-muted">Preview</Badge>
                        <Badge variant="outline" className="cursor-pointer hover:bg-muted">Reference</Badge>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h2 className="text-xl font-semibold mb-4">Installation</h2>
                        <CodeBlock language="bash" elementKey="codeblock-install">
                          {`npx @ajstudioz14151/codeblocks-component@1.1.0 add`}
                        </CodeBlock>
                      </div>

                      <div>
                        <h2 className="text-xl font-semibold mb-4">Usage</h2>
                        <CodeBlock language="tsx" elementKey="codeblock-usage">
                          {codeBlockUsage}
                        </CodeBlock>
                      </div>

                      <div>
                        <h2 className="text-xl font-semibold mb-4">Live Preview</h2>
                        <div className="space-y-4">
                          <div>
                            <h3 className="text-lg font-medium mb-3">JavaScript Example</h3>
                            <CodeBlock language="javascript" elementKey="js-example">
                              {`function greetUser(name) {
  const greeting = \`Hello, \${name}!\`;
  console.log(greeting);
  return greeting;
}

// Usage
const message = greetUser("Developer");`}
                            </CodeBlock>
                          </div>

                          <div>
                            <h3 className="text-lg font-medium mb-3">Python Example</h3>
                            <CodeBlock language="python" elementKey="python-example">
                              {`def calculate_fibonacci(n):
    """Calculate fibonacci sequence up to n terms."""
    if n <= 0:
        return []
    elif n == 1:
        return [0]
    
    fib = [0, 1]
    for i in range(2, n):
        fib.append(fib[i-1] + fib[i-2])
    
    return fib

# Generate first 10 fibonacci numbers
result = calculate_fibonacci(10)
print(f"Fibonacci sequence: {result}")`}
                            </CodeBlock>
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
                      <div className="flex items-center gap-3 mb-4">
                        <div className="h-10 w-10 flex items-center justify-center">
                          <Image src="/AJ.svg" alt="AJ STUDIOZ" width={40} height={40} className="w-10 h-10" />
                        </div>
                        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">Pricing Cards Component</h1>
                      </div>
                      <p className="text-muted-foreground mb-6">
                        Beautiful pricing cards with premium styling and customizable plans.
                      </p>
                      {/* Inline Navigation */}
                      <div className="flex items-center gap-2 mb-6">
                        <Badge variant="default">Usage</Badge>
                        <Badge variant="outline" className="cursor-pointer hover:bg-muted">Preview</Badge>
                        <Badge variant="outline" className="cursor-pointer hover:bg-muted">Reference</Badge>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h2 className="text-xl font-semibold mb-4">Installation</h2>
                        <CodeBlock language="bash" elementKey="pricing-install">
                          {`npx @ajstudioz14151/pricing-component@1.2.0 add`}
                        </CodeBlock>
                      </div>

                      <div>
                        <h2 className="text-xl font-semibold mb-4">Usage</h2>
                        <CodeBlock language="tsx" elementKey="pricing-usage">
                          {pricingUsage}
                        </CodeBlock>
                      </div>

                      <div>
                        <h2 className="text-xl font-semibold mb-4">Live Preview</h2>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 md:gap-4 lg:gap-6">
                          {INDIVIDUAL_PLANS.slice(0, 2).map(plan => (
                            <PricingCard key={plan.id} plan={plan} isYearly={false} />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Usage Section */}
                {activeSection === "usage" && (
                  <div className="space-y-8">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="h-10 w-10 flex items-center justify-center">
                          <Image src="/AJ.svg" alt="AJ STUDIOZ" width={40} height={40} className="w-10 h-10" />
                        </div>
                        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">Usage Guide</h1>
                      </div>
                      <p className="text-muted-foreground mb-6">
                        Learn how to use AJ STUDIOZ components in your projects.
                      </p>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h2 className="text-xl font-semibold mb-4">Basic Usage</h2>
                        <p className="text-muted-foreground mb-4">
                          After installation, import and use components in your React applications:
                        </p>
                        
                        <div className="space-y-4">
                          <div>
                            <h3 className="text-lg font-medium mb-3">Code Block Component</h3>
                            <CodeBlock language="tsx" elementKey="usage-codeblock">
                              {`import { CodeBlock } from '@/components/ui/code-block';
import { Toaster } from '@/components/ui/toaster';

export default function MyPage() {
  return (
    <div>
      <h2>API Documentation</h2>
      <CodeBlock language="javascript" elementKey="api-example">
        {\`const response = await fetch('/api/data');
const data = await response.json();
console.log(data);\`}
      </CodeBlock>
      <Toaster />
    </div>
  );
}`}
                            </CodeBlock>
                          </div>

                          <div>
                            <h3 className="text-lg font-medium mb-3">Pricing Card Component</h3>
                            <CodeBlock language="tsx" elementKey="usage-pricing">
                              {`import PricingCard from '@/components/pricing/pricing-card';

const myPlan = {
  id: 'custom',
  name: 'Custom Plan',
  price: '$99',
  period: '/month',
  features: ['Feature 1', 'Feature 2', 'Feature 3'],
  popular: false
};

export default function PricingPage() {
  return (
    <div className="container mx-auto p-8">
      <PricingCard plan={myPlan} isYearly={false} />
    </div>
  );
}`}
                            </CodeBlock>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Examples Section */}
                {activeSection === "examples" && (
                  <div className="space-y-8">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="h-10 w-10 flex items-center justify-center">
                          <Image src="/AJ.svg" alt="AJ STUDIOZ" width={40} height={40} className="w-10 h-10" />
                        </div>
                        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">Examples</h1>
                      </div>
                      <p className="text-muted-foreground mb-6">
                        Real-world examples of using AJ STUDIOZ components.
                      </p>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h2 className="text-xl font-semibold mb-4">Documentation Page</h2>
                        <p className="text-muted-foreground mb-4">
                          This documentation page itself is built using AJ STUDIOZ components:
                        </p>
                        
                        <CodeBlock language="tsx" elementKey="doc-example">
                          {`// This page uses both CodeBlock and PricingCard components
import { CodeBlock } from '@/components/ui/code-block';
import PricingCard from '@/components/pricing/pricing-card';

export default function DocumentationPage() {
  return (
    <div className="space-y-8">
      {/* Code examples throughout the page */}
      <CodeBlock language="bash" elementKey="install">
        {\`npx @ajstudioz14151/codeblocks-component@1.1.0 add\`}
      </CodeBlock>
      
      {/* Live pricing previews */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {INDIVIDUAL_PLANS.map(plan => (
          <PricingCard key={plan.id} plan={plan} isYearly={false} />
        ))}
      </div>
    </div>
  );
}`}
                        </CodeBlock>
                      </div>

                      <div>
                        <h2 className="text-xl font-semibold mb-4">API Reference Page</h2>
                        <CodeBlock language="tsx" elementKey="api-ref-example">
                          {`// Perfect for API documentation
export default function APIReference() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1>API Endpoints</h1>
      
      <div className="space-y-6">
        <div>
          <h2>GET /api/users</h2>
          <CodeBlock language="javascript" elementKey="get-users">
            {\`// Fetch all users
const response = await fetch('/api/users');
const users = await response.json();

// Response format
{
  "users": [
    { "id": 1, "name": "John Doe", "email": "john@example.com" }
  ],
  "total": 1
}\`}
          </CodeBlock>
        </div>
      </div>
    </div>
  );
}`}
                        </CodeBlock>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </ScrollArea>
          </div>

          {/* In-Page Navigation - Right Sidebar */}
          <div className="hidden lg:block w-80 bg-background">
            <ScrollArea className="h-full">
              <div className="p-6">
                {/* Overview Page Navigation */}
                {activeSection === "overview" && (
                  <div className="space-y-4">
                    <h3 className="text-sm font-semibold mb-4">On this page</h3>
                    <nav className="space-y-1">
                      <div className="flex items-center gap-2 py-1 text-primary">
                        <Home className="h-4 w-4" />
                        <div className="text-sm font-medium">Overview</div>
                      </div>
                      <div className="flex items-center gap-2 py-1 text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                        <Zap className="h-4 w-4" />
                        <div className="text-sm">Quick Start</div>
                      </div>
                      <div className="flex items-center gap-2 py-1 text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                        <Download className="h-4 w-4" />
                        <div className="text-sm">Installation</div>
                      </div>
                      <div className="flex items-center gap-2 py-1 text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                        <Settings className="h-4 w-4" />
                        <div className="text-sm">Features</div>
                      </div>
                    </nav>
                  </div>
                )}

                {/* Installation Page Navigation */}
                {activeSection === "installation" && (
                  <div className="space-y-4">
                    <h3 className="text-sm font-semibold mb-4">On this page</h3>
                    <nav className="space-y-1">
                      <div className="flex items-center gap-2 py-1 text-primary">
                        <Package className="h-4 w-4" />
                        <div className="text-sm font-medium">Choose package</div>
                      </div>
                      <div className="flex items-center gap-2 py-1 text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                        <Code className="h-4 w-4" />
                        <div className="text-sm">Code Blocks</div>
                      </div>
                      <div className="flex items-center gap-2 py-1 text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                        <Package className="h-4 w-4" />
                        <div className="text-sm">Pricing Cards</div>
                      </div>
                      <div className="flex items-center gap-2 py-1 text-primary">
                        <Terminal className="h-4 w-4" />
                        <div className="text-sm font-medium">Run NPX command</div>
                      </div>
                      <div className="flex items-center gap-2 py-1 text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                        <Zap className="h-4 w-4" />
                        <div className="text-sm">Auto Detection</div>
                      </div>
                      <div className="flex items-center gap-2 py-1 text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                        <Settings className="h-4 w-4" />
                        <div className="text-sm">Dependencies</div>
                      </div>
                      <div className="flex items-center gap-2 py-1 text-primary">
                        <Check className="h-4 w-4" />
                        <div className="text-sm font-medium">Verify installation</div>
                      </div>
                    </nav>
                  </div>
                )}

                {/* Code Blocks Page Navigation */}
                {activeSection === "codeblocks" && (
                  <div className="space-y-4">
                    <h3 className="text-sm font-semibold mb-4">On this page</h3>
                    <nav className="space-y-1">
                      <div className="flex items-center gap-2 py-1 text-primary">
                        <Download className="h-4 w-4" />
                        <div className="text-sm font-medium">Install component</div>
                      </div>
                      <div className="flex items-center gap-2 py-1 text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                        <Terminal className="h-4 w-4" />
                        <div className="text-sm">NPX installation</div>
                      </div>
                      <div className="flex items-center gap-2 py-1 text-primary">
                        <Code className="h-4 w-4" />
                        <div className="text-sm font-medium">Basic usage</div>
                      </div>
                      <div className="flex items-center gap-2 py-1 text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                        <FileText className="h-4 w-4" />
                        <div className="text-sm">Import component</div>
                      </div>
                      <div className="flex items-center gap-2 py-1 text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                        <Package className="h-4 w-4" />
                        <div className="text-sm">Add to page</div>
                      </div>
                      <div className="flex items-center gap-2 py-1 text-primary">
                        <Zap className="h-4 w-4" />
                        <div className="text-sm font-medium">Live preview</div>
                      </div>
                      <div className="flex items-center gap-2 py-1 text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                        <Code className="h-4 w-4" />
                        <div className="text-sm">JavaScript example</div>
                      </div>
                      <div className="flex items-center gap-2 py-1 text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                        <Code className="h-4 w-4" />
                        <div className="text-sm">Python example</div>
                      </div>
                    </nav>
                  </div>
                )}

                {/* Pricing Page Navigation */}
                {activeSection === "pricing" && (
                  <div className="space-y-4">
                    <h3 className="text-sm font-semibold mb-4">On this page</h3>
                    <nav className="space-y-1">
                      <div className="flex items-center gap-2 py-1 text-primary">
                        <Download className="h-4 w-4" />
                        <div className="text-sm font-medium">Install component</div>
                      </div>
                      <div className="flex items-center gap-2 py-1 text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                        <Terminal className="h-4 w-4" />
                        <div className="text-sm">NPX installation</div>
                      </div>
                      <div className="flex items-center gap-2 py-1 text-primary">
                        <Code className="h-4 w-4" />
                        <div className="text-sm font-medium">Basic usage</div>
                      </div>
                      <div className="flex items-center gap-2 py-1 text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                        <FileText className="h-4 w-4" />
                        <div className="text-sm">Import component</div>
                      </div>
                      <div className="flex items-center gap-2 py-1 text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                        <Settings className="h-4 w-4" />
                        <div className="text-sm">Set up plans</div>
                      </div>
                      <div className="flex items-center gap-2 py-1 text-primary">
                        <Zap className="h-4 w-4" />
                        <div className="text-sm font-medium">Live preview</div>
                      </div>
                      <div className="flex items-center gap-2 py-1 text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                        <Package className="h-4 w-4" />
                        <div className="text-sm">Individual plan</div>
                      </div>
                      <div className="flex items-center gap-2 py-1 text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                        <Package className="h-4 w-4" />
                        <div className="text-sm">Pro plan</div>
                      </div>
                    </nav>
                  </div>
                )}

                {/* Usage Page Navigation */}
                {activeSection === "usage" && (
                  <div className="space-y-4">
                    <h3 className="text-sm font-semibold mb-4">On this page</h3>
                    <nav className="space-y-1">
                      <div className="flex items-center gap-2 py-1 text-primary">
                        <FileText className="h-4 w-4" />
                        <div className="text-sm font-medium">Basic Usage</div>
                      </div>
                      <div className="flex items-center gap-2 py-1 text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                        <Code className="h-4 w-4" />
                        <div className="text-sm">Code Block Component</div>
                      </div>
                      <div className="flex items-center gap-2 py-1 text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                        <Package className="h-4 w-4" />
                        <div className="text-sm">Pricing Card Component</div>
                      </div>
                    </nav>
                  </div>
                )}

                {/* Examples Page Navigation */}
                {activeSection === "examples" && (
                  <div className="space-y-4">
                    <h3 className="text-sm font-semibold mb-4">On this page</h3>
                    <nav className="space-y-1">
                      <div className="flex items-center gap-2 py-1 text-primary">
                        <FileText className="h-4 w-4" />
                        <div className="text-sm font-medium">Documentation page</div>
                      </div>
                      <div className="flex items-center gap-2 py-1 text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                        <Code className="h-4 w-4" />
                        <div className="text-sm">Basic structure</div>
                      </div>
                      <div className="flex items-center gap-2 py-1 text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                        <Zap className="h-4 w-4" />
                        <div className="text-sm">API examples</div>
                      </div>
                      <div className="flex items-center gap-2 py-1 text-primary">
                        <Settings className="h-4 w-4" />
                        <div className="text-sm font-medium">API Reference page</div>
                      </div>
                      <div className="flex items-center gap-2 py-1 text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                        <Package className="h-4 w-4" />
                        <div className="text-sm">Custom integration</div>
                      </div>
                      <div className="flex items-center gap-2 py-1 text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                        <Book className="h-4 w-4" />
                        <div className="text-sm">Multi-language support</div>
                      </div>
                    </nav>
                  </div>
                )}

                {/* Quick Actions */}
                <div className="mt-8 pt-6 border-t border-border">
                  <div className="space-y-3">
                    <button className="w-full flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                      <Copy className="h-3 w-3" />
                      Copy page URL
                    </button>
                    <button className="w-full flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                      <ExternalLink className="h-3 w-3" />
                      Share feedback
                    </button>
                  </div>
                </div>
              </div>
            </ScrollArea>
          </div>
        </div>
      </div>

      <Toaster />
    </div>
  );
}