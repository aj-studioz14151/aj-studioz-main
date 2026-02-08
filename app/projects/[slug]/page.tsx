'use client'

import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, ExternalLink, Calendar, Tag, CheckCircle2 } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { getProjectBySlug, projects } from '@/lib/projects-data'
import { useParams } from 'next/navigation'

export default function ProjectDetailPage() {
  const params = useParams()
  const project = getProjectBySlug(params.slug as string)

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
        return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
      case 'Beta':
        return 'bg-blue-500/10 text-blue-400 border-blue-500/30'
      case 'Internal':
        return 'bg-purple-500/10 text-purple-400 border-purple-500/30'
      default:
        return 'bg-gray-500/10 text-gray-400 border-gray-500/30'
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A0A0F] via-[#0F0F14] to-[#0A0A0F]">
      {/* Header with back button */}
      <div className="sticky top-0 z-50 backdrop-blur-xl bg-[#0A0A0F]/80 border-b border-white/5">
        <div className="container mx-auto px-4 py-4">
          <Link href="/projects">
            <Button variant="ghost" className="text-purple-300 hover:text-purple-200 hover:bg-white/5">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Projects
            </Button>
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Title and Status */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              {project.status && (
                <Badge className={`${getStatusColor(project.status)} border`}>
                  {project.status}
                </Badge>
              )}
              <Badge variant="outline" className="border-purple-500/30 text-purple-300">
                {project.category}
              </Badge>
              {project.year && (
                <div className="flex items-center gap-1 text-gray-400 text-sm">
                  <Calendar className="w-3 h-3" />
                  <span>{project.year}</span>
                </div>
              )}
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
              {project.title}
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              {project.fullDescription || project.description}
            </p>

            {project.link && (
              <div className="flex gap-4">
                <Button
                  asChild
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white"
                  size="lg"
                >
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Visit Project
                  </a>
                </Button>
              </div>
            )}
          </div>

          {/* Main Image */}
          <div className="relative rounded-3xl overflow-hidden mb-12 group">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <img
              src={getImageSource()}
              alt={project.title}
              className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-3xl" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="md:col-span-2 space-y-8">
              {/* Features */}
              <div className="bg-gradient-to-br from-white/[0.03] to-transparent border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6 text-purple-400" />
                  Key Features
                </h2>
                <ul className="space-y-4">
                  {project.features.map((feature, index) => {
                    const [title, ...descParts] = feature.split(':')
                    const description = descParts.join(':').trim()
                    
                    return (
                      <li key={index} className="flex gap-4">
                        <div className="flex-shrink-0 w-2 h-2 rounded-full bg-purple-400 mt-2" />
                        <div>
                          <span className="text-white font-semibold">{title}</span>
                          {description && (
                            <span className="text-gray-400">: {description}</span>
                          )}
                        </div>
                      </li>
                    )
                  })}
                </ul>
              </div>

              {/* Description */}
              <div className="bg-gradient-to-br from-white/[0.03] to-transparent border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
                <h2 className="text-2xl font-bold text-white mb-4">About This Project</h2>
                <p className="text-gray-300 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Technologies */}
              {project.technologies && project.technologies.length > 0 && (
                <div className="bg-gradient-to-br from-white/[0.03] to-transparent border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
                  <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                    <Tag className="w-4 h-4 text-purple-400" />
                    Technologies
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="border-purple-500/30 text-purple-300 bg-purple-500/5"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {/* Quick Info */}
              <div className="bg-gradient-to-br from-white/[0.03] to-transparent border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
                <h3 className="text-lg font-bold text-white mb-4">Quick Info</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="text-gray-400">Category:</span>
                    <span className="text-white ml-2">{project.category}</span>
                  </div>
                  {project.year && (
                    <div>
                      <span className="text-gray-400">Year:</span>
                      <span className="text-white ml-2">{project.year}</span>
                    </div>
                  )}
                  {project.status && (
                    <div>
                      <span className="text-gray-400">Status:</span>
                      <span className="text-white ml-2">{project.status}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* More Projects */}
              <div className="bg-gradient-to-br from-white/[0.03] to-transparent border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
                <h3 className="text-lg font-bold text-white mb-4">More Projects</h3>
                <div className="space-y-3">
                  {projects
                    .filter(p => p.id !== project.id)
                    .slice(0, 3)
                    .map((p) => (
                      <Link
                        key={p.id}
                        href={`/projects/${p.slug}`}
                        className="block text-sm text-purple-300 hover:text-purple-200 transition-colors"
                      >
                        → {p.title}
                      </Link>
                    ))}
                </div>
              </div>
            </div>
          </div>

          {/* Additional Images */}
          {Array.isArray(project.image) && project.image.length > 1 && (
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-white mb-6">Gallery</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {project.image.slice(1).map((img, index) => (
                  <div key={index} className="relative rounded-2xl overflow-hidden group">
                    <img
                      src={img}
                      alt={`${project.title} - ${index + 2}`}
                      className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl" />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
