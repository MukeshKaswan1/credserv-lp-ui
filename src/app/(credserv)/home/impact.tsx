'use client';

import { Box, Typography, Card, CardContent } from '@mui/material';
import MovingOutlinedIcon from '@mui/icons-material/MovingOutlined';
import ScheduleOutlinedIcon from '@mui/icons-material/ScheduleOutlined';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import BarChartRoundedIcon from '@mui/icons-material/BarChartRounded';

const metrics = [
  {
    icon: <ScheduleOutlinedIcon sx={{ color: '#0891B2', fontSize: 40 }} />,
    value: '65%',
    title: 'Time Saved',
    description:
      'Automate manual AR processes and reduce repetitive work for finance teams.',
    color: '#0891B2',
  },
  {
    icon: <MovingOutlinedIcon sx={{ color: '#3B82F6', fontSize: 40 }} />,
    value: '30%',
    title: 'DSO reduction',
    description:
      'Accelerate collections and improve cash conversion cycles with invoice digitization and approval workflows.',
    color: '#3B82F6',
  },
  {
    icon: <ScheduleOutlinedIcon sx={{ color: '#10B981', fontSize: 40 }} />,
    value: '≤10 min',
    title: 'Faster Partner Onboarding',
    description:
      'Digital e-agreements, KYC, and mandate activation completed in under 10 minutes.',
    color: '#1A8E46',
  },
  {
    icon: <CreditCardOutlinedIcon sx={{ color: '#8B5CF6', fontSize: 40 }} />,
    value: '≤24 hrs',
    title: 'Invoice-to-Funding Speed',
    description:
      'Channel partners access invoice-backed loans within 24-48 hours of approval.',
    color: '#8B5CF6',
  },
  {
    icon: <BarChartRoundedIcon sx={{ color: '#F59E0B', fontSize: 40 }} />,
    value: '95%',
    title: 'Reconciliation Accuracy',
    description:
      'Minimize manual errors and invoice disputes with auto-reconciliation via VBA/Razorpay.',
    color: '#F59E0B',
  },
  {
    icon: <MovingOutlinedIcon sx={{ color: '#EF4444', fontSize: 40 }} />,
    value: '100%',
    title: 'Compliance Ready',
    description:
      'Every process is fully aligned with Indian regulatory standards for NBFCs and banks.',
    color: '#EF4444',
  },
];

export default function ImpactSection() {
  return (
    <Box py={10} textAlign="center" bgcolor="white" overflow="hidden">
      <Typography variant="h5" fontWeight={700} mb={1}>
        Real Impact in AR to Cash Journey
      </Typography>
      <Typography variant="body1" color="text.secondary" mb={8}>
        Our platform delivers tangible results for your business with proven metrics that demonstrate real value.
      </Typography>

      <Box
        sx={{
          display: 'flex',
          overflow: 'hidden',
          width: '100%',
          position: 'relative',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            gap: 3,
            animation: 'scrollLeft 25s linear infinite',
            '@keyframes scrollLeft': {
              from: { transform: 'translateX(0)' },
              to: { transform: 'translateX(-50%)' },
            },
          }}
        >
          {[...metrics, ...metrics].map((metric, index) => (
            <Card
              key={index}
              sx={{
                position: 'relative',
                flex: '0 0 320px',
                borderRadius: 3,
                border: '1px solid #E5E7EB',
                boxShadow: 'none',
                p: 4,
                textAlign: 'left',
                backgroundColor: 'white',
                overflow: 'hidden',
              }}
            >
              <CardContent>
                <Box mb={4}>{metric.icon}</Box>
                <Typography variant="h5" fontWeight={700}>
                  {metric.value}
                </Typography>
                <Typography
                  variant="h6"
                  fontWeight={700}
                  color={metric.color}
                  mb={2}
                >
                  {metric.title}
                </Typography>
                <Typography
                  variant="body2"
                  fontWeight={500}
                  color="text.secondary"
                >
                  {metric.description}
                </Typography>
              </CardContent>
              <Box
                sx={{
                  position: 'absolute',
                  bottom: 0,
                  right: 0,
                  width: 128,
                  height: 120,
                  borderTopLeftRadius: 100,
                  backgroundColor: `${metric.color}33`,
                }}
              />
            </Card>
          ))}
        </Box>
      </Box>
    </Box>
  );
}