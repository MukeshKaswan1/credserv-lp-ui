'use client';

import { Box, Container, Stack, Typography } from '@mui/material';

const features = [
  {
    emoji: '💡',
    title: 'Deep Lending Expertise',
    description:
      'Backed by years of experience underwriting rural & MSME credit.',
  },
  {
    emoji: '🌐',
    title: 'End-to-End Digitization',
    description: 'From invoice creation to financing all in one platform.',
  },
  {
    emoji: '🔒',
    title: ' Compliant & Secure',
    description:
      'RBI Digital Lending compliant workflows, consent-based data, and audit trails.',
  },
  {
    emoji: '💰',
    title: 'Liquidity on Demand',
    description: 'Seamless access to working capital via verified lender partners.',
  },
];

export const WhyItWorksSection = () => {
  return (
    <Box bgcolor="#FAF8FD" py={{ xs: 8, md: 12 }}>
      <Container maxWidth='lg'>
        <Stack spacing={2} alignItems='center' textAlign='center' mb={22}>
          <Typography variant='h4' fontWeight={700}>
            Why It Works
          </Typography>
          <Typography variant='h6' fontWeight={500} color='text.secondary'>
            Deep lending experience meets digital infrastructure
          </Typography>
        </Stack>

        <Stack
          direction='row'
          flexWrap='wrap'
          justifyContent='space-between'
          rowGap={4}
          columnGap={4}
          mb={40}
        >
          {features.map((feature, index) => (
            <Box
              key={index}
              sx={{
                flex: { xs: '1 1 100%', md: '1 1 calc(50% - 16px)' }, // 2 per row on md+
                bgcolor: '#FFFFFF',
                borderRadius: 2,
                px: 10,
                py: 8,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <Stack direction='row' spacing={2} alignItems='center' mb={4}>
                <Typography sx={{ fontSize: '24px' }}>{feature.emoji}</Typography>
                <Typography variant='h5' fontWeight={700} letterSpacing={-1.2}>
                  {feature.title}
                </Typography>
              </Stack>

              <Typography variant='h6' color='text.secondary' letterSpacing={-1.7}>
                {feature.description}
              </Typography>
            </Box>
          ))}
        </Stack>
      </Container>
    </Box>
  );
};
