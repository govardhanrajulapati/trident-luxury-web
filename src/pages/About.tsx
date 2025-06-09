
import LeadCaptureForm from '@/components/LeadCaptureForm';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Award,
  Shield,
  Users,
  Target,
  Heart,
  Building2,
  CheckCircle
} from 'lucide-react';

const About = () => {
  const milestones = [
    { year: "2008", event: "Trinethra Developers Founded", description: "Started with a vision to transform Kakinada's skyline" },
    { year: "2010", event: "First Residential Project", description: "Delivered our maiden project with 100% customer satisfaction" },
    { year: "2015", event: "500 Families Milestone", description: "Reached 500 happy families across 10 completed projects" },
    { year: "2018", event: "RERA Certification", description: "Became fully RERA compliant, ensuring transparency" },
    { year: "2020", event: "Sustainability Focus", description: "Introduced eco-friendly construction practices" },
    { year: "2023", event: "1000+ Families", description: "Crossed 1000 satisfied customers milestone" }
  ];

  const values = [
    {
      icon: Target,
      title: "Quality Excellence",
      description: "We never compromise on quality, using only premium materials and world-class construction practices."
    },
    {
      icon: Shield,
      title: "Trust & Transparency",
      description: "Complete transparency in pricing, timelines, and processes. Your trust is our most valuable asset."
    },
    {
      icon: Heart,
      title: "Customer First",
      description: "Every decision we make is centered around creating the best experience for our customers."
    },
    {
      icon: Building2,
      title: "Innovation",
      description: "Constantly evolving with latest technology and design trends to deliver future-ready homes."
    }
  ];

  const team = [
    {
      name: "Rajesh Kumar",
      position: "Founder & CEO",
      experience: "20+ Years",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Priya Sharma",
      position: "Head of Design",
      experience: "15+ Years",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b577?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Anil Reddy",
      position: "Chief Engineer",
      experience: "18+ Years",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section-spacing bg-gradient-to-br from-navy-950 to-navy-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gold-500/10 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto container-padding text-center">
          <h1 className="font-playfair text-4xl md:text-6xl font-bold mb-6">
            About <span className="text-gold-400">Trinethra Developers</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            For over 15 years, we've been crafting premium living experiences in Kakinada, 
            building not just structures, but communities where dreams take shape.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-spacing bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-navy-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-charcoal-600 leading-relaxed mb-6">
                Founded in 2008 with a simple yet powerful vision - to transform Kakinada's real estate 
                landscape with world-class developments that combine luxury, functionality, and sustainability.
              </p>
              <p className="text-lg text-charcoal-600 leading-relaxed mb-8">
                From our humble beginnings to becoming one of Kakinada's most trusted developers, 
                our journey has been guided by unwavering commitment to quality, transparency, and customer satisfaction.
              </p>
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gold-600 font-playfair">25+</div>
                  <div className="text-sm text-charcoal-600">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gold-600 font-playfair">1000+</div>
                  <div className="text-sm text-charcoal-600">Families</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gold-600 font-playfair">15+</div>
                  <div className="text-sm text-charcoal-600">Years</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Our office building"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-spacing bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-navy-900 mb-6">
              Our Journey
            </h2>
            <p className="text-xl text-charcoal-600 max-w-3xl mx-auto">
              Milestones that mark our commitment to excellence and growth
            </p>
          </div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex flex-col md:flex-row items-center gap-6">
                <div className="w-full md:w-24 flex-shrink-0">
                  <div className="text-2xl font-bold text-gold-600 font-playfair text-center">
                    {milestone.year}
                  </div>
                </div>
                <div className="flex-1">
                  <Card className="border-l-4 border-l-gold-500">
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg text-navy-900 mb-2">
                        {milestone.event}
                      </h3>
                      <p className="text-charcoal-600">{milestone.description}</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-spacing bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-navy-900 mb-6">
              Our Values
            </h2>
            <p className="text-xl text-charcoal-600 max-w-3xl mx-auto">
              The principles that guide every decision and define our character
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-gold-500 to-gold-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-playfair text-xl font-bold text-navy-900 mb-4">
                    {value.title}
                  </h3>
                  <p className="text-charcoal-600 leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="section-spacing bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-navy-900 mb-6">
              Leadership Team
            </h2>
            <p className="text-xl text-charcoal-600 max-w-3xl mx-auto">
              Meet the visionaries behind Trinethra's success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative h-64">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="font-playfair text-xl font-bold">{member.name}</h3>
                    <p className="text-gold-400">{member.position}</p>
                    <p className="text-sm text-white/80">{member.experience}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Capture */}
      <section className="section-spacing bg-gradient-to-r from-gold-500 to-gold-600">
        <div className="max-w-4xl mx-auto container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="text-navy-950">
              <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">
                Ready to Build Your Future?
              </h2>
              <p className="text-lg leading-relaxed">
                Let's discuss how we can help you find the perfect property that matches your dreams and lifestyle.
              </p>
            </div>
            <div>
              <LeadCaptureForm 
                title="Let's Connect"
                subtitle="Schedule a consultation with our team"
                context="about_page"
                className="bg-white"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
