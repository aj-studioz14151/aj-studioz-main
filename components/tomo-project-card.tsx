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
      className="relative block rounded-[32px] p-[1px] no-underline cursor-pointer group"
      style={{
        animationDelay: `${index * 150}ms`,
        background: isHovered 
          ? 'linear-gradient(135deg, rgba(139, 92, 246, 0.3), rgba(59, 130, 246, 0.3), rgba(139, 92, 246, 0.3))'
          : 'linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(59, 130, 246, 0.2), rgba(139, 92, 246, 0.2))'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      <div className="relative bg-gradient-to-br from-[#0A0A0F] via-[#0F0F14] to-[#0A0A0F] rounded-[31px] overflow-hidden transition-all duration-500 hover:shadow-[0_0_40px_rgba(139,92,246,0.3)]">
        {/* Glass morphism overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent pointer-events-none" />
        
        <div className="px-5 pt-4 pb-3 relative">
          <div className="text-white text-lg font-semibold leading-tight mb-1 tracking-tight">
            {project.title}
          </div>
          <div className="text-purple-300/70 font-medium text-xs uppercase tracking-wider">
            {project.category}
          </div>

          {onDelete && (
            <button
              aria-label="Remove from favorites"
              className={cn(
                'absolute top-3 right-3 rounded-full backdrop-blur-xl bg-white/5 p-2 border border-white/10 text-purple-300 transition-all duration-300 hover:bg-white/10 hover:border-red-400/50 hover:scale-110 hover:text-red-400',
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
                'absolute top-3 right-3 rounded-full backdrop-blur-xl bg-white/5 p-2 border border-white/10 text-purple-300 transition-all duration-300 hover:bg-white/10 hover:border-purple-400/50 hover:scale-110',
                isHovered ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
              )}
              onClick={handleToggleLike}
            >
              <Heart
                className={cn(
                  'w-4 h-4 transition-all duration-300',
                  liked ? 'fill-purple-400 stroke-purple-400 drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]' : 'stroke-purple-300'
                )}
              />
            </button>
          )}
        </div>

        <div className="h-[200px] bg-black/50 rounded-[24px] overflow-hidden mx-[6px] mb-[6px] relative">
          {/* Shine effect on hover */}
          <div className={cn(
            "absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full transition-transform duration-1000",
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
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#271E37] to-[#170D27]">
            <span className="text-[#B19EEF] text-4xl">📦</span>
          </div>
        )}
      </div>
    </div>
  )
}
