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
  Alert,
} from "@mui/material";
import {
  Phone,
  Mail,
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
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.message
    ) {
      return "All required fields must be filled out.";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return "Please enter a valid email address.";
    }
    const phoneRegex = /^[0-9\-\+\s]{7,15}$/;
    if (!phoneRegex.test(formData.phone)) {
      return "Please enter a valid phone number.";
    }
    return null;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }
    setError(null);

    try {
      // Simulate API call (replace with real API endpoint)
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      setIsSubmitted(true);
      setFormData({ name: "", email: "", phone: "", service: "", message: "" });

      setTimeout(() => setIsSubmitted(false), 4000);
    } catch (err) {
      setError("Something went wrong. Please try again later.");
    }
  };

  return (
    <Box
      id="contact"
      component="section"
      sx={{ py: 8, bgcolor: "background.paper" }}
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
              fontSize: { xs: "0.7rem", sm: "0.85rem", md: "0.9rem" },
            }}
          />
          <Typography
            variant="h4"
            fontWeight="bold"
            gutterBottom
            sx={{ fontSize: { xs: "1.75rem", sm: "2rem"} }}
          >
            Ready to <span style={{ color: "rgb(249,115,22)"}}>Start Your Project?</span> 
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            maxWidth="md"
            mx="auto"
            sx={{ fontSize: { xs: "0.875rem", sm: "0.95rem", md: "1rem" } }}
          >
            Get a free estimate for your home improvement project. I respond to
            all inquiries quickly and provide transparent, upfront pricing.
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {/* Contact Form */}
          <Grid size={{ xs: 12, md: 6 }}>
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
                  titleTypographyProps={{
                    sx: {
                      fontSize: { xs: "1.2rem", sm: "1.3rem", md: "1.4rem" },
                      fontWeight: "bold",
                    },
                  }}
                  subheaderTypographyProps={{
                    sx: {
                      fontSize: { xs: "0.85rem", sm: "0.9rem", md: "1rem" },
                    },
                  }}
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
                      <Typography
                        color="text.secondary"
                        sx={{
                          fontSize: {
                            xs: "0.875rem",
                            sm: "0.95rem",
                            md: "1rem",
                          },
                        }}
                      >
                        I'll review your request and get back to you within 24
                        hours.
                      </Typography>
                    </Box>
                  ) : (
                    <Box component="form" onSubmit={handleSubmit}>
                      <Grid container spacing={2}>
                        <Grid size={{ xs: 12 }}>
                          <TextField
                            fullWidth
                            label="Full Name *"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            InputLabelProps={{
                              sx: {
                                fontSize: {
                                  xs: "0.85rem",
                                  sm: "0.9rem",
                                  md: "1rem",
                                },
                              },
                            }}
                            inputProps={{
                              sx: {
                                fontSize: {
                                  xs: "0.875rem",
                                  sm: "0.95rem",
                                  md: "1rem",
                                },
                              },
                            }}
                          />
                        </Grid>
                        <Grid size={{ xs: 12}}>
                          <TextField
                            fullWidth
                            label="Phone Number *"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            InputLabelProps={{
                              sx: {
                                fontSize: {
                                  xs: "0.85rem",
                                  sm: "0.9rem",
                                  md: "1rem",
                                },
                              },
                            }}
                            inputProps={{
                              sx: {
                                fontSize: {
                                  xs: "0.875rem",
                                  sm: "0.95rem",
                                  md: "1rem",
                                },
                              },
                            }}
                          />
                        </Grid>
                        <Grid size={{ xs: 12 }}>
                          <TextField
                            fullWidth
                            label="Email Address *"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            InputLabelProps={{
                              sx: {
                                fontSize: {
                                  xs: "0.85rem",
                                  sm: "0.9rem",
                                  md: "1rem",
                                },
                              },
                            }}
                            inputProps={{
                              sx: {
                                fontSize: {
                                  xs: "0.875rem",
                                  sm: "0.95rem",
                                  md: "1rem",
                                },
                              },
                            }}
                          />
                        </Grid>
                        <Grid size={{ xs: 12 }}>
                          <TextField
                            select
                            fullWidth
                            label="Service Needed"
                            name="service"
                            value={formData.service}
                            onChange={handleChange}
                            InputLabelProps={{
                              sx: {
                                fontSize: {
                                  xs: "0.85rem",
                                  sm: "0.9rem",
                                  md: "1rem",
                                },
                              },
                            }}
                            inputProps={{
                              sx: {
                                fontSize: {
                                  xs: "0.875rem",
                                  sm: "0.95rem",
                                  md: "1rem",
                                },
                              },
                            }}
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
                        <Grid size={{ xs: 12 }}>
                          <TextField
                            fullWidth
                            multiline
                            rows={4}
                            label="Project Details *"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            InputLabelProps={{
                              sx: {
                                fontSize: {
                                  xs: "0.85rem",
                                  sm: "0.9rem",
                                  md: "1rem",
                                },
                              },
                            }}
                            inputProps={{
                              sx: {
                                fontSize: {
                                  xs: "0.875rem",
                                  sm: "0.95rem",
                                  md: "1rem",
                                },
                              },
                            }}
                          />
                        </Grid>
                      </Grid>
                      {error && (
                        <Alert severity="error" sx={{ mt: 2 }}>
                          {error}
                        </Alert>
                      )}
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
                          fontSize: { xs: "0.9rem", sm: "0.95rem", md: "1rem" },
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

          {/* Contact Info */}
          <Grid size={{ xs: 12, md: 6 }}>
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
                <Typography
                  variant="h5"
                  fontWeight="bold"
                  sx={{
                    fontSize: { xs: "1.3rem", sm: "1.45rem", md: "1.6rem" },
                  }}
                >
                  Need Immediate Help?
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    mb: 3,
                    fontSize: { xs: "0.875rem", sm: "0.95rem", md: "1rem" },
                  }}
                >
                  Call now for emergency repairs or urgent project needs
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: "white",
                    color: "primary.main",
                    "&:hover": { bgcolor: "grey.100" },
                    fontSize: { xs: "0.875rem", sm: "0.95rem", md: "1rem" },
                  }}
                  onClick={() => window.open("tel:+15551234567")}
                >
                  Call (555) 123-4567
                </Button>
              </Paper>

              <Grid container spacing={2}>
                {contactInfo.map((item, index) => (
                  <Grid size={{ xs: 12 }} key={item.title}>
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
                            <Typography
                              fontWeight="bold"
                              sx={{
                                fontSize: {
                                  xs: "0.9rem",
                                  sm: "0.95rem",
                                  md: "1rem",
                                },
                              }}
                            >
                              {item.title}
                            </Typography>
                            <Typography
                              color="text.primary"
                              sx={{
                                fontSize: {
                                  xs: "0.875rem",
                                  sm: "0.9rem",
                                  md: "0.95rem",
                                },
                              }}
                            >
                              {item.details}
                            </Typography>
                            <Typography
                              variant="body2"
                              color="text.secondary"
                              sx={{
                                fontSize: {
                                  xs: "0.75rem",
                                  sm: "0.8rem",
                                  md: "0.85rem",
                                },
                              }}
                            >
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
                  <Typography
                    fontWeight="bold"
                    color="success.main"
                    sx={{
                      fontSize: { xs: "1rem", sm: "1.05rem", md: "1.1rem" },
                    }}
                  >
                    Service Guarantee
                  </Typography>
                  <Typography
                    variant="body2"
                    color="success.dark"
                    sx={{
                      fontSize: { xs: "0.8rem", sm: "0.85rem", md: "0.9rem" },
                    }}
                  >
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
