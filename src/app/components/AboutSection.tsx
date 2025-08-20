import React from 'react';
import { Badge } from "@/components/ui/badge";
import { motion } from 'framer-motion';
import { 
  Award, 
  Shield, 
  Clock, 
  Users,
  CheckCircle,
  Star
} from 'lucide-react';

const stats = [
  { icon: Users, number: "50+", label: "Happy Customers" },
  { icon: Clock, number: "10+", label: "Years Experience" },
  { icon: Award, number: "100%", label: "Satisfaction Rate" },
  { icon: Shield, number: "24/7", label: "Emergency Service" }
];

const qualities = [
  "Licensed & Insured Professional",
  "Transparent, Upfront Pricing",
  "Quality Materials & Workmanship",
  "Clean & Respectful Service",
  "Satisfaction Guaranteed"
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <Badge className="bg-orange-500/10 text-orange-600 border-orange-500/20 mb-4">
                About Me
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Your Reliable Home
                <span className="block text-orange-500">Improvement Partner</span>
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Hi, I'm Mike Johnson, and I've been serving homeowners in our community for over 10 years. 
                  What started as a passion for fixing things has grown into a full-service handyman business 
                  built on trust, quality, and old-fashioned customer service.
                </p>
                <p>
                  I believe every home deserves to be well-maintained and beautiful. Whether it's a small repair 
                  or a major improvement project, I approach each job with the same attention to detail and 
                  commitment to excellence.
                </p>
              </div>
            </div>

            {/* Qualities */}
            <div className="space-y-3">
              <h3 className="font-semibold text-slate-900 mb-4">Why Choose HandyPro?</h3>
              {qualities.map((quality, index) => (
                <motion.div
                  key={quality}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-slate-700">{quality}</span>
                </motion.div>
              ))}
            </div>

            {/* Certifications */}
            <div className="flex flex-wrap gap-3">
              <Badge className="bg-green-500/10 text-green-700 border-green-500/20 px-4 py-2">
                <Shield className="w-4 h-4 mr-2" />
                Licensed Professional
              </Badge>
              <Badge className="bg-blue-500/10 text-blue-700 border-blue-500/20 px-4 py-2">
                <Award className="w-4 h-4 mr-2" />
                Insured & Bonded
              </Badge>
            </div>
          </motion.div>

          {/* Image & Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Profile Image */}
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face"
                alt="Mike Johnson - Professional Handyman"
                className="w-full max-w-md mx-auto rounded-2xl shadow-xl"
              />
              
              {/* Experience Badge */}
              <div className="absolute -top-6 -right-6 bg-orange-500 text-white rounded-full w-20 h-20 flex flex-col items-center justify-center shadow-lg">
                <span className="text-2xl font-bold">10+</span>
                <span className="text-xs">Years</span>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-xl shadow-lg text-center border border-gray-100"
                >
                  <stat.icon className="w-8 h-8 text-orange-500 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-slate-900 mb-1">{stat.number}</div>
                  <div className="text-sm text-slate-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}