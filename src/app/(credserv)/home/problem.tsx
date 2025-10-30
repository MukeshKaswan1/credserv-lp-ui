"use client";

import React from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Stack,
  Grid,
  Chip,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import NextImage from "@/components/next-image";

const ProblemSection = () => {
  const benefits = [
    {
      icon: (
        <SearchIcon
          sx={{
            fontSize: 40,
            color: "#1A8E46",
            bgcolor: "#FFFFFF",
            borderRadius: 2,
            p: 2,
          }}
        />
      ),
      title: "Limited Cash Flow Visibility",
      description:
        "Without real-time insights into receivables, CFOs struggle to forecast and plan liquidity.",
    },
    {
      icon: (
        <TrendingUpOutlinedIcon
          sx={{
            fontSize: 40,
            color: "#1A8E46",
            bgcolor: "#FFFFFF",
            borderRadius: 2,
            p: 2,
          }}
        />
      ),
      title: "Delayed Collections & High DSO",
      description:
        "Payment delays tie up working capital, increasing dependence on external financing.",
    },
    {
      icon: (
        <VerifiedUserOutlinedIcon
          sx={{
            fontSize: 40,
            color: "#1A8E46",
            bgcolor: "#FFFFFF",
            borderRadius: 2,
            p: 2,
          }}
        />
      ),
      title: "Operational Inefficiency",
      description:
        "Finance teams spend 15–20 hours per week reconciling spreadsheets instead of driving strategy.",
    },
    {
      icon: (
        <SearchIcon
          sx={{
            fontSize: 40,
            color: "#1A8E46",
            bgcolor: "#FFFFFF",
            borderRadius: 2,
            p: 2,
          }}
        />
      ),
      title: "Financial & Compliance Risk",
      description:
        "Unstructured invoices and fragmented data increase audit exposure and error rates by up to 3×.",
    },
  ];

  return (
    <Box sx={{ py: { xs: 8, md: 20 }, bgcolor: "background.paper" }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            textAlign: "center",
            mb: { xs: 8, md: 12 },
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Chip
            avatar={
              <NextImage
                src="/images/star-green.svg"
                alt="Star Icon"
                width={20}
                height={20}
              />
            }
            label="The Problem"
            sx={{
              background: "#EDF5F2",
              color: "text.globalText",
              fontWeight: 600,
              mb: 3,
              px: 3,
              py: 2,
              borderRadius: "999px",
            }}
          />

          <Typography
            variant="h4"
            fontWeight={700}
            sx={{ maxWidth: 800, mx: "auto" }}
          >
            Manual AR Processes Are Costing Businesses{" "}
            <Box component="span" color="#1A8E46">
              Time, Money & Growth
            </Box>
          </Typography>
        </Box>

        {/* Cards */}
        <Grid
          container
          spacing={4}
          justifyContent="center"
          sx={{
            maxWidth: 1020,
            mx: "auto",
          }}
        >
          {benefits.map((benefit, index) => (
            <Grid size={{ xs: 12, md: 6 }} key={index}>
              <Card
                elevation={0}
                sx={{
                  borderRadius: 2,
                  height: "100%",
                  bgcolor: "#F8F7F4",
                  transition: "0.3s",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: "0 6px 16px rgba(0,0,0,0.08)",
                  },
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Stack spacing={3}>
                    <Box
                      width={48}
                      height={48}
                      borderRadius={2}
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      sx={{ bgcolor: "#FFFFFF" }}
                    >
                      {benefit.icon}
                    </Box>

                    <Typography variant="h6" fontWeight="700">
                      {benefit.title}
                    </Typography>

                    <Typography
                      variant="body1"
                      color="text.secondary"
                      lineHeight={1.7}
                    >
                      {benefit.description}
                    </Typography>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box
          sx={{
            mt: { xs: 8, md: 12 },
            py: { xs: 5, md: 6 },
            px: { xs: 3, md: 8 },
            textAlign: "left",
            background: "linear-gradient(to right, #701C28, #B1394C)",
            borderRadius: 3,
            color: "white",
            maxWidth: 1020,
            mx: "auto",
          }}
        >
          <Chip
            avatar={
              <NextImage
                src="/images/star-green.svg"
                alt="Star Icon"
                width={20}
                height={20}
              />
            }
            label="The Bottom Line"
            sx={{
              background: "#FFFFFF",
              color: "#1E1E1E",
              fontWeight: 600,
              mb: 3,
              px: 3,
              py: 2,
              borderRadius: "999px",
            }}
          />

          <Typography
            variant="h5"
            color="text.contrastText"
            fontWeight={700}
            mx="auto"
          >
            High DSO, cash stuck in AR, unpredictable liquidity, and endless
            hours lost chasing invoices.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default ProblemSection;
