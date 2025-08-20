import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  CheckCircle,
  Send
} from 'lucide-react';

const contactInfo = [
  {
    icon: Phone,
    title: "Call or Text",
    details: "(555) 123-4567",
    description: "Available 7 days a week for emergencies"
  },
  {
    icon: Mail,
    title: "Email",
    details: "info@handypro.com",
    description: "Response within 24 hours"
  },
  {
    icon: MapPin,
    title: "Service Area",
    details: "Greater Metro Area",
    description: "Within 25 miles of downtown"
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: "Mon-Sat: 8AM-6PM",
    description: "Emergency service available 24/7"
  }
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 bg-white">
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
            Get In Touch
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Get a free estimate for your home improvement project. I respond to all inquiries 
            quickly and provide transparent, upfront pricing.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="border-0 shadow-xl">
              <CardHeader className="pb-6">
                <CardTitle className="text-2xl font-bold text-slate-900">
                  Request Your Free Quote
                </CardTitle>
                <p className="text-slate-600">
                  Fill out the form below and I'll get back to you within 24 hours.
                </p>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">Thank you!</h3>
                    <p className="text-slate-600">
                      I'll review your request and get back to you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          Full Name *
                        </label>
                        <Input
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your name"
                          required
                          className="border-slate-300 focus:border-orange-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          Phone Number *
                        </label>
                        <Input
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="(555) 123-4567"
                          required
                          className="border-slate-300 focus:border-orange-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Email Address *
                      </label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        required
                        className="border-slate-300 focus:border-orange-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Service Needed
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                      >
                        <option value="">Select a service</option>
                        <option value="painting">Painting</option>
                        <option value="plumbing">Plumbing</option>
                        <option value="general">General Repairs</option>
                        <option value="electrical">Basic Electrical</option>
                        <option value="carpentry">Carpentry</option>
                        <option value="maintenance">Home Maintenance</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Project Details *
                      </label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Please describe your project, including timeline and any specific requirements..."
                        rows={4}
                        required
                        className="border-slate-300 focus:border-orange-500"
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 text-lg font-semibold"
                    >
                      <Send className="w-5 h-5 mr-2" />
                      Send Request
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Quick Contact */}
            <Card className="border-0 shadow-xl bg-gradient-to-br from-orange-500 to-orange-600 text-white">
              <CardContent className="p-8 text-center">
                <Phone className="w-12 h-12 mx-auto mb-4 text-white/90" />
                <h3 className="text-2xl font-bold mb-2">Need Immediate Help?</h3>
                <p className="text-orange-100 mb-6">
                  Call now for emergency repairs or urgent project needs
                </p>
                <Button 
                  size="lg"
                  className="bg-white text-orange-600 hover:bg-orange-50 font-semibold px-8"
                  onClick={() => window.open('tel:+15551234567')}
                >
                  Call (555) 123-4567
                </Button>
              </CardContent>
            </Card>

            {/* Contact Details */}
            <div className="grid gap-6">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-orange-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <item.icon className="w-6 h-6 text-orange-500" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-slate-900 mb-1">{item.title}</h3>
                          <p className="text-lg font-medium text-slate-800 mb-1">{item.details}</p>
                          <p className="text-sm text-slate-600">{item.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Service Promise */}
            <Card className="border-2 border-green-200 bg-green-50">
              <CardContent className="p-6 text-center">
                <CheckCircle className="w-10 h-10 text-green-600 mx-auto mb-3" />
                <h3 className="font-semibold text-green-900 mb-2">Service Guarantee</h3>
                <p className="text-green-800 text-sm">
                  All work comes with a satisfaction guarantee. If you're not happy, 
                  I'll make it right at no additional cost.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}