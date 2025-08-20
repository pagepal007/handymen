import React from 'react';
import { Button, Badge, Box, Typography, Grid, Paper, Avatar } from '@mui/material';
import { Phone, Star, CheckCircle, AccessTime, Shield } from '@mui/icons-material';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Box
      id="home"
      sx={{
        minHeight: '100vh',
        pt: 16,
        position: 'relative',
        background: 'linear-gradient(to bottom right, #f8fafc, #ffffff)',
      }}
    >
      {/* Background Pattern */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          opacity: 0.02,
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }}
      />

      <Box
        sx={{
          maxWidth: 1400,
          mx: 'auto',
          px: { xs: 2, sm: 6, lg: 8 },
          py: 10,
        }}
      >
        <Grid container spacing={12} alignItems="center">
          {/* Left Content */}
          <Grid item xs={12} lg={6}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Box mb={3}>
                <Badge
                  badgeContent="⭐ Licensed & Insured Professional"
                  sx={{
                    bgcolor: 'orange.100',
                    color: 'orange.600',
                    px: 2,
                    py: 0.5,
                    borderRadius: 1,
                  }}
                />
              </Box>

              <Typography variant="h3" fontWeight="bold" color="text.primary" gutterBottom>
                Your Trusted
                <Box component="span" display="block" color="orange.main">
                  Handyman
                </Box>
                <Box component="span" display="block" fontSize="1.5rem" fontWeight="400" color="text.secondary" mt={1}>
                  For Every Home Project
                </Box>
              </Typography>

              <Typography variant="body1" color="text.secondary" mb={4}>
                From painting and plumbing to general repairs, I deliver quality craftsmanship with honest pricing.
                Your home deserves the best care, and I'm here to provide it.
              </Typography>

              {/* Features */}
              <Grid container spacing={2} mb={4}>
                <Grid item xs={12} sm={4}>
                  <Paper variant="outlined" sx={{ p: 2, display: 'flex', alignItems: 'center', gap: 1.5 }}>
                    <CheckCircle color="success" />
                    <Box>
                      <Typography fontWeight="bold">Quality Work</Typography>
                      <Typography variant="caption" color="text.secondary">
                        Every time
                      </Typography>
                    </Box>
                  </Paper>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Paper variant="outlined" sx={{ p: 2, display: 'flex', alignItems: 'center', gap: 1.5 }}>
                    <AccessTime color="primary" />
                    <Box>
                      <Typography fontWeight="bold">On Time</Typography>
                      <Typography variant="caption" color="text.secondary">
                        Always
                      </Typography>
                    </Box>
                  </Paper>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Paper variant="outlined" sx={{ p: 2, display: 'flex', alignItems: 'center', gap: 1.5 }}>
                    <Shield color="secondary" />
                    <Box>
                      <Typography fontWeight="bold">Guaranteed</Typography>
                      <Typography variant="caption" color="text.secondary">
                        100%
                      </Typography>
                    </Box>
                  </Paper>
                </Grid>
              </Grid>

              {/* CTA Buttons */}
              <Box display="flex" flexDirection={{ xs: 'column', sm: 'row' }} gap={2} mb={4}>
                <Button
                  variant="contained"
                  color="warning"
                  startIcon={<Phone />}
                  size="large"
                  onClick={scrollToContact}
                >
                  Get Free Quote
                </Button>
                <Button
                  variant="outlined"
                  color="inherit"
                  size="large"
                  onClick={() => window.open('tel:+15551234567')}
                >
                  Call Now: (555) 123-4567
                </Button>
              </Box>

              {/* Social Proof */}
              <Box display="flex" alignItems="center" gap={2}>
                <Box display="flex" gap={0.5}>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} sx={{ color: 'yellow.400' }} />
                  ))}
                </Box>
                <Box>
                  <Typography fontWeight="bold">4.9/5 Rating</Typography>
                  <Typography variant="caption" color="text.secondary">
                    50+ Happy Customers
                  </Typography>
                </Box>
              </Box>
            </motion.div>
          </Grid>

          {/* Right Hero Image */}
          <Grid item xs={12} lg={6}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Box position="relative">
                <Paper sx={{ p: 2, borderRadius: 3, boxShadow: 5 }}>
                  <Box
                    component="img"
                    src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&h=400&fit=crop&crop=center"
                    alt="Professional handyman at work"
                    sx={{ width: '100%', height: 400, objectFit: 'cover', borderRadius: 2 }}
                  />

                  {/* Floating Card */}
                  <Paper
                    sx={{
                      position: 'absolute',
                      bottom: -24,
                      left: -24,
                      p: 2,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 2,
                      borderRadius: 2,
                      boxShadow: 3,
                    }}
                  >
                    <Avatar
                      sx={{
                        bgcolor: 'orange.main',
                        width: 48,
                        height: 48,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <CheckCircle sx={{ color: 'white' }} />
                    </Avatar>
                    <Box>
                      <Typography fontWeight="bold">10+ Years</Typography>
                      <Typography variant="caption" color="text.secondary">
                        Experience
                      </Typography>
                    </Box>
                  </Paper>
                </Paper>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default HeroSection;
