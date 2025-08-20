import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';
import { 
  Paintbrush, 
  Droplets, 
  Wrench, 
  Zap,
  Hammer,
  Home,
  ArrowRight
} from 'lucide-react';

const services = [
  {
    icon: Paintbrush,
    title: "Interior & Exterior Painting",
    description: "Transform your home with professional painting services. From color consultation to final touch-ups, I ensure a flawless finish every time.",
    features: ["Color Consultation", "Surface Preparation", "Premium Paints", "Clean Finish"],
    image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=400&h=300&fit=crop",
    price: "Starting at $200/room"
  },
  {
    icon: Droplets,
    title: "Plumbing Services",
    description: "From leaky faucets to pipe installations, I handle all your plumbing needs with precision and care. Emergency repairs available.",
    features: ["Leak Repairs", "Fixture Installation", "Pipe Work", "Emergency Service"],
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
    price: "Starting at $85/hour"
  },
  {
    icon: Wrench,
    title: "General Handyman Work",
    description: "Whatever needs fixing, building, or improving around your home, I've got the skills and tools to get the job done right.",
    features: ["Home Repairs", "Assembly", "Maintenance", "Installations"],
    image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=400&h=300&fit=crop",
    price: "Starting at $75/hour"
  },
  {
    icon: Zap,
    title: "Basic Electrical",
    description: "Safe and reliable electrical work for your home. From outlet installation to light fixture mounting - all code compliant.",
    features: ["Outlet Installation", "Light Fixtures", "Switch Replacement", "Safety First"],
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=400&h=300&fit=crop",
    price: "Starting at $95/hour"
  },
  {
    icon: Hammer,
    title: "Carpentry & Repairs",
    description: "Custom carpentry work and repairs to keep your home in perfect condition. Quality craftsmanship guaranteed.",
    features: ["Custom Work", "Repairs", "Installations", "Finishing"],
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=300&fit=crop",
    price: "Custom Quotes"
  },
  {
    icon: Home,
    title: "Home Maintenance",
    description: "Regular maintenance services to keep your home in top shape year-round. Preventive care saves money.",
    features: ["Seasonal Checks", "Preventive Care", "Regular Service", "Peace of Mind"],
    image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop",
    price: "Monthly Plans Available"
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="bg-orange-500/10 text-orange-600 border-orange-500/20 mb-4">
            Our Services
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Complete Home Solutions
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            From small repairs to major improvements, I provide comprehensive handyman services 
            with the quality and reliability you deserve.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg group">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-orange-500" />
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{service.description}</p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature) => (
                        <Badge 
                          key={feature} 
                          variant="secondary" 
                          className="text-xs bg-slate-100 text-slate-700"
                        >
                          {feature}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                      <div>
                        <p className="font-semibold text-orange-600">{service.price}</p>
                      </div>
                      <Button 
                        size="sm" 
                        variant="ghost" 
                        className="text-orange-600 hover:text-orange-700 hover:bg-orange-50"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-slate-600 mb-6">Need a custom quote for your specific project?</p>
          <Button 
            size="lg"
            className="bg-orange-500 hover:bg-orange-600 text-white px-8"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get Your Free Estimate
          </Button>
        </motion.div>
      </div>
    </section>
  );
}