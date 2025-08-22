"use client";

import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Chip,
  Grid,
  Box,
} from "@mui/material";
import { motion } from "framer-motion";
import {
  Paintbrush,
  Droplets,
  Wrench,
  Zap,
  Hammer,
  Home,
} from "lucide-react";

type Service = {
  icon: React.ElementType;
  title: string;
  description: string;
  features: string[];
  image: string;
};

const services: Service[] = [
  {
    icon: Paintbrush,
    title: "Interior & Exterior Painting",
    description:
      "Transform your home with professional painting services. From color consultation to final touch-ups, I ensure a flawless finish every time.",
    features: [
      "Color Consultation",
      "Surface Preparation",
      "Premium Paints",
      "Clean Finish",
    ],
    image:
      "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=400&h=300&fit=crop",
  },
  {
    icon: Droplets,
    title: "Plumbing Services",
    description:
      "From leaky faucets to pipe installations, I handle all your plumbing needs with precision and care. Emergency repairs available.",
    features: [
      "Leak Repairs",
      "Fixture Installation",
      "Pipe Work",
      "Emergency Service",
    ],
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
  },
  {
    icon: Wrench,
    title: "General Handyman Work",
    description:
      "Whatever needs fixing, building, or improving around your home, I've got the skills and tools to get the job done right.",
    features: ["Home Repairs", "Assembly", "Maintenance", "Installations"],
    image:
      "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=400&h=300&fit=crop",
  },
  {
    icon: Zap,
    title: "Basic Electrical",
    description:
      "Safe and reliable electrical work for your home. From outlet installation to light fixture mounting - all code compliant.",
    features: [
      "Outlet Installation",
      "Light Fixtures",
      "Switch Replacement",
      "Safety First",
    ],
    image:
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=400&h=300&fit=crop",
  },
  {
    icon: Hammer,
    title: "Carpentry & Repairs",
    description:
      "Custom carpentry work and repairs to keep your home in perfect condition. Quality craftsmanship guaranteed.",
    features: ["Custom Work", "Repairs", "Installations", "Finishing"],
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=300&fit=crop",
  },
  {
    icon: Home,
    title: "Home Maintenance",
    description:
      "Regular maintenance services to keep your home in top shape year-round. Preventive care saves money.",
    features: [
      "Seasonal Checks",
      "Preventive Care",
      "Regular Service",
      "Peace of Mind",
    ],
    image:
      "https://images.unsplash.com/photo-1505798577917-a65157d3320a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default function ServicesSection() {
  return (
    <Box component="section" id="services" sx={{ pb: 10,pt:10, bgcolor: "white" }}>
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
            label="Our Services"
            sx={{
              bgcolor: "rgba(249,115,22,0.1)",
              color: "rgb(234,88,12)",
              border: "1px solid rgba(249,115,22,0.2)",
              mb: 2,
            }}
          />
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Complete Home Solutions
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ maxWidth: "720px", mx: "auto" }}
          >
            From small repairs to major improvements, I provide comprehensive
            handyman services with the quality and reliability you deserve.
          </Typography>
        </motion.div>

        {/* Services Grid */}
        <Grid container spacing={4}>
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Grid item size={{ xs: 12, md: 6, lg: 4 }} key={service.title}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card
                    elevation={3}
                    sx={{
                      height: 400, 
                      transition: "box-shadow 0.3s",
                      "&:hover": { boxShadow: 6 },
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Box sx={{ position: "relative", overflow: "hidden" }}>
                      <Box
                        component="img"
                        src={service.image}
                        alt={service.title}
                        sx={{
                          width: "100%",
                          height: 200,
                          objectFit: "cover",
                          transition: "transform 0.3s",
                          "&:hover": { transform: "scale(1.05)" },
                        }}
                      />
                      <Box
                        sx={{
                          position: "absolute",
                          top: 16,
                          left: 16,
                          width: 48,
                          height: 48,
                          bgcolor: "rgba(255,255,255,0.9)",
                          borderRadius: "50%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Icon size={24} color="#f97316" />
                      </Box>
                    </Box>
                    <CardContent sx={{ p: 3 }}>
                      <Typography variant="h6" fontWeight="bold" gutterBottom>
                        {service.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ mb: 2 }}
                      >
                        {service.description}
                      </Typography>

                      <Box
                        sx={{
                          display: "flex",
                          flexWrap: "wrap",
                          gap: 1,
                          mb: 2,
                        }}
                      >
                        {service.features.map((feature) => (
                          <Chip
                            key={feature}
                            label={feature}
                            size="small"
                            sx={{
                              bgcolor: "grey.100",
                              color: "grey.700",
                              fontSize: "0.75rem",
                            }}
                          />
                        ))}
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
}
