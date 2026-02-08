'use client'

import { useState, useRef, useEffect } from 'react'
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
    if (project.link) {
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
      className="relative block bg-[#170D27] border border-[#271E37] rounded-[30px] p-[6px] no-underline transition-all duration-250 hover:saturate-150 hover:no-underline cursor-pointer group"
      style={{ animationDelay: `${index * 150}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      <div className="px-4 pt-3 pb-3 relative">
        <div className="text-white text-base font-medium leading-[1.4]">
          {project.title}
        </div>
        <div className="text-[#B19EEF] font-normal text-xs">
          {project.category}
        </div>

        {onDelete && (
          <button
            aria-label="Remove from favorites"
            className={cn(
              'absolute top-2 right-2 rounded-full bg-[#1E1430] p-2 text-[#B19EEF] transition-opacity duration-150 hover:bg-[#271E37]',
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
              'absolute top-2 right-2 rounded-full bg-[#1E1430] p-2 text-[#B19EEF] transition-opacity duration-150 hover:bg-[#271E37]',
              isHovered ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
            )}
            onClick={handleToggleLike}
          >
            <Heart
              className={cn(
                'w-4 h-4 transition-colors',
                liked ? 'fill-[#B19EEF] stroke-[#B19EEF]' : 'stroke-[#B19EEF]'
              )}
            />
          </button>
        )}
      </div>

      <div className="h-[200px] bg-black rounded-[24px] overflow-hidden">
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
