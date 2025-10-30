'use client';

import { Box, Typography } from '@mui/material';

export const VisionCard = () => {
  return (
    <Box borderRadius={4} bgcolor="#111827" p={{ xs: 4, md: 15 }} textAlign="center" mt={13}>
      <Typography variant="h4" fontWeight={700} color="text.contrastText" letterSpacing={1.2} mb={6}>
        Our Vision
      </Typography>

      <Typography variant="h5" color="text.contrastText" letterSpacing={1.2} mb={8}>
        We&apos;re re-imagining how India&apos;s real economy borrows, trades, and grows where
        every corporate catalyses liquidity, every distributor and retailer can access formal
        credit, and every rupee of receivable or inventory becomes a revenue-earning asset.
      </Typography>

      <Typography 
        sx={{
          fontSize: { xs: '24px', md: '28px' },
          fontWeight: 700,
          letterSpacing: '-1.2px',
          background: 'linear-gradient(90deg, #926AED 0.48%, #C6E6FF 47.6%, #22C55E 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
      >
        Digitising Receivables. Formalising Credit. Powering Growth.
      </Typography>
    </Box>
  );
};