'use client'

import ComponentsLayout from '@/components/layout/components-layout'
import { ComponentTabs, PreviewContainer } from '@/components/layout/component-tabs'
import { CodeBlock } from '@/components/ui/code-block'
import { Toaster } from '@/components/ui/toaster'

export default function CodeBlocksPage() {
  const exampleCode = `// Example Code with Syntax Highlighting
const greeting = 'Hello, World!';

function sayHello(name) {
  return \`\${greeting} \${name}!\`;
}

// Call the function
console.log(sayHello('Developer'));

// Array operations
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2);
console.log(doubled);`

  const usageCode = `import { CodeBlock } from '@/components/ui/code-block';
import { Toaster } from '@/components/ui/toaster';

export default function MyComponent() {
  return (
    <div>
      <CodeBlock language="javascript" elementKey="demo">
        {\`console.log('Hello, World!');\`}
      </CodeBlock>
      <Toaster />
    </div>
  );
}`

  const installCode = `# Install the Code Blocks Component
npx @ajstudioz14151/codeblocks-component@1.1.0 add`

  return (
    <ComponentsLayout>
      <ComponentTabs
        title="Code Blocks"
        description="Syntax highlighted code blocks with copy functionality, line wrapping, and toast notifications."
        preview={
          <div className="space-y-6">
            <PreviewContainer>
              <div className="w-full max-w-2xl">
                <CodeBlock language="javascript" elementKey="preview-demo">
                  {exampleCode}
                </CodeBlock>
              </div>
            </PreviewContainer>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-6 rounded-xl border border-border bg-accent">
                <h3 className="text-lg font-semibold mb-2">✨ Syntax Highlighting</h3>
                <p className="text-sm text-muted-foreground">
                  Beautiful syntax highlighting powered by Sugar High
                </p>
              </div>
              <div className="p-6 rounded-xl border border-border bg-accent">
                <h3 className="text-lg font-semibold mb-2">📋 Copy to Clipboard</h3>
                <p className="text-sm text-muted-foreground">
                  One-click copy with success toast notifications
                </p>
              </div>
              <div className="p-6 rounded-xl border border-border bg-accent">
                <h3 className="text-lg font-semibold mb-2">↔️ Line Wrapping</h3>
                <p className="text-sm text-muted-foreground">
                  Toggle line wrapping for better readability
                </p>
              </div>
            </div>
          </div>
        }
        code={
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Installation</h3>
              <CodeBlock language="bash" elementKey="install">
                {installCode}
              </CodeBlock>
            </div>

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
                  <code className="px-2 py-1 rounded bg-muted text-foreground">language</code>
                  <span className="text-muted-foreground ml-2">- Programming language for syntax highlighting</span>
                </div>
                <div>
                  <code className="px-2 py-1 rounded bg-muted text-foreground">elementKey</code>
                  <span className="text-muted-foreground ml-2">- Unique identifier for the code block</span>
                </div>
                <div>
                  <code className="px-2 py-1 rounded bg-muted text-foreground">children</code>
                  <span className="text-muted-foreground ml-2">- The code content to display</span>
                </div>
              </div>
            </div>
          </div>
        }
        contribute={
          <div className="prose prose-slate dark:prose-invert max-w-none">
            <h3 className="text-2xl font-bold">Contribute</h3>
            <p>
              Help improve this component by submitting issues, suggestions, or pull requests on GitHub.
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
