import React from 'react';
import FaqList from './faq-list';
import { Box, Container, Typography } from '@mui/material';
import axios from 'axios';

const FaqPage = async () => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

  const { data } = await axios.get(`${baseUrl}/files/faq.json`);
  return (
    <Container>
      <Box mt={20} mb={20} textAlign='justify'>
        <Typography variant='h3' fontWeight='bold' mb={5}>
          Got Questions? We&apos;ve Got Answers
        </Typography>
        <FaqList data={data} />
      </Box>
    </Container>
  );
};

export default FaqPage;