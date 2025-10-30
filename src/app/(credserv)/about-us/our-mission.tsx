'use client';

import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import LockIcon from '@mui/icons-material/Lock';
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined';
import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Stack,
  Typography,
} from '@mui/material';

const Mission = () => {
  const items = [
    {
      icon: <DescriptionOutlinedIcon sx={{ color: 'primary.main' }} />,
      text: 'Accuracy over hype',
    },
    {
      icon: <GroupOutlinedIcon sx={{ color: 'primary.main' }} />,
      text: 'Consent & compliance first',
    },
    {
      icon: <LockIcon sx={{ color: 'primary.main' }} />,
      text: 'Security by default (India-hosted)',
    },
    {
      icon: <ShieldOutlinedIcon sx={{ color: 'primary.main' }} />,
      text: 'Clarity for humans',
    },
  ];

  return (
    <Box bgcolor='#FAF8FD' py={{ xs: 10, md: 20 }}>
      <Container maxWidth='lg'>
        <Stack spacing={3} textAlign='center' alignItems='center'>
          <Typography variant='h4' fontWeight='bold' color='text.primary'>
            Our Mission
          </Typography>

          <Typography variant='h6' color='text.secondary' maxWidth={880} fontWeight={500}>
            Make business credit decisions simple, consistent, and audit-ready for every
            team that relies on them — credit, risk, procurement, and finance. We obsess
            over clarity, not noise.
          </Typography>

          <Grid container pt={9} spacing={3}>
            {items.map((item, index) => (
              <Grid size={{ xs: 12, md: 3 }} key={index}>
                <Card elevation={1} sx={{ borderRadius: 3, height: '100%' }}>
                  <CardContent
                    sx={{
                      height: 88,
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      gap: 2,
                      textAlign: 'center',
                    }}
                  >
                    <Box
                      display='flex'
                      justifyContent='center'
                      alignItems='center'
                      minWidth={48}
                      minHeight={48}
                      borderRadius={2}
                      bgcolor='#F9F5FF'
                    >
                      {item.icon}
                    </Box>
                    <Typography variant='h6' fontWeight={500} sx={{ lineHeight: 1.3 }}>
                      {item.text}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Container>
    </Box>
  );
};

export default Mission;
