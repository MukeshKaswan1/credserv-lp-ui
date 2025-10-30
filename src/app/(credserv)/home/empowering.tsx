'use client';

import React from 'react';
import { Box, Container, Typography, Card, CardContent, Stack } from '@mui/material';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';
import NextImage from '@/components/next-image';

const EmpoweringSection = () => {
  const benefits = [
    {
      icon: <TrendingUpOutlinedIcon sx={{ fontSize: 48, color: '#6366F1', bgcolor: '#DBEAFE', borderRadius: 2, p: 2 }} />,
      title: 'xxx',
      description: 'Active Businesses',
      stat: '15+ data sources integrated',
    },
    {
      icon: <PeopleOutlinedIcon sx={{ fontSize: 48, color: '#10B981', bgcolor: '#DCFCE7', borderRadius: 2, p: 2 }} />,
      title: 'xxx',
      description: 'Channel Partner Onboarded',
      stat: '70% faster credit decisions',
    },
    {
      icon: (
        <NextImage
          src='/images/bar-graph-icon.svg'
          alt='bar Icon'
          width={48}
          height={48}
        />
      ),
      title: 'xxx',
      description: 'Invoices Processed',
      stat: 'Reduces defaults by 35%',
    },
    {
      icon: <AccessTimeIcon sx={{ fontSize: 48, color: '#F59E0B', bgcolor: '#FFEDD5', borderRadius: 2, p: 2 }} />,
      title: '24-48 hrs',
      description: 'Reduction in DSO days',
      stat: 'Early warning system',
    },
  ];

  return (
    <Box sx={{ py: { xs: 8, md: 30 }, bgcolor: 'background.paper' }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 20 }}>
          <Typography
            variant="h4"
            fontWeight='bold'
            mb={3}
          >
            Empowering India’s Enterprises With Intelligent Receivables Management
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            fontWeight={500}
          >
            Trusted by leading enterprises to automate AR, optimize working capital, and drive smarter liquidity decisions.
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              lg: 'repeat(4, 1fr)',
            },
            gap: 3,
          }}
        >
          {benefits.map((benefit, index) => (
            <Card key={index} sx={{ border: '1px solid #EBEBEB' }}>
              <CardContent sx={{ width: 292, borderRadius: 3 }}>
                <Stack spacing={2}>
                  <Box display='flex' alignItems='center' justifyContent='flex-start' gap={2}>
                    {benefit.icon}
                    <Typography fontSize='1.63rem' fontWeight={700} color='#0F172A'>
                      {benefit.title}
                    </Typography>
                  </Box>
                  
                  
                  <Typography
                    variant="h6"
                    fontWeight={500}
                    lineHeight={2}
                    letterSpacing={-0.5}
                  >
                    {benefit.description}
                  </Typography>
                </Stack>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default EmpoweringSection;