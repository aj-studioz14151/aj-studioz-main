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

export type Category = 'Animations' | 'Backgrounds' | 'UI' | 'TextAnimations'
export type Variant = 'JS-CSS' | 'JS-TW' | 'TS-CSS' | 'TS-TW'

export const componentMetadata: Record<string, ComponentMetadata> = {
  // UI Components
  'UI/Dock': {
    videoUrl: '/assets/video/dock.webm',
    description: 'macOS-style dock with spring physics, hover magnification, and smooth transitions.',
    category: 'UI',
    name: 'Dock',
    docsUrl: '/components/dock',
    tags: ['navigation', 'menu', 'interactive'],
    variants: ['TS-TW']
  },
  'UI/ProjectCards': {
    videoUrl: '/assets/video/project-cards.webm',
    description: 'Beautiful project showcase cards with hover effects and video preview support.',
    category: 'UI',
    name: 'Project Cards',
    docsUrl: '/components/project-cards',
    tags: ['cards', 'showcase', 'portfolio'],
    variants: ['TS-TW']
  },

  // Animations
  'Animations/AnimatedContent': {
    videoUrl: '/assets/video/animatedcontent.webm',
    description: 'Wrapper that animates any children on scroll or mount with configurable direction, distance, duration, easing and disappear options.',
    category: 'Animations',
    name: 'AnimatedContent',
    docsUrl: '/components/animations/animatedcontent',
    tags: ['scroll', 'animation', 'wrapper']
  },
  'Animations/BlobCursor': {
    videoUrl: '/assets/video/blobcursor.webm',
    description: 'Organic blob cursor that smoothly follows the pointer with inertia and elastic morphing.',
    category: 'Animations',
    name: 'BlobCursor',
    docsUrl: '/components/animations/blobcursor',
    tags: ['cursor', 'interactive', 'blob']
  },
  'Animations/ClickSpark': {
    videoUrl: '/assets/video/clickspark.webm',
    description: 'Creates particle spark bursts at click position.',
    category: 'Animations',
    name: 'ClickSpark',
    docsUrl: '/components/animations/clickspark',
    tags: ['click', 'particles', 'effects']
  },
  'Animations/Crosshair': {
    videoUrl: '/assets/video/crosshair.webm',
    description: 'Custom crosshair cursor with tracking, and link hover effects.',
    category: 'Animations',
    name: 'Crosshair',
    docsUrl: '/components/animations/crosshair',
    tags: ['cursor', 'crosshair', 'hover']
  },
  'Animations/ElectricBorder': {
    videoUrl: '/assets/video/electricborder.webm',
    description: 'Jittery electric energy border with animated arcs, glow and adjustable intensity.',
    category: 'Animations',
    name: 'ElectricBorder',
    docsUrl: '/components/animations/electricborder',
    tags: ['border', 'electric', 'glow']
  },
  'Animations/GlareHover': {
    videoUrl: '/assets/video/glarehover.webm',
    description: 'Adds a realistic moving glare highlight on hover over any element.',
    category: 'Animations',
    name: 'GlareHover',
    docsUrl: '/components/animations/glarehover',
    tags: ['hover', 'glare', 'highlight']
  },
  'Animations/Magnet': {
    videoUrl: '/assets/video/magnet.webm',
    description: 'Elements magnetically ease toward the cursor then settle back with spring physics.',
    category: 'Animations',
    name: 'Magnet',
    docsUrl: '/components/animations/magnet',
    tags: ['magnetic', 'cursor', 'physics']
  },
  'Animations/MetaBalls': {
    videoUrl: '/assets/video/metaballs.webm',
    description: 'Liquid metaball blobs that merge and separate with smooth implicit surface animation.',
    category: 'Animations',
    name: 'MetaBalls',
    docsUrl: '/components/animations/metaballs',
    tags: ['liquid', 'blob', 'merge']
  },
  'Animations/StarBorder': {
    videoUrl: '/assets/video/starborder.webm',
    description: 'Animated star / sparkle border orbiting content with twinkle pulses.',
    category: 'Animations',
    name: 'StarBorder',
    docsUrl: '/components/animations/starborder',
    tags: ['border', 'stars', 'sparkle']
  },

  // Text Animations
  'TextAnimations/BlurText': {
    videoUrl: '/assets/video/blurtext.webm',
    description: 'Text starts blurred then crisply resolves for a soft-focus reveal effect.',
    category: 'TextAnimations',
    name: 'BlurText',
    docsUrl: '/components/textanimations/blurtext',
    tags: ['text', 'blur', 'reveal']
  },
  'TextAnimations/CountUp': {
    videoUrl: '/assets/video/countup.webm',
    description: 'Animated number counter supporting formatting and decimals.',
    category: 'TextAnimations',
    name: 'CountUp',
    docsUrl: '/components/textanimations/countup',
    tags: ['counter', 'number', 'animation']
  },
  'TextAnimations/DecryptedText': {
    videoUrl: '/assets/video/decryptedtext.webm',
    description: 'Hacker-style decryption cycling random glyphs until resolving to real text.',
    category: 'TextAnimations',
    name: 'DecryptedText',
    docsUrl: '/components/textanimations/decryptedtext',
    tags: ['text', 'hacker', 'decrypt']
  },
  'TextAnimations/GradientText': {
    videoUrl: '/assets/video/gradienttext.webm',
    description: 'Smooth animated color gradient text with customizable colors and direction.',
    category: 'TextAnimations',
    name: 'GradientText',
    docsUrl: '/components/textanimations/gradienttext',
    tags: ['text', 'gradient', 'color']
  },
  'TextAnimations/ShinyText': {
    videoUrl: '/assets/video/shinytext.webm',
    description: 'Metallic sheen text effect with animated highlight sweep.',
    category: 'TextAnimations',
    name: 'ShinyText',
    docsUrl: '/components/textanimations/shinytext',
    tags: ['text', 'shine', 'metallic']
  },

  // Backgrounds
  'Backgrounds/Aurora': {
    videoUrl: '/assets/video/aurora.webm',
    description: 'Ethereal aurora borealis background with flowing color gradients.',
    category: 'Backgrounds',
    name: 'Aurora',
    docsUrl: '/components/backgrounds/aurora',
    tags: ['background', 'aurora', 'gradient']
  },
  'Backgrounds/Grainient': {
    videoUrl: '/assets/video/grainient.webm',
    description: 'Grainy animated gradient background with film texture.',
    category: 'Backgrounds',
    name: 'Grainient',
    docsUrl: '/components/backgrounds/grainient',
    tags: ['background', 'grain', 'gradient']
  },
  
  // Add more components as they are created
}

export const CATEGORIES = [
  {
    name: 'Get Started',
    subcategories: ['Introduction', 'Installation', 'Configuration', 'Index']
  },
  {
    name: 'UI',
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
