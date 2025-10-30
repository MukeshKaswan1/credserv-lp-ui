'use client';

import ContactForm from './contact-form';
import CallIcon from '@mui/icons-material/CallOutlined';
import MailIcon from '@mui/icons-material/MailOutlined';
import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Stack,
  Typography,
} from '@mui/material';
import NextImage from '@/components/next-image';
import NextLink from '@/components/next-link';

const officeCards = [
  {
    title: 'Headquarters',
    city: 'Mumbai',
    address:
      '7th Floor, Office number 711, Trade Center, Bandra Kurla Complex (BKC), Mumbai - 400051',
  },
  {
    title: 'Office',
    city: 'Bangalore',
    address:
      'Condor Vista No.5, 4th Block, 100 Feet Road, Koramangala, Bengaluru — 560034',
  },
  {
    title: 'Get in Touch',
    content: (
      <Stack spacing={3}>
        <Stack direction='row' alignItems='center' spacing={2}>
          <CallIcon
            sx={{
              color: '#FFFFFF',
              bgcolor: '#1A8E46',
              fontSize: 40,
              borderRadius: 2,
              p: 2,
            }}
          />
          <Box>
            <NextLink href="tel:+918150024174" style={{ textDecoration: "none", color: "inherit" }}>
              <Typography variant="h6" fontWeight={600}>
                +91 81500 24174
              </Typography>
            </NextLink>
            <Typography variant='body2' color='text.secondary'>
              Mon–Fri, 10:00AM - 7:00PM
            </Typography>
          </Box>
        </Stack>
        <Stack direction='row' alignItems='center' spacing={2}>
          <MailIcon
            sx={{
              color: '#FFFFFF',
              bgcolor: '#1A8E46',
              fontSize: 40,
              borderRadius: 2,
              p: 2,
            }}
          />
          <Box>
            <NextLink href="mailto:support@credserv.in" style={{ textDecoration: "none", color: "inherit" }}>
              <Typography variant="h6" fontWeight={600}>
                support@credserv.in
              </Typography>
            </NextLink>
            <Typography variant='body2' color='text.secondary'>
              Response within 24 hours
            </Typography>
          </Box>
        </Stack>
      </Stack>
    ),
  },
];

const ContactUsPage = () => {
  return (
    <Box bgcolor='background.paper'>
      <Stack sx={{ background: '#F8F7F4' }}>
        <Container
          sx={{
            my: 18,
            gap: 10,
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            flexDirection: { xs: 'column', md: 'row' },
          }}
        >
          <Stack gap={2} direction='column' justifyContent='center'>
            <Typography fontSize='42px' fontWeight='bold' color='text.primary'>
              Get in Touch with <br />
              <Typography component='span' color='#006834' variant='inherit'>
                CredServ
              </Typography>
            </Typography>
            <Typography variant='h6' color='text.secondary' maxWidth={510}>
              Have questions about AR digitization and formalization? Our team
              is here to help you unlock your trapped revenue.
            </Typography>

            <Stack
              gap={4}
              maxWidth={480}
              px={10}
              py={5}
              mt={10}
              bgcolor='#FFFFFF'
              borderRadius={4}
              boxShadow='0px 15.72px 70.76px 0px #061C3D14'
            >
              <Typography variant='h5' fontWeight={700} pb={5}>
                Why choose CredServ?
              </Typography>
              {[
                'Complete AR digitization solution',
                'Access to 10+ lenders & banks',
                '24/7 dedicated support',
                'Secure and compliant platform',
              ].map((item, index) => (
                <Stack key={index} direction='row' alignItems='center' gap={3}>
                  <NextImage
                    src='/images/correct-container.svg'
                    alt='check icon'
                    width={40}
                    height={40}
                  />
                  <Typography
                    variant='body1'
                    color='text.primary'
                    fontWeight={700}
                  >
                    {item}
                  </Typography>
                </Stack>
              ))}
            </Stack>
          </Stack>

          <ContactForm />
        </Container>
      </Stack>

      <Container sx={{ pb: 20 }}>
        <Typography
          variant='h4'
          fontWeight='bold'
          textAlign='center'
          mt={20}
          mb={10}
        >
          Our Office Location
        </Typography>

        <Grid
          container
          spacing={6}
          justifyContent='center'
          alignItems='stretch'
          flexDirection={{ xs: 'column', md: 'row' }}
        >
          {officeCards.map((office, index) => (
            <Grid size={{ xs: 12, md: 4 }} key={index}>
              <Card
                elevation={0}
                sx={{
                  height: '100%',
                  border: '1px solid #E5E7EB',
                  borderRadius: 3,
                  boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
                }}
              >
                <CardContent sx={{ px: 10, py: 8 }}>
                  {office.title !== 'Get in Touch' ? (
                    <>
                      <Typography
                        variant='subtitle1'
                        fontWeight='600'
                        color='#1A8E46'
                        pb={5}
                      >
                        {office.title}
                      </Typography>
                      <Typography
                        variant='h5'
                        fontWeight='bold'
                        color='text.primary'
                        pb={3}
                      >
                        {office.city}
                      </Typography>
                      <Typography
                        variant='body1'
                        color='text.secondary'
                        lineHeight={1.6}
                      >
                        {office.address}
                      </Typography>
                    </>
                  ) : (
                    <>
                      <Typography
                        variant='h5'
                        fontWeight={700}
                        color='text.primary'
                        pb={5}
                      >
                        {office.title}
                      </Typography>
                      {office.content}
                    </>
                  )}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactUsPage;