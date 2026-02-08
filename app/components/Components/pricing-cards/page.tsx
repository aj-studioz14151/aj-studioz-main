'use client'

import ComponentsLayout from '@/components/layout/components-layout'
import { ComponentTabs, PreviewContainer } from '@/components/layout/component-tabs'
import { CodeBlock } from '@/components/ui/code-block'
import PricingCard from '@/components/pricing/pricing-card'
import { INDIVIDUAL_PLANS } from '@/components/pricing/constants'
import { Toaster } from '@/components/ui/toaster'

export default function PricingCardsPage() {
  const usageCode = `import PricingCard from '@/components/pricing/pricing-card';
import { INDIVIDUAL_PLANS } from '@/components/pricing/constants';

export default function PricingPage() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {INDIVIDUAL_PLANS.map(plan => (
        <PricingCard 
          key={plan.id} 
          plan={plan} 
          isYearly={isYearly} 
        />
      ))}
    </div>
  );
}`

  const installCode = `# Install the Pricing Component
npx @ajstudioz14151/pricing-component@1.2.0 add`

  return (
    <ComponentsLayout>
      <ComponentTabs
        title="Pricing Cards"
        description="Beautiful, responsive pricing card components with monthly/yearly toggle and feature lists."
        preview={
          <div className="space-y-6">
            <PreviewContainer minHeight="700px" centered={false}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                {INDIVIDUAL_PLANS.map(plan => (
                  <PricingCard key={plan.id} plan={plan} isYearly={false} />
                ))}
              </div>
            </PreviewContainer>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-6 rounded-xl border border-border bg-accent">
                <h3 className="text-lg font-semibold mb-2">💳 Flexible Plans</h3>
                <p className="text-sm text-muted-foreground">
                  Support for different pricing tiers and features
                </p>
              </div>
              <div className="p-6 rounded-xl border border-border bg-accent">
                <h3 className="text-lg font-semibold mb-2">📅 Billing Toggle</h3>
                <p className="text-sm text-muted-foreground">
                  Switch between monthly and yearly billing
                </p>
              </div>
              <div className="p-6 rounded-xl border border-border bg-accent">
                <h3 className="text-lg font-semibold mb-2">✨ Highlights</h3>
                <p className="text-sm text-muted-foreground">
                  Popular badge and feature comparison
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
                  <code className="px-2 py-1 rounded bg-muted text-foreground">plan</code>
                  <span className="text-muted-foreground ml-2">- Plan object with pricing details</span>
                </div>
                <div>
                  <code className="px-2 py-1 rounded bg-muted text-foreground">isYearly</code>
                  <span className="text-muted-foreground ml-2">- Boolean for yearly billing</span>
                </div>
                <div>
                  <code className="px-2 py-1 rounded bg-muted text-foreground">onSelectPlan</code>
                  <span className="text-muted-foreground ml-2">- Callback function when plan is selected</span>
                </div>
              </div>
            </div>
          </div>
        }
        contribute={
          <div className="prose prose-slate dark:prose-invert max-w-none">
            <h3 className="text-2xl font-bold">Contribute</h3>
            <p>
              Help improve this component by submitting issues, suggestions, or pull requests.
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
