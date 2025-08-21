"use client";

import React from "react";
import { Box, Button, Badge, Typography, Grid, Paper } from "@mui/material";
import { Phone, Star } from "@mui/icons-material";
import { motion } from "framer-motion";

const HeroSection: React.FC = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Box sx={{ minHeight: "100vh", pt: { xs: 8, md: 16 }, background: "#f8fafc" }}>
      <Box sx={{ maxWidth: 1400, mx: "auto", px: { xs: 2, sm: 6, lg: 8 } }}>
        <Grid container spacing={8} alignItems="center">
          {/* Left Content */}
          <Grid item size={{ xs: 12, md: 6 }} >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge badgeContent="⭐ Licensed & Insured" sx={{ mb: 3, px: 2, py: 0.5, bgcolor: "orange.100", color: "orange.600" }} />

              <Typography variant="h3" fontWeight="bold" gutterBottom>
                Your Trusted
                <Box component="span" display="block" color="orange.main">Handyman</Box>
                <Box component="span" display="block" fontSize="1.5rem" fontWeight="400" color="text.secondary" mt={1}>
                  For Every Home Project
                </Box>
              </Typography>

              <Typography variant="body1" color="text.secondary" mb={4}>
                From painting and plumbing to general repairs, I deliver quality craftsmanship
                with honest pricing.
              </Typography>

              <Box display="flex" flexDirection={{ xs: "column", sm: "row" }} gap={2} mb={4}>
                <Button variant="contained" color="warning" startIcon={<Phone />} size="large" onClick={scrollToContact}>
                  Get Free Quote
                </Button>
                <Button variant="outlined" color="inherit" size="large" onClick={() => window.open("tel:+15551234567")}>
                  Call Now: (555) 123-4567
                </Button>
              </Box>

              <Box display="flex" alignItems="center" gap={2}>
                <Box display="flex" gap={0.5}>
                  {[1,2,3,4,5].map(star => <Star key={star} sx={{ color: "yellow.400" }} />)}
                </Box>
                <Box>
                  <Typography fontWeight="bold">4.9/5 Rating</Typography>
                  <Typography variant="caption" color="text.secondary">50+ Happy Customers</Typography>
                </Box>
              </Box>
            </motion.div>
          </Grid>

          {/* Right Image */}
          <Grid item  size={{ xs: 12, md: 6 }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Paper sx={{ width: "100%", borderRadius: 3, boxShadow: 5, overflow: "hidden" }}>
                <Box
                  component="img"
                  src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&h=400&fit=crop&crop=center"
                  alt="Professional handyman at work"
                  sx={{ width: "100%", height: 400, objectFit: "cover" }}
                />
              </Paper>
            </motion.div>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default HeroSection;
