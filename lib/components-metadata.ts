/**
 * Component metadata registry for AJ STUDIOZ component showcase
 */

export interface ComponentMetadata {
  videoUrl?: string
  description: string
  category: Category
  name: string
  docsUrl?: string
  tags: string[]
  variants?: Variant[]
}

export type Category = 'Animations' | 'Backgrounds' | 'Components' | 'TextAnimations'
export type Variant = 'JS-CSS' | 'JS-TW' | 'TS-CSS' | 'TS-TW'

export const componentMetadata: Record<string, ComponentMetadata> = {
  // Components
  'Components/Dock': {
    videoUrl: '/assets/video/dock.webm',
    description: 'macOS-style dock with spring physics, hover magnification, and smooth transitions.',
    category: 'Components',
    name: 'Dock',
    docsUrl: '/components/dock',
    tags: ['navigation', 'menu', 'interactive'],
    variants: ['TS-TW']
  },
  'Components/ProjectCards': {
    videoUrl: '/assets/video/project-cards.webm',
    description: 'Beautiful project showcase cards with hover effects and video preview support.',
    category: 'Components',
    name: 'Project Cards',
    docsUrl: '/components/project-cards',
    tags: ['cards', 'showcase', 'portfolio'],
    variants: ['TS-TW']
  },
  
  // Add more components as they are created
}

export const CATEGORIES = [
  {
    name: 'Get Started',
    subcategories: ['Introduction', 'Installation', 'Configuration', 'Index']
  },
  {
    name: 'Components',
    subcategories: ['Dock', 'Project Cards', 'Pricing Cards', 'Code Blocks']
  },
  {
    name: 'Animations',
    subcategories: []
  },
  {
    name: 'Backgrounds',
    subcategories: []
  }
]

export const NEW = ['Dock', 'Project Cards']
export const UPDATED = ['Code Blocks', 'Pricing Cards']
