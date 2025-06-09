
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import LeadCaptureForm from '@/components/LeadCaptureForm';
import { 
  MapPin, 
  Home, 
  Calendar, 
  Bed, 
  Bath, 
  Square,
  ArrowRight,
  Filter
} from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      name: "Trinethra Heights",
      status: "ongoing",
      type: "apartment",
      location: "Ramachandra Rao Pet, Kakinada",
      price: "₹45 - 75 Lakhs",
      possession: "Dec 2024",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["2, 3 BHK", "Premium Amenities", "Vaastu Compliant"],
      bedrooms: "2-3 BHK",
      bathrooms: "2-3",
      area: "1100-1650 Sq.ft"
    },
    {
      id: 2,
      name: "Golden Palms Villas",
      status: "completed",
      type: "villa",
      location: "Salipeta, Kakinada",
      price: "₹1.2 - 2.5 Cr",
      possession: "Ready to Move",
      image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["Independent Villas", "Private Garden", "Premium Location"],
      bedrooms: "3-4 BHK",
      bathrooms: "3-4",
      area: "2200-3200 Sq.ft"
    },
    {
      id: 3,
      name: "Royal Residency",
      status: "upcoming",
      type: "apartment",
      location: "Suryaraopeta, Kakinada",
      price: "₹55 - 90 Lakhs",
      possession: "Mar 2025",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["Luxury Apartments", "Sky Lounge", "Smart Home Features"],
      bedrooms: "2-3 BHK",
      bathrooms: "2-3",
      area: "1200-1800 Sq.ft"
    },
    {
      id: 4,
      name: "Green Valley Plots",
      status: "ongoing",
      type: "plot",
      location: "Kotananduru, Kakinada",
      price: "₹25 - 45 Lakhs",
      possession: "Immediate",
      image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["HMDA Approved", "Gated Community", "40x60 Plots"],
      bedrooms: "Plot",
      bathrooms: "-",
      area: "200-300 Sq.yd"
    },
    {
      id: 5,
      name: "Marina Bay Towers",
      status: "upcoming",
      type: "apartment",
      location: "One Town, Kakinada",
      price: "₹65 - 1.2 Cr",
      possession: "Jun 2025",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["Sea View", "Premium Amenities", "High-rise Living"],
      bedrooms: "2-4 BHK",
      bathrooms: "2-4",
      area: "1300-2500 Sq.ft"
    },
    {
      id: 6,
      name: "Orchid Gardens",
      status: "completed",
      type: "villa",
      location: "Ramanayyapeta, Kakinada",
      price: "₹85 Lakhs - 1.5 Cr",
      possession: "Ready to Move",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["Garden Villas", "Premium Interiors", "Gated Community"],
      bedrooms: "3 BHK",
      bathrooms: "3",
      area: "1800-2200 Sq.ft"
    }
  ];

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'ongoing', label: 'Ongoing' },
    { key: 'upcoming', label: 'Upcoming' },
    { key: 'completed', label: 'Completed' }
  ];

  const typeFilters = [
    { key: 'all', label: 'All Types' },
    { key: 'apartment', label: 'Apartments' },
    { key: 'villa', label: 'Villas' },
    { key: 'plot', label: 'Plots' }
  ];

  const filteredProjects = projects.filter(project => {
    if (activeFilter === 'all') return true;
    return project.status === activeFilter || project.type === activeFilter;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'ongoing': return 'bg-blue-500';
      case 'upcoming': return 'bg-green-500';
      case 'completed': return 'bg-gold-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section-spacing bg-gradient-to-br from-navy-950 to-navy-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gold-500/10 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto container-padding text-center">
          <h1 className="font-playfair text-4xl md:text-6xl font-bold mb-6">
            Our <span className="text-gold-400">Projects</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            Discover our complete portfolio of luxury residential and commercial developments across Kakinada
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="flex flex-wrap gap-4 justify-center">
            {[...filters, ...typeFilters.slice(1)].map((filter) => (
              <Button
                key={filter.key}
                variant={activeFilter === filter.key ? "default" : "outline"}
                onClick={() => setActiveFilter(filter.key)}
                className={activeFilter === filter.key ? "premium-button" : ""}
              >
                <Filter className="w-4 h-4 mr-2" />
                {filter.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-spacing bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <div className="relative">
                  <img 
                    src={project.image} 
                    alt={project.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className={`${getStatusColor(project.status)} text-white capitalize`}>
                      {project.status}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-white/90 text-navy-900">
                      {project.type}
                    </Badge>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="font-playfair text-xl font-bold text-navy-900 mb-2">
                    {project.name}
                  </h3>
                  
                  <div className="flex items-center text-charcoal-600 mb-3">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span className="text-sm">{project.location}</span>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-4 text-sm">
                    <div className="flex items-center">
                      <Bed className="w-4 h-4 mr-1 text-gold-600" />
                      <span>{project.bedrooms}</span>
                    </div>
                    <div className="flex items-center">
                      <Bath className="w-4 h-4 mr-1 text-gold-600" />
                      <span>{project.bathrooms}</span>
                    </div>
                    <div className="flex items-center">
                      <Square className="w-4 h-4 mr-1 text-gold-600" />
                      <span>{project.area}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.features.map((feature, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="font-bold text-lg text-navy-900">{project.price}</div>
                      <div className="flex items-center text-sm text-charcoal-600">
                        <Calendar className="w-4 h-4 mr-1" />
                        {project.possession}
                      </div>
                    </div>
                  </div>

                  <Button className="w-full premium-button">
                    View Details
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-charcoal-600">No projects found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lead Capture */}
      <section className="section-spacing bg-gradient-to-r from-gold-500 to-gold-600">
        <div className="max-w-4xl mx-auto container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="text-navy-950">
              <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">
                Interested in Our Projects?
              </h2>
              <p className="text-lg leading-relaxed">
                Get detailed information, floor plans, and schedule a site visit for any of our projects.
              </p>
            </div>
            <div>
              <LeadCaptureForm 
                title="Get Project Details"
                subtitle="Download brochures and schedule site visits"
                context="projects_page"
                className="bg-white"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
