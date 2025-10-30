'use client';

import { Box, Card, Stack, Typography } from '@mui/material';
import type { ReactNode } from 'react';

interface TimelineItemProps {
  year: string;
  title: string;
  points: string[];
  icon: ReactNode;
  alignment?: 'left' | 'right';
}

export const TimelineItem = ({ year, title, points, icon, alignment = 'left' }: TimelineItemProps) => {
  return (
    <Stack
      direction={alignment === 'left' ? 'row' : 'row-reverse'}
      spacing={4}
      sx={{ position: 'relative', alignItems: 'flex-start' }}
    >
      <Box sx={{ flex: 1, textAlign: alignment === 'left' ? 'right' : 'left' }}>
        <Typography
          sx={{
            fontFamily: 'Satoshi',
            fontSize: '20px',
            fontWeight: 700,
            color: '#5a27cf',
            mb: 2,
          }}
        >
          {year}
        </Typography>
        <Card
          sx={{
            borderRadius: '12px',
            boxShadow: '0px 3px 12px rgba(0, 0, 0, 0.05)',
            p: 3,
            bgcolor: '#ffffff',
          }}
        >
          <Typography
            sx={{
              fontFamily: 'Satoshi',
              fontSize: '24px',
              fontWeight: 700,
              lineHeight: '28px',
              color: '#1e1e1e',
              mb: 2,
            }}
          >
            {title}
          </Typography>
          <Stack spacing={1}>
            {points.map((point, index) => (
              <Typography
                key={index}
                sx={{
                  fontFamily: 'Satoshi',
                  fontSize: '16px',
                  fontWeight: 500,
                  lineHeight: '25.6px',
                  color: '#636363',
                }}
              >
                • {point}
              </Typography>
            ))}
          </Stack>
        </Card>
      </Box>

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '64px',
          height: '64px',
          borderRadius: '50%',
          bgcolor: '#0d9c55',
          flexShrink: 0,
        }}
      >
        {icon}
      </Box>

      <Box sx={{ flex: 1 }} />
    </Stack>
  );
};