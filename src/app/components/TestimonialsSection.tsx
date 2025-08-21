"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
  Chip,
  Box,
  Avatar,
  Grid,
  Rating,
  Container,
  Paper,
} from "@mui/material";
import { motion } from "framer-motion";
import { Star, FormatQuote } from "@mui/icons-material";

type Testimonial = {
  id: number;
  name: string;
  location: string;
  rating: number;
  text: string;
  service: string;
  image: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "Downtown",
    rating: 5,
    text: "Mike did an absolutely fantastic job painting our entire house interior. His attention to detail is incredible, and he was so professional throughout the whole process. Highly recommend!",
    service: "Interior Painting",
    image:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
  },
  {
    id: 2,
    name: "Robert Chen",
    location: "Westside",
    rating: 5,
    text: "Had a major plumbing emergency on a Sunday morning. Mike came out within 2 hours and fixed everything perfectly. Fair pricing and excellent work. Will definitely use again.",
    service: "Emergency Plumbing",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
  },
  {
    id: 3,
    name: "Lisa Martinez",
    location: "Riverside",
    rating: 5,
    text: "Mike installed custom shelving in our home office and it looks amazing! He's reliable, skilled, and really cares about doing quality work. Couldn't be happier.",
    service: "Custom Carpentry",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
  },
  {
    id: 4,
    name: "David Thompson",
    location: "Oak Hill",
    rating: 5,
    text: "Outstanding service! Mike helped us with multiple home repairs and improvements. Professional, punctual, and honest pricing. He's now our go-to handyman for everything.",
    service: "General Repairs",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
  },
  {
    id: 5,
    name: "Jennifer Kim",
    location: "Maple Heights",
    rating: 5,
    text: "Mike transformed our kitchen with his painting expertise. The cabinets look brand new! Clean work, on time, and within budget. Thank you for the excellent service!",
    service: "Kitchen Renovation",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop&crop=face",
  },
  {
    id: 6,
    name: "Michael Brown",
    location: "Cedar Park",
    rating: 5,
    text: "Professional and trustworthy! Mike handled our bathroom renovation with skill and care. Great communication throughout the project. Highly recommend his services.",
    service: "Bathroom Renovation",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
  },
];

export default function TestimonialsSection() {
  return (
    <Box component="section" id="testimonials" sx={{ py: 10, bgcolor: "grey.50" }}>
      <Container maxWidth="lg">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{ textAlign: "center", marginBottom: "3rem" }}
        >
          <Chip
            label="Testimonials"
            sx={{
              bgcolor: "orange.100",
              color: "orange.700",
              mb: 2,
              fontWeight: "bold",
            }}
          />
          <Typography variant="h4" component="h2" gutterBottom fontWeight="bold">
            What My Customers Say
          </Typography>
          <Typography variant="body1" color="text.secondary" maxWidth="md" mx="auto">
            Don't just take my word for it. Here's what homeowners in our community
            have to say about their experience working with HandyPro.
          </Typography>
        </motion.div>

        {/* Testimonials Grid */}
        <Grid container spacing={4}>
          {testimonials.map((t, index) => (
            <Grid item size={{ xs: 12, sm: 6, md: 4 }}  key={t.id}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card elevation={6} sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
                  <CardContent sx={{ flexGrow: 1 }}>
                    <FormatQuote sx={{ fontSize: 40, color: "orange.200", mb: 2 }} />

                    {/* Rating */}
                    <Rating value={t.rating} readOnly size="small" sx={{ mb: 2 }} />

                    {/* Text */}
                    <Typography variant="body1" color="text.primary" sx={{ mb: 3, fontStyle: "italic" }}>
                      "{t.text}"
                    </Typography>

                    {/* Customer Info */}
                    <Box display="flex" alignItems="center" gap={2}>
                      <Avatar src={t.image} alt={t.name} sx={{ width: 48, height: 48 }} />
                      <Box>
                        <Typography fontWeight="bold">{t.name}</Typography>
                        <Typography variant="body2" color="text.secondary">
                          {t.location}
                        </Typography>
                      </Box>
                    </Box>
                  </CardContent>

                  {/* Service Chip */}
                  <Box px={2} pb={2}>
                    <Chip
                      label={t.service}
                      variant="outlined"
                      sx={{ color: "orange.700", borderColor: "orange.200", bgcolor: "orange.50" }}
                    />
                  </Box>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Overall Rating */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Paper
            elevation={6}
            sx={{
              textAlign: "center",
              mt: 6,
              p: 4,
              borderRadius: 3,
            }}
          >
            <Rating value={5} readOnly sx={{ fontSize: 32, mb: 2 }} />
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              4.9 out of 5 stars
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Based on 50+ customer reviews
            </Typography>
          </Paper>
        </motion.div>
      </Container>
    </Box>
  );
}
