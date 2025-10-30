"use client";

import React from "react";
import NextImage from "../../../components/next-image";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Stack,
  Typography,
} from "@mui/material";

const features = [
  {
    icon: (
      <NextImage
        src="/images/report-logo.svg"
        alt="nut Icon"
        width={58}
        height={58}
      />
    ),
    title: "AR Digitisation",
    description:
      "Receivables are consolidated into single, validated ledger, ageing & reminders are enabled for finance readiness.",
  },
  {
    icon: (
      <NextImage
        src="/images/user-logo.svg"
        alt="nut Icon"
        width={58}
        height={58}
      />
    ),
    title: "AR Formalisation",
    description:
      "Buyers are verified and contractually established. KYC, agreements, and eNACH mandates are in place.",
  },
  {
    icon: (
      <NextImage
        src="/images/credit-card-logo.svg"
        alt="nut Icon"
        width={58}
        height={58}
      />
    ),
    title: "Onward Lending",
    description:
      "Treasury-backed credit line for your network via kFCPL: limits live quickly, invoices are funded, idle cash earns yield.",
  },
  {
    icon: (
      <NextImage
        src="/images/currency-logo.svg"
        alt="nut Icon"
        width={58}
        height={58}
      />
    ),
    title: "Financing Solutions",
    description:
      "Pre-qualified borrowers from GST networks & matched to channel-financing network (10+ banks and NBFCs).",
  },
  {
    icon: (
      <NextImage
        src="/images/calender-logo.svg"
        alt="nut Icon"
        width={58}
        height={58}
      />
    ),
    title: "Collections & Recon",
    description:
      "Scheduled debits run with intelligent retries and VA/PG fallbacks to maximise recovery.",
  },
  {
    icon: (
      <NextImage
        src="/images/dashboard-logo.svg"
        alt="nut Icon"
        width={58}
        height={58}
      />
    ),
    title: "Dashboards",
    description:
      "CFO views provide complete portfolio visibility of utilisation, idle balances, ROI%, ageing and DPD cohorts.",
  },
];

const Capability = () => {
  return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: "#F8F7F4" }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 20 }}>
          <Typography variant="h4" fontWeight="bold" mb={3}>
            What we do
          </Typography>
          <Typography variant="h6" color="text.secondary" fontWeight={500}>
            A comprehensive set of tools to transform your accounts receivable
            process and unlock working capital for your business.
          </Typography>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "repeat(2, 1fr)",
              lg: "repeat(3, 1fr)",
            },
            gap: 4,
          }}
        >
          {features.map((feature, index) => (
            <Card key={index} sx={{ height: "100%" }}>
              <CardContent sx={{ height: "100%" }}>
                <Stack
                  borderRadius={3}
                  p={3}
                  height="100%"
                  justifyContent="space-between"
                >
                  <Box>
                    <Box display="flex" alignItems="center" gap={2} pb={4}>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: 48, // optional, to keep icons aligned
                          height: 48,
                        }}
                      >
                        {feature.icon}
                      </Box>
                      <Typography
                        variant="h5"
                        fontWeight="bold"
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          lineHeight: 1.2,
                        }}
                      >
                        {feature.title}
                      </Typography>
                    </Box>

                    <Typography variant="body1" fontWeight={500} mb={4}>
                      {feature.description}
                    </Typography>
                  </Box>

                  <Box>
                    <Button
                      variant="outlined"
                      sx={{
                        border: "1px solid #E5DFDF",
                        borderRadius: 4,
                        color: "text.primary",
                        alignSelf: "flex-start",
                      }}
                    >
                      Learn More
                    </Button>
                  </Box>
                </Stack>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Capability;
