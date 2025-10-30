'use client';

import { Box, Container, Stack, Typography } from '@mui/material';
import { TimelineItem } from './TimelineItem';
import BusinessIcon from '@mui/icons-material/Business';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

const timelineData = [
  {
    year: '2017–2020',
    title: 'Rural fintech lending',
    points: [
      'Affordable credit for farmers & rural businesses',
      'Financed income-generating assets via local vendor networks',
      'Built tech-enabled distribution for underserved regions',
    ],
    icon: <BusinessIcon sx={{ color: '#ffffff', fontSize: 32 }} />,
    alignment: 'left' as const,
  },
  {
    year: '2020–2022',
    title: 'Scale & licensing',
    points: [
      'Several hundred-thousand farmers and 100k+ rural businesses served',
      'Presence across 5,000+ PIN codes in 11+ states',
      'Secured NBFC license; enabled direct origination & co-lending',
    ],
    icon: <TrendingUpIcon sx={{ color: '#ffffff', fontSize: 32 }} />,
    alignment: 'right' as const,
  },
  {
    year: '2022–Today',
    title: 'CredCheck platform',
    points: [
      'Productised our internal underwriting engine',
      'Expanded to MSMEs, corporates & lenders',
      'Launched tools that standardise CAM/CKM, portfolio monitoring, and channel-finance readiness',
    ],
    icon: <RocketLaunchIcon sx={{ color: '#ffffff', fontSize: 32 }} />,
    alignment: 'left' as const,
  },
];

export const JourneyTimeline = () => {
  return (
    <Box sx={{ bgcolor: '#ffffff', py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <Stack spacing={2} alignItems="center" textAlign="center" sx={{ mb: 8 }}>
          <Typography
            sx={{
              fontFamily: 'Satoshi',
              fontSize: { xs: '28px', md: '32px' },
              fontWeight: 700,
              letterSpacing: '-1.2px',
              color: '#1e1e1e',
            }}
          >
            Our Journey
          </Typography>
          <Typography
            sx={{
              fontFamily: 'Satoshi',
              fontSize: '20px',
              fontWeight: 500,
              lineHeight: '26px',
              color: '#636363',
            }}
          >
            From lending roots to full-stack credit tools
          </Typography>
        </Stack>

        <Box sx={{ position: 'relative', maxWidth: '900px', mx: 'auto' }}>
          <Box
            sx={{
              position: 'absolute',
              left: '50%',
              top: 0,
              bottom: 0,
              width: '2px',
              bgcolor: '#e5e7eb',
              transform: 'translateX(-50%)',
              zIndex: 0,
            }}
          />
          <Stack spacing={6} sx={{ position: 'relative', zIndex: 1 }}>
            {timelineData.map((item, index) => (
              <TimelineItem
                key={index}
                year={item.year}
                title={item.title}
                points={item.points}
                icon={item.icon}
                alignment={item.alignment}
              />
            ))}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};