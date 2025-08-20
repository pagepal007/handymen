import React from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from 'framer-motion';
import { 
  Phone, 
  Star,
  CheckCircle,
  Clock,
  Shield
} from 'lucide-react';

export default function HeroSection() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-slate-50 to-white pt-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <Badge className="bg-orange-500/10 text-orange-600 border-orange-500/20 px-4 py-1">
                ⭐ Licensed & Insured Professional
              </Badge>
              
              <h1 className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight">
                Your Trusted
                <span className="block text-orange-500">Handyman</span>
                <span className="block text-2xl md:text-3xl font-normal text-slate-600 mt-2">
                  For Every Home Project
                </span>
              </h1>
              
              <p className="text-lg text-slate-600 leading-relaxed">
                From painting and plumbing to general repairs, I deliver quality craftsmanship 
                with honest pricing. Your home deserves the best care, and I'm here to provide it.
              </p>
            </div>

            {/* Features */}
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <div>
                  <p className="font-semibold text-slate-900">Quality Work</p>
                  <p className="text-xs text-slate-500">Every time</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                <Clock className="w-5 h-5 text-blue-500" />
                <div>
                  <p className="font-semibold text-slate-900">On Time</p>
                  <p className="text-xs text-slate-500">Always</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                <Shield className="w-5 h-5 text-purple-500" />
                <div>
                  <p className="font-semibold text-slate-900">Guaranteed</p>
                  <p className="text-xs text-slate-500">100%</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={scrollToContact}
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg font-semibold shadow-lg"
              >
                <Phone className="w-5 h-5 mr-2" />
                Get Free Quote
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-slate-300 text-slate-700 hover:bg-slate-50 px-8 py-3 text-lg"
                onClick={() => window.open('tel:+15551234567')}
              >
                Call Now: (555) 123-4567
              </Button>
            </div>

            {/* Social Proof */}
            <div className="flex items-center gap-6 pt-4">
              <div className="flex items-center gap-1">
                {[1,2,3,4,5].map((star) => (
                  <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <div>
                <p className="text-slate-900 font-semibold">4.9/5 Rating</p>
                <p className="text-slate-500 text-sm">50+ Happy Customers</p>
              </div>
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative bg-white rounded-2xl shadow-2xl p-6">
              <img 
                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&h=400&fit=crop&crop=center"
                alt="Professional handyman at work"
                className="w-full h-96 object-cover rounded-xl"
              />
              
              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 border border-gray-100">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">10+ Years</p>
                    <p className="text-slate-600 text-sm">Experience</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}