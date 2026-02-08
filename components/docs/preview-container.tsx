'use client'

import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

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
