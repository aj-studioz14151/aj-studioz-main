'use client'

import { notFound } from 'next/navigation'
import { componentMetadata } from '@/lib/components-metadata'
import { ComponentTabs } from '@/components/component-tabs'
import { CodeBlock } from '@/components/ui/code-block'
import { ComponentsSidebar } from '@/components/components-sidebar'

interface ComponentPageProps {
  params: {
    category: string
    component: string
  }
}

// Generate static params for all components
export function generateStaticParams() {
  return Object.keys(componentMetadata).map((key) => {
    const [category, component] = key.split('/')
    return {
      category: category.toLowerCase(),
      component: component.toLowerCase()
    }
  })
}

export default function DynamicComponentPage({ params }: ComponentPageProps) {
  const { category, component } = params
  const componentKey = `${category.charAt(0).toUpperCase() + category.slice(1)}/${component.charAt(0).toUpperCase() + component.slice(1)}`
  
  const metadata = componentMetadata[componentKey]

  if (!metadata) {
    notFound()
  }

  // For now, show a placeholder - we'll port actual components progressively
  return (
    <div className="flex min-h-screen bg-[#060010]">
      <ComponentsSidebar />
      <main className="flex-1 overflow-hidden">
        <div className="p-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-white mb-4">{metadata.name}</h1>
            <p className="text-gray-400 text-lg">{metadata.description}</p>
            
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-4">
              {metadata.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-[#170D27] border border-[#271E37] rounded-[12px] text-sm text-gray-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <ComponentTabs
            preview={
              <div className="bg-[#170D27] rounded-[24px] border border-[#271E37] p-8 min-h-[400px] flex items-center justify-center">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#060010] border border-[#271E37] mb-4">
                    <span className="text-2xl">🚧</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Component Coming Soon</h3>
                  <p className="text-gray-400">
                    This component is being ported from React Bits. Check back soon!
                  </p>
                  {metadata.videoUrl && (
                    <div className="mt-6 max-w-2xl mx-auto">
                      <video
                        src={metadata.videoUrl}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full rounded-[15px] border border-[#271E37]"
                      />
                    </div>
                  )}
                </div>
              </div>
            }
            code={
              <CodeBlock language="tsx" elementKey={`${component}-code`}>
                {`// ${metadata.name} component code will be available soon\n\nimport { ${metadata.name.replace(/\s+/g, '')} } from '@/components/${component}';\n\nexport default function Example() {\n  return (\n    <${metadata.name.replace(/\s+/g, '')} />\n  );\n}`}
              </CodeBlock>
            }
            contribute={
              <div className="bg-[#170D27] rounded-[24px] border border-[#271E37] p-8">
                <h3 className="text-white font-semibold mb-4">
                  Contribute to this component
                </h3>
                <p className="text-gray-400 mb-6">
                  Help us port and improve {metadata.name} from React Bits to AJ STUDIOZ component library.
                </p>
                <a
                  href="https://github.com/aj-studioz14151/aj-studioz-main"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#B19EEF] text-[#060010] px-6 py-3 rounded-[15px] font-medium hover:bg-[#9f87e8] transition-colors"
                >
                  View on GitHub
                </a>
              </div>
            }
            componentName={metadata.name}
          />
        </div>
      </main>
    </div>
  )
}
