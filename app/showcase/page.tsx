'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { Search, Sparkles, Zap, Palette, Layout } from 'lucide-react'
import { componentMetadata, CATEGORIES } from '@/lib/components-metadata'
import { cn } from '@/lib/utils'

export default function ShowcasePage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string>('All')

  const allComponents = useMemo(() => {
    return Object.entries(componentMetadata).map(([key, data]) => ({
      ...data,
      slug: key.toLowerCase().replace(/\//g, '/'),
      href: data.docsUrl || `/components/${key.toLowerCase().replace(/\//g, '/')}`
    }))
  }, [])

  const filteredComponents = useMemo(() => {
    return allComponents.filter(component => {
      const matchesSearch = component.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        component.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        component.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      
      const matchesCategory = selectedCategory === 'All' || component.category === selectedCategory

      return matchesSearch && matchesCategory
    })
  }, [allComponents, searchTerm, selectedCategory])

  const categoryIcons = {
    'Components': Layout,
    'Animations': Zap,
    'Backgrounds': Palette,
    'TextAnimations': Sparkles
  }

  return (
    <div className="min-h-screen bg-[#060010]">
      {/* Header */}
      <div className="border-b border-[#271E37] bg-[#060010]/95 backdrop-blur-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">Component Showcase</h1>
              <p className="text-gray-400">
                Browse our collection of {allComponents.length} animated components for React
              </p>
            </div>
            <Link
              href="/components/dock"
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-[15px] text-white font-medium hover:from-purple-700 hover:to-blue-700 transition-all duration-200"
            >
              View All Components
            </Link>
          </div>

          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search components..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-[#170D27] border border-[#271E37] rounded-[15px] text-white placeholder-gray-500 focus:outline-none focus:border-[#B19EEF] transition-colors"
            />
          </div>

          {/* Category Filters */}
          <div className="flex gap-2 mt-4 flex-wrap">
            <button
              onClick={() => setSelectedCategory('All')}
              className={cn(
                'px-4 py-2 rounded-[12px] text-sm font-medium transition-all duration-200',
                selectedCategory === 'All'
                  ? 'bg-[#B19EEF] text-[#060010]'
                  : 'bg-[#170D27] text-white hover:bg-[#271E37] border border-[#271E37]'
              )}
            >
              All Components
            </button>
            {['Components', 'Animations', 'Backgrounds', 'TextAnimations'].map((category) => {
              const Icon = categoryIcons[category as keyof typeof categoryIcons]
              const count = allComponents.filter(c => c.category === category).length
              
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={cn(
                    'flex items-center gap-2 px-4 py-2 rounded-[12px] text-sm font-medium transition-all duration-200',
                    selectedCategory === category
                      ? 'bg-[#B19EEF] text-[#060010]'
                      : 'bg-[#170D27] text-white hover:bg-[#271E37] border border-[#271E37]'
                  )}
                >
                  <Icon className="h-4 w-4" />
                  {category}
                  <span className="text-xs opacity-70">({count})</span>
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {/* Component Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {filteredComponents.length === 0 ? (
          <div className="text-center py-20">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#170D27] border border-[#271E37] mb-4">
              <Search className="h-8 w-8 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">No components found</h3>
            <p className="text-gray-400">Try adjusting your search or filters</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredComponents.map((component) => {
              const Icon = categoryIcons[component.category as keyof typeof categoryIcons]
              
              return (
                <Link
                  key={component.slug}
                  href={component.href}
                  className="group relative bg-[#170D27] border border-[#271E37] rounded-[24px] p-6 hover:border-[#B19EEF] transition-all duration-300 overflow-hidden"
                >
                  {/* Video Preview if available */}
                  {component.videoUrl && (
                    <div className="aspect-video rounded-[15px] bg-[#060010] mb-4 overflow-hidden">
                      <video
                        src={component.videoUrl}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}

                  {/* Component Info */}
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-[#B19EEF] transition-colors">
                        {component.name}
                      </h3>
                      <div className="flex items-center gap-2 text-xs text-gray-400">
                        <Icon className="h-3 w-3" />
                        <span>{component.category}</span>
                      </div>
                    </div>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-8 h-8 rounded-full bg-[#B19EEF] flex items-center justify-center">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path
                            d="M6 12L10 8L6 4"
                            stroke="#060010"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-gray-400 mb-4 line-clamp-2">
                    {component.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {component.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-[#060010] border border-[#271E37] rounded-[8px] text-xs text-gray-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Hover gradient effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 to-blue-600/0 group-hover:from-purple-600/5 group-hover:to-blue-600/5 transition-all duration-300 pointer-events-none rounded-[24px]" />
                </Link>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}
