'use client'

import { notFound, useRouter } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, ExternalLink, Calendar, Tag, CheckCircle2, Copy, Check } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { getProjectBySlug, projects } from '@/lib/projects-data'
import { useParams } from 'next/navigation'
import { useState } from 'react'

export default function ProjectDetailPage() {
  const params = useParams()
  const router = useRouter()
  const project = getProjectBySlug(params.slug as string)
  const [copiedFeature, setCopiedFeature] = useState<number | null>(null)

  if (!project) {
    notFound()
  }

  const getImageSource = () => {
    if (Array.isArray(project.image)) {
      return project.image[0]
    }
    return project.image
  }

  const getStatusColor = (status?: string) => {
    switch (status) {
      case 'Live':
        return 'bg-emerald-500/10 text-emerald-500 dark:text-emerald-400 border-emerald-500/30'
      case 'Beta':
        return 'bg-blue-500/10 text-blue-500 dark:text-blue-400 border-blue-500/30'
      case 'Internal':
        return 'bg-purple-500/10 text-purple-500 dark:text-purple-400 border-purple-500/30'
      default:
        return 'bg-gray-500/10 text-gray-500 dark:text-gray-400 border-gray-500/30'
    }
  }

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text)
    setCopiedFeature(index)
    setTimeout(() => setCopiedFeature(null), 2000)
  }

  return (
    <div className="min-h-screen bg-white dark:bg-[#0A0A0F]">
      {/* Header with back button */}
      <div className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 dark:bg-[#0A0A0F]/80 border-b border-gray-200 dark:border-white/5">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Button 
            variant="ghost" 
            onClick={() => router.push('/projects')}
            className="text-gray-700 dark:text-purple-300 hover:text-gray-900 dark:hover:text-purple-200 hover:bg-gray-100 dark:hover:bg-white/5"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Projects
          </Button>
          
          {project.link && (
            <Button
              asChild
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white"
            >
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                Visit Live
              </a>
            </Button>
          )}
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid lg:grid-cols-[1fr_300px] gap-8 max-w-7xl mx-auto">
          {/* Main Content */}
          <div className="space-y-8">
            {/* Hero Section */}
            <div className="space-y-6">
              <div className="flex flex-wrap items-center gap-2">
                {project.status && (
                  <Badge className={`${getStatusColor(project.status)} border`}>
                    {project.status}
                  </Badge>
                )}
                <Badge variant="outline" className="border-purple-500/30 text-purple-600 dark:text-purple-300 bg-purple-50 dark:bg-purple-500/10">
                  {project.category}
                </Badge>
                {project.year && (
                  <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400 text-sm">
                    <Calendar className="w-3 h-3" />
                    <span>{project.year}</span>
                  </div>
                )}
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white tracking-tight">
                {project.title}
              </h1>
              
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                {project.fullDescription || project.description}
              </p>
            </div>

            {/* Main Image */}
            <div className="relative rounded-2xl overflow-hidden group bg-gray-100 dark:bg-black/50">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <img
                src={getImageSource()}
                alt={project.title}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-gray-200 dark:ring-white/10 rounded-2xl" />
            </div>

            {/* Features Section */}
            <div className="bg-white dark:bg-gradient-to-br dark:from-white/[0.03] dark:to-transparent border border-gray-200 dark:border-white/10 rounded-2xl p-6 md:p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                Key Features
              </h2>
              <div className="space-y-3">
                {project.features.map((feature, index) => {
                  const [title, ...descParts] = feature.split(':')
                  const description = descParts.join(':').trim()
                  
                  return (
                    <div 
                      key={index} 
                      className="group/feature relative bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-white/5 rounded-xl p-4 hover:border-purple-300 dark:hover:border-purple-500/30 transition-all duration-300"
                    >
                      <div className="flex gap-4">
                        <div className="flex-shrink-0 w-2 h-2 rounded-full bg-purple-500 dark:bg-purple-400 mt-2" />
                        <div className="flex-1 min-w-0">
                          <span className="text-gray-900 dark:text-white font-semibold">{title}</span>
                          {description && (
                            <span className="text-gray-600 dark:text-gray-400">: {description}</span>
                          )}
                        </div>
                        <button
                          onClick={() => copyToClipboard(feature, index)}
                          className="flex-shrink-0 opacity-0 group-hover/feature:opacity-100 transition-opacity text-gray-400 hover:text-purple-600 dark:hover:text-purple-400"
                        >
                          {copiedFeature === index ? (
                            <Check className="w-4 h-4 text-green-500" />
                          ) : (
                            <Copy className="w-4 h-4" />
                          )}
                        </button>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* About Section */}
            <div className="bg-white dark:bg-gradient-to-br dark:from-white/[0.03] dark:to-transparent border border-gray-200 dark:border-white/10 rounded-2xl p-6 md:p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">About This Project</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Additional Images Gallery */}
            {Array.isArray(project.image) && project.image.length > 1 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Gallery</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {project.image.slice(1).map((img, index) => (
                    <div key={index} className="relative rounded-2xl overflow-hidden group bg-gray-100 dark:bg-black/50">
                      <img
                        src={img}
                        alt={`${project.title} - ${index + 2}`}
                        className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 ring-1 ring-inset ring-gray-200 dark:ring-white/10 rounded-2xl" />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Technologies */}
            {project.technologies && project.technologies.length > 0 && (
              <div className="bg-white dark:bg-gradient-to-br dark:from-white/[0.03] dark:to-transparent border border-gray-200 dark:border-white/10 rounded-2xl p-6 sticky top-24">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <Tag className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                  Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="border-purple-300 dark:border-purple-500/30 text-purple-700 dark:text-purple-300 bg-purple-50 dark:bg-purple-500/5"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Quick Info */}
                <div className="mt-6 pt-6 border-t border-gray-200 dark:border-white/10">
                  <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-3">Quick Info</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-500 dark:text-gray-400">Category:</span>
                      <span className="text-gray-900 dark:text-white font-medium">{project.category}</span>
                    </div>
                    {project.year && (
                      <div className="flex justify-between">
                        <span className="text-gray-500 dark:text-gray-400">Year:</span>
                        <span className="text-gray-900 dark:text-white font-medium">{project.year}</span>
                      </div>
                    )}
                    {project.status && (
                      <div className="flex justify-between">
                        <span className="text-gray-500 dark:text-gray-400">Status:</span>
                        <span className="text-gray-900 dark:text-white font-medium">{project.status}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* More Projects */}
                <div className="mt-6 pt-6 border-t border-gray-200 dark:border-white/10">
                  <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-3">More Projects</h4>
                  <div className="space-y-2">
                    {projects
                      .filter(p => p.id !== project.id)
                      .slice(0, 3)
                      .map((p) => (
                        <Link
                          key={p.id}
                          href={`/projects/${p.slug}`}
                          className="block text-sm text-purple-600 dark:text-purple-300 hover:text-purple-700 dark:hover:text-purple-200 transition-colors"
                        >
                          → {p.title}
                        </Link>
                      ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
