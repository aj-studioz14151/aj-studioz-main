'use client'

import { useState, ReactNode } from 'react'
import { Eye, Code, Lightbulb, Heart, RotateCcw } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

interface ComponentTabsProps {
  preview: ReactNode
  code: ReactNode
  contribute?: ReactNode
  className?: string
  componentName?: string
  onReset?: () => void
  hasChanges?: boolean
}

export function ComponentTabs({ 
  preview, 
  code, 
  contribute,
  className,
  componentName,
  onReset,
  hasChanges = false
}: ComponentTabsProps) {
  const [activeTab, setActiveTab] = useState<'preview' | 'code' | 'contribute'>('preview')
  const [isFavorite, setIsFavorite] = useState(false)

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite)
    // Here you would save to localStorage
  }

  return (
    <div className={cn('w-full', className)}>
      {/* Tab Navigation */}
      <div className="flex items-center justify-between mb-6 flex-wrap gap-2">
        <div className="flex items-center gap-2 flex-wrap">
          <button
            onClick={() => setActiveTab('preview')}
            className={cn(
              'flex items-center gap-2 px-4 h-10 rounded-[15px] text-sm font-medium transition-all duration-200',
              'border border-[#392e4e]',
              activeTab === 'preview'
                ? 'bg-[#170D27] text-[#B19EEF]'
                : 'bg-[#060010] text-white hover:bg-[#271E37]'
            )}
          >
            <Eye className="h-4 w-4" />
            Preview
          </button>

          <button
            onClick={() => setActiveTab('code')}
            className={cn(
              'flex items-center gap-2 px-4 h-10 rounded-[15px] text-sm font-medium transition-all duration-200',
              'border border-[#392e4e]',
              activeTab === 'code'
                ? 'bg-[#170D27] text-[#B19EEF]'
                : 'bg-[#060010] text-white hover:bg-[#271E37]'
            )}
          >
            <Code className="h-4 w-4" />
            Code
          </button>

          <button
            onClick={() => setActiveTab('contribute')}
            className={cn(
              'flex items-center gap-2 px-4 h-10 rounded-[15px] text-sm font-medium transition-all duration-200',
              'border border-[#392e4e]',
              activeTab === 'contribute'
                ? 'bg-[#170D27] text-[#B19EEF]'
                : 'bg-[#060010] text-white hover:bg-[#271E37]'
            )}
          >
            <Lightbulb className="h-4 w-4" />
            Contribute
          </button>
        </div>

        <div className="flex items-center gap-2">
          {hasChanges && onReset && (
            <button
              onClick={onReset}
              className="flex items-center gap-2 px-4 h-10 rounded-[15px] text-sm font-medium transition-all duration-200 border border-[#392e4e] bg-[#060010] text-white hover:bg-[#271E37]"
            >
              <RotateCcw className="h-4 w-4" />
              Reset
            </button>
          )}

          <button
            onClick={toggleFavorite}
            className={cn(
              'w-10 h-10 rounded-[15px] flex items-center justify-center text-sm font-medium transition-all duration-200',
              'border',
              isFavorite
                ? 'bg-gradient-to-br from-purple-600 to-blue-600 border-transparent'
                : 'border-[#392e4e] bg-[#060010] hover:bg-[#271E37]'
            )}
            aria-label="Add to favorites"
          >
            <Heart className={cn('h-4 w-4', isFavorite && 'fill-white')} />
          </button>
        </div>
      </div>

      {/* Tab Content */}
      <div className="relative">
        {activeTab === 'preview' && (
          <div className="animate-in fade-in duration-200">
            {preview}
          </div>
        )}

        {activeTab === 'code' && (
          <div className="animate-in fade-in duration-200">
            {code}
          </div>
        )}

        {activeTab === 'contribute' && (
          <div className="animate-in fade-in duration-200">
            {contribute || (
              <div className="bg-[#170D27] border border-[#271E37] rounded-xl p-8 text-center">
                <Lightbulb className="h-12 w-12 text-[#B19EEF] mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Contribute</h3>
                <p className="text-white/70 mb-6 max-w-md mx-auto">
                  Help improve this component! Submit improvements, report bugs, or suggest new features.
                </p>
                <Button
                  asChild
                  className="bg-[#B19EEF] text-black hover:bg-[#9F87DD]"
                >
                  <a 
                    href={`https://github.com/aj-studioz14151/aj-studioz-main/issues/new?title=${encodeURIComponent(`[Component] ${componentName}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Open on GitHub
                  </a>
                </Button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
