'use client';

import { Box, Container, Stack, Typography } from '@mui/material';
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import WarningAmberRoundedIcon from '@mui/icons-material/WarningAmberRounded';

const challengeSolutionData = [
  {
    title: 'The Problem We Solve',
    icon: <WarningAmberRoundedIcon sx={{ color: '#C50C0C', fontSize: 36 }} />,
    color: {
      main: '#C50C0C',
      bg: '#FAF8FD',
    },
    items: [
      'Working capital trapped in receivables',
      'Fragmented workflows and manual reconciliation',
      'Lack of transparency & financing readiness ',
      'Channel partner’s limited credit access',
      'Delayed payments & high DSO',
    ],
    resultText:
      'Delayed payments, thin margins, weak enforceability',
  },
  {
    title: 'Our Solution – Platform + Product Suite',
    icon: <CheckRoundedIcon sx={{ color: '#22C55E', fontSize: 36 }} />,
    color: {
      main: '#05A65D',
      bg: '#FAF8FD',
    },
    items: [
      'Digitised invoicing, e-agreements, and automated collections',
      'Unified AR dashboard with automated payment tracking',
      'Receivables formalised into lender-ready, auditable assets',
      'Instant invoice-backed financing via Jai Kisan',
      'End-to-end AR digitization for faster cash conversion',
    ],
    resultText:
      'Fast credit decisions, unlocked capital, scaled growth',
  },
];

export const ChallengeSolutionSection = () => {
  return (
    <Box sx={{ bgcolor: '#fff', py: { xs: 8, md: 14 } }}>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          fontWeight={700}
          letterSpacing="-0.5px"
          mb={{ xs: 6, md: 10 }}
          textAlign="center"
          color="#1E1E1E"
        >
          The Challenge & Our Solution
        </Typography>

        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={{ xs: 5, md: 6 }}
          alignItems="stretch"
        >
          {challengeSolutionData.map((section, index) => (
            <Box
              key={index}
              sx={{
                flex: 1,
                borderRadius: 6,
                bgcolor: section.color.bg,
                p: { xs: 6, md: 10 },
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: '0px 1px 3px rgba(0,0,0,0.04)',
              }}
            >
              <Box>
                <Stack direction="row" spacing={2} alignItems="center" mb={10}>
                  {section.icon}
                  <Typography color="text.primary" fontSize={28} fontWeight={700} letterSpacing={-2.2}>
                    {section.title}
                  </Typography>
                </Stack>

                <Stack spacing={5}>
                  {section.items.map((item, i) => (
                    <Stack
                      key={i}
                      direction="row"
                      spacing={1.5}
                      alignItems="flex-start"
                    >
                      {index === 0 ? (
                        <ClearRoundedIcon
                          sx={{ color: section.color.main, fontSize: 32 }}
                        />
                      ) : (
                        <CheckRoundedIcon
                          sx={{ color: section.color.main, fontSize: 32 }}
                        />
                      )}
                      <Typography variant="h6" letterSpacing={-1.2} color="text.secondary">
                        {item}
                      </Typography>
                    </Stack>
                  ))}
                </Stack>
              </Box>

              {/* <Typography letterSpacing={-1.2}
                sx={{
                  fontSize: { xs: 16, md: 20 },
                  fontWeight: 500,
                  color: section.color.main,
                  mt: 5,
                }}
              >
                Result:{' '}
                <Typography component='span' style={{ fontWeight: 500 }}>
                  {section.resultText}
                </Typography>
              </Typography> */}
            </Box>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
