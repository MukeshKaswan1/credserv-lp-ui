'use client';

import { Box, Container, Stack, Typography } from '@mui/material';
import DoneRoundedIcon from '@mui/icons-material/DoneRounded';
import { Partners } from './partner';
import { Story } from './our-story';
import { WhoWeAreSection } from './components/WhoWeAreSection';
import { ChallengeSolutionSection } from './components/ChallengeSolutionSection';
import { WhyItWorksSection } from './components/WhyItWorksSection';

const aboutPageFeatures = [
  'Built at an NBFC',
  'India-first AR digitization',
  'Smart cash flow visibility',
  'Invoice-backed financing',
];

const AboutUsPage = () => {
  return (
    <>
      <Box bgcolor="background.paper" py={{ xs: 10, md: 20 }}>
        <Container maxWidth="lg">
          <Stack spacing={6} alignItems="center" textAlign="center">
            <Typography
              variant="h3"
              fontWeight="bold"
              sx={{ fontSize: { xs: '2rem', md: '2.5rem', lg: '3.25rem' } }}
            >
              <Box component="span" color="text.primary">
                Let&apos;s Make
              </Box>{' '}
              <Box component="span" color="text.globalText">
                Receivables
              </Box>
              Work Smarter
            </Typography>

            <Typography
              variant="h5"
              color="text.secondary"
              maxWidth={850}
              pb={3}
            >
                Built at Jai Kisan, CredServ empowers corporates, channel partners, and lenders to digitise their receivables ecosystem transforming invoices into liquidity and automating the AR-to-cash journey.
            </Typography>

            <Stack direction="row" flexWrap="wrap" justifyContent="center" gap={2}>
              {aboutPageFeatures.map((item, idx) => (
                <Stack
                  key={idx}
                  direction="row"
                  alignItems="center"
                  spacing={1}
                  px={4}
                  py={5}
                  borderRadius="999px"
                  border='1px solid #E5E7EB'
                  height={50}
                >
                  <DoneRoundedIcon sx={{ color: 'success.main', fontSize: 18 }} />
                  <Typography variant="h6">
                    {item}
                  </Typography>
                </Stack>
              ))}
            </Stack>
          </Stack>
        </Container>
      </Box>

      <WhoWeAreSection />
      <Story />
      <ChallengeSolutionSection />
      <Partners />
      <WhyItWorksSection />
    </>
  );
};

export default AboutUsPage;