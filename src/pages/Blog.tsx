
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import LeadCaptureForm from '@/components/LeadCaptureForm';
import { 
  Calendar,
  User,
  Clock,
  ArrowRight,
  Search,
  TrendingUp,
  Home,
  MapPin
} from 'lucide-react';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { key: 'all', label: 'All Posts' },
    { key: 'market-trends', label: 'Market Trends' },
    { key: 'investment-tips', label: 'Investment Tips' },
    { key: 'luxury-living', label: 'Luxury Living' },
    { key: 'property-guide', label: 'Property Guide' }
  ];

  const blogPosts = [
    {
      id: 1,
      title: "Top 5 Investment Opportunities in Kakinada Real Estate 2024",
      excerpt: "Discover the most promising real estate investment locations in Kakinada with high ROI potential and future growth prospects.",
      content: "Kakinada's real estate market is experiencing unprecedented growth...",
      author: "Rajesh Kumar",
      date: "2024-01-15",
      readTime: "5 min read",
      category: "investment-tips",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["Investment", "ROI", "Kakinada", "Growth"]
    },
    {
      id: 2,
      title: "Luxury Living: Modern Amenities That Define Premium Homes",
      excerpt: "Explore the must-have amenities and features that set luxury properties apart in today's competitive real estate market.",
      content: "Modern luxury homes go beyond basic comfort...",
      author: "Priya Sharma",
      date: "2024-01-10",
      readTime: "4 min read",
      category: "luxury-living",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["Luxury", "Amenities", "Premium", "Lifestyle"]
    },
    {
      id: 3,
      title: "Kakinada Property Market Analysis: Trends and Predictions",
      excerpt: "An in-depth analysis of Kakinada's real estate market trends, price movements, and future predictions for 2024-2025.",
      content: "The Kakinada real estate market has shown remarkable resilience...",
      author: "Anil Reddy",
      date: "2024-01-05",
      readTime: "6 min read",
      category: "market-trends",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["Market Analysis", "Trends", "Predictions", "Growth"]
    },
    {
      id: 4,
      title: "First-Time Home Buyer's Guide: Tips for Success",
      excerpt: "Essential tips and guidance for first-time home buyers to make informed decisions and avoid common pitfalls.",
      content: "Buying your first home is an exciting milestone...",
      author: "Meera Patel",
      date: "2023-12-28",
      readTime: "7 min read",
      category: "property-guide",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["First-time Buyer", "Guide", "Tips", "Home Purchase"]
    },
    {
      id: 5,
      title: "Sustainable Architecture: Green Building Practices in Modern Construction",
      excerpt: "How sustainable building practices and eco-friendly features are shaping the future of residential construction.",
      content: "Sustainability in construction is no longer a luxury...",
      author: "Dr. Suresh Kumar",
      date: "2023-12-20",
      readTime: "5 min read",
      category: "luxury-living",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["Sustainability", "Green Building", "Eco-friendly", "Construction"]
    },
    {
      id: 6,
      title: "Understanding RERA: Your Rights as a Property Buyer",
      excerpt: "A comprehensive guide to RERA regulations and how they protect home buyers' interests in real estate transactions.",
      content: "The Real Estate Regulation and Development Act (RERA)...",
      author: "Advocate Lakshmi",
      date: "2023-12-15",
      readTime: "4 min read",
      category: "property-guide",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["RERA", "Legal", "Rights", "Protection"]
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredPost = blogPosts[0];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section-spacing bg-gradient-to-br from-navy-950 to-navy-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gold-500/10 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto container-padding text-center">
          <h1 className="font-playfair text-4xl md:text-6xl font-bold mb-6">
            Blog & <span className="text-gold-400">Insights</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            Stay updated with the latest trends in real estate, investment tips, and luxury living insights
          </p>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-charcoal-400 w-4 h-4" />
              <Input
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category.key}
                  variant={selectedCategory === category.key ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.key)}
                  className={selectedCategory === category.key ? "premium-button" : ""}
                >
                  {category.label}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto container-padding">
          <h2 className="font-playfair text-3xl font-bold text-navy-900 mb-8 text-center">Featured Article</h2>
          <Card className="border-0 shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-64 lg:h-auto">
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-gold-500 text-navy-900 capitalize">
                    {featuredPost.category.replace('-', ' ')}
                  </Badge>
                </div>
              </div>
              <CardContent className="p-8 flex flex-col justify-center">
                <h3 className="font-playfair text-2xl md:text-3xl font-bold text-navy-900 mb-4">
                  {featuredPost.title}
                </h3>
                <p className="text-charcoal-600 leading-relaxed mb-6">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center gap-4 mb-6 text-sm text-charcoal-500">
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    {featuredPost.author}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {new Date(featuredPost.date).toLocaleDateString()}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {featuredPost.readTime}
                  </div>
                </div>
                <Button className="premium-button w-fit">
                  Read Full Article
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </div>
          </Card>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="section-spacing bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.slice(1).map((post) => (
              <Card key={post.id} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <div className="relative">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-gold-500 text-navy-900 capitalize">
                      {post.category.replace('-', ' ')}
                    </Badge>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="font-playfair text-xl font-bold text-navy-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-charcoal-600 leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center gap-4 mb-4 text-sm text-charcoal-500">
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 2).map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <Button variant="outline" className="w-full group-hover:bg-gold-500 group-hover:text-navy-900 transition-colors">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-charcoal-600">No articles found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="section-spacing bg-gradient-to-r from-gold-500 to-gold-600">
        <div className="max-w-4xl mx-auto container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="text-navy-950">
              <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">
                Stay Informed
              </h2>
              <p className="text-lg leading-relaxed">
                Subscribe to our newsletter for the latest real estate insights, market trends, and exclusive property updates.
              </p>
            </div>
            <div>
              <LeadCaptureForm 
                title="Subscribe to Newsletter"
                subtitle="Get weekly insights and updates"
                context="blog_newsletter"
                className="bg-white"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
