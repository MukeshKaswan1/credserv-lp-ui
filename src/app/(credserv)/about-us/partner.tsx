'use client';

import React from 'react';
import NextImage from '@/components/next-image';
import { Box, Container, Stack, Typography } from '@mui/material';

const stats = [
  { value: '800,000 +', label: 'Farmers Served' },
  { value: '100,000 +', label: 'Rural Businesses Served' },
  { value: '5000+', label: 'PIN codes served' },
  { value: '11+', label: 'Sates served' },
];

const partners = [
  { name: 'Tygerf', logo: '/images/Tygerf-logo.svg', width: 102, height: 62 },
  { name: 'Ratnaafin', logo: '/images/ratnaafin-logo.svg', width: 136, height: 34 },
  { name: 'Aditya Birla', logo: '/images/aditya-birla-logo.svg', width: 96, height: 35 },
  { name: 'KFCPL', logo: '/images/kfcpl-logo.svg', width: 100, height: 31 },
  { name: 'SCIL Capital', logo: '/images/scil-capital-logo.svg', width: 129, height: 27 },
  { name: 'MAS', logo: '/images/mas-logo.svg', width: 93, height: 70 },
  { name: 'MIZUHO', logo: '/images/mizuho-logo.svg', width: 138, height: 47 },
];

interface PartnersProps {
  title?: string;
  description?: string;
  partners?: {
    name: string;
    logo: string;
    width: number;
    height: number;
  }[];
  stats?: {
    value: string | number;
    label: string;
  }[];
  showStats?: boolean;
}

export const Partners: React.FC<PartnersProps> = ({
  title = 'Our Banking & Lending Partners',
  description = 'From unifying data to surfacing clear risk signals without changing how your teams work.',
  showStats = true,
}) => {
  return (
    <Box py={30} bgcolor='background.paper'>
      <Container maxWidth='lg'>
        <Stack direction={{ xs: 'column', lg: 'row' }} spacing={8} alignItems='center'>
          <Box sx={{ flex: 1 }}>
            <Typography
              variant='h2'
              sx={{
                fontSize: { xs: '1.75rem', md: '2rem' },
                fontWeight: 700,
                letterSpacing: '-1.2px',
                color: '#1e1e1e',
                mb: 3,
              }}
            >
              {title}
            </Typography>
            <Typography
              variant='body1'
              sx={{
                fontSize: '1.25rem',
                fontWeight: 500,
                lineHeight: 1.3,
                color: '#636363',
                maxWidth: '400px',
              }}
            >
              {description}
            </Typography>
          </Box>

          <Box sx={{ flex: 1 }}>
            <Box
              display='flex'
              flexWrap='wrap'
              border='1px solid #E7E9ED'
              borderRadius={2}
            >
              {partners.map((partner, index) => (
                <Box
                  key={index}
                  display='flex'
                  alignItems='center'
                  justifyContent='center'
                  border='0.5px solid #E7E9ED'
                  height={140}
                  width={{ xs: '50%', sm: '25%', md: index < 4 ? '25%' : '33.33%' }}
                >
                  <NextImage
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    width={partner.width}
                    height={partner.height}
                  />
                </Box>
              ))}
            </Box>
          </Box>
        </Stack>
      </Container>
      {showStats && stats.length > 0 && (
        <Box
          maxWidth='lg'
          mx='auto'
          mt={10}
          px={2}
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: 'repeat(2, 1fr)',
              md: 'repeat(4, 1fr)',
            },
            gap: 4,
            textAlign: 'center',
          }}
        >
          {stats.map((stat, index) => (
            <Box key={index} p={5} bgcolor="#F9FAFB" border='1px solid #E5E7EB' borderRadius={1}>
              <Typography variant='h4' color="text.globalText" fontWeight='bold'>
                {stat.value}
              </Typography>
              <Typography variant='body1' fontSize='1.125rem' fontWeight={500}>
                {stat.label}
              </Typography>
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default Partners;
