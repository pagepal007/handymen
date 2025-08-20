import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "Downtown",
    rating: 5,
    text: "Mike did an absolutely fantastic job painting our entire house interior. His attention to detail is incredible, and he was so professional throughout the whole process. Highly recommend!",
    service: "Interior Painting",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
  },
  {
    id: 2,
    name: "Robert Chen",
    location: "Westside",
    rating: 5,
    text: "Had a major plumbing emergency on a Sunday morning. Mike came out within 2 hours and fixed everything perfectly. Fair pricing and excellent work. Will definitely use again.",
    service: "Emergency Plumbing",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
  },
  {
    id: 3,
    name: "Lisa Martinez",
    location: "Riverside",
    rating: 5,
    text: "Mike installed custom shelving in our home office and it looks amazing! He's reliable, skilled, and really cares about doing quality work. Couldn't be happier.",
    service: "Custom Carpentry",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
  },
  {
    id: 4,
    name: "David Thompson",
    location: "Oak Hill",
    rating: 5,
    text: "Outstanding service! Mike helped us with multiple home repairs and improvements. Professional, punctual, and honest pricing. He's now our go-to handyman for everything.",
    service: "General Repairs",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
  },
  {
    id: 5,
    name: "Jennifer Kim",
    location: "Maple Heights",
    rating: 5,
    text: "Mike transformed our kitchen with his painting expertise. The cabinets look brand new! Clean work, on time, and within budget. Thank you for the excellent service!",
    service: "Kitchen Renovation",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop&crop=face"
  },
  {
    id: 6,
    name: "Michael Brown",
    location: "Cedar Park",
    rating: 5,
    text: "Professional and trustworthy! Mike handled our bathroom renovation with skill and care. Great communication throughout the project. Highly recommend his services.",
    service: "Bathroom Renovation",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face"
  }
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-slate-50">
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
            Testimonials
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            What My Customers Say
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Don't just take my word for it. Here's what homeowners in our community 
            have to say about their experience working with HandyPro.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  {/* Quote Icon */}
                  <Quote className="w-8 h-8 text-orange-500/20 mb-4" />
                  
                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-4">
                    {[1,2,3,4,5].map((star) => (
                      <Star 
                        key={star} 
                        className="w-4 h-4 fill-yellow-400 text-yellow-400" 
                      />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-slate-700 mb-6 leading-relaxed italic">
                    "{testimonial.text}"
                  </p>

                  {/* Customer Info */}
                  <div className="flex items-center gap-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold text-slate-900">{testimonial.name}</p>
                      <p className="text-sm text-slate-600">{testimonial.location}</p>
                    </div>
                  </div>

                  {/* Service Badge */}
                  <div className="mt-4 pt-4 border-t border-slate-100">
                    <Badge 
                      variant="secondary" 
                      className="bg-orange-500/10 text-orange-700 border-orange-500/20"
                    >
                      {testimonial.service}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Overall Rating */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12 p-8 bg-white rounded-2xl shadow-lg"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            {[1,2,3,4,5].map((star) => (
              <Star key={star} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <p className="text-2xl font-bold text-slate-900 mb-2">4.9 out of 5 stars</p>
          <p className="text-slate-600">Based on 50+ customer reviews</p>
        </motion.div>
      </div>
    </section>
  );
}