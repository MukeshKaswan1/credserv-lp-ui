"use client";

import {
  Box,
  Grid,
  Typography,
  Card,
  Stack,
  Chip,
  Container,
} from "@mui/material";
import Image from "next/image";
import { Star } from "@mui/icons-material";

const sections = [
  {
    title: "AR Digitization",
    points: [
      "Turn raw data into strategic intelligence for faster, informed decision-making.",
      "Predict cash inflows and plan working capital with data-backed confidence.",
      "Track overdue, current, and upcoming receivables with complete visibility.",
      "Stay on top of every due cycle with AI-based alerts and follow-up triggers.",
    ],
    solveTitle: "What it solves",
    solveDesc:
      "Messy spreadsheets/ERP exports, duplicate buyers, missing invoice metadata, manual reminders.",
    tags: [
      { label: "100% single source of truth", color: "#1E1E1E" },
      { label: "30% DSO↓", color: "#1E1E1E" },
    ],
    image: "/images/ar-digitization.svg",
  },
  {
    title: "AR Formalization",
    points: [
      "Digital Onboarding: eKYC, eSign, eNACH, and e-Agreement signing.",
      "CredCheck Integration: Instant partner credit check via GST, CIBIL, MCA & cash flow data.",
      "Unified Invoicing & Payments: Send, approve & reconcile invoices via VBA or Razorpay.",
      "End-to-End Visibility: Track every transaction & payment in one connected platform.",
    ],
    solveTitle: "What it solves",
    solveDesc:
      "Informal buyer relationships, scattered docs, slow mandate setup.",
    tags: [
      { label: "≤10 min KYC→UMRN", color: "#1E1E1E" },
      { label: "65% ops time saved", color: "#1E1E1E" },
    ],
    image: "/images/ar-formalization.svg",
  },
  {
    title: "Onward Lending (Treasury → Yield)",
    points: [
      "Compliant Treasury Deployment: Channel partner financing through NBFC-backed structure 100% regulatory compliant.",
      "Smart Risk Protection: Jai Kisan covers delayed or defaulted dues, ensuring uninterrupted corporate cash flow.",
      "Instant Credit Access: One-tap drawdowns, automated disbursals, eNACH & virtual account-based collections.",
      "Yield Intelligence Dashboard: Track utilization, ROI, and treasury performance in real time.",
    ],
    solveTitle: "What it solves",
    solveDesc:
      "Onward Lending transforms idle capital into a compliant, yield-generating liquidity engine driving profitability, resilience, and supply chain strength.",
    tags: [
      { label: "<15 min drawdowns", color: "#1E1E1E" },
      { label: "10–14% annualized yield", color: "#1E1E1E" },
      { label: "1100% NBFC-backed compliance", color: "#1E1E1E" },
    ],
    image: "/images/ar-formalization.svg",
  },
  {
    title: "Financing Solutions (CredConnect)",
    points: [
      "Smart Buyer Scoring: Real-time credit scoring using GST, bureau, and transaction data.",
      "Instant Multi-Offers: View pre-approved loan options from multiple lenders in one click.",
      "Policy-Compliant Automation: RBI & anchor rule–based offer generation and sanctioning.",
      "End-to-End Flow: Auto-KYC, eSign, and eNACH integration for instant disbursal.",
    ],
    solveTitle: "What it solves",
    solveDesc:
      "Eliminates manual screening, reduces drop-offs, and enables faster, smarter credit access — all in one connected ecosystem.",
    tags: [
      { label: "<24 hr  TAT", color: "#1E1E1E" },
      { label: "95% Offer accuracy", color: "#1E1E1E" },
      { label: "2.5x Conversions", color: "#1E1E1E" },
      { label: "40% lower risk", color: "#1E1E1E" },
    ],
    image: "/images/ar-formalization.svg",
  },
  {
    title: "Collections & Recon",
    points: [
      "Smart eNACH Scheduler: Automated debit scheduling with intelligent retries and fallback triggers.",
      "Omnichannel Reminders: WhatsApp & SMS alerts with deep links for Pay-Now, Update Mandate, or Raise Dispute",
      "Multi-Mode Collections: Virtual Accounts & Payment Gateway integrations with instant webhook-based settlements.",
      "Auto-Match Engine: 85–95% payment auto-reconciliation; maker-checker control for exceptions and dispute handling.",
    ],
    solveTitle: "What it solves",
    solveDesc:
      "Eliminates missed debits, manual reconciliation, and exception chaos enabling faster, accurate, and compliant collections.",
    tags: [
      { label: "18–30% on-time debits", color: "#1E1E1E" },
      { label: "85–95% auto-match", color: "#1E1E1E" },
      { label: "Lower DPD", color: "#1E1E1E" },
    ],
    image: "/images/ar-formalization.svg",
  },
  {
    title: "Dashboards",
    points: [
      "AR-to-Cash Analytics: Utilised ₹, Idle ₹, ROI/XIRR, DSO, DPD buckets, ageing ladders & cashflow forecasts by anchor or buyer.",
      "Risk & Compliance View: Mandate health, bounce reasons, bureau/GST flags, and risk heatmaps by cohort.",
      "MReal-Time Tracking: Installment calendars, upcoming schedules, reminder delivery & action statuses, exceptions queue.",
    ],
    solveTitle: "What it solves",
    solveDesc:
      "Eliminates blind spots across AR→cash, fragmented MIS, and delayed risk signals empowering faster, data-backed treasury decisio",
    tags: [
      { label: "100% visibility", color: "#1E1E1E" },
      { label: "Faster cash decisions", color: "#1E1E1E" },
    ],
    image: "/images/ar-formalization.svg",
  },
];

export default function ArSections() {
  // const getTagColor = (label: string) => {
  //   if (label.match(/\d+%/)) return "#2563EB";
  //   return "#1E1E1E";
  // };

  return (
    <Box py={30} bgcolor="#FFFFFF">
      <Container maxWidth="lg">
        {sections.map((section, index) => {
          const isImageLeft = index % 2 !== 0;
          return (
            <Grid
              key={index}
              container
              spacing={6}
              alignItems="center"
              justifyContent="space-between"
              sx={{ mb: 12 }}
              maxWidth="lg"
            >
              <Grid
                size={{ xs: 12, md: 6 }}
                order={{ xs: 2, md: isImageLeft ? 2 : 1 }}
              >
                <Box textAlign="left">
                  <Typography
                    fontSize={28}
                    fontWeight={600}
                    mb={4}
                    color="text.primary"
                  >
                    {section.title}
                  </Typography>

                  <Stack spacing={3} mb={2}>
                    {section.points.map((point, i) => (
                      <Stack
                        key={i}
                        direction="row"
                        alignItems="flex-start"
                        spacing={1.5}
                      >
                        <Star sx={{ color: "#2563EB", fontSize: 18, pt: 1 }} />
                        <Typography
                          fontSize={18}
                          fontWeight={500}
                          color="text.secondary"
                        >
                          {point}
                        </Typography>
                      </Stack>
                    ))}
                  </Stack>

                  <Card
                    variant="outlined"
                    sx={{
                      border: "1px solid #2563EB",
                      borderRadius: 2,
                      p: 4,
                      // maxWidth: 500,
                      textAlign: "left",
                    }}
                  >
                    <Typography
                      fontSize={18}
                      fontWeight={700}
                      color="text.primary"
                      mb={3}
                    >
                      {section.solveTitle}
                    </Typography>
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      fontWeight={500}
                      mb={6}
                    >
                      {section.solveDesc}
                    </Typography>
                    <Stack direction="row" spacing={1.5} flexWrap="wrap">
                      {section.tags.map((tag, j) => (
                        <Chip
                          key={j}
                          label={tag.label}
                          variant="outlined"
                          sx={{
                            fontWeight: 600,
                            borderRadius: 1,
                            color: (tag.label),
                            borderColor: (tag.label),
                            fontSize: 12,
                          }}
                        />
                      ))}
                    </Stack>
                  </Card>
                </Box>
              </Grid>

              {/* IMAGE BLOCK */}
              <Grid
                size={{ xs: 12, md: 6 }}
                order={{ xs: 1, md: isImageLeft ? 1 : 2 }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Box
                    sx={{
                      borderRadius: 4,
                      overflow: "hidden",
                      maxWidth: 520,
                      width: "100%",
                    }}
                  >
                    <Image
                      src={section.image}
                      alt={section.title}
                      width={720}
                      height={700}
                      style={{ width: "100%", height: "auto" }}
                    />
                  </Box>
                </Box>
              </Grid>
            </Grid>
          );
        })}
      </Container>
    </Box>
  );
}
