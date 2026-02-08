'use client'

import { useState, useRef, useEffect } from 'react'
import { Heart } from 'lucide-react'
import { cn } from '@/lib/utils'

interface ProjectCardProps {
  category: string
  title: string
  description: string
  link: string
  tags?: string[]
  videoUrl?: string
  image?: string
}

const ProjectCard = ({ category, title, description, link, tags, videoUrl, image }: ProjectCardProps) => {
  const [liked, setLiked] = useState<boolean>(false)
  const [isHovered, setIsHovered] = useState<boolean>(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const v = videoRef.current
    if (!v || !videoUrl) return

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
  }, [isHovered, videoUrl])

  const handleLoadedMetadata = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    const v = e.currentTarget
    v.currentTime = 0.1
  }

  const handleClick = () => {
    if (link) {
      window.open(link, '_blank', 'noopener,noreferrer')
    }
  }

  const handleToggleLike = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setLiked(!liked)
  }

  return (
    <div
      className="relative block no-underline cursor-pointer group transition-all duration-300 overflow-hidden"
      style={{
        backgroundColor: '#170D27',
        border: '1px solid #271E37',
        borderRadius: '30px',
        padding: '6px'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      <div className="px-4 pt-3 pb-3 relative">
        <div
          className="text-lg font-medium leading-tight mb-1"
          style={{ color: '#ffffff' }}
        >
          {title}
        </div>
        <div
          className="font-normal text-xs"
          style={{ color: '#B19EEF' }}
        >
          {category}
        </div>

        <button
          aria-label={liked ? 'Remove from favorites' : 'Add to favorites'}
          className={cn(
            'absolute top-2 right-2 rounded-full p-2 transition-all duration-150',
            isHovered ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          )}
          style={{
            backgroundColor: '#1E1430',
            color: '#B19EEF'
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#271E37'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#1E1430'}
          onClick={handleToggleLike}
        >
          <Heart
            className="w-4 h-4"
            style={{
              fill: liked ? '#B19EEF' : 'none',
              stroke: '#B19EEF'
            }}
          />
        </button>
      </div>

      <div
        className="h-[200px] overflow-hidden relative"
        style={{
          backgroundColor: '#000000',
          borderRadius: '24px'
        }}
      >
          
          {videoUrl ? (
          <video
            ref={videoRef}
            loop
            muted
            playsInline
            preload="metadata"
            onLoadedMetadata={handleLoadedMetadata}
            className="w-full h-full object-cover block pointer-events-none"
          >
            <source src={videoUrl.replace(/\.(webm|mp4)$/i, '') + '.webm'} type="video/webm" />
            <source src={videoUrl.replace(/\.(webm|mp4)$/i, '') + '.mp4'} type="video/mp4" />
          </video>
        ) : image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center" style={{ backgroundColor: '#170D27' }}>
            <span className="text-4xl" style={{ color: '#B19EEF' }}>📦</span>
          </div>
        )}
      </div>
    </div>
  )
}

export default ProjectCard