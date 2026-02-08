'use client'

import { useState } from 'react'
import { ChevronDown, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

interface NavItem {
  title: string
  href?: string
  children?: NavItem[]
}

const navigation: NavItem[] = [
  {
    title: 'Getting Started',
    children: [
      { title: 'Introduction', href: '/resources/documentation#introduction' },
      { title: 'Installation', href: '/resources/documentation#installation' },
      { title: 'Configuration', href: '/resources/documentation#configuration' }
    ]
  },
  {
    title: 'Components',
    children: [
      { title: 'Code Blocks', href: '/resources/documentation#codeblocks' },
      { title: 'Pricing Cards', href: '/resources/documentation#pricing' },
      { title: 'Project Cards', href: '/resources/documentation#project-cards' }
    ]
  },
  {
    title: 'API Reference',
    children: [
      { title: 'Authentication', href: '/resources/documentation#authentication' },
      { title: 'Endpoints', href: '/resources/documentation#endpoints' }
    ]
  }
]

export function DocsSidebar() {
  const pathname = usePathname()
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    'Getting Started': true,
    'Components': true
  })

  const toggleSection = (title: string) => {
    setOpenSections(prev => ({
      ...prev,
      [title]: !prev[title]
    }))
  }

  return (
    <aside className="w-64 flex-shrink-0 sticky top-6 h-fit">
      <nav className="space-y-1">
        {navigation.map((section) => (
          <div key={section.title} className="mb-4">
            {section.children ? (
              <>
                <button
                  onClick={() => toggleSection(section.title)}
                  className="flex items-center justify-between w-full px-3 py-2 text-sm font-semibold text-foreground hover:bg-muted rounded-lg transition-colors"
                >
                  {section.title}
                  {openSections[section.title] ? (
                    <ChevronDown className="h-4 w-4" />
                  ) : (
                    <ChevronRight className="h-4 w-4" />
                  )}
                </button>
                {openSections[section.title] && (
                  <div className="ml-3 mt-1 space-y-1 border-l-2 border-border pl-3">
                    {section.children.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href || '#'}
                        className={cn(
                          'block px-3 py-1.5 text-sm rounded-lg transition-colors',
                          pathname === item.href || location.hash === item.href?.split('#')[1]
                            ? 'text-primary bg-accent font-medium'
                            : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                        )}
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <Link
                href={section.href || '#'}
                className={cn(
                  'block px-3 py-2 text-sm font-semibold rounded-lg transition-colors',
                  pathname === section.href
                    ? 'text-primary bg-accent'
                    : 'text-foreground hover:bg-muted'
                )}
              >
                {section.title}
              </Link>
            )}
          </div>
        ))}
      </nav>
    </aside>
  )
}
