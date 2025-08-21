"use client";

import React from "react";
import {
  Box,
  Grid,
  Typography,
  Chip,
  Paper,
} from "@mui/material";
import { motion } from "framer-motion";
import {
  Award,
  Shield,
  Clock,
  Users,
  CheckCircle,
} from "lucide-react";

type Stat = {
  icon: React.ElementType;
  number: string;
  label: string;
};

const stats: Stat[] = [
  { icon: Users, number: "50+", label: "Happy Customers" },
  { icon: Clock, number: "10+", label: "Years Experience" },
  { icon: Award, number: "100%", label: "Satisfaction Rate" },
  { icon: Shield, number: "24/7", label: "Emergency Service" },
];

const qualities: string[] = [
  "Licensed & Insured Professional",
  "Transparent, Upfront Pricing",
  "Quality Materials & Workmanship",
  "Clean & Respectful Service",
  "Satisfaction Guaranteed",
];

export default function AboutSection() {
  return (
    <Box component="section" id="about" sx={{ py: 10, bgcolor: "grey.50" }}>
      <Box maxWidth="lg" sx={{ mx: "auto", px: { xs: 2, sm: 4, lg: 6 } }}>
        <Grid container spacing={6} alignItems="center">
          {/* Content */}
          <Grid item size={{ xs: 12, md: 6 }}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              style={{ display: "flex", flexDirection: "column", gap: "2rem" }}
            >
              <div>
                <Chip
                  label="About Me"
                  sx={{
                    bgcolor: "rgba(249,115,22,0.1)",
                    color: "rgb(234,88,12)",
                    border: "1px solid rgba(249,115,22,0.2)",
                    mb: 2,
                  }}
                />
                <Typography variant="h4" fontWeight="bold" gutterBottom>
                  Your Reliable Home
                  <Box component="span" sx={{ color: "rgb(249,115,22)", display: "block" }}>
                    Improvement Partner
                  </Box>
                </Typography>
                <Typography variant="body1" color="text.secondary" paragraph>
                  Hi, I'm Mike Johnson, and I've been serving homeowners in our
                  community for over 10 years. What started as a passion for
                  fixing things has grown into a full-service handyman business
                  built on trust, quality, and old-fashioned customer service.
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  I believe every home deserves to be well-maintained and
                  beautiful. Whether it's a small repair or a major improvement
                  project, I approach each job with the same attention to detail
                  and commitment to excellence.
                </Typography>
              </div>

              {/* Qualities */}
              <Box>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  Why Choose HandyPro?
                </Typography>
                {qualities.map((quality, index) => (
                  <motion.div
                    key={quality}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.5rem" }}
                  >
                    <CheckCircle size={20} color="#22c55e" />
                    <Typography variant="body2" color="text.primary">
                      {quality}
                    </Typography>
                  </motion.div>
                ))}
              </Box>

              {/* Certifications */}
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
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
              </Box>
            </motion.div>
          </Grid>

          {/* Image & Stats */}
          <Grid item size={{ xs: 12, md: 6 }} >
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              style={{ display: "flex", flexDirection: "column", gap: "2rem" }}
            >
              {/* Profile Image */}
              <Box sx={{ position: "relative", display: "flex", justifyContent: "center" }}>
                <Box
                  component="img"
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face"
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
                    top: -24,
                    right: -24,
                    bgcolor: "rgb(249,115,22)",
                    color: "white",
                    borderRadius: "50%",
                    width: 80,
                    height: 80,
                    display: "flex",
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
              <Grid container spacing={2}>
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <Grid item size={{ xs: 12, sm: 6 }}  key={stat.label}>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <Paper
                          elevation={3}
                          sx={{
                            p: 3,
                            borderRadius: 3,
                            textAlign: "center",
                            border: "1px solid",
                            borderColor: "grey.100",
                          }}
                        >
                          <Icon size={32} color="#f97316" style={{ marginBottom: "0.75rem" }} />
                          <Typography variant="h6" fontWeight="bold" color="text.primary">
                            {stat.number}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {stat.label}
                          </Typography>
                        </Paper>
                      </motion.div>
                    </Grid>
                  );
                })}
              </Grid>
            </motion.div>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
