'use client'

import { useState } from 'react'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Calendar, Clock, User, Search, ArrowRight, Tag } from 'lucide-react'

interface BlogPost {
  id: string
  title: string
  excerpt: string
  content?: string
  author: string
  date: string
  readTime: string
  category: string
  tags: string[]
  image: string
  featured?: boolean
}

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'The Future of AI Chatbots in Customer Service',
    excerpt: 'Exploring how AI-powered chatbots are revolutionizing customer support and creating more personalized user experiences.',
    author: 'AJ KAMESH',
    date: '2025-12-01',
    readTime: '5 min read',
    category: 'AI Technology',
    tags: ['AI', 'Chatbots', 'Customer Service', 'Technology'],
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop&auto=format&q=80',
    featured: true
  },
  {
    id: '2',
    title: 'Building Scalable Web Applications with Next.js',
    excerpt: 'A comprehensive guide to creating high-performance, scalable web applications using Next.js and modern development practices.',
    author: 'AJ KAMESH',
    date: '2025-11-28',
    readTime: '8 min read',
    category: 'Web Development',
    tags: ['Next.js', 'React', 'Web Development', 'Performance'],
    image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&h=600&fit=crop&auto=format&q=80'
  },
  {
    id: '3',
    title: 'Machine Learning Integration in Modern Web Apps',
    excerpt: 'How to seamlessly integrate machine learning models into web applications for enhanced user experiences and intelligent features.',
    author: 'AJ KAMESH',
    date: '2025-11-25',
    readTime: '6 min read',
    category: 'Machine Learning',
    tags: ['Machine Learning', 'Web Apps', 'AI Integration', 'JavaScript'],
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=600&fit=crop&auto=format&q=80'
  },
  {
    id: '4',
    title: 'The Evolution of UI/UX Design in 2025',
    excerpt: 'Discover the latest trends in user interface and experience design that are shaping the digital landscape this year.',
    author: 'AJ KAMESH',
    date: '2025-11-22',
    readTime: '4 min read',
    category: 'Design',
    tags: ['UI/UX', 'Design Trends', 'User Experience', '2025'],
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop&auto=format&q=80'
  },
  {
    id: '5',
    title: 'Cloud Computing Solutions for Small Businesses',
    excerpt: 'Understanding how small businesses can leverage cloud computing to scale operations and reduce infrastructure costs.',
    author: 'AJ KAMESH',
    date: '2025-11-20',
    readTime: '7 min read',
    category: 'Cloud Computing',
    tags: ['Cloud', 'Business', 'Infrastructure', 'Scalability'],
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop&auto=format&q=80'
  },
  {
    id: '6',
    title: 'Cybersecurity Best Practices for Web Applications',
    excerpt: 'Essential security measures every developer should implement to protect web applications from modern cyber threats.',
    author: 'AJ KAMESH',
    date: '2025-11-18',
    readTime: '9 min read',
    category: 'Security',
    tags: ['Cybersecurity', 'Web Security', 'Best Practices', 'Protection'],
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop&auto=format&q=80'
  }
]

const categories = ['All', 'AI Technology', 'Web Development', 'Machine Learning', 'Design', 'Cloud Computing', 'Security']

const categoryColors: { [key: string]: string } = {
  'AI Technology': 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
  'Web Development': 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
  'Machine Learning': 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300',
  'Design': 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300',
  'Cloud Computing': 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300',
  'Security': 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'
}

export default function BlogComponent() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [filteredPosts, setFilteredPosts] = useState(blogPosts)

  const filterPosts = (category: string, search: string) => {
    let filtered = blogPosts

    if (category !== 'All') {
      filtered = filtered.filter(post => post.category === category)
    }

    if (search) {
      filtered = filtered.filter(post => 
        post.title.toLowerCase().includes(search.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(search.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(search.toLowerCase()))
      )
    }

    setFilteredPosts(filtered)
  }

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category)
    filterPosts(category, searchTerm)
  }

  const handleSearchChange = (search: string) => {
    setSearchTerm(search)
    filterPosts(selectedCategory, search)
  }

  const featuredPost = blogPosts.find(post => post.featured)
  const regularPosts = filteredPosts.filter(post => !post.featured)

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-background text-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            AJ STUDIOZ Blog
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto">
            Insights, tutorials, and thoughts on technology, AI, web development, and digital innovation 
            from the AJ STUDIOZ team.
          </p>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="py-8 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Search Bar */}
            <div className="relative mb-8">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search articles, topics, or tags..."
                value={searchTerm}
                onChange={(e) => handleSearchChange(e.target.value)}
                className="pl-12 pr-4 py-3 text-lg rounded-full"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => handleCategoryChange(category)}
                  className="rounded-full"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          {/* Featured Post */}
          {featuredPost && selectedCategory === 'All' && !searchTerm && (
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center">Featured Article</h2>
              <Card className="max-w-4xl mx-auto overflow-hidden border-2 border-primary/20 shadow-xl">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <img 
                      src={featuredPost.image} 
                      alt={featuredPost.title}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-1/2 p-8">
                    <Badge className={`mb-4 ${categoryColors[featuredPost.category]}`}>
                      {featuredPost.category}
                    </Badge>
                    <CardTitle className="text-2xl md:text-3xl mb-4 line-clamp-2">
                      {featuredPost.title}
                    </CardTitle>
                    <CardDescription className="text-lg mb-6 line-clamp-3">
                      {featuredPost.excerpt}
                    </CardDescription>
                    <div className="flex items-center gap-4 mb-6 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        {featuredPost.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {new Date(featuredPost.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {featuredPost.readTime}
                      </div>
                    </div>
                    <Button size="lg" className="group">
                      Read Full Article
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          )}

          {/* Blog Posts Grid */}
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              {selectedCategory === 'All' ? 'Latest Articles' : `${selectedCategory} Articles`}
              {searchTerm && ` matching "${searchTerm}"`}
            </h2>
            
            {filteredPosts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-xl text-muted-foreground mb-4">No articles found</p>
                <p className="text-muted-foreground">Try adjusting your search or category filter</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {regularPosts.map((post) => (
                  <Card key={post.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                    <div className="relative overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <Badge 
                        className={`absolute top-3 left-3 ${categoryColors[post.category]}`}
                      >
                        {post.category}
                      </Badge>
                    </div>
                    
                    <CardHeader>
                      <CardTitle className="text-xl group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </CardTitle>
                      <CardDescription className="line-clamp-3">
                        {post.excerpt}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent className="space-y-4">
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {post.tags.slice(0, 3).map((tag, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            <Tag className="h-3 w-3 mr-1" />
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      
                      {/* Author and Date */}
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <User className="h-4 w-4" />
                          {post.author}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {post.readTime}
                        </div>
                      </div>
                      
                      <Button variant="outline" className="w-full group">
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>

          {/* Newsletter Subscription */}
          <div className="mt-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-center text-white">
            <h3 className="text-3xl font-bold mb-4">Stay Updated</h3>
            <p className="text-xl mb-8 text-blue-100">
              Subscribe to our newsletter and get the latest insights delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                type="email" 
                placeholder="Your email address"
                className="bg-white text-gray-900 border-0"
              />
              <Button variant="secondary" size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}