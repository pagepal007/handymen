"use client";

import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Chip,
  Button,
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
  ArrowRight,
} from "lucide-react";

type Service = {
  icon: React.ElementType;
  title: string;
  description: string;
  features: string[];
  image: string;
  price: string;
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
    price: "Starting at $200/room",
  },
  {
    icon: Droplets,
    title: "Plumbing Services",
    description:
      "From leaky faucets to pipe installations, I handle all your plumbing needs with precision and care. Emergency repairs available.",
    features: ["Leak Repairs", "Fixture Installation", "Pipe Work", "Emergency Service"],
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
    price: "Starting at $85/hour",
  },
  {
    icon: Wrench,
    title: "General Handyman Work",
    description:
      "Whatever needs fixing, building, or improving around your home, I've got the skills and tools to get the job done right.",
    features: ["Home Repairs", "Assembly", "Maintenance", "Installations"],
    image:
      "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=400&h=300&fit=crop",
    price: "Starting at $75/hour",
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
    price: "Starting at $95/hour",
  },
  {
    icon: Hammer,
    title: "Carpentry & Repairs",
    description:
      "Custom carpentry work and repairs to keep your home in perfect condition. Quality craftsmanship guaranteed.",
    features: ["Custom Work", "Repairs", "Installations", "Finishing"],
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=300&fit=crop",
    price: "Custom Quotes",
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
      "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop",
    price: "Monthly Plans Available",
  },
];

export default function ServicesSection() {
  return (
    <Box component="section" id="services" sx={{ py: 10, bgcolor: "white" }}>
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
            From small repairs to major improvements, I provide comprehensive handyman
            services with the quality and reliability you deserve.
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
                      height: "100%",
                      transition: "box-shadow 0.3s",
                      "&:hover": { boxShadow: 6 },
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

                      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 2 }}>
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

                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          pt: 2,
                          borderTop: "1px solid",
                          borderColor: "grey.100",
                        }}
                      >
                        <Typography
                          variant="subtitle2"
                          fontWeight="bold"
                          sx={{ color: "rgb(234,88,12)" }}
                        >
                          {service.price}
                        </Typography>
                        <Button
                          size="small"
                          variant="text"
                          sx={{
                            color: "rgb(234,88,12)",
                            "&:hover": { bgcolor: "rgba(249,115,22,0.1)" },
                          }}
                          endIcon={<ArrowRight size={16} />}
                        >
                          Learn More
                        </Button>
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            );
          })}
        </Grid>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{ textAlign: "center", marginTop: "3rem" }}
        >
          <Typography color="text.secondary" sx={{ mb: 2 }}>
            Need a custom quote for your specific project?
          </Typography>
          <Button
            size="large"
            variant="contained"
            sx={{
              bgcolor: "rgb(249,115,22)",
              "&:hover": { bgcolor: "rgb(234,88,12)" },
              px: 4,
            }}
            onClick={() =>
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Get Your Free Estimate
          </Button>
        </motion.div>
      </Box>
    </Box>
  );
}
