"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import {
  Box,
  Grid,
  Card,
  CardContent,
  CardHeader,
  Typography,
  TextField,
  Button,
  MenuItem,
  Avatar,
  Chip,
  Paper,
} from "@mui/material";
import {
  Phone,
  Mail,
  // MapPin,
  AccessTime as Clock,
  CheckCircle,
  Send,
} from "@mui/icons-material";
import { motion } from "framer-motion";

interface ContactForm {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

const contactInfo = [
  {
    icon: <Phone color="primary" />,
    title: "Call or Text",
    details: "(555) 123-4567",
    description: "Available 7 days a week for emergencies",
  },
  {
    icon: <Mail color="primary" />,
    title: "Email",
    details: "info@handypro.com",
    description: "Response within 24 hours",
  },
  {
    icon: <Clock color="primary" />,
    title: "Business Hours",
    details: "Mon-Sat: 8AM-6PM",
    description: "Emergency service available 24/7",
  },
];

export default function ContactSection() {
  const [formData, setFormData] = useState<ContactForm>({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <Box
      id="contact"
      component="section"
      sx={{ py: 10, bgcolor: "background.paper" }}
    >
      <Box maxWidth="lg" mx="auto" px={2}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{ textAlign: "center", marginBottom: "3rem" }}
        >
          <Chip
            label="Get in Touch"
            sx={{
              bgcolor: "rgba(249,115,22,0.1)",
              color: "rgb(234,88,12)",
              mb: 2,
              fontWeight: "bold",
            }}
          />
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Ready to Start Your Project?
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            maxWidth="md"
            mx="auto"
          >
            Get a free estimate for your home improvement project. I respond to
            all inquiries quickly and provide transparent, upfront pricing.
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {/* Contact Form */}
          <Grid item size={{ xs: 12, md: 6 }}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card elevation={6}>
                <CardHeader
                  title="Request Your Free Quote"
                  subheader="Fill out the form below and I'll get back to you within 24 hours."
                />
                <CardContent>
                  {isSubmitted ? (
                    <Box textAlign="center" py={5}>
                      <CheckCircle
                        sx={{ fontSize: 60, color: "success.main", mb: 2 }}
                      />
                      <Typography variant="h6" fontWeight="bold" gutterBottom>
                        Thank you!
                      </Typography>
                      <Typography color="text.secondary">
                        I'll review your request and get back to you within 24
                        hours.
                      </Typography>
                    </Box>
                  ) : (
                    <Box component="form" onSubmit={handleSubmit}>
                      <Grid container spacing={2}>
                        <Grid item size={{ xs: 12, sm: 6 }}>
                          <TextField
                            fullWidth
                            label="Full Name *"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                          />
                        </Grid>
                        <Grid item size={{ xs: 12, sm: 6 }}>
                          <TextField
                            fullWidth
                            label="Phone Number *"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                          />
                        </Grid>
                        <Grid item size={{ xs: 12 }}>
                          <TextField
                            fullWidth
                            label="Email Address *"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                          />
                        </Grid>
                        <Grid item size={{ xs: 12 }}>
                          <TextField
                            select
                            fullWidth
                            label="Service Needed"
                            name="service"
                            value={formData.service}
                            onChange={handleChange}
                       
                          >
                            <MenuItem value="">Select a service</MenuItem>
                            <MenuItem value="painting">Painting</MenuItem>
                            <MenuItem value="plumbing">Plumbing</MenuItem>
                            <MenuItem value="general">General Repairs</MenuItem>
                            <MenuItem value="electrical">
                              Basic Electrical
                            </MenuItem>
                            <MenuItem value="carpentry">Carpentry</MenuItem>
                            <MenuItem value="maintenance">
                              Home Maintenance
                            </MenuItem>
                            <MenuItem value="other">Other</MenuItem>
                          </TextField>
                        </Grid>
                        <Grid item size={{ xs: 12 }}>
                          <TextField
                            fullWidth
                            multiline
                            rows={4}
                            label="Project Details *"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                          />
                        </Grid>
                      </Grid>
                      <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        size="large"
                        sx={{
                          mt: 3,
                          bgcolor: "#FF6B00",
                          "&:hover": { bgcolor: "#e65c00" },
                          fontWeight: "bold",
                          textTransform: "none",
                        }}
                        startIcon={<Send />}
                      >
                        Send Request
                      </Button>
                    </Box>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </Grid>

          {/* Contact Information */}
          <Grid item size={{ xs: 12, md: 6 }}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Paper
                elevation={6}
                sx={{
                  bgcolor: "#e65c00",
                  color: "white",
                  textAlign: "center",
                  p: 4,
                  mb: 4,
                }}
              >
                <Phone sx={{ fontSize: 48, mb: 2 }} />
                <Typography variant="h5" fontWeight="bold">
                  Need Immediate Help?
                </Typography>
                <Typography variant="body2" sx={{ mb: 3 }}>
                  Call now for emergency repairs or urgent project needs
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: "white",
                    color: "primary.main",
                    "&:hover": { bgcolor: "grey.100" },
                  }}
                  onClick={() => window.open("tel:+15551234567")}
                >
                  Call (555) 123-4567
                </Button>
              </Paper>

              <Grid container spacing={2}>
                {contactInfo.map((item, index) => (
                  <Grid item size={{ xs: 12 }} key={item.title}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Card elevation={4}>
                        <CardContent sx={{ display: "flex", gap: 2 }}>
                          <Avatar sx={{ bgcolor: "#e65c00", color: "white" }}>
                            {item.icon}
                          </Avatar>
                          <Box>
                            <Typography fontWeight="bold">
                              {item.title}
                            </Typography>
                            <Typography color="text.primary">
                              {item.details}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              {item.description}
                            </Typography>
                          </Box>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>

              <Card
                elevation={0}
                sx={{
                  border: "2px solid",
                  borderColor: "success.light",
                  mt: 4,
                }}
              >
                <CardContent sx={{ textAlign: "center" }}>
                  <CheckCircle
                    sx={{ fontSize: 40, color: "success.main", mb: 2 }}
                  />
                  <Typography fontWeight="bold" color="success.main">
                    Service Guarantee
                  </Typography>
                  <Typography variant="body2" color="success.dark">
                    All work comes with a satisfaction guarantee. If you're not
                    happy, I'll make it right at no additional cost.
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
