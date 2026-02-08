'use client'

import { useState, ReactNode } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronDown, ChevronRight, Menu, X, Home, Book, Github } from 'lucide-react'
import { cn } from '@/lib/utils'
import { CATEGORIES, NEW, UPDATED } from '@/lib/component-categories'

interface ComponentsLayoutProps {
  children: ReactNode
}

const slug = (str: string) => str.toLowerCase().replace(/\s+/g, '-')

export default function ComponentsLayout({ children }: ComponentsLayoutProps) {
  const pathname = usePathname()
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    'Components': true,
    'Get Started': true
  })

  const toggleSection  = (section: string) => {
    setOpenSections(prev => ({ ...prev, [section]: !prev[section] }))
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-background border-b border-border">
        <div className="flex items-center justify-between p-4">
          <Link href="/" className="flex items-center gap-2">
            <img src="/AJ.svg" alt="AJ STUDIOZ" className="w-6 h-6" />
            <span className="font-bold text-lg">AJ STUDIOZ</span>
          </Link>
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-2 rounded-lg hover:bg-muted transition-colors"
          >
            {isSidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div className="flex pt-16 lg:pt-0">
        {/* Sidebar */}
        <aside
          className={cn(
            'fixed inset-y-0 left-0 z-40 w-64 bg-background border-r border-border overflow-y-auto transition-transform duration-300 lg:translate-x-0',
            isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
          )}
        >
          <div className="p-6">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 mb-8">
              <img src="/AJ.svg" alt="AJ STUDIOZ" className="w-8 h-8" />
              <span className="font-bold text-xl">AJ STUDIOZ</span>
            </Link>

            {/* Quick Links */}
            <div className="mb-8 space-y-2">
              <Link
                href="/"
                className="flex items-center gap-2 px-3 py-2 text-sm rounded-lg hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
              >
                <Home className="h-4 w-4" />
                Home
              </Link>
              <Link
                href="/resources/documentation"
                className="flex items-center gap-2 px-3 py-2 text-sm rounded-lg hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
              >
                <Book className="h-4 w-4" />
                Documentation
              </Link>
              <Link
                href="https://github.com/aj-studioz14151"
                target="_blank"
                className="flex items-center gap-2 px-3 py-2 text-sm rounded-lg hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
              >
                <Github className="h-4 w-4" />
                GitHub
              </Link>
            </div>

            {/* Categories */}
            <nav className="space-y-1">
              {CATEGORIES.map((category)  => (
                <div key={category.name} className="mb-4">
                  <button
                    onClick={() => toggleSection(category.name)}
                    className="flex items-center justify-between w-full px-3 py-2 text-sm font-semibold text-foreground hover:bg-muted rounded-lg transition-colors"
                  >
                    {category.name}
                    {openSections[category.name] ? (
                      <ChevronDown className="h-4 w-4" />
                    ) : (
                      <ChevronRight className="h-4 w-4" />
                    )}
                  </button>

                  {openSections[category.name] && (
                    <div className="ml-3 mt-1 space-y-1 border-l-2 border-border pl-3">
                      {category.subcategories.map((item) => {
                        const href = category.name === 'Get Started'
                          ? `/components/get-started/${slug(item)}`
                          : `/components/${slug(category.name)}/${slug(item)}`
                        
                        const isActive = pathname === href
                        const isNew = NEW.includes(item)
                        const isUpdated = UPDATED.includes(item)

                        return (
                          <Link
                            key={item}
                            href={href}
                            className={cn(
                              'block px-3 py-1.5 text-sm rounded-lg transition-colors relative',
                              isActive
                                ? 'text-primary bg-accent font-medium'
                                : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                            )}
                            onClick={() => setIsSidebarOpen(false)}
                          >
                            <span className="flex items-center justify-between">
                              {item}
                              {isNew && (
                                <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded bg-green-500/10 text-green-500">
                                  NEW
                                </span>
                              )}
                              {isUpdated && !isNew && (
                                <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded bg-blue-500/10 text-blue-500">
                                  UPDATED
                                </span>
                              )}
                            </span>
                          </Link>
                        )
                      })}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 lg:ml-64">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {children}
          </div>
        </main>
      </div>

      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-background/80 backdrop-blur-sm lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </div>
  )
}
