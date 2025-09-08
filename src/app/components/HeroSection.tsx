"use client";

import React from "react";
import { motion } from "framer-motion";
import { Phone, CheckCircle, Clock, Shield } from "lucide-react";
import {
  Box,
  Grid,
  Typography,
  Button,
  Card,
  CardContent,
  Stack,
} from "@mui/material";
import { TypeAnimation } from "react-type-animation";
import { Call } from "@mui/icons-material";

export default function HeroSection() {
  return (
    <Box
      component="section"
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(to bottom right, #f8fafc, #ffffff)",
        position: "relative",
        pt: { xs: 2, md: 10 },
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
        }}
      >
        <Grid container spacing={8} alignItems="center">
          <Grid size={{ xs: 12, md: 6 }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Stack spacing={2} textAlign={{ xs: "center", md: "left" }}>
                {/* <Chip
                  label="⭐ Licensed & Insured Professional"
                  sx={{
                    backgroundColor: "#FFF4E5",
                    color: "#FF6B00",
                    border: "1px solid #FFD8A8",
                    fontWeight: "bold",

                    alignSelf: { xs: "center", md: "flex-start" },
                  }}
                /> */}

                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: "bold",
                    fontSize: { xs: "2rem", sm: "2.5rem", md: "3.2rem" },
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
                      fontSize: { xs: "1.1rem", sm: "1.25rem", md: "1.5rem" },
                      fontWeight: "bold",
                      color: "transparent",
                      background: "linear-gradient(90deg, #FF6B00, #FFB347)",
                      WebkitBackgroundClip: "text",
                      backgroundClip: "text",
                      letterSpacing: 0.5,
                      textShadow: "1px 1px 2px rgba(0,0,0,0.1)",
                      mt: 1,
                    }}
                  >
                    <TypeAnimation
                      sequence={["Servicing NJ and NY", 1000, "", 2000]}
                      wrapper="span"
                      cursor={true}
                      repeat={Infinity}
                    />
                  </Typography>
                </Typography>

                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ fontSize: { xs: "0.95rem", md: "1rem" } }}
                >
                  From painting and plumbing to general repairs, I deliver
                  quality craftsmanship with honest pricing. Your home deserves
                  the best care, and I&apos;m here to provide it.
                </Typography>

                {/* Features */}
                <Grid container spacing={2}>
                  {[
                    {
                      icon: <CheckCircle color="green" size={17} />,
                      title: "Residential Service",
                      subtitle: "24 x 7",
                    },
                    {
                      icon: <Clock color="blue" size={17} />,
                      title: "Commercial Service",
                      subtitle: "24 x 7",
                    },
                    {
                      icon: <Phone color="purple" size={17} />,
                      title: "Emergency Call",
                      subtitle: "Anytime",
                    },
                  ].map((f, i) => (
                    <Grid size={{ xs: 12, sm: 4 }} key={i}>
                      <Card
                        variant="outlined"
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 1,
                          p: { xs: 1.2, sm: 1.5 },
                          borderRadius: 2,
                          boxShadow: 1,
                          justifyContent: { xs: "center", sm: "flex-start" },
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
                    onClick={() => window.open("tel:860-994-9097")}
                    startIcon={<Phone />}
                    sx={{
                      backgroundColor: "#FF6B00",
                      "&:hover": { backgroundColor: "#e65c00" },
                      px: 4,
                      py: 1.5,
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
                        860-994-9097
                      </Typography>
                    </Box>
                  </Button>
                </Stack>
              </Stack>
            </motion.div>
          </Grid>

          {/* Hero Image */}
          <Grid size={{ xs: 12, md: 6 }}>
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
                <CardContent sx={{ p: { xs: 1.5, sm: 1 } }}>
                  <Box
                    component="img"
                    src="https://images.unsplash.com/photo-1618090584176-7132b9911657?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Professional handyman at work"
                    sx={{
                      width: "100%",
                      height: { xs: 240, sm: 360, md: 480, lg: 550 },
                      objectFit: "cover",
                      borderRadius: 3,
                    }}
                  />
                </CardContent>

                {/* Floating Card */}
                <Card
                  sx={{
                    position: "absolute",
                    bottom: { xs: -16, sm: -20, md: -24 },
                    left: { xs: -10, sm: -16, md: -24 },
                    p: { xs: 2, md: 3 },
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
