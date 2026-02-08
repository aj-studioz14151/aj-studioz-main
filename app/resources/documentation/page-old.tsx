'use client'

import React, { useState } from 'react';
import { Menu, X, ChevronRight, ChevronDown, ArrowRight } from 'lucide-react';
import { ToggleTheme } from '../../../components/toggle-theme';
import { CodeBlock } from '@/components/ui/code-block';
import PricingCard from '@/components/pricing/pricing-card';
import { Toaster } from '@/components/ui/toaster';
import { INDIVIDUAL_PLANS } from '@/components/pricing/constants';
import { Badge } from "@/components/ui/badge";

export default function DocumentationPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState("getting-started");

  const toggleDropdown = (dropdownName: string) => {
    setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
  };

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
    <main className="relative bg-background min-h-screen">
      <div className="w-full max-w-6xl mx-auto p-4 sm:p-6 lg:p-8">
        {/* Navbar */}
        <div className="py-2 relative z-20 flex items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            <a href="/" className="font-bold text-2xl pb-1 text-foreground cursor-pointer flex-shrink-0 flex items-center gap-3">
              <img src="/AJ.svg" alt="AJ STUDIOZ" className="w-8 h-8" />
              AJ STUDIOZ
            </a>
            <nav className="hidden lg:flex text-muted-foreground font-medium">
              <ul className="flex items-center space-x-2">
                <li><a href="/about" className="hover:text-foreground px-3 py-2 text-sm transition-colors rounded-lg">About</a></li>
                <li><a href="/projects" className="hover:text-foreground px-3 py-2 text-sm transition-colors rounded-lg">Projects</a></li>
                <li className="relative">
                  <button onClick={() => toggleDropdown('desktop-resources')} className="flex items-center hover:text-foreground px-3 py-2 text-sm transition-colors rounded-lg">
                    Resources<ChevronDown className={`h-4 w-4 ml-1 transition-transform ${openDropdown === 'desktop-resources' ? 'rotate-180' : ''}`} />
                  </button>
                  {openDropdown === 'desktop-resources' && (
                    <ul className="absolute top-full left-0 mt-2 p-2 bg-card border border-border shadow-lg rounded-xl z-20 w-48">
                      <li><a href="/resources/documentation" className="block px-3 py-2 text-sm text-blue-600 hover:bg-muted rounded-lg">Documentation</a></li>
                      <li><a href="https://aj-studioz-api-documentation.vercel.app/" target="_blank" rel="noopener noreferrer" className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg">API Reference</a></li>
                    </ul>
                  )}
                </li>
                <li><a href="/blog" className="hover:text-foreground px-3 py-2 text-sm transition-colors rounded-lg">Blog</a></li>
                <li><a href="/pricing" className="hover:text-foreground px-3 py-2 text-sm transition-colors rounded-lg">Plans & Pricing</a></li>
              </ul>
            </nav>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden lg:flex items-center gap-3">
              <a href="/signin" className="text-foreground hover:text-muted-foreground cursor-pointer py-2 px-4 text-sm capitalize font-medium transition-colors rounded-xl">Login</a>
              <a href="/signup" className="bg-foreground hover:bg-muted-foreground text-background py-2.5 px-5 text-sm rounded-xl capitalize font-medium transition-colors flex items-center gap-2">
                Get Started<ArrowRight className="h-4 w-4" />
              </a>
            </div>
            <ToggleTheme />
            <div className="lg:hidden relative">
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="bg-transparent hover:bg-muted border-none p-2 rounded-xl transition-colors">
                <Menu className="h-6 w-6" />
              </button>
              {isMobileMenuOpen && (
                <ul className="absolute top-full right-0 mt-2 p-2 shadow-lg bg-card border border-border rounded-xl w-56 z-30">
                  <li><a href="/" className="block px-3 py-2 text-sm text-foreground hover:bg-muted rounded-lg">Home</a></li>
                  <li><a href="/about" className="block px-3 py-2 text-sm text-foreground hover:bg-muted rounded-lg">About</a></li>
                  <li><a href="/projects" className="block px-3 py-2 text-sm text-foreground hover:bg-muted rounded-lg">Projects</a></li>
                  <li><button onClick={() => toggleDropdown('mobile-resources')} className="w-full flex items-center justify-between px-3 py-2 text-sm text-foreground hover:bg-muted rounded-lg">
                      Resources<ChevronDown className={`h-4 w-4 transition-transform ${openDropdown === 'mobile-resources' ? 'rotate-180' : ''}`} />
                  </button>
                  {openDropdown === 'mobile-resources' && (<ul className="ml-4 mt-1 border-l border-border pl-3">
                      <li><a href="/resources/documentation" className="block px-3 py-1.5 text-sm text-blue-600 hover:bg-muted rounded-lg">Documentation</a></li>
                      <li><a href="https://aj-studioz-api-documentation.vercel.app/" target="_blank" rel="noopener noreferrer" className="block px-3 py-1.5 text-sm text-muted-foreground hover:bg-muted hover:text-foreground rounded-lg">API Reference</a></li>
                  </ul>)}</li>
                  <li><a href="/blog" className="block px-3 py-2 text-sm text-foreground hover:bg-muted rounded-lg">Blog</a></li>
                  <li><a href="/pricing" className="block px-3 py-2 text-sm text-foreground hover:bg-muted rounded-lg">Plans & Pricing</a></li>
                  <li className="border-t border-border mt-2 pt-2 space-y-2">
                    <a href="/signin" className="block w-full text-center px-3 py-2 text-sm text-foreground hover:bg-muted rounded-lg">Login</a>
                    <a href="/signup" className="w-full bg-foreground text-background hover:bg-muted-foreground px-3 py-2.5 text-sm rounded-lg flex items-center justify-center gap-2 font-medium">
                      Get Started<ArrowRight className="h-4 w-4" />
                    </a>
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>

        {/* Documentation Content */}
        <div className="pt-4 pb-10 sm:pt-6 sm:pb-12">
          {/* Page Header */}
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="text-3xl sm:text-5xl md:text-5xl text-foreground font-bold tracking-tight mb-4">Documentation</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Learn how to integrate and use our platform effectively with comprehensive guides and examples.</p>
          </div>

          {/* Two-Column Layout */}
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Column - Navigation */}
            <div className="lg:w-80 lg:flex-shrink-0">
              {/* Mobile Navigation Toggle */}
              <div className="lg:hidden mb-6">
                <button 
                  onClick={() => toggleDropdown('doc-nav')} 
                  className="w-full flex items-center justify-between px-4 py-3 bg-muted rounded-lg text-sm font-medium"
                >
                  Navigate Documentation
                  <ChevronDown className={`h-4 w-4 transition-transform ${openDropdown === 'doc-nav' ? 'rotate-180' : ''}`} />
                </button>
              </div>
              
              {/* Navigation Links */}
              <nav className={`space-y-2 ${openDropdown === 'doc-nav' ? 'block' : 'hidden'} lg:block`}>
                <div className="bg-muted/50 rounded-lg p-4">
                  <h3 className="text-sm font-semibold text-foreground mb-3">Quick Start</h3>
                  <div className="space-y-1">
                    <button 
                      onClick={() => setActiveSection('getting-started')}
                      className={`block w-full text-left px-3 py-2 text-sm rounded-lg transition-colors ${
                        activeSection === 'getting-started' 
                          ? 'text-blue-600 bg-blue-50 dark:bg-blue-950/50' 
                          : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                      }`}
                    >
                      Getting Started
                    </button>
                    <button 
                      onClick={() => setActiveSection('installation')}
                      className={`block w-full text-left px-3 py-2 text-sm rounded-lg transition-colors ${
                        activeSection === 'installation' 
                          ? 'text-blue-600 bg-blue-50 dark:bg-blue-950/50' 
                          : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                      }`}
                    >
                      Installation
                    </button>
                    <button 
                      onClick={() => setActiveSection('configuration')}
                      className={`block w-full text-left px-3 py-2 text-sm rounded-lg transition-colors ${
                        activeSection === 'configuration' 
                          ? 'text-blue-600 bg-blue-50 dark:bg-blue-950/50' 
                          : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                      }`}
                    >
                      Configuration
                    </button>
                  </div>
                </div>
                <div className="bg-muted/50 rounded-lg p-4">
                  <h3 className="text-sm font-semibold text-foreground mb-3">Components</h3>
                  <div className="space-y-1">
                    <button 
                      onClick={() => setActiveSection('codeblocks')}
                      className={`block w-full text-left px-3 py-2 text-sm rounded-lg transition-colors ${
                        activeSection === 'codeblocks' 
                          ? 'text-blue-600 bg-blue-50 dark:bg-blue-950/50' 
                          : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                      }`}
                    >
                      Code Blocks
                    </button>
                    <button 
                      onClick={() => setActiveSection('pricing')}
                      className={`block w-full text-left px-3 py-2 text-sm rounded-lg transition-colors ${
                        activeSection === 'pricing' 
                          ? 'text-blue-600 bg-blue-50 dark:bg-blue-950/50' 
                          : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                      }`}
                    >
                      Pricing Cards
                    </button>
                    <button 
                      onClick={() => setActiveSection('examples')}
                      className={`block w-full text-left px-3 py-2 text-sm rounded-lg transition-colors ${
                        activeSection === 'examples' 
                          ? 'text-blue-600 bg-blue-50 dark:bg-blue-950/50' 
                          : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                      }`}
                    >
                      Examples
                    </button>
                  </div>
                </div>
              </nav>

              {/* Right Column - In-page Navigation (Desktop Only) */}
              <div className="hidden xl:block mt-8 bg-muted/30 rounded-lg p-4">
                <h3 className="text-sm font-semibold text-foreground mb-3">On this page</h3>
                <nav className="space-y-1">
                  {activeSection === 'getting-started' && (
                    <>
                      <div className="text-xs text-blue-600 font-medium py-1">Overview</div>
                      <div className="text-xs text-muted-foreground hover:text-foreground cursor-pointer py-1 pl-2">Quick Start</div>
                      <div className="text-xs text-muted-foreground hover:text-foreground cursor-pointer py-1 pl-2">Features</div>
                    </>
                  )}
                  {activeSection === 'installation' && (
                    <>
                      <div className="text-xs text-blue-600 font-medium py-1">Installation Steps</div>
                      <div className="text-xs text-muted-foreground hover:text-foreground cursor-pointer py-1 pl-2">Choose Component</div>
                      <div className="text-xs text-muted-foreground hover:text-foreground cursor-pointer py-1 pl-2">Run Command</div>
                      <div className="text-xs text-muted-foreground hover:text-foreground cursor-pointer py-1 pl-2">Verification</div>
                    </>
                  )}
                  {activeSection === 'codeblocks' && (
                    <>
                      <div className="text-xs text-blue-600 font-medium py-1">Code Blocks</div>
                      <div className="text-xs text-muted-foreground hover:text-foreground cursor-pointer py-1 pl-2">Installation</div>
                      <div className="text-xs text-muted-foreground hover:text-foreground cursor-pointer py-1 pl-2">Usage</div>
                      <div className="text-xs text-muted-foreground hover:text-foreground cursor-pointer py-1 pl-2">Examples</div>
                    </>
                  )}
                  {activeSection === 'pricing' && (
                    <>
                      <div className="text-xs text-blue-600 font-medium py-1">Pricing Cards</div>
                      <div className="text-xs text-muted-foreground hover:text-foreground cursor-pointer py-1 pl-2">Installation</div>
                      <div className="text-xs text-muted-foreground hover:text-foreground cursor-pointer py-1 pl-2">Usage</div>
                      <div className="text-xs text-muted-foreground hover:text-foreground cursor-pointer py-1 pl-2">Live Preview</div>
                    </>
                  )}
                </nav>
              </div>
            </div>

            {/* Right Column - Main Content */}
            <div className="flex-1 min-w-0">
              <div className="prose prose-gray dark:prose-invert max-w-none">
                {/* Getting Started Section */}
                {activeSection === 'getting-started' && (
                  <div className="space-y-8">
                    <div>
                      <div className="flex items-center gap-3 mb-6">
                        <img src="/AJ.svg" alt="AJ STUDIOZ" className="w-10 h-10" />
                        <h1 className="text-3xl font-bold">AJ STUDIOZ Components</h1>
                      </div>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        Professional React components with premium styling. Install instantly via NPX CLI for Next.js and React/Vite projects.
                      </p>
                      
                      {/* Inline Navigation */}
                      <div className="flex flex-wrap items-center gap-2 mt-6 mb-8">
                        <Badge variant="default">Overview</Badge>
                        <Badge variant="outline" className="cursor-pointer hover:bg-muted" onClick={() => setActiveSection('installation')}>Installation</Badge>
                        <Badge variant="outline" className="cursor-pointer hover:bg-muted" onClick={() => setActiveSection('codeblocks')}>Components</Badge>
                        <Badge variant="outline" className="cursor-pointer hover:bg-muted" onClick={() => setActiveSection('examples')}>Examples</Badge>
                      </div>
                    </div>

                    <div>
                      <h2 className="text-2xl font-semibold mb-4">Quick Start</h2>
                      <p className="text-muted-foreground mb-6">
                        Get started with AJ STUDIOZ components in seconds. Our CLI automatically detects your project type and installs the right dependencies.
                      </p>
                      <CodeBlock language="bash" elementKey="quick-start">
                        {installationCode}
                      </CodeBlock>
                    </div>

                    <div>
                      <h2 className="text-2xl font-semibold mb-6">Features</h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-6 rounded-lg border border-border bg-card/30">
                          <h3 className="font-medium mb-3 flex items-center gap-2">
                            <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                            Instant Installation
                          </h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            NPX CLI with automatic project detection and dependency management.
                          </p>
                        </div>
                        <div className="p-6 rounded-lg border border-border bg-card/30">
                          <h3 className="font-medium mb-3 flex items-center gap-2">
                            <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                            Premium Design
                          </h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            Professional styling with dark mode support and customizable themes.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Installation Section */}
                {activeSection === 'installation' && (
                  <div className="space-y-8">
                    <div>
                      <div className="flex items-center gap-3 mb-6">
                        <img src="/AJ.svg" alt="AJ STUDIOZ" className="w-10 h-10" />
                        <h1 className="text-3xl font-bold">Installation</h1>
                      </div>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        Install AJ STUDIOZ components using our NPX CLI with automatic project detection.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-2xl font-semibold mb-6">Step 1: Choose Your Component</h2>
                      
                      <div className="space-y-6">
                        <div className="p-6 rounded-lg border border-border bg-card/30">
                          <h3 className="font-medium mb-3">Code Blocks Component</h3>
                          <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                            Syntax-highlighted code blocks with copy functionality
                          </p>
                          <CodeBlock language="bash" elementKey="install-codeblocks">
                            {`npx @ajstudioz14151/codeblocks-component@1.1.0 add`}
                          </CodeBlock>
                        </div>

                        <div className="p-6 rounded-lg border border-border bg-card/30">
                          <h3 className="font-medium mb-3">Pricing Cards Component</h3>
                          <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                            Beautiful pricing cards with premium styling
                          </p>
                          <CodeBlock language="bash" elementKey="install-pricing">
                            {`npx @ajstudioz14151/pricing-component@1.2.0 add`}
                          </CodeBlock>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h2 className="text-2xl font-semibold mb-6">Step 2: Installation Process</h2>
                      <p className="text-muted-foreground mb-6">
                        Our CLI automatically detects your project type and handles dependencies:
                      </p>
                      
                      <div className="space-y-4">
                        <div className="flex items-start gap-4">
                          <div className="w-8 h-8 rounded-full bg-blue-600 text-white text-sm flex items-center justify-center font-medium flex-shrink-0">1</div>
                          <div>
                            <h4 className="font-medium mb-1">Project Detection</h4>
                            <p className="text-sm text-muted-foreground">Automatically detects Next.js or React/Vite setup</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-4">
                          <div className="w-8 h-8 rounded-full bg-blue-600 text-white text-sm flex items-center justify-center font-medium flex-shrink-0">2</div>
                          <div>
                            <h4 className="font-medium mb-1">Dependencies</h4>
                            <p className="text-sm text-muted-foreground">Installs required packages and components</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-4">
                          <div className="w-8 h-8 rounded-full bg-blue-600 text-white text-sm flex items-center justify-center font-medium flex-shrink-0">3</div>
                          <div>
                            <h4 className="font-medium mb-1">Configuration</h4>
                            <p className="text-sm text-muted-foreground">Sets up necessary configuration files</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Code Blocks Section */}
                {activeSection === 'codeblocks' && (
                  <div className="space-y-8">
                    <div>
                      <div className="flex items-center gap-3 mb-6">
                        <img src="/AJ.svg" alt="AJ STUDIOZ" className="w-10 h-10" />
                        <h1 className="text-3xl font-bold">Code Blocks Component</h1>
                      </div>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        Syntax-highlighted code blocks with copy functionality and theme support.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-2xl font-semibold mb-4">Installation</h2>
                      <CodeBlock language="bash" elementKey="codeblock-install">
                        {`npx @ajstudioz14151/codeblocks-component@1.1.0 add`}
                      </CodeBlock>
                    </div>

                    <div>
                      <h2 className="text-2xl font-semibold mb-4">Usage</h2>
                      <CodeBlock language="tsx" elementKey="codeblock-usage">
                        {codeBlockUsage}
                      </CodeBlock>
                    </div>

                    <div>
                      <h2 className="text-2xl font-semibold mb-6">Live Examples</h2>
                      <div className="space-y-6">
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
                )}

                {/* Pricing Section */}
                {activeSection === 'pricing' && (
                  <div className="space-y-8">
                    <div>
                      <div className="flex items-center gap-3 mb-6">
                        <img src="/AJ.svg" alt="AJ STUDIOZ" className="w-10 h-10" />
                        <h1 className="text-3xl font-bold">Pricing Cards Component</h1>
                      </div>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        Beautiful pricing cards with premium styling and customizable plans.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-2xl font-semibold mb-4">Installation</h2>
                      <CodeBlock language="bash" elementKey="pricing-install">
                        {`npx @ajstudioz14151/pricing-component@1.2.0 add`}
                      </CodeBlock>
                    </div>

                    <div>
                      <h2 className="text-2xl font-semibold mb-4">Usage</h2>
                      <CodeBlock language="tsx" elementKey="pricing-usage">
                        {pricingUsage}
                      </CodeBlock>
                    </div>

                    <div>
                      <h2 className="text-2xl font-semibold mb-6">Live Preview</h2>
                      <div className="space-y-6 md:space-y-0 md:grid md:grid-cols-2 md:gap-6">
                        {INDIVIDUAL_PLANS.slice(0, 2).map(plan => (
                          <div key={plan.id}>
                            <PricingCard plan={plan} isYearly={false} />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Examples Section */}
                {activeSection === 'examples' && (
                  <div className="space-y-8">
                    <div>
                      <div className="flex items-center gap-3 mb-6">
                        <img src="/AJ.svg" alt="AJ STUDIOZ" className="w-10 h-10" />
                        <h1 className="text-3xl font-bold">Examples</h1>
                      </div>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        Real-world examples of using AJ STUDIOZ components in your projects.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-2xl font-semibold mb-4">Documentation Page</h2>
                      <p className="text-muted-foreground mb-6">
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
                      <h2 className="text-2xl font-semibold mb-4">API Reference Page</h2>
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
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Toaster />
    </main>
  );
}