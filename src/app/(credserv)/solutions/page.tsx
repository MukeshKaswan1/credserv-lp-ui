"use client";

import React from "react";
import {
  Box,
  Button,
  Container,
  Stack,
  Typography,
  Grid,
  Card,
  Divider,
} from "@mui/material";
import DoneRoundedIcon from "@mui/icons-material/DoneRounded";
import NextLink from "../../../components/next-link";
import { ROUTES } from "@/core/routes";
import ArSections from "./solutions";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import PaymentsIcon from "@mui/icons-material/PaymentsOutlined";
import IntegrationInstructionsOutlinedIcon from "@mui/icons-material/IntegrationInstructionsOutlined";
import LeaderboardOutlinedIcon from "@mui/icons-material/LeaderboardOutlined";

const solutions = [
  "RBI-Aware",
  "Corporate dashboards",
  "Buyer portals",
  "NPCI eNACH",
];

const features = [
  {
    icon: (
      <PaymentsIcon
        sx={{
          fontSize: 53,
          color: "#F59E0B",
          bgcolor: "#F59E0B1A",
          borderRadius: 2,
          p: 2,
        }}
      />
    ),
    title: "End-to-end AR → cash",
    desc: "Digitise AR, formalise buyers (KYC • eSign • eNACH), finance invoices, collect & auto-reconcile & earn/track yield on deployed treasury.",
  },
  {
    icon: (
      <AccountBalanceOutlinedIcon
        sx={{
          fontSize: 53,
          color: "#10B981",
          bgcolor: "#10B9811A",
          borderRadius: 2,
          p: 2,
        }}
      />
    ),
    title: "NBFC-grade governance",
    desc: "KFCPL LOR rails, policy bands, maker-checker, immutable audit, KFS/Sanction/Grievance in-flow.",
  },
  {
    icon: (
      <IntegrationInstructionsOutlinedIcon
        sx={{
          fontSize: 53,
          color: "#EF4444",
          bgcolor: "#EF44441A",
          borderRadius: 2,
          p: 2,
        }}
      />
    ),
    title: "Plug-and-play integrations",
    desc: "NPCI eNACH, VA/PG fallbacks, GSTN/MCA/CRIF, DigiLocker, SAP/Tally/QuickBooks APIs + webhooks.",
  },
  {
    icon: (
      <LeaderboardOutlinedIcon
        sx={{
          fontSize: 53,
          color: "#2563EB",
          bgcolor: "#2563EB1A",
          borderRadius: 2,
          p: 2,
        }}
      />
    ),
    title: "CFO outcomes, not just screens",
    desc: "Dashboards for utilisation, idle ₹, ROI%, Avg DPD, cohorts; exports for BI.",
  },
];

const stats = [
  { value: "₹600Cr+", label: "Total Capital Funded", color: "#2563EB" },
  { value: "5,000+", label: "Active Businesses" },
  { value: "68.5%", label: "Efficiency gain", color: "#2563EB" },
  { value: "24–48 hrs", label: "Turnaround time", color: "#2563EB" },
];

const SolutionPage = () => {
  return (
    <Box
      pt={40}
      sx={{
        background: "linear-gradient(to bottom, #FFFFFF 0%, #F3F6FF 60%, #E8EEFF 100%)",
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={6} alignItems="center" textAlign="center">
          <Typography
            variant="h3"
            fontWeight={700}
            maxWidth={600}
            lineHeight={1.3}
          >
            Solutions that turn{" "}
            <Box component="span" color="#2563EB">
              AR into cash faster
            </Box>
          </Typography>

          <Typography
            variant="body1"
            fontSize="1.25rem"
            fontWeight={500}
            maxWidth={800}
            color="text.secondary"
          >
            Modular credit suite for corporates: AR digitisation, formalisation,
            financing, collections, and CFO reporting built for India.
          </Typography>

          {/* BUTTONS */}
          <Stack direction={{ xs: "column", sm: "row" }} spacing={3}>
            <Button
              variant="contained"
              sx={{
                width: 200,
                height: 56,
                fontSize: "1rem",
                fontWeight: "bold",
                borderRadius: "8px",
                bgcolor: "#006834",
                "&:hover": { bgcolor: "#006834" },
              }}
            >
              <NextLink
                href={ROUTES.CREDSERV.contactUs.path}
                style={{ color: "white", textDecoration: "none" }}
              >
                Get Started
              </NextLink>
            </Button>

            <Button
              variant="outlined"
              sx={{
                width: 220,
                height: 56,
                fontSize: "1rem",
                fontWeight: "bold",
                borderRadius: "8px",
                borderColor: "#D1D5DB",
                color: "text.primary",
                backgroundColor: "background.paper",
                "&:hover": {
                  borderColor: "#D1D5DB",
                  backgroundColor: "background.paper",
                },
              }}
            >
              <NextLink
                href={ROUTES.CREDSERV.contactUs.path}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Schedule a Demo
              </NextLink>
            </Button>
          </Stack>

          {/* TAGS */}
          <Stack
            direction="row"
            flexWrap="wrap"
            justifyContent="center"
            gap={2}
          >
            {solutions.map((item, idx) => (
              <Stack
                key={idx}
                direction="row"
                alignItems="center"
                spacing={1}
                px={3}
                py={1.5}
                borderRadius="999px"
                border="1px solid #E5E7EB"
                bgcolor="white"
              >
                <DoneRoundedIcon sx={{ color: "success.main", fontSize: 18 }} />
                <Typography variant="body1" fontWeight={600}>
                  {item}
                </Typography>
              </Stack>
            ))}
          </Stack>
        </Stack>

        <Card
          sx={{
            mt: 10,
            p: { xs: 4, md: 8 },
            borderRadius: 4,
            boxShadow: "0px 8px 24px rgba(0,0,0,0.05)",
            bgcolor: "#FFFFFF",
          }}
        >
          <Grid container spacing={4}>
            {features.map((feature, idx) => (
              <Grid key={idx} size={{ xs: 12, md: 6 }}>
                <Stack direction="row" alignItems="flex-start" spacing={3}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {feature.icon}
                  </Box>
                  <Stack spacing={1}>
                    <Typography variant="h6" fontWeight={600}>
                      {feature.title}
                    </Typography>
                    <Typography
                      fontSize={12}
                      fontWeight={500}
                      color="text.secondary"
                    >
                      {feature.desc}
                    </Typography>
                  </Stack>
                </Stack>
              </Grid>
            ))}
          </Grid>

          <Divider sx={{ my: 6, borderColor: "#E5E7EB" }} />

          <Grid container spacing={3}>
            {stats.map((stat, idx) => (
              <Grid key={idx} size={{ xs: 6, sm: 3 }}>
                <Card
                  elevation={0}
                  sx={{
                    p: 3,
                    borderRadius: 2,
                    bgcolor: "#F9F9F9",
                    textAlign: "center",
                  }}
                >
                  <Typography fontSize={28} fontWeight={700} color="#2563EB">
                    {stat.value}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {stat.label}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Card>
      </Container>

      <ArSections />
    </Box>
  );
};

export default SolutionPage;
