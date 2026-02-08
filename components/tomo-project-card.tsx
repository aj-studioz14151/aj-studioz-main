'use client'

import { useState, useRef, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Heart, Trash2 } from 'lucide-react'
import { cn } from '@/lib/utils'

interface Project {
  id: number
  title: string
  description: string
  image?: string | string[]
  link?: string
  features?: string[]
  category: string
  videoUrl?: string
  slug?: string
}

interface TomoProjectCardProps {
  project: Project
  index?: number
  onDelete?: (id: number) => void
  onToggleFavorite?: (id: number, isFavorite: boolean) => void
  isFavorite?: boolean
}

export default function TomoProjectCard({
  project,
  index = 0,
  onDelete,
  onToggleFavorite,
  isFavorite = false
}: TomoProjectCardProps) {
  const router = useRouter()
  const [liked, setLiked] = useState<boolean>(isFavorite)
  const [isHovered, setIsHovered] = useState<boolean>(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const v = videoRef.current
    if (!v || !project.videoUrl) return

    if (isHovered) {
      const tryPlay = () => {
        try {
          const p = v.play()
          if (p && typeof p.then === 'function') {
            p.catch(() => {})
          }
        } catch (e) {
          // ignore
        }
      }

      if (v.readyState >= 3) {
        tryPlay()
      } else {
        const onCanPlay = () => tryPlay()
        v.addEventListener('canplay', onCanPlay, { once: true })
        return () => {
          v.removeEventListener('canplay', onCanPlay)
        }
      }
    } else {
      try {
        v.pause()
      } catch (e) {
        // ignore
      }
    }
  }, [isHovered, project.videoUrl])

  const handleLoadedMetadata = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    const v = e.currentTarget
    v.currentTime = 0.1
  }

  const handleClick = () => {
    // If slug exists, navigate to detail page, otherwise open external link
    if (project.slug) {
      router.push(`/projects/${project.slug}`)
    } else if (project.link) {
      window.open(project.link, '_blank', 'noopener,noreferrer')
    }
  }

  const handleToggleLike = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    const newLikedState = !liked
    setLiked(newLikedState)
    if (onToggleFavorite) {
      onToggleFavorite(project.id, newLikedState)
    }
  }

  const handleDelete = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (onDelete) {
      onDelete(project.id)
    }
  }

  const getImageSrc = () => {
    if (project.image) {
      return Array.isArray(project.image) ? project.image[0] : project.image
    }
    return undefined
  }

  return (
    <div
      className="relative block rounded-xl border border-border bg-accent no-underline cursor-pointer group hover:border-muted transition-all duration-300 overflow-hidden"
      style={{
        animationDelay: `${index * 150}ms`
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      {/* Subtle gradient effect on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-primary/5 via-transparent to-transparent pointer-events-none" />
        
        <div className="px-5 pt-4 pb-3 relative">
          <div className="text-foreground text-lg font-semibold leading-tight mb-1 tracking-tight group-hover:text-primary transition-colors duration-300">
            {project.title}
          </div>
          <div className="text-muted-foreground font-medium text-xs uppercase tracking-wider">
            {project.category}
          </div>

          {onDelete && (
            <button
              aria-label="Remove from favorites"
              className={cn(
                'absolute top-3 right-3 rounded-full bg-secondary p-2 border border-border text-muted-foreground transition-all duration-300 hover:bg-destructive hover:text-destructive-foreground hover:border-destructive hover:scale-110',
                isHovered ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
              )}
              onClick={handleDelete}
            >
              <Trash2 className="w-4 h-4" />
            </button>
          )}

          {!onDelete && onToggleFavorite && (
            <button
              aria-label={liked ? 'Remove from favorites' : 'Add to favorites'}
              className={cn(
                'absolute top-3 right-3 rounded-full bg-secondary p-2 border border-border text-muted-foreground transition-all duration-300 hover:bg-muted hover:text-foreground hover:scale-110',
                isHovered ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
              )}
              onClick={handleToggleLike}
            >
              <Heart
                className={cn(
                  'w-4 h-4 transition-all duration-300',
                  liked ? 'fill-destructive stroke-destructive' : 'stroke-current'
                )}
              />
            </button>
          )}
        </div>

        <div className="h-[200px] bg-background rounded-lg overflow-hidden mx-2 mb-2 relative border border-border">
          {/* Shine effect on hover */}
          <div className={cn(
            "absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent -translate-x-full transition-transform duration-1000",
            isHovered && "translate-x-full"
          )} />
          
          {project.videoUrl ? (
          <video
            ref={videoRef}
            loop
            muted
            playsInline
            preload="metadata"
            onLoadedMetadata={handleLoadedMetadata}
            className="w-full h-full object-cover block pointer-events-none"
          >
            <source src={project.videoUrl.replace(/\.(webm|mp4)$/i, '') + '.webm'} type="video/webm" />
            <source src={project.videoUrl.replace(/\.(webm|mp4)$/i, '') + '.mp4'} type="video/mp4" />
          </video>
        ) : getImageSrc() ? (
          <img
            src={getImageSrc()}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-muted">
            <span className="text-muted-foreground text-4xl">📦</span>
          </div>
        )}
        </div>
    </div>
  )
}
