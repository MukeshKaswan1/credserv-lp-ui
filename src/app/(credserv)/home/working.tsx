'use client';

import { Box, Typography, Grid, Chip } from '@mui/material';
import CorporateFareRoundedIcon from '@mui/icons-material/CorporateFareRounded';
import NextImage from '@/components/next-image';

const processSteps = [
  {
    icon: <CorporateFareRoundedIcon sx={{ fontSize: 40, color: '#fff' }} />,
    title: 'Corporate',
    description: 'Upload and digitize your invoices with automated data extraction',
  },
  {
    icon: <NextImage src="/images/report.svg" alt="Report Icon" width={40} height={40} />,
    title: 'AR Digitization',
    description: 'Automate invoice processing',
  },
  {
    icon: <NextImage src="/images/user.svg" alt="User Icon" width={40} height={40} />,
    title: 'AR Formalization',
    description: 'Convert to accountable documents',
  },
  {
    icon: <NextImage src="/images/currency.svg" alt="Currency Icon" width={40} height={40} />,
    title: 'Channel Financing',
    description: 'Provide instant working capital',
  },
  {
    icon: <NextImage src="/images/credit-card.svg" alt="Credit Card Icon" width={40} height={40} />,
    title: 'Onward Lending',
    description: 'Scale across your network',
  },
];

const ProcessStepCard = ({ step }: { step: (typeof processSteps)[0] }) => {
  return (
    <Box className="flex flex-col items-center text-center p-4">
      <Box
        sx={{
          width: { xs: 64, sm: 80, md: 96 },
          height: { xs: 64, sm: 80, md: 96 },
          backgroundColor: '#31C87E',
          borderRadius: 2,
          mb: 20,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'transform 0.3s ease-in-out',
          '&:hover': {
            transform: 'translateY(-4px)',
          },
        }}
      >
        {step.icon}
      </Box>

      <Typography
        variant="h6"
        component="h3"
        sx={{
          fontWeight: 'bold',
          mb: 1,
          fontSize: { xs: '1rem', sm: '1.125rem' },
        }}
      >
        {step.title}
      </Typography>

      <Typography
        variant="body2"
        color="text.secondary"
        sx={{
          maxWidth: 180,
          lineHeight: 1.6,
          fontSize: { xs: '0.875rem', sm: '1rem' },
        }}
      >
        {step.description}
      </Typography>
    </Box>
  );
};

const ProcessFlowSection = () => {
  return (
    <Box bgcolor="#FFFFFF" py={40}>
      <Box textAlign="center" mb={{ xs: 8, md: 12 }}>
        <Chip
          avatar={
            <NextImage
              src="/images/star-green.svg"
              alt="Star Icon"
              width={20}
              height={20}
            />
          }
          label="Process"
          sx={{
            background: '#EDF5F2',
            color: 'text.globalText',
            fontWeight: 600,
            mb: 3,
            px: 3,
            py: 2,
            borderRadius: '999px',
          }}
        />

        <Typography variant="h4" fontWeight="bold" mb={2}>
          How CredServ works
        </Typography>
        <Typography variant="h6" color="text.secondary">
          One clean flow from receivables to repayments designed for India rails & NBFC compliance
        </Typography>
      </Box>

      <Box className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Grid
          container
          justifyContent="center"
          spacing={2}
          sx={{ position: 'relative' }}
        >
          <Box
            sx={{
              display: { xs: 'none', lg: 'block' },
              position: 'absolute',
              top: '148px',
              left: '1%',
              right: '10%',
              height: '3px',
              width: '1200px',
              backgroundColor: '#E4E4E4',
              zIndex: 0,
            }}
          />

          {processSteps.map((step, index) => (
            <Grid size={{ xs: 6, sm: 4, md: 2.4 }}
              key={index}
              sx={{ zIndex: 1 }}
            >
              <ProcessStepCard step={step} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default ProcessFlowSection;