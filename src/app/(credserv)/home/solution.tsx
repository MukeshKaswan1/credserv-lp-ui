"use client";

import React, { useState } from "react";
import { Box, Typography, Grid, Paper, Chip } from "@mui/material";
import NextImage from "@/components/next-image";
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';

interface StakeholderData {
  icon: React.ReactNode;
  iconBgColor: string;
  iconColor: string;
  title: string;
  description: string;
  features: string[];
}

const stakeholderData: Record<"corporates" | "lenders", StakeholderData> = {
  corporates: {
    icon: <TrendingUpOutlinedIcon sx={{ fontSize: 76, color: '#1A8E46', bgcolor: '#F0FFF2', borderRadius: 2, p: 2 }} />,
    iconBgColor: "#E6F4EA",
    iconColor: "#4CAF50",
    title: "Formalize AR & Optimize Cash Flow",
    description:
      "Digitize invoicing, onboard partners, and gain full visibility for smarter working capital management.",
    features: [
      "Digital invoice approval & tracking",
      "Partner onboarding with e-agreements",
      "Advanced credit assessment (GST, MCA, CIBIL, Bureau)",
      "Comprehensive AR dashboard & analytics",
      "Auto-reconciliation & repayment tracking",
      "Invoice-backed financing via 20+ Lenders",
    ],
  },
  lenders: {
    icon: <NextImage
            src='/images/bar-graph-icon.svg'
            alt='bar Icon'
            width={76}
            height={76}
          />,
    iconBgColor: "#E3F2FD",
    iconColor: "#2196F3",
    title: "Verified Borrowers & Risk-Controlled Lending",
    description:
      "Access pre-onboarded channel partners, lend on verified invoices, and monitor portfolio performance in real time.",
    features: [
      "Pre-verified borrowers with e-agreements",
      "Invoice-backed lending opportunities",
      "Advanced credit reports (GST, MCA,CIBIL, Bureau)",
      "Real-time repayment tracking & portfolio monitoring",
      "Compliance & audit-ready workflows",
      "Scale MSME lending with minimal manual effort",
    ],
  },
};

const FeatureItem: React.FC<{ text: string }> = ({ text }) => (
  <Box display="flex" alignItems="flex-start" bgcolor='#F8F7F4' borderRadius={1.2} p={5} gap={2}>
    <NextImage src="/images/star-green.svg" alt="star" width={20} height={20} />
    <Typography variant="body2" ml={1} fontWeight={600}>
      {text}
    </Typography>
  </Box>
);

const SolutionSection: React.FC = () => {
  const [activeStakeholder, setActiveStakeholder] = useState<
    "corporates" | "lenders"
  >("corporates");
  const currentData = stakeholderData[activeStakeholder];

  const half = Math.ceil(currentData.features.length / 2);
  const featuresCol1 = currentData.features.slice(0, half);
  const featuresCol2 = currentData.features.slice(half);

  return (
    <Box py={{ xs: 8, md: 16 }} px={{ xs: 4, md: 0 }} maxWidth="7xl" mx="auto" bgcolor="#FFFFFF">
      <Box textAlign="center" mb={{ xs: 8, md: 12 }}>
        <Chip
          avatar={
            <NextImage
              src="/images/star-green.svg"
              alt="Star Icon"
              width={20}
              height={20}
            />
          }
          label="The Solution"
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
        <Typography variant="h4" fontWeight="bold" mb={2}>
          Solutions for Every Stakeholder
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Tailored solutions for corporates, channel partners, and lenders
        </Typography>
      </Box>

      <Box
        display="flex"
        justifyContent="center"
        mb={10}
        maxWidth={400}
        mx="auto"
        borderRadius={2}
        bgcolor="#F8F7F4"
        px={4}
        py={2}
      >
        {(["corporates", "lenders"] as const).map((stakeholder) => {
          const isActive = activeStakeholder === stakeholder;
          return (
            <Box
              key={stakeholder}
              flex={1}
              textAlign="center"
              py={1.5}
              borderRadius={2}
              bgcolor={isActive ? "#FFFFFF" : "#F8F7F4"}
              boxShadow={isActive ? 1 : 0}
              onClick={() => setActiveStakeholder(stakeholder)}
              sx={{ cursor: "pointer" }}
            >
              <Typography
                fontWeight={600}
                color={
                  isActive
                    ? stakeholder === "corporates"
                      ? "success.main"
                      : "primary.main"
                    : "text.secondary"
                }
              >
                {stakeholder.charAt(0).toUpperCase() + stakeholder.slice(1)}
              </Typography>
            </Box>
          );
        })}
      </Box>

      <Paper
        elevation={0}
        sx={{
          p: { xs: 6, md: 12 },
          borderRadius: 4,
          border: "1px solid",
          borderColor: "grey.100",
          maxWidth: 1000,
          mx: "auto",
        }}
      >
        <Box display="flex" justifyContent="center" mb={6}>
          <Box>
            {currentData.icon}
          </Box>
        </Box>

        <Box textAlign="center" mb={8}>
          <Typography fontSize={28} color="text.primary" fontWeight="bold" mb={2}>
            {currentData.title}
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            mx="auto"
            maxWidth={600}
          >
            {currentData.description}
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {featuresCol1.map((text, idx) => (
            <Grid size={{ xs: 12, md: 6 }} key={`col1-${idx}`}>
              <FeatureItem text={text} />
            </Grid>
          ))}
          {featuresCol2.map((text, idx) => (
            <Grid size={{ xs: 12, md: 6 }} key={`col2-${idx}`}>
              <FeatureItem text={text} />
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Box>
  );
};

export default SolutionSection;