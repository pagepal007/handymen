"use client";

import React from "react";
import { Box, Grid, Typography, Chip, Paper } from "@mui/material";
import { motion } from "framer-motion";
import { Award, Clock, Users, CheckCircle } from "lucide-react";

type Stat = {
  icon: React.ElementType;
  number: string;
  label: string;
};

const stats: Stat[] = [
  { icon: Users, number: "50+", label: "Happy Customers" },
  { icon: Clock, number: "10+", label: "Years Experience" },
  { icon: Award, number: "100%", label: "Satisfaction Rate" },
];

const qualities: string[] = [
  // "Licensed & Insured Professional",
  "Transparent, Upfront Pricing",
  "Quality Materials & Workmanship",
  "Clean & Respectful Service",
  "Satisfaction Guaranteed",
];

export default function AboutSection() {
  return (
    <Box component="section" id="about" sx={{ py: 8, bgcolor: "grey.50" }}>
      <Box maxWidth="lg" sx={{ mx: "auto", px: { xs: 2, sm: 4, lg: 6 } }}>
        <Grid container spacing={6} alignItems="center">
          {/* Left Content */}
          <Grid size={{ xs: 12, md: 6 }}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              style={{ display: "flex", flexDirection: "column", gap: "2rem" }}
            >
              <Box
                sx={{
                  textAlign: { xs: "center", md: "left" }, // center text on mobile
                  display: "flex",
                  flexDirection: "column",
                  alignItems: { xs: "center", md: "flex-start" }, // center items on mobile
                  gap: 2,
                }}
              >
                <Chip
                  label="About Me"
                  sx={{
                    bgcolor: "rgba(249,115,22,0.1)",
                    color: "rgb(234,88,12)",
                    border: "1px solid rgba(249,115,22,0.2)",
                    mb: 2,
                  }}
                />
                <Typography
                  variant="h4"
                  fontWeight="bold"
                  gutterBottom
                  sx={{
                    fontSize: {
                      xs: "1.75rem",
                      md: "2.25rem",
                      color: "text.primary",
                    },
                  }}
                >
                  Your Reliable Home
                  <Box
                    component="span"
                    sx={{ color: "rgb(249,115,22)", display: "block" }}
                  >
                    Improvement Partner
                  </Box>
                </Typography>
                <Typography variant="body1" color="text.secondary" paragraph>
                  Hi, I&apos;m Samir Kandic, and I&apos;ve been serving
                  homeowners in our community for over 10 years. What started as
                  a passion for fixing things has grown into a full-service
                  handyman business built on trust, quality, and old-fashioned
                  customer service.
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  I believe every home deserves to be well-maintained and
                  beautiful. Whether it&apos;s a small repair or a major
                  improvement project, I approach each job with the same
                  attention to detail and commitment to excellence.
                </Typography>
              </Box>

              {/* Qualities */}
              <Box
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"center"}
                alignItems={{ xs: "center", md: "flex-start" }}
              >
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  sx={{ color: "text.primary" }}
                  gutterBottom
                >
                  Why Choose HandyPro?
                </Typography>
                <Box>
                  {qualities.map((quality, index) => (
                    <motion.div
                      key={quality}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.75rem",
                        marginBottom: "0.5rem",
                      }}
                    >
                      <CheckCircle size={20} color="#22c55e" />
                      <Typography variant="body2" color="text.primary">
                        {quality}
                      </Typography>
                    </motion.div>
                  ))}
                </Box>
              </Box>

              {/* Certifications */}
              {/* <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
                <Chip
                  icon={<Shield size={16} />}
                  label="Licensed Professional"
                  sx={{
                    bgcolor: "rgba(34,197,94,0.1)",
                    color: "rgb(21,128,61)",
                    border: "1px solid rgba(34,197,94,0.2)",
                    px: 2,
                  }}
                />
                <Chip
                  icon={<Award size={16} />}
                  label="Insured & Bonded"
                  sx={{
                    bgcolor: "rgba(59,130,246,0.1)",
                    color: "rgb(29,78,216)",
                    border: "1px solid rgba(59,130,246,0.2)",
                    px: 2,
                  }}
                />
              </Box> */}
            </motion.div>
          </Grid>

          {/* Right Content (Image & Stats) */}
          <Grid size={{ xs: 12, md: 6 }}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              style={{ display: "flex", flexDirection: "column", gap: "2rem" }}
            >
              {/* Profile Image */}
              <Box
                sx={{
                  position: "relative",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Box
                  component="img"
                  src="/mike-johnson.png"
                  alt="Mike Johnson - Professional Handyman"
                  sx={{
                    width: "100%",
                    maxWidth: 400,
                    borderRadius: 4,
                    boxShadow: 6,
                  }}
                />
                {/* Experience Badge */}
                <Box
                  sx={{
                    position: "absolute",
                    top: -20,
                    right: -20,
                    bgcolor: "rgb(249,115,22)",
                    color: "white",
                    borderRadius: "50%",
                    width: 70,
                    height: 70,
                    display: { xs: "none", sm: "flex" }, // hide badge on tiny screens
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: 4,
                  }}
                >
                  <Typography variant="h6" fontWeight="bold">
                    10+
                  </Typography>
                  <Typography variant="caption">Years</Typography>
                </Box>
              </Box>

              {/* Stats Grid */}
              <Box
                display="grid"
                gridTemplateColumns={{ xs: "1fr 1fr", sm: "repeat(3, 1fr)" }}
                gap={2}
                justifyContent="center"
                textAlign="center"
              >
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Paper
                        elevation={3}
                        sx={{
                          p: { xs: 2, md: 3 },
                          borderRadius: 3,
                          textAlign: "center",
                          border: "1px solid",
                          borderColor: "grey.100",
                        }}
                      >
                        <Icon
                          size={32}
                          color="#f97316"
                          style={{ marginBottom: "0.75rem" }}
                        />
                        <Typography
                          variant="h6"
                          fontWeight="bold"
                          color="text.primary"
                        >
                          {stat.number}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {stat.label}
                        </Typography>
                      </Paper>
                    </motion.div>
                  );
                })}
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
