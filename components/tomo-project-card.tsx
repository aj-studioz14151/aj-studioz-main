'use client'

import { useState, useEffect } from 'react'
import { ExternalLink, Code, Mail, Users, MessageSquare, Search, GraduationCap, Terminal } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'

interface Project {
  id: number;
  title: string;
  description: string;
  image: string | string[];
  link: string;
  features: string[];
  category: string;
}

const ProjectImage = ({ images, title }: { images: string | string[], title: string }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const imageArray = Array.isArray(images) ? images : [images];

  useEffect(() => {
    if (imageArray.length > 1) {
      const interval = setInterval(() => {
        setIsTransitioning(true);
        setTimeout(() => {
          setCurrentImageIndex((prev) => (prev + 1) % imageArray.length);
          setIsTransitioning(false);
        }, 500);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [imageArray.length]);

  return (
    <>
      <div className="relative w-full h-full overflow-hidden">
        {imageArray.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`${title} - ${idx + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-110 ${
              idx === currentImageIndex
                ? isTransitioning 
                  ? 'translate-x-[-100%] opacity-0'
                  : 'translate-x-0 opacity-100'
                : idx === (currentImageIndex + 1) % imageArray.length
                ? isTransitioning
                  ? 'translate-x-0 opacity-100'
                  : 'translate-x-[100%] opacity-0'
                : 'translate-x-[100%] opacity-0'
            }`}
            style={{ transition: 'transform 0.7s ease-in-out, opacity 0.7s ease-in-out' }}
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23e7e5e4" width="400" height="300"/%3E%3Ctext fill="%2378716c" font-family="sans-serif" font-size="24" text-anchor="middle" x="200" y="150"%3ETOMO%3C/text%3E%3C/svg%3E';
            }}
          />
        ))}
      </div>
      {imageArray.length > 1 && (
        <div className="absolute bottom-3 right-3 flex gap-1.5 z-10">
          {imageArray.map((_, idx) => (
            <div
              key={idx}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                idx === currentImageIndex ? 'bg-[#C5A059] w-6' : 'bg-white/60'
              }`}
            />
          ))}
        </div>
      )}
    </>
  );
};

const getCategoryIcon = (category: string) => {
  switch (category) {
    case "AI Development Tool":
      return <Code className="w-5 h-5" />;
    case "AI Email Assistant":
      return <Mail className="w-5 h-5" />;
    case "AI Chat":
      return <MessageSquare className="w-5 h-5" />;
    case "AI Research Tool":
      return <Search className="w-5 h-5" />;
    case "Staff Portal":
      return <Users className="w-5 h-5" />;
    case "Education Platform":
      return <GraduationCap className="w-5 h-5" />;
    case "Developer Tool":
      return <Terminal className="w-5 h-5" />;
    default:
      return <Code className="w-5 h-5" />;
  }
};

interface TomoProjectCardProps {
  project: Project;
  index: number;
}

export default function TomoProjectCard({ project, index }: TomoProjectCardProps) {
  return (
    <div
      className="group relative bg-white dark:bg-gray-900 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 hover:border-[#C5A059]/50 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 animate-fade-in-up"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      {/* Image Container */}
      <div className="relative h-56 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">
        <ProjectImage images={project.image} title={project.title} />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-full shadow-lg">
          {getCategoryIcon(project.category)}
          <span className="text-xs font-bold text-gray-700 dark:text-gray-200 uppercase tracking-wider">
            {project.category}
          </span>
        </div>
      </div>

      {/* Content Container */}
      <div className="p-6 flex flex-col h-[calc(100%-14rem)]">
        {/* Title */}
        <h3 className="font-serif text-2xl text-gray-900 dark:text-white mb-3 group-hover:text-[#C5A059] transition-colors duration-300">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Features List */}
        <div className="mb-6 flex-grow">
          <h4 className="text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-3">
            Key Features
          </h4>
          <ul className="space-y-2">
            {project.features.slice(0, 3).map((feature, idx) => (
              <li key={idx} className="flex items-start text-xs text-gray-600 dark:text-gray-400">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#C5A059] mt-1.5 mr-2 flex-shrink-0"></span>
                <span className="line-clamp-2">{feature}</span>
              </li>
            ))}
            {project.features.length > 3 && (
              <li className="text-xs text-gray-500 dark:text-gray-500 italic pl-3.5">
                +{project.features.length - 3} more features
              </li>
            )}
          </ul>
        </div>

        {/* Action Button */}
        {project.link ? (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 rounded-xl hover:bg-gray-800 dark:hover:bg-gray-200 transition-all duration-300 shadow-md hover:shadow-xl group/btn"
          >
            <span className="font-medium text-sm tracking-wide">Visit</span>
            <ExternalLink className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
          </a>
        ) : (
          <div className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-gray-200 dark:bg-gray-800 text-gray-500 dark:text-gray-400 rounded-xl cursor-not-allowed">
            <span className="font-medium text-sm tracking-wide">Internal Use Only</span>
            <Users className="w-4 h-4" />
          </div>
        )}
      </div>

      {/* Decorative Corner Accent */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#C5A059]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
    </div>
  );
}
