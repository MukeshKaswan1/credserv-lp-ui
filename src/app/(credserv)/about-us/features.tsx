'use client';

import React from 'react';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SettingsIcon from '@mui/icons-material/Settings';
import StorageIcon from '@mui/icons-material/Storage';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import {
  Box,
  Card,
  CardContent,
  Container,
  Stack,
  Typography,
} from '@mui/material';

export const Features: React.FC = () => {
  const features = [
    {
      icon: <StorageIcon sx={{ color: 'primary.main', fontSize: 24 }} />,
      title: 'Unify Critical Data',
      description: 'GST, MCA, legal, ITR (and bureau with consent) in one report.',
    },
    {
      icon: <WarningAmberIcon sx={{ color: 'primary.main', fontSize: 24 }} />,
      title: 'Surface Risk Clearly',
      description: 'Red-flag summaries and peer context, not dump screens.',
    },
    {
      icon: <AccessTimeIcon sx={{ color: 'primary.main', fontSize: 24 }} />,
      title: 'Save Time',
      description: 'Clean PDFs, consistent file names, and concise top-sheets.',
    },
    {
      icon: <SettingsIcon sx={{ color: 'primary.main', fontSize: 24 }} />,
      title: 'Fit Your Process',
      description: 'Mapping guides and exports where available; no forced integrations.',
    },
  ];

  return (
    <Box bgcolor='white' py={{ xs: 10, md: 16 }}>
      <Container maxWidth="lg">
        <Typography variant='h4' fontWeight='bold' textAlign='center' mb={3}>
          What CredCheck Does Best
        </Typography>

        <Typography variant='h6' textAlign='center' fontWeight={500} mb={13}>
          From unifying data to surfacing clear risk signals without changing how your
          teams work.
        </Typography>

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
          {features.map((benefit, index) => (
            <Card key={index}>
              <CardContent
                sx={{
                  height: 250,
                  // width: 292,
                  borderRadius: 3,
                  border: '1px solid #E5E7EB',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                }}
              >
                <Stack spacing={4} alignItems='center'>
                  <Box
                    width={40}
                    height={40}
                    borderRadius={2}
                    bgcolor='#F9F5FF'
                    display='flex'
                    alignItems='center'
                    justifyContent='center'
                    mb={4}
                  >
                    {benefit.icon}
                  </Box>

                  <Typography variant='h6' fontWeight='bold'>
                    {benefit.title}
                  </Typography>
                  <Typography variant='body1' fontWeight={500} lineHeight={1.6}>
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
