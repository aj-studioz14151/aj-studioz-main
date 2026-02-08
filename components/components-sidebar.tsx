'use client'

import { useState, useEffect, useRef } from 'react'
import { ChevronDown, ChevronRight, Heart, Search, Menu, X } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { CATEGORIES, NEW, UPDATED } from '@/lib/components-metadata'
import { Badge } from '@/components/ui/badge'

const slug = (str: string) => str.replace(/\s+/g, '-').toLowerCase()

function SidebarContent({ onLinkClick }: { onLinkClick?: () => void }) {
  const pathname = usePathname()
  const [openCategories, setOpenCategories] = useState<Record<string, boolean>>({
    'Get Started': true,
    'Components': true
  })
  const [activeLinePosition, setActiveLinePosition] = useState<number | null>(null)
  const [hoverLinePosition, setHoverLinePosition] = useState<number | null>(null)
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({})

  const toggleCategory = (name: string) => {
    setOpenCategories(prev => ({
      ...prev,
      [name]: !prev[name]
    }))
  }

  useEffect(() => {
    // Update active line position when pathname changes
    const activeLink = Object.entries(linkRefs.current).find(([href]) => 
      pathname === href || pathname.startsWith(href + '/')
    )?.[1]
    
    if (activeLink) {
      const rect = activeLink.getBoundingClientRect()
      const containerRect = activeLink.closest('.sidebar-nav')?.getBoundingClientRect()
      if (containerRect) {
        setActiveLinePosition(rect.top - containerRect.top + rect.height / 2)
      }
    }
  }, [pathname])

  const handleMouseEnter = (href: string) => {
    const link = linkRefs.current[href]
    if (link) {
      const rect = link.getBoundingClientRect()
      const containerRect = link.closest('.sidebar-nav')?.getBoundingClientRect()
      if (containerRect) {
        setHoverLinePosition(rect.top - containerRect.top + rect.height / 2)
      }
    }
  }

  const handleMouseLeave = () => {
    setHoverLinePosition(null)
  }

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto px-4 py-6 sidebar-nav relative">
        {/* Active indicator line */}
        <div
          className="absolute left-4 w-0.5 h-4 bg-white rounded-full transition-all duration-200 pointer-events-none"
          style={{
            top: activeLinePosition !== null ? `${activeLinePosition}px` : '-100px',
            opacity: activeLinePosition !== null ? 1 : 0,
            transform: `translateY(-50%)`
          }}
        />
        
        {/* Hover indicator line */}
        <div
          className="absolute left-4 w-0.5 h-4 bg-white/50 rounded-full transition-all duration-150 pointer-events-none"
          style={{
            top: hoverLinePosition !== null ? `${hoverLinePosition}px` : '-100px',
            opacity: hoverLinePosition !== null ? 1 : 0,
            transform: `translateY(-50%)`
          }}
        />

        <nav className="space-y-2 relative pl-3">
          {CATEGORIES.map((category) => (
            <div key={category.name} className="mb-4">
              <button
                onClick={() => toggleCategory(category.name)}
                className="flex items-center justify-between w-full px-3 py-2 text-sm font-semibold text-white hover:bg-white/5 rounded-lg transition-colors"
              >
                <span>{category.name}</span>
                {openCategories[category.name] ? (
                  <ChevronDown className="h-4 w-4 text-white/60" />
                ) : (
                  <ChevronRight className="h-4 w-4 text-white/60" />
                )}
              </button>

              {openCategories[category.name] && category.subcategories.length > 0 && (
                <div className="mt-1 space-y-0.5">
                  {category.subcategories.map((item) => {
                    const href = `/components/${slug(item)}`
                    const isActive = pathname === href
                    const isNew = NEW.includes(item)
                    const isUpdated = UPDATED.includes(item)

                    return (
                      <Link
                        key={item}
                        href={href}
                        ref={(el) => { linkRefs.current[href] = el }}
                        onClick={onLinkClick}
                        onMouseEnter={() => handleMouseEnter(href)}
                        onMouseLeave={handleMouseLeave}
                        className={cn(
                          'flex items-center justify-between gap-2 px-3 py-2 text-sm rounded-lg transition-colors relative',
                          isActive
                            ? 'text-white bg-white/10 font-medium'
                            : 'text-white/70 hover:text-white hover:bg-white/5'
                        )}
                      >
                        <span>{item}</span>
                        {(isNew || isUpdated) && (
                          <Badge 
                            variant="secondary" 
                            className={cn(
                              'text-[10px] px-1.5 py-0 h-4',
                              isNew && 'bg-purple-500/20 text-purple-300',
                              isUpdated && 'bg-blue-500/20 text-blue-300'
                            )}
                          >
                            {isNew ? 'NEW' : 'UPD'}
                          </Badge>
                        )}
                      </Link>
                    )
                  })}
                </div>
              )}
            </div>
          ))}

          {/* Favorites Link */}
          <Link
            href="/components/favorites"
            ref={(el) => { linkRefs.current['/components/favorites'] = el }}
            onClick={onLinkClick}
            onMouseEnter={() => handleMouseEnter('/components/favorites')}
            onMouseLeave={handleMouseLeave}
            className={cn(
              'flex items-center gap-2 px-3 py-2 text-sm rounded-lg transition-colors',
              pathname === '/components/favorites'
                ? 'text-white bg-white/10 font-medium'
                : 'text-white/70 hover:text-white hover:bg-white/5'
            )}
          >
            <Heart className="h-4 w-4" />
            <span>Favorites</span>
          </Link>
        </nav>
      </div>
    </div>
  )
}

export function ComponentsSidebar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsMobileOpen(true)}
        className="lg:hidden fixed top-4 left-4 z-40 p-2 rounded-lg bg-accent border border-border"
        aria-label="Open Menu"
      >
        <Menu className="h-5 w-5" />
      </button>

      {/* Desktop Sidebar */}
      <aside className="hidden lg:block w-64 flex-shrink-0 sticky top-0 h-screen bg-[#060010] border-r border-[#271E37]">
        <SidebarContent />
      </aside>

      {/* Mobile Sidebar */}
      {isMobileOpen && (
        <>
          <div
            className="lg:hidden fixed inset-0 bg-black/50 z-50"
            onClick={() => setIsMobileOpen(false)}
          />
          <aside className="lg:hidden fixed top-0 left-0 h-screen w-64 bg-[#060010] border-r border-[#271E37] z-50">
            <div className="flex items-center justify-between px-4 py-4 border-b border-[#271E37]">
              <h2 className="text-lg font-semibold text-white">Components</h2>
              <button
                onClick={() => setIsMobileOpen(false)}
                className="p-2 rounded-lg hover:bg-white/5"
                aria-label="Close Menu"
              >
                <X className="h-5 w-5 text-white" />
              </button>
            </div>
            <SidebarContent onLinkClick={() => setIsMobileOpen(false)} />
          </aside>
        </>
      )}
    </>
  )
}
