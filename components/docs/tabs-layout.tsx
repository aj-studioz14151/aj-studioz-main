'use client'

import { useState, ReactNode } from 'react'
import { Eye, Code, FileText } from 'lucide-react'
import { cn } from '@/lib/utils'

interface TabsLayoutProps {
  preview: ReactNode
  code: ReactNode
  docs?: ReactNode
  className?: string
}

export function TabsLayout({ preview, code, docs, className }: TabsLayoutProps) {
  const [activeTab, setActiveTab] = useState<'preview' | 'code' | 'docs'>('preview')

  return (
    <div className={cn('w-full', className)}>
      {/* Tab Navigation */}
      <div className="flex items-center gap-2 mb-6 flex-wrap">
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

        {docs && (
          <button
            onClick={() => setActiveTab('docs')}
            className={cn(
              'flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200',
              'border border-border',
              activeTab === 'docs'
                ? 'bg-accent text-primary border-primary/20'
                : 'bg-background text-muted-foreground hover:bg-muted hover:text-foreground'
            )}
          >
            <FileText className="h-4 w-4" />
            Docs
          </button>
        )}
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

        {activeTab === 'docs' && docs && (
          <div className="animate-in fade-in duration-200">
            {docs}
          </div>
        )}
      </div>
    </div>
  )
}
