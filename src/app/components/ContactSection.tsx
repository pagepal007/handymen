"use client";

import React  from "react";
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  Avatar,
  Chip,
  Paper,
} from "@mui/material";
import {
  Phone,
  Mail,
  AccessTime as Clock,
  CheckCircle,
  LocationCity,
} from "@mui/icons-material";
import { motion } from "framer-motion";


const contactInfo = [
  {
    icon: <Phone color="primary" />,
    title: "Call or Text",
    details: "860-994-9097",
    description: "Available 7 days a week for emergencies",
  },
  {
    icon: <Mail color="primary" />,
    title: "Email",
    details: "generalrooterxp@gmail.com",
    description: "Response within 24 hours",
  },
  {
    icon: <Clock color="primary" />,
    title: "Business Hours",
    details: "Mon-Sat: 8AM-8PM",
    description: "Emergency service available 24/7",
  },
  {
    icon: <LocationCity color="primary" />,
    title: "Location",
    details: "Belleville, NJ",
    description: "Servicing 30 miles around",
  },
];

export default function ContactSection() {

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
            sx={{ fontSize: { xs: "1.75rem", sm: "2rem"},color: "text.primary" }}
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


          {/* Contact Info */}
          <Grid size={{ xs: 12, md: 12 }}>
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
                  onClick={() => window.open("tel:860-994-9097")}
                >
                  Call (860)-994-9097
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
                    All work comes with a satisfaction guarantee. If you&apos;re not
                    happy, I&apos;ll make it right at no additional cost.
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
