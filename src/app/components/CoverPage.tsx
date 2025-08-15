"use client";
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import Container from "@mui/material/Container";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

export default function CoverPage() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: { xs: "100vh", sm: "80vh" },
        width: "100%", // Full width
        backgroundImage: "url('/cover.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        padding: { xs: "20px", sm: "40px" },
        marginTop: 0,
        position: "relative",
      }}
    >
      {/* Optional overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        //   bgcolor: "rgba(0,0,0,0.4)", // dark overlay
        }}
      />
    </Box>
  );
}
