"use client";
import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import { Wrench } from "lucide-react";

export default function ButtonAppBar() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuItems = [
    { label: "Home", href: "home" },
    { label: "Services", href: "services" },
    { label: "About", href: "about" },
    { label: "Gallery", href: "gallery" },
    { label: "Reviews", href: "testimonials" },
    { label: "Contact", href: "contact" },
  ];

  // Smooth scroll handler
  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    handleMenuClose();
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          background: "linear-gradient(to bottom right, #f8fafc, #ffffff)",
          px: 0.5,
          // borderBottom: "1px solid #e5e7eb",
        }}
      >
        <Toolbar>
          {/* Logo / Brand */}
          <Box sx={{ flexGrow: 1, px: 5 }}>
            <Box display={"flex"} alignItems="center" gap={1}>
              <Box
                sx={{
                  width: 30,
                  height: 28,
                  borderRadius: 2,
                  bgcolor: "#FF6B00",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Wrench size={20} color="white" />
              </Box>
              <Typography
                variant="h6"
                sx={{
                  textDecoration: "none",
                  color: "#1f2937",
                  fontWeight: "bold",
                  cursor: "pointer",
                  ":hover": { color: "#f97316" },
                }}
                onClick={() => handleScroll("home")}
              >
                General Rooter XP-LLC
              </Typography>
            </Box>
          </Box>

          {/* Desktop Menu */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1 }}>
            {menuItems.map((item) => (
              <Button
                key={item.label}
                onClick={() => handleScroll(item.href)}
                sx={{
                  textTransform: "none",
                  color: "#4b5563",
                  fontWeight: "600",
                  transition: "all 0.3s",
                  "&:hover": { color: "#f97316"},
                  width: 80,
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>

          {/* Mobile Menu */}
          <Box sx={{ display: { xs: "block", md: "none" } }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              onClick={handleMenuOpen}
              sx={{ color: "#111827" }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              anchorOrigin={{ vertical: "top", horizontal: "right" }}
              transformOrigin={{ vertical: "top", horizontal: "right" }}
            >
              {menuItems.map((item) => (
                <MenuItem
                  key={item.label}
                  onClick={() => handleScroll(item.href)}
                  sx={{
                    color: "#1f2937",
                    "&:hover": { color: "#f97316", fontWeight: 600 },
                  }}
                >
                  {item.label}
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
      {/* Spacer so content isn’t hidden behind fixed navbar */}
      <Toolbar />
    </Box>
  );
}
