"use client";

import React, { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  Chip,
  Button,
  Dialog,
  IconButton,
} from "@mui/material";
import { motion } from "framer-motion";
import { X } from "lucide-react";

type GalleryItem = {
  id: number;
  image: string;
  title: string;
  category: string;
  description: string;
};

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=600&h=400&fit=crop",
    title: "Kitchen Cabinet Painting",
    category: "Painting",
    description:
      "Complete kitchen transformation with custom color selection and professional finish.",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1585128792020-803d29415281?w=600&h=400&fit=crop",
    title: "Bathroom Plumbing Upgrade",
    category: "Plumbing",
    description:
      "Modern fixture installation with updated plumbing and leak-proof connections.",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=600&h=400&fit=crop",
    title: "Living Room Renovation",
    category: "General",
    description:
      "Complete living room makeover including painting, repairs, and finishing work.",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop",
    title: "Exterior House Painting",
    category: "Painting",
    description:
      "Full exterior house painting with weather-resistant premium paints.",
  },
  {
    id: 5,
    image:
      "https://img.freepik.com/free-photo/carpenter-cutting-mdf-board-inside-workshop_23-2149451059.jpg?t=st=1755792975~exp=1755796575~hmac=8fb015d49427655f5dba1532b43c2f32d6867e1dbe755e91dbb2120079ad0eab&w=1480",
    title: "Custom Shelving Installation",
    category: "Carpentry",
    description:
      "Built-in shelving solution with custom measurements and premium finishes.",
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=600&h=400&fit=crop",
    title: "Deck Maintenance & Staining",
    category: "Maintenance",
    description:
      "Complete deck restoration with power washing, repairs, and protective staining.",
  },
];

const categories = [
  "All",
  "Painting",
  "Plumbing",
  "General",
  "Carpentry",
  "Maintenance",
];

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const filteredItems =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <Box component="section" id="gallery" sx={{ py: 8, bgcolor: "white" }}>
      <Box maxWidth="lg" sx={{ mx: "auto", px: { xs: 2, sm: 4, lg: 6 } }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{ textAlign: "center", marginBottom: "3rem" }}
        >
          <Chip
            label="Portfolio"
            sx={{
              bgcolor: "rgba(249,115,22,0.1)",
              color: "rgb(234,88,12)",
              border: "1px solid rgba(249,115,22,0.2)",
              mb: 2,
            }}
          />
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{ fontSize: { xs: "1.75rem", md: "2rem",color: "text.primary" } }}
            gutterBottom
          >
            Recent <span style={{ color: "rgb(249,115,22)" }}>Projects</span>
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ maxWidth: "720px", mx: "auto", mb: 4 }}
          >
            Take a look at some of my recent work. Every project is completed
            with attention to detail and commitment to quality that my customers
            have come to expect.
          </Typography>

          {/* Category Filter */}
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: 1,
            }}
          >
            {categories.map((category) => (
              <Button
                key={category}
                size="small"
                variant={activeCategory === category ? "contained" : "outlined"}
                sx={{
                  bgcolor:
                    activeCategory === category
                      ? "rgb(249,115,22)"
                      : "transparent",
                  textTransform: "none",
                  color: activeCategory === category ? "white" : "text.primary",
                  borderColor: "grey",
                  "&:hover": {
                    bgcolor:
                      activeCategory === category ? "rgb(234,88,12)" : "grey",
                  },
                }}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Button>
            ))}
          </Box>
        </motion.div>

        {/* Gallery Grid */}
        <Grid container spacing={3}>
          {filteredItems.map((item, index) => (
            <Grid size={{ xs: 12, md: 6, lg: 4 }} key={item.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                style={{ cursor: "pointer" }}
                onClick={() => setSelectedImage(item)}
              >
                <Box
                  sx={{
                    position: "relative",
                    borderRadius: 3,
                    overflow: "hidden",
                    boxShadow: 3,
                    "&:hover img": { transform: "scale(1.05)" },
                    "&:hover .overlay": {
                      opacity: 1,
                      transform: "translateY(0)",
                    },
                  }}
                >
                  <Box
                    component="img"
                    src={item.image}
                    alt={item.title}
                    sx={{
                      width: "100%",
                      height: { xs: 200, sm: 250 },
                      objectFit: "cover",
                      transition: "transform 0.3s",
                    }}
                  />
                  <Box
                    className="overlay"
                    sx={{
                      position: "absolute",
                      inset: 0,
                      bgcolor:
                        "linear-gradient(to top, rgba(0,0,0,0.6), transparent)",
                      opacity: 1,
                      transition: "all 0.3s",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-end",
                      p: 2,
                      color: "white",
                      transform: "translateY(10px)",
                    }}
                  >
                    <Chip
                      label={item.category}
                      sx={{
                        bgcolor: "rgb(249,115,22)",
                        color: "white",
                        mb: 1,
                        alignSelf: "flex-start",
                      }}
                    />
                    <Typography variant="subtitle1" fontWeight="bold">
                      {item.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "rgba(255,255,255,0.9)" }}
                    >
                      {item.description}
                    </Typography>
                  </Box>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Lightbox Modal */}
        {/* By default, MUI <Dialog> toggles the scrollbar on the <body> when it opens/closes. */}
        <Dialog
          open={!!selectedImage}
          onClose={() => setSelectedImage(null)}
          maxWidth="lg"
          disableScrollLock
          PaperProps={{
            sx: { bgcolor: "black", color: "white", position: "relative" },
          }}
        >
          {selectedImage && (
            <Box sx={{ position: "relative" }}>
              <IconButton
                onClick={() => setSelectedImage(null)}
                sx={{
                  position: "absolute",
                  top: 8,
                  right: 8,
                  color: "white",
                  "&:hover": { bgcolor: "rgba(255,255,255,0.2)" },
                }}
              >
                <X size={24} />
              </IconButton>
              <Box
                component="img"
                src={selectedImage.image}
                alt={selectedImage.title}
                sx={{
                  maxWidth: "100%",
                  maxHeight: "80vh",
                  objectFit: "contain",
                  borderRadius: 2,
                  mx: "auto",
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  bgcolor:
                    "linear-gradient(to top, rgba(0,0,0,0.8), transparent)",
                  p: 3,
                }}
              >
                <Chip
                  label={selectedImage.category}
                  sx={{
                    bgcolor: "rgb(249,115,22)",
                    color: "white",
                    mb: 1,
                  }}
                />
                <Typography variant="h6" fontWeight="bold">
                  {selectedImage.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "rgba(255,255,255,0.9)" }}
                >
                  {selectedImage.description}
                </Typography>
              </Box>
            </Box>
          )}
        </Dialog>
      </Box>
    </Box>
  );
}
