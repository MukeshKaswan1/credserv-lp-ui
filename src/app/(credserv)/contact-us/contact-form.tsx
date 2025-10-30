'use client';

import React, { useEffect } from 'react';
import LoadingButton from '@/components/loading-button';
import { toast } from '@/components/toast';
import { zodResolver } from '@hookform/resolvers/zod';
import { Box, Stack, TextField, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const contactSalesFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(3, { message: 'Name must be at least 3 characters' })
    .max(50, { message: 'Name must be at most 50 characters' })
    .regex(/^[A-Za-z\s.'-]+$/, { message: 'Invalid Name' }),
  email: z
    .string()
    .trim()
    .email({ message: 'Invalid email address' })
    .refine(
      (email: string) =>
        !/^(gmail\.com|yahoo\.com|hotmail\.com|outlook\.com|rediffmail\.com)$/i.test(
          email.split('@')[1]
        ),
      { message: 'Use your business email address' }
    ),
  mobile: z
    .string()
    .trim()
    .regex(/^[6789]\d{9}$/, { message: 'Invalid mobile number' }),
  company: z
    .string()
    .trim()
    .max(50, { message: 'Role must be at most 50 characters' })
    .optional(),
  remarks: z
    .string()
    .trim()
    .max(500, { message: 'Message must be at most 500 characters' })
    .optional(),
});

type ContactSalesFormValues = z.infer<typeof contactSalesFormSchema>;

const defaultValues: ContactSalesFormValues = {
  name: '',
  email: '',
  mobile: '',
  company: '',
  remarks: '',
};

const ContactForm = () => {
  const [isLoading, setIsLoading] = React.useState(false);

  const {
    handleSubmit,
    register,
    reset,
    formState: { isValid, errors },
  } = useForm<ContactSalesFormValues>({
    resolver: zodResolver(contactSalesFormSchema),
    mode: 'onChange',
    defaultValues,
  });

  useEffect(() => {
    reset(defaultValues);
  }, [reset]);

  const onSubmit = async (formData: ContactSalesFormValues) => {
    setIsLoading(true);
    try {
      fetch(
        'https://script.google.com/macros/s/AKfycbxqSDD0xnHzaB-lSvJa0A9VO8S8oSFUwLymT_l1wOQ-H89P-O_ZBTeMKLI7RA6pe3QSxA/exec',
        {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...formData,
            sheetName: 'Sheet1',
          }),
        }
      );
      toast.success('Message sent successfully');
      reset(defaultValues);
      setIsLoading(false);
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any 
    catch (err: string | any) {
      toast.error(err.message || 'Something went wrong');
    }
  };

  return (
    <Box
      px={8}
      py={12}
      maxWidth={600}
      bgcolor='background.paper'
      borderRadius={3}
      boxShadow='0px 11.94px 53.74px 0px #061C3D14'
    >
      <Typography variant='h5' fontWeight={700} mb={1}>
        Send us a message
      </Typography>
      <Typography variant='h6' fontWeight={500} color='text.secondary' mb={6}>
        Fill out the form below and we&apos;ll respond within 24 hours
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={3}>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} pb={4}>
            <Box flex={1}>
              <Typography variant='body2' mb={2}>
                Name
              </Typography>
              <TextField
                placeholder='Full name'
                variant='outlined'
                fullWidth
                {...register('name', { required: 'Name is required' })}
                error={!!errors.name}
                helperText={errors.name?.message as string}
                InputProps={{
                  sx: {
                    height: 35,
                    '& .MuiInputBase-input': {
                    padding: '6px 10px',
                  },
                  },
                }}
              />
            </Box>
            <Box flex={1}>
              <Typography variant='body2' mb={2}>
                Email Address
              </Typography>
              <TextField
                placeholder='Email address'
                type='email'
                variant='outlined'
                fullWidth
                {...register('email', { required: 'Email is required' })}
                error={!!errors.email}
                helperText={errors.email?.message as string}
                InputProps={{
                  sx: {
                    height: 35,
                    '& .MuiInputBase-input': {
                    padding: '6px 10px',
                  },
                  },
                }}
              />
            </Box>
          </Stack>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} pb={4}>
            <Box flex={1}>
              <Typography variant='body2' mb={2}>
                Mobile Number
              </Typography>
              <TextField
                placeholder='Enter your number'
                variant='outlined'
                fullWidth
                {...register('mobile', { required: 'Mobile number is required' })}
                error={!!errors.mobile}
                helperText={errors.mobile?.message as string}
                InputProps={{
                  sx: {
                    height: 35,
                    '& .MuiInputBase-input': {
                    padding: '6px 10px',
                  },
                  },
                }}
              />
            </Box>
            <Box flex={1}>
              <Typography variant='body2' mb={2}>
                Company Name (Optional)
              </Typography>
              <TextField
                placeholder='Enter your company name'
                variant='outlined'
                fullWidth
                {...register('company')}
                InputProps={{
                  sx: {
                    height: 35,
                    '& .MuiInputBase-input': {
                    padding: '6px 10px',
                  },
                  },
                }}
              />
            </Box>
          </Stack>
          <Box pb={4}>
            <Typography variant='body2' mb={2}>
              Message
            </Typography>
            <TextField
              placeholder='Type your message here'
              fullWidth
              multiline
              rows={3}
              variant='outlined'
              {...register('remarks')}
              InputProps={{
                sx: {
                  height: 85,
                  '& .MuiInputBase-input': {
                    padding: '6px 10px',
                  },
                },
              }}
            />
          </Box>
          <LoadingButton
            type='submit'
            disabled={!isValid}
            isLoading={isLoading}
            fullWidth
            variant='contained'
            sx={{
              borderRadius: '10px',
              fontWeight: 'bold',
              bgcolor: 'text.globalText',
              textTransform: 'none',
              '&:hover': {
                bgcolor: 'text.globalText',
              },
            }}
          >
            Submit →
          </LoadingButton>
        </Stack>
      </form>
    </Box>
  );
};

export default ContactForm;
