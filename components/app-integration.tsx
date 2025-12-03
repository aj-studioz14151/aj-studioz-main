'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { 
  Smartphone, 
  Globe, 
  Database, 
  Cloud, 
  Zap, 
  Shield, 
  CheckCircle, 
  ArrowRight,
  Palette,
  Code,
  Headphones,
  Rocket
} from 'lucide-react'

interface Integration {
  id: string
  name: string
  description: string
  icon: React.ComponentType<any>
  category: string
  features: string[]
  availability: 'available' | 'coming-soon' | 'enterprise'
  popular?: boolean
}

const integrations: Integration[] = [
  {
    id: '1',
    name: 'Web Applications',
    description: 'Build responsive, high-performance web applications with modern frameworks and technologies.',
    icon: Globe,
    category: 'Web Development',
    features: ['React/Next.js', 'TypeScript', 'Responsive Design', 'SEO Optimized'],
    availability: 'available',
    popular: true
  },
  {
    id: '2',
    name: 'Mobile Apps',
    description: 'Create native and cross-platform mobile applications for iOS and Android devices.',
    icon: Smartphone,
    category: 'Mobile Development',
    features: ['React Native', 'Flutter', 'Native iOS/Android', 'App Store Deployment'],
    availability: 'available'
  },
  {
    id: '3',
    name: 'AI & Machine Learning',
    description: 'Integrate advanced AI capabilities including chatbots, ML models, and intelligent automation.',
    icon: Zap,
    category: 'Artificial Intelligence',
    features: ['Custom AI Models', 'Chatbot Integration', 'Data Analytics', 'Automation'],
    availability: 'available',
    popular: true
  },
  {
    id: '4',
    name: 'Cloud Infrastructure',
    description: 'Scalable cloud solutions with automatic deployment, monitoring, and maintenance.',
    icon: Cloud,
    category: 'Cloud Services',
    features: ['AWS/Azure/GCP', 'Auto Scaling', 'Load Balancing', 'CI/CD Pipeline'],
    availability: 'available'
  },
  {
    id: '5',
    name: 'Database Solutions',
    description: 'Robust database architecture and management for any scale of application.',
    icon: Database,
    category: 'Data Management',
    features: ['SQL/NoSQL', 'Data Migration', 'Performance Optimization', 'Backup Systems'],
    availability: 'available'
  },
  {
    id: '6',
    name: 'Security & Authentication',
    description: 'Comprehensive security solutions including authentication, encryption, and compliance.',
    icon: Shield,
    category: 'Security',
    features: ['OAuth/JWT', 'Multi-factor Auth', 'Data Encryption', 'Compliance'],
    availability: 'available'
  },
  {
    id: '7',
    name: 'UI/UX Design',
    description: 'Beautiful, intuitive user interfaces with focus on user experience and accessibility.',
    icon: Palette,
    category: 'Design',
    features: ['Custom Design', 'Prototyping', 'User Testing', 'Accessibility'],
    availability: 'available'
  },
  {
    id: '8',
    name: 'API Development',
    description: 'RESTful and GraphQL APIs with comprehensive documentation and testing.',
    icon: Code,
    category: 'Backend',
    features: ['REST/GraphQL', 'API Documentation', 'Rate Limiting', 'Versioning'],
    availability: 'available'
  },
  {
    id: '9',
    name: 'Support & Maintenance',
    description: '24/7 technical support and ongoing maintenance for all your applications.',
    icon: Headphones,
    category: 'Support',
    features: ['24/7 Support', 'Bug Fixes', 'Updates', 'Monitoring'],
    availability: 'available'
  },
  {
    id: '10',
    name: 'Performance Optimization',
    description: 'Advanced performance tuning and optimization for maximum speed and efficiency.',
    icon: Rocket,
    category: 'Optimization',
    features: ['Speed Optimization', 'Caching', 'CDN Setup', 'Monitoring'],
    availability: 'enterprise'
  }
]

const categories = ['All', 'Web Development', 'Mobile Development', 'Artificial Intelligence', 'Cloud Services', 'Data Management', 'Security', 'Design', 'Backend', 'Support', 'Optimization']

export default function AppIntegrationComponent() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [filteredIntegrations, setFilteredIntegrations] = useState(integrations)

  const filterIntegrations = (category: string) => {
    setSelectedCategory(category)
    if (category === 'All') {
      setFilteredIntegrations(integrations)
    } else {
      setFilteredIntegrations(integrations.filter(integration => integration.category === category))
    }
  }

  const getAvailabilityBadge = (availability: string) => {
    switch (availability) {
      case 'available':
        return <Badge variant="default" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">Available</Badge>
      case 'coming-soon':
        return <Badge variant="secondary" className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300">Coming Soon</Badge>
      case 'enterprise':
        return <Badge variant="outline" className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300">Enterprise</Badge>
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            App Integrations & Services
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Complete Development Solutions
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto">
            From concept to deployment, AJ STUDIOZ offers comprehensive development services 
            and integrations to bring your digital vision to life.
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => filterIntegrations(category)}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Popular Integrations Banner */}
        {selectedCategory === 'All' && (
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Popular Services</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {integrations.filter(i => i.popular).map((integration) => (
                <Card key={integration.id} className="border-2 border-primary/20 shadow-xl hover:shadow-2xl transition-shadow">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <integration.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <CardTitle className="text-xl">{integration.name}</CardTitle>
                          <Badge className="bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300">Popular</Badge>
                        </div>
                        {getAvailabilityBadge(integration.availability)}
                      </div>
                    </div>
                    <CardDescription className="text-base">
                      {integration.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Key Features:</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {integration.features.map((feature, index) => (
                            <div key={index} className="flex items-center gap-2 text-sm">
                              <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <Button className="w-full group">
                        Get Started
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* All Integrations Grid */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            {selectedCategory === 'All' ? 'All Services' : `${selectedCategory} Services`}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredIntegrations.map((integration) => (
              <Card key={integration.id} className="hover:shadow-lg transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <integration.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <CardTitle className="text-lg">{integration.name}</CardTitle>
                        {integration.popular && (
                          <Badge className="bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300 text-xs">
                            Popular
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="mb-3">
                    {getAvailabilityBadge(integration.availability)}
                  </div>
                  <CardDescription>
                    {integration.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2 text-sm">Features:</h4>
                      <div className="space-y-1">
                        {integration.features.slice(0, 3).map((feature, index) => (
                          <div key={index} className="flex items-center gap-2 text-xs">
                            <CheckCircle className="h-3 w-3 text-green-500 flex-shrink-0" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="w-full group">
                      Learn More
                      <ArrowRight className="ml-2 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Integrate?</h3>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Let's discuss your project requirements and create a custom solution tailored to your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-blue-50">
              Schedule Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              View Portfolio
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}