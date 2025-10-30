import React from 'react';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import CheckIcon from '@mui/icons-material/Check';
import GroupsIcon from '@mui/icons-material/Groups';
import PersonIcon from '@mui/icons-material/Person';
import { Box, Container, Grid, Stack, Typography } from '@mui/material';

const creditBackbonePoints = [
  'Manufacturers → Distributors → Retailers → Farmers',
  'Large corporates with fragmented MSME vendor bases',
  'Agri-input and consumer goods supply chains',
];

const whyItWorksItems = [
  {
    icon: <PersonIcon sx={{ color: 'primary.main' }} />,
    text: 'Partnerships with 350 corporates + visibility into buyer performance and transactions.',
  },
  {
    icon: <GroupsIcon sx={{ color: 'primary.main' }} />,
    text: 'Digital underwriting + on-ground relationships reduce risk in thin-file MSMEs.',
  },
  {
    icon: <AccountBalanceIcon sx={{ color: 'primary.main' }} />,
    text: 'NBFC license + co-lending partnerships = flexible capital across the chain.',
  },
];

const supplyChainSteps = [
  { emoji: '🏭', label: 'Manufacturers' },
  { emoji: '🏪', label: 'Distributors' },
  { emoji: '🏬', label: 'Retailers' },
  { emoji: '👨‍🌾', label: 'Farmers' },
];

export const About: React.FC = () => {
  return (
    <Box bgcolor='#FAF8FD' py={{ xs: 12, md: 20 }} px={4}>
      <Container maxWidth='lg'>
        <Grid container spacing={10} alignItems='flex-start'>
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant='h4' fontWeight='bold' mb={6}>
              About Jai Kisan
            </Typography>

            <Stack spacing={9}>
              <Typography variant='h6' color='text.secondary'>
                Jai Kisan facilitates farmer loans and retailer credit through its own
                lending arm as well as through its Lender Partner. Our core business is
                powering supply chains enabling manufacturers, distributors, and large
                corporates to extend seamless credit to their rural and MSME buyers.
              </Typography>

              <Typography variant='h6' color='text.secondary'>
                Through its in-house products like BharatCredit, we finance procurement
                and trade flows, making it possible for B2B buyers to purchase inventory
                and pay later, without disrupting the working capital cycle of suppliers.
              </Typography>
            </Stack>

            <Typography variant='h5' fontWeight='bold' color='#5A27CF' mb={8} mt={13}>
              Credit backbone of rural commerce:
            </Typography>

            <Stack spacing={8}>
              {creditBackbonePoints.map((item, i) => (
                <Stack key={i} direction='row' alignItems='flex-start' gap={5}>
                  <CheckIcon sx={{ color: 'success.main' }} />
                  <Typography variant='h6'>{item}</Typography>
                </Stack>
              ))}
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant='h5' fontWeight='bold' mb={5}>
              Why it Works
            </Typography>

            <Stack spacing={5}>
              {whyItWorksItems.map((item, i) => (
                <Stack key={i} direction='row' alignItems='flex-start'>
                  <Box
                    p={1.5}
                    borderRadius={2}
                    mr={2}
                    display='flex'
                    alignItems='center'
                    justifyContent='center'
                  >
                    {item.icon}
                  </Box>
                  <Typography fontSize='1.125rem' color='text.secondary'>
                    {item.text}
                  </Typography>
                </Stack>
              ))}
            </Stack>

            <Stack
              direction='column'
              alignItems='center'
              bgcolor='background.paper'
              borderRadius={3}
              mt={45}
              px={11}
              py={14}
            >
              <Stack
                direction={{ xs: 'column', md: 'row' }}
                alignItems='center'
                justifyContent={{ xs: 'center', md: 'space-between' }}
                spacing={{ xs: 4, md: 0 }}
                width='100%'
              >
                {supplyChainSteps.map((step, i, arr) => (
                  <React.Fragment key={i}>
                    <Box
                      bgcolor='#FAF8FD'
                      borderRadius='70%'
                      p={2}
                      display='flex'
                      alignItems='center'
                      justifyContent='center'
                      height={70}
                      width={70}
                    >
                      <Typography fontSize='2rem' p={6}>
                        {step.emoji}
                      </Typography>
                    </Box>
                    {i < arr.length - 1 && (
                      <Typography
                        color='#5A27CF'
                        fontWeight='bold'
                        mx={{ xs: 0, md: 1 }}
                        my={{ xs: 2, md: 0 }}
                      >
                        →
                      </Typography>
                    )}
                  </React.Fragment>
                ))}
              </Stack>

              <Stack
                direction={{ xs: 'column', md: 'row' }}
                alignItems='center'
                justifyContent={{ xs: 'center', md: 'space-between' }}
                spacing={{ xs: 4, md: 0 }}
                width='100%'
                mt={2}
              >
                {supplyChainSteps.map((step, i) => (
                  <Box key={i}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    width={70}
                    textAlign="center"
                  >
                    <Typography variant='caption'>{step.label}</Typography>
                  </Box>
                ))}
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
