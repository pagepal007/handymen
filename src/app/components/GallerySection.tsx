import React, { useState } from 'react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const galleryItems = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=600&h=400&fit=crop",
    title: "Kitchen Cabinet Painting",
    category: "Painting",
    description: "Complete kitchen transformation with custom color selection and professional finish."
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1585128792020-803d29415281?w=600&h=400&fit=crop",
    title: "Bathroom Plumbing Upgrade",
    category: "Plumbing",
    description: "Modern fixture installation with updated plumbing and leak-proof connections."
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=600&h=400&fit=crop",
    title: "Living Room Renovation",
    category: "General",
    description: "Complete living room makeover including painting, repairs, and finishing work."
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop",
    title: "Exterior House Painting",
    category: "Painting",
    description: "Full exterior house painting with weather-resistant premium paints."
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&h=400&fit=crop",
    title: "Custom Shelving Installation",
    category: "Carpentry",
    description: "Built-in shelving solution with custom measurements and premium finishes."
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=600&h=400&fit=crop",
    title: "Deck Maintenance & Staining",
    category: "Maintenance",
    description: "Complete deck restoration with power washing, repairs, and protective staining."
  }
];

const categories = ["All", "Painting", "Plumbing", "General", "Carpentry", "Maintenance"];

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredItems = activeCategory === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Badge className="bg-orange-500/10 text-orange-600 border-orange-500/20 mb-4">
            Portfolio
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Recent Projects
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-8">
            Take a look at some of my recent work. Every project is completed with attention 
            to detail and commitment to quality that my customers have come to expect.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(category)}
                className={activeCategory === category 
                  ? "bg-orange-500 hover:bg-orange-600" 
                  : "border-slate-300 text-slate-700 hover:bg-slate-50"
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
              onClick={() => setSelectedImage(item)}
            >
              <div className="relative overflow-hidden rounded-xl shadow-lg">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
                  <Badge className="bg-orange-500 text-white mb-2">
                    {item.category}
                  </Badge>
                  <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm text-white/90">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl max-h-full">
              <Button
                variant="ghost"
                size="icon"
                className="absolute -top-12 right-0 text-white hover:bg-white/20"
                onClick={() => setSelectedImage(null)}
              >
                <X className="w-6 h-6" />
              </Button>
              <img 
                src={selectedImage.image} 
                alt={selectedImage.title}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                <Badge className="bg-orange-500 mb-2">
                  {selectedImage.category}
                </Badge>
                <h3 className="text-xl font-semibold mb-2">{selectedImage.title}</h3>
                <p className="text-white/90">{selectedImage.description}</p>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}