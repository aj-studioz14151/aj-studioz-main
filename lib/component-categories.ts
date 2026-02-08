// Component categories for sidebar navigation
export const CATEGORIES = [
  {
    name: 'Get Started',
    subcategories: ['Introduction', 'Installation', 'Configuration']
  },
  {
    name: 'Components',
    subcategories: [
      'Code Blocks',
      'Pricing Cards',
      'Project Cards',
      'Toggle Theme'
    ]
  },
  {
    name: 'Resources',
    subcategories: ['Documentation', 'API Reference', 'GitHub']
  }
]

// New/Updated badges
export const NEW = ['Project Cards']
export const UPDATED = ['Code Blocks', 'Pricing Cards']

// Component metadata
export const COMPONENT_METADATA = {
  'CodeBlocks': {
    name: 'Code Blocks',
    category: 'Components',
    description: 'Syntax highlighted code blocks with copy functionality',
    tags: ['code', 'syntax', 'highlighting']
  },
  'PricingCards': {
    name: 'Pricing Cards',
    category: 'Components',
    description: 'Beautiful pricing card components with monthly/yearly toggle',
    tags: ['pricing', 'cards', 'subscription']
  },
  'ProjectCards': {
    name: 'Project Cards',
    category: 'Components',
    description: 'Showcase project cards with hover effects and videos',
    tags: ['cards', 'projects', 'showcase']
  },
  'ToggleTheme': {
    name: 'Toggle Theme',
    category: 'Components',
    description: 'Light/Dark mode theme toggle component',
    tags: ['theme', 'dark-mode', 'toggle']
  }
}
