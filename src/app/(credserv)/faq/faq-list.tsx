'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import NextLink from '@/components/next-link';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  IconButton,
  Stack,
  Typography,
} from '@mui/material';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const FaqList: React.FC<{ data: Record<string, any>[] }> = ({ data }) => {
  const pathName = usePathname();
  return (
    <>
      <Stack direction='column' spacing={8} mt={20} mb={0}>
        {(pathName === '/faq' ? data : data?.slice(0, 5)).map(
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (item: Record<string, any>, index: number) => (
            <Accordion
              key={index}
              sx={{
                py: 6,
                border: 1,
                borderColor: 'text.lightText',
                borderRadius: 1,
                boxShadow: 0,
                position: 'static',
              }}
            >
              <AccordionSummary
                expandIcon={
                  <IconButton size='small' sx={{ boxShadow: 1 }}>
                    <ExpandMoreIcon fontSize='small' />
                  </IconButton>
                }
              >
                <Typography variant='h6'>{item.question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant='body2'>{item.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          )
        )}
      </Stack>
      {(pathName === '/' || pathName === '/contact-us') && (
        <NextLink href='/faq' passHref>
          <Typography
            variant='subtitle1'
            sx={{
              textAlign: { xs: 'start', md: 'end' },
              textDecoration: 'underline',
              cursor: 'pointer',
              mt: 2,
              mb: 10,
            }}
          >
            View All FAQ&apos;s
          </Typography>
        </NextLink>
      )}
    </>
  );
};

export default FaqList;