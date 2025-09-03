"use client";
import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Chip,
  Box,
  Avatar,
  Rating,
  Container,
} from "@mui/material";
import { motion } from "framer-motion";
import { FormatQuote } from "@mui/icons-material";

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
    name: "Ansuman",
    location: "Edison",
    rating: 5,
    text: "Samir did an absolutely fantastic job painting our entire house interior. His attention to detail is incredible, and he was so professional throughout the whole process. Highly recommend!",
    service: "Interior Painting",
    image:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
  },
  {
    id: 2,
    name: "Saud",
    location: "Maplewood",
    rating: 5,
    text: "Had a major plumbing emergency on a Sunday morning. Samir came out within 2 hours and fixed everything perfectly. Fair pricing and excellent work. Will definitely use again.",
    service: "Emergency Plumbing",
    image:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
  },
  {
    id: 3,
    name: "Amer",
    location: "Brooklyn",
    rating: 5,
    text: "Samir installed custom shelving in our home office and it looks amazing! He's reliable, skilled, and really cares about doing quality work. Couldn't be happier.",
    service: "Custom Carpentry",
    image:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
  },
];

export default function TestimonialsSection() {
  return (
    <Box
      component="section"
      id="testimonials"
      sx={{ py: 8, bgcolor: "grey.50" }}
    >
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
              bgcolor: "rgba(249,115,22,0.1)",
              color: "rgb(234,88,12)",
              mb: 2,
              fontWeight: "bold",
            }}
          />
          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            fontWeight="bold"
            sx={{ fontSize: { xs: "1.75rem", md: "2rem",color: "text.primary" } }}
          >
            What My <span style={{ color: "rgb(249,115,22)"}}>Customers Say</span> 
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            maxWidth="md"
            mx="auto"
          >
            Don&apos;t just take my word for it. Here&apos;s what homeowners in our
            community have to say about their experience working with General Rooter XP-LLC.
          </Typography>
        </motion.div>

        {/* Testimonials Grid */}
        <Box display={"flex"} gap={4} flexWrap="wrap" flexDirection={"row"} justifyContent={"center"}>
          {testimonials.map((t, index) => (
         
              <motion.div
              key={t.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card
                  elevation={6}
                  sx={{
                    height: "320px",
                    width: "350px",
                    transition: "box-shadow 0.3s",
                    "&:hover": { boxShadow: 12 },
                    display: "flex",
                    flexDirection: "column",
                
                  }}
                >
                  <CardContent sx={{ flexGrow: 1,  display: "flex",
                    flexDirection: "column",alignItems: "flex-start"}}>
                    <FormatQuote
                      sx={{ fontSize: 30, color: "orange.200", mb: 1 }}
                    />

                    {/* Rating */}
                    <Rating
                      value={t.rating}
                      readOnly
                      size="small"
                      sx={{ mb: 1 }}
                    />

                    {/* Text */}
                    <Typography
                      variant="body1"
                      color="text.primary"
                      sx={{ mb: 3, fontStyle: "italic" }}
                    >
                      &quot;{t.text}&quot;
                    </Typography>

                    {/* Customer Info */}
                    <Box display="flex" alignItems="center" mt={"auto"} gap={2}>
                      <Avatar
                        src={t.image}
                        alt={t.name}
                        sx={{ width: 48, minHeight: 48 }}
                      />
                      <Box>
                        <Typography fontWeight="bold">{t.name}</Typography>
                        <Typography variant="body2" color="text.secondary">
                          {t.location}
                        </Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
           
          ))}
        </Box>
      </Container>
    </Box>
  );
}
