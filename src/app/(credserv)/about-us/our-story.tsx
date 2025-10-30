import React from 'react';
import CorporateFareRoundedIcon from '@mui/icons-material/CorporateFareRounded';
import RocketLaunchRoundedIcon from '@mui/icons-material/RocketLaunchRounded';
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import { Box, Container, Grid, Paper, Stack, Typography } from '@mui/material';
import NextImage from '@/components/next-image';

const steps = [
  {
    year: '2017–2020',
    title: 'Rural fintech lending',
    desc: [
      'Affordable credit for farmers & rural businesses',
      'Financed income-generating assets via local vendor networks',
      'Built tech-enabled distribution for underserved regions',
    ],
    icon: <CorporateFareRoundedIcon sx={{ fontSize: 42 }} />,
    align: 'left',
  },
  {
    year: '2020–2022',
    title: 'Scale & licensing',
    desc: [
      'Several hundred-thousand farmers and 100k+ rural businesses served',
      'Presence across 5,000+ PIN codes in 11+ states',
      'Secured NBFC license; enabled direct origination & co-lending',
    ],
    icon: <TrendingUpRoundedIcon sx={{ fontSize: 42 }} />,
    align: 'right',
  },
  {
    year: '2022–Today',
    title: 'CredCheck platform',
    desc: [
      'Productised our internal underwriting engine',
      'Expanded to MSMEs, corporates & lenders',
      'Launched tools that standardise CAM, portfolio monitoring, and channel-finance readiness',
    ],
    icon: <RocketLaunchRoundedIcon sx={{ fontSize: 42 }} />,
    align: 'left',
  },
  {
    year: '2025–Today',
    title: 'CredServ platform',
    desc: [
      'Productised AR management & digital underwriting engine',
      'Expanded AR digitization to MSMEs, corporates & channel partners',
      'Digitised the invoice-to-cash journey for corporates and partners',
      'Integrated automated invoice reconciliation, e-agreements, and approval workflows',
      'Enabled invoice-backed financing via Jai Kisan for channel partners',
      'Provided lenders with ready-to-finance, verified receivables for faster capital deployment',
    ],
    icon: (
      <NextImage
        src='/images/vertical-chart.svg'
        alt='bar Icon'
        width={42}
        height={42}
      />
    ),
    align: 'right',
  },
];

export const Story: React.FC = () => {
  return (
    <Box component='section' sx={{ bgcolor: 'white', py: { xs: 10, md: 18 } }}>
      <Container maxWidth='lg'>
        <Box textAlign='center' mb={18}>
          <Typography variant='h4' fontWeight='bold' mb={3}>
            Our Journey
          </Typography>
          <Typography variant='h6' color='text.secondary'>
            From lending roots to full-stack credit tools
          </Typography>
        </Box>

        <Box position='relative'>
          <Box
            position='absolute'
            top={0}
            left='50%'
            width='2px'
            height='100%'
            bgcolor='#B8A5E3'
            sx={{ transform: 'translateX(-50%)' }}
          />
          <Stack spacing={12}>
            {steps.map((step, idx) => {
              const isLeft = idx % 2 === 0;
              return (
                <Grid
                  container
                  key={idx}
                  justifyContent={isLeft ? 'flex-start' : 'flex-end'}
                  sx={{ position: 'relative' }}
                >
                  <Grid size={{ xs: 12, md: 5 }}>
                    <Paper
                      elevation={1}
                      sx={{
                        px: 10,
                        py: 8,
                        borderRadius: 3,
                        textAlign: isLeft ? 'right' : 'left',
                      }}
                    >
                      <Typography
                        variant='subtitle2'
                        fontWeight={600}
                        color='#5A27CF'
                        bgcolor='#F3EBFF'
                        px={4}
                        py={1.5}
                        borderRadius={15}
                        display='inline-block'
                        mb={2}
                      >
                        {step.year}
                      </Typography>

                      <Typography
                        variant='h6'
                        width={348}
                        ml={isLeft ? 'auto' : 0}
                        fontWeight='bold'
                        mt={5}
                      >
                        {step.title}
                      </Typography>
                      <Typography>
                        <Box mt={5}>
                          {step.desc.map((line, i) => (
                            <Typography
                              key={i}
                              color='text.secondary'
                              sx={{
                                mb: 1,
                                fontSize: '1rem',
                                lineHeight: 1.6,
                              }}
                            >
                              • {line}
                            </Typography>
                          ))}
                        </Box>
                      </Typography>
                    </Paper>
                  </Grid>

                  <Box
                    position={'absolute'}
                    display='flex'
                    alignItems='center'
                    justifyContent='center'
                    top={{ xs: '0%', md: '50%' }}
                    left={{ xs: '50%', md: '50%' }}
                    zIndex={1}
                    color='background.paper'
                    bgcolor='#22C55E'
                    borderRadius={2}
                    p={3}
                    sx={{ transform: 'translate(-50%, -50%)' }}
                  >
                    {step.icon}
                  </Box>
                </Grid>
              );
            })}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};
