'use client';

import { Box, Container, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import { VisionCard } from './VisionCard';

export const WhoWeAreSection = () => {
  return (
    <Box sx={{ bgcolor: '#FAFBFF', py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <Stack spacing={6} alignItems="center" textAlign="center">
          <Stack direction="row" alignItems="center" spacing={2}>
            <Typography variant='h4' fontWeight={700} letterSpacing={1.2}>
              Who We Are
            </Typography>
            <Image
              src="/images/jai-kisan-logo.svg"
              alt="Jai Kisan"
              width={180}
              height={48}
              style={{ objectFit: 'contain' }}
            />
          </Stack>

          <Typography variant="h5" color="text.secondary" maxWidth={1128}>
            Jai Kisan is a financial-technology company building the infrastructure behind CredCheck—the platform that connects enterprises, their channel partners, and the formal financial ecosystem. Our mission: turn receivables and rural value-chain assets into growth-enabling credit.
          </Typography>

          <Box width="100%" maxWidth={1228}>
            <VisionCard />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};