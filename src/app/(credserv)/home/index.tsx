'use client';

import React from 'react';
import NextImage from '@/components/next-image';
import { Box, Button, Chip, Container, Stack, Typography } from '@mui/material';
import NextLink from '../../../components/next-link';
import { ROUTES } from '@/core/routes';

const HeroSection = () => {
  const partners = [
    { name: 'GSP', logo: '/images/gsp-logo.svg' },
    { name: 'KFCPL', logo: '/images/kfcpl-logo.svg' },
    { name: 'Dharma', logo: '/images/dharmaj-logo.svg' },
    { name: 'SCIL Capital', logo: '/images/scil-capital-logo.svg' },
    { name: 'Rivulis', logo: '/images/rivulis-logo.svg' },
    { name: 'Aphelon', logo: '/images/aphelion-logo.svg' },
    { name: 'Aditya Birla Capital', logo: '/images/aditya-birla-logo.svg' },
    { name: 'DBS', logo: '/images/dbs-logo.svg' },
    { name: 'IIFL', logo: '/images/iifl-logo.svg' },
  ];

  return (
    <>
      <Box py={{ xs: 8, md: 12 }} position='relative' overflow='hidden'
        sx={{
          backgroundImage: 'url(/images/credserv-background.svg)'
        }}
      >
        <Container maxWidth='lg'>
          <Stack
            direction={{ xs: 'column', lg: 'row' }}
            alignItems='center'
            justifyContent='space-between'
          >
            <Box sx={{ flex: 1 }}>
              <Chip
                avatar={
                  <NextImage
                    src='/images/star-green.svg'
                    alt='Left Icon'
                    width={20}
                    height={20}
                    style={{ maxWidth: '20px', maxHeight: '20px' }}
                  />
                }
                label='Trusted by 100+  Businessess'
                sx={{
                  background: '#FFFFFF',
                  color: 'text.globalText',
                  fontWeight: 600,
                  mb: 3,
                  px: 3,
                  py: 2,
                }}
              />

              <Typography variant='h3' fontWeight={700}>
                <Box component='span' color='#006834' mr={2}>
                    Unlock the 
                </Box>
                    Revenue
                <br />
                    Trapped in your AR
              </Typography>

              <Typography variant='body1' fontSize='1.5rem' fontWeight={500} mt={5}>
                Digitise AR’s, Onboard Channel Partner&apos;s, Assess Risk and Finance daily invoices & earn yield on it.
              </Typography>

              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={4} mt={13}>
                <Button variant='contained' sx={{ width: 230, height: 68, fontSize: '1.25rem', fontWeight: 'bold', borderRadius: '8px', bgcolor: '#006834',
                  '&:hover':{
                    bgcolor: '#006834'
                  } }}>
                  <NextLink href={`${ROUTES.CREDSERV.contactUs.path}`} style={{ color: 'white', textDecoration: 'none' }}>
                  Get Started
                  </NextLink>
                </Button>
                <Button
                  variant='outlined'
                  sx={{
                    width: 250,
                    height: 68,
                    px: 4,
                    py: 1.5,
                    fontSize: '1.25rem',
                    fontWeight: 'bold',
                    borderColor: '#D1D5DB',
                    color: 'text.primary',
                    backgroundColor: 'background.paper',
                    '&:hover': {
                      borderColor: '#D1D5DB',
                      backgroundColor: 'background.paper',
                    },
                  }}
                >
                  <NextLink href={`${ROUTES.CREDSERV.contactUs.path}`}>
                    Schedule a Demo
                  </NextLink>
                </Button>
              </Stack>
            </Box>

            <Box
              sx={{
                flex: 1,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative',
              }}
            >
              <Box
                sx={{
                  borderRadius: 4,
                  overflow: 'hidden',
                }}
                display={{ xs: 'none', lg: 'flex' }}
              >
                <NextImage
                  src='/images/credserv-dashboard.svg'
                  alt='homescreen Icon'
                  width={472}
                  height={472}
                />
              </Box>
            </Box>
          </Stack>
        </Container>

        <Container maxWidth='lg'>
          <Typography
            variant='body1'
            align='center'
            sx={{
              mt: 30,
              mb: 6,
              fontWeight: 'bold',
            }}
          >
            Our Partner Institutions
          </Typography>
          <Stack
            sx={{
              overflow: 'hidden',
              whiteSpace: 'nowrap',
              position: 'relative',
            }}
          >
            <Box
              sx={{
                display: 'inline-flex',
                width: 'max-content',
                animation: 'scrollLoop 10s linear infinite',
                '@keyframes scrollLoop': {
                  '0%': { transform: 'translateX(0)' },
                  '100%': { transform: 'translateX(-50%)' },
                },
              }}
            >
              {[...partners, ...partners].map((partner, index) => (
                <Box
                  key={index}
                  sx={{
                    minWidth: { xs: '120px', md: '160px' },
                    height: '60px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'white',
                    borderRadius: 2,
                    border: '1px solid',
                    borderColor: 'grey.200',
                    p: 2,
                    mx: { xs: 2, md: 3 },
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-2px)',
                    },
                  }}
                >
                  <NextImage
                    src={partner.logo}
                    alt={partner.name}
                    width={96}
                    height={40}
                  />
                </Box>
              ))}
            </Box>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default HeroSection;