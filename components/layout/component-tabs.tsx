'use client'

import { useState, ReactNode } from 'react'
import { Eye, Code, Lightbulb, Heart } from 'lucide-react'
import { cn } from '@/lib/utils'

interface ComponentTabsProps {
  preview: ReactNode
  code: ReactNode
  contribute?: ReactNode
  title: string
  description?: string
}

export function ComponentTabs({ preview, code, contribute, title, description }: ComponentTabsProps) {
  const [activeTab, setActiveTab] = useState<'preview' | 'code' | 'contribute'>('preview')

  return (
    <div className="w-full">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-foreground mb-3">{title}</h1>
        {description && (
          <p className="text-lg text-muted-foreground">{description}</p>
        )}
      </div>

      {/* Tabs Navigation */}
      <div className="flex items-center gap-2 mb-6 border-b border-border pb-4">
        <button
          onClick={() => setActiveTab('preview')}
          className={cn(
            'flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200',
            'border border-border',
            activeTab === 'preview'
              ? 'bg-accent text-primary border-primary/20'
              : 'bg-background text-muted-foreground hover:bg-muted hover:text-foreground'
          )}
        >
          <Eye className="h-4 w-4" />
          Preview
        </button>

        <button
          onClick={() => setActiveTab('code')}
          className={cn(
            'flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200',
            'border border-border',
            activeTab === 'code'
              ? 'bg-accent text-primary border-primary/20'
              : 'bg-background text-muted-foreground hover:bg-muted hover:text-foreground'
          )}
        >
          <Code className="h-4 w-4" />
          Code
        </button>

        {contribute && (
          <button
            onClick={() => setActiveTab('contribute')}
            className={cn(
              'flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200',
              'border border-border',
              activeTab === 'contribute'
                ? 'bg-accent text-primary border-primary/20'
                : 'bg-background text-muted-foreground hover:bg-muted hover:text-foreground'
            )}
          >
            <Lightbulb className="h-4 w-4" />
            Contribute
          </button>
        )}

        <div className="ml-auto">
          <button
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 border border-border bg-background text-muted-foreground hover:bg-muted hover:text-foreground"
            title="Add to favorites"
          >
            <Heart className="h-4 w-4" />
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

        {activeTab === 'contribute' && contribute && (
          <div className="animate-in fade-in duration-200">
            {contribute}
          </div>
        )}
      </div>
    </div>
  )
}

// Preview Container Component
interface PreviewContainerProps {
  children: ReactNode
  className?: string
  centered?: boolean
  minHeight?: string
}

export function PreviewContainer({ 
  children, 
  className, 
  centered = true,
  minHeight = '400px'
}: PreviewContainerProps) {
  return (
    <div 
      className={cn(
        'relative w-full rounded-xl border border-border bg-accent overflow-hidden',
        className
      )}
      style={{ minHeight }}
    >
      <div className={cn(
        'w-full h-full p-8',
        centered && 'flex items-center justify-center'
      )}>
        {children}
      </div>
    </div>
  )
}
