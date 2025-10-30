"use client";

import * as React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function FAQSection() {
  const [expanded, setExpanded] = React.useState<string | false>("faq-0");

  const handleChange =
    (panel: string) => (_e: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  const faqs = [
    {
      q: "What is CredCheck, and how does it work?",
      a: "CredCheck is a digital platform that provides detailed risk profiles for your partner businesses. By aggregating over 100 data points from multiple sources, it presents comprehensive report into a company's financial health, empowering you to make informed financial decisions.",
    },
    {
      q: "Who can benefit from using CredCheck?",
      a: "CredCheck is designed for lenders, financial institutions, corporates, and enterprises who need to assess the creditworthiness and risk profiles of their business partners, vendors, or potential clients.",
    },
    {
      q: "What kind of information is included in a CredCheck report?",
      a: "Our reports include financial statements, credit history, legal records, compliance status, business performance metrics, director information, and much more depending on the plan you choose.",
    },
    {
      q: "How does CredCheck ensure the accuracy of its reports?",
      a: "We source data from 600+ verified and trusted sources including government databases, financial institutions, and regulatory bodies to ensure the highest level of accuracy and reliability.",
    },
  ];

  return (
    <Box py={{ xs: 8, md: 12 }} bgcolor="background.paper">
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 6, md: 12 }} alignItems="flex-start" mb={50}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Stack spacing={8}>
              <Typography fontSize='1.125rem' fontWeight={500} color='text.globalText'>
                FREQUENTLY ASKED QUESTIONS
              </Typography>

              <Typography
                variant="h3"
                fontWeight='bold'
                lineHeight={1.2}
                color="text.primary"
              >
                Explore{" "}
                <Box component="span" color="text.globalText">
                  CredCheck.
                </Box>
                <br />
                Understand the Power
                <br />
                Behind It.
              </Typography>

              <Typography
                variant="body1"
                color="text.secondary"
                fontSize="1.125rem"
                lineHeight={1.6}
                width={380}
              >
                Understand how it works, what you get, and why it matters.
              </Typography>
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Box>
              {faqs.map((item, i) => (
                <Accordion
                  key={i}
                  expanded={expanded === `faq-${i}`}
                  onChange={handleChange(`faq-${i}`)}
                  sx={{
                    p: 3,
                    '&:before': { display: 'none' },
                    '&.Mui-expanded': { margin: 0 },
                    border: '1px solid',
                    borderColor: '#E7E9ED',
                    borderTop: i === 0 ? '5px solid #006834' : 'none',
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon className="text-white" />}
                    aria-controls={`faq-${i}-content`}
                    id={`faq-${i}-header`}
                  >
                    <Typography color="text.primary" fontSize="1.125rem" fontWeight="bold">
                      {item.q}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography color="text.secondary" fontWeight={500}>
                      {item.a}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}