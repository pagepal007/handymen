"use client";

import React from "react";
import { motion } from "framer-motion";
import { Phone, Star, CheckCircle, Clock, Shield } from "lucide-react";
import {
  Box,
  Grid,
  Typography,
  Button,
  Card,
  CardContent,
  Chip,
  Stack,
} from "@mui/material";


export default function HeroSection(): JSX.Element {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Box
      component="section"
      id="home"
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(to bottom right, #f8fafc, #ffffff)",
        position: "relative",
        pt: 10
      }}
    >
      {/* Background Pattern */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          opacity: 0.02,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <Box
        sx={{
          position: "relative",
          maxWidth: "1200px",
          mx: "auto",
          px: { xs: 2, sm: 3, lg: 4 },
          pb: 10,
        }}
      >
        <Grid container spacing={8} alignItems="center">
          {/* Content */}
          <Grid item size={{ xs: 12, md: 6 }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Stack spacing={2}>
                <Chip
                  label="⭐ Licensed & Insured Professional"
                  sx={{
                    backgroundColor: "#FFF4E5", // light orange
                    color: "#FF6B00", // strong orange
                    border: "1px solid #FFD8A8",
                    fontWeight: "bold",
                    px: 2,
                    py: 0.5,
                    width: "fit-content",
                  }}
                />

                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: "bold",
                    fontSize: { xs: "2.5rem", md: "3.2rem" },
                    lineHeight: 1,
                    color: "text.primary",
                  }}
                >
                  Your Trusted{" "}
                  <Box
                    component="span"
                    sx={{ color: "#FF6B00", display: "block" }}
                  >
                    Handyman
                  </Box>
                  <Typography
                    component="span"
                    sx={{
                      display: "block",
                      fontSize: { xs: "1.25rem", md: "1.5rem" },
                      fontWeight: "normal",
                      color: "text.primary",
                      mt: 1,
                    }}
                  >
                    For Every Home Project
                  </Typography>
                </Typography>

                <Typography variant="body1" color="text.secondary">
                  From painting and plumbing to general repairs, I deliver
                  quality craftsmanship with honest pricing. Your home deserves
                  the best care, and I'm here to provide it.
                </Typography>

                {/* Features */}
                <Grid container spacing={2}>
                  {[
                    {
                      icon: <CheckCircle color="green" size={15} />,
                      title: "Quality Work",
                      subtitle: "Every time",
                    },
                    {
                      icon: <Clock color="blue" size={15} />,
                      title: "On Time",
                      subtitle: "Always",
                    },
                    {
                      icon: <Shield color="purple" size={15} />,
                      title: "Guaranteed",
                      subtitle: "100%",
                    },
                  ].map((f, i) => (
                    <Grid size={{ xs: 12, sm: 4 }} key={i}>
                      <Card
                        variant="outlined"
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 1,
                          p: 1.5,
                          borderRadius: 2,
                          boxShadow: 1,
                        }}
                      >
                        {f.icon}
                        <Box>
                          <Typography fontWeight="bold">{f.title}</Typography>
                          <Typography variant="caption" color="text.secondary">
                            {f.subtitle}
                          </Typography>
                        </Box>
                      </Card>
                    </Grid>
                  ))}
                </Grid>

                {/* CTA Buttons */}
                <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                  <Button
                    variant="contained"
                    size="large"
                    onClick={() => window.open("tel:+1234567890")}
                    startIcon={<Phone />}
                    sx={{
                      backgroundColor: "#FF6B00",
                      "&:hover": { backgroundColor: "#e65c00" },
                      paddingLeft: "32px",
                      paddingRight: "32px",
                      paddingTop: "12px",
                      paddingBottom: "12px",
                      fontSize: "1rem",
                      fontWeight: "bold",
                      boxShadow: 3,
                      borderRadius: "16px",
                      lineHeight: 1.4,
                      textAlign: "left",
                      textTransform: "none",
                    }}
                  >
                    <Box
                      display="flex"
                      flexDirection="column"
                      alignItems="center"
                    >
                      <Typography variant="body1" fontWeight="bold">
                        Get Free Quote – Call Now
                      </Typography>
                      <Typography variant="body1" fontWeight="bold">
                        +1234567890
                      </Typography>
                    </Box>
                  </Button>
                </Stack>

                {/* Social Proof */}
                <Stack direction="row" spacing={3} alignItems="center" pt={2}>
                  <Stack direction="row" spacing={0.5}>
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star
                        key={s}
                        size={20}
                        style={{ fill: "#facc15", color: "#facc15" }}
                      />
                    ))}
                  </Stack>
                  <Box>
                    <Typography fontWeight="bold" color="text.primary">
                      4.9/5 Rating
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      50+ Happy Customers
                    </Typography>
                  </Box>
                </Stack>
              </Stack>
            </motion.div>
          </Grid>

          {/* Hero Image */}
          <Grid item size={{ xs: 12, md: 6 }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card
                sx={{
                  position: "relative",
                  borderRadius: 4,
                  boxShadow: 6,
                  overflow: "visible",
                }}
              >
                <CardContent sx={{ p: 2 }}>
                  <Box
                    component="img"
                    src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&h=400&fit=crop&crop=center"
                    alt="Professional handyman at work"
                    sx={{
                      width: "100%",
                      height: 400,
                      objectFit: "cover",
                      borderRadius: 3,
                    }}
                  />
                </CardContent>

                {/* Floating Card */}
                <Card
                  sx={{
                    position: "absolute",
                    bottom: -24,
                    left: -24,
                    p: 3,
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    borderRadius: 2,
                    boxShadow: 4,
                  }}
                >
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      borderRadius: "50%",
                      bgcolor: "#FF6B00",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <CheckCircle color="white" />
                  </Box>
                  <Box>
                    <Typography fontWeight="bold" color="text.primary">
                      10+ Years
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Experience
                    </Typography>
                  </Box>
                </Card>
              </Card>
            </motion.div>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
