'use client';

import { HighlightOffOutlined } from '@mui/icons-material';
import { Box, IconButton, Paper, Typography } from '@mui/material';
import hotToast, { Toaster, ToasterProps } from 'react-hot-toast';

const toaster = (message: string, variant: string) => {
  const toastColor = () => {
    switch (variant) {
      case 'error':
        return '#F04354';
      case 'success':
        return '#12B76A';
      default:
        return '#FFFFFF';
    }
  };

  // Regular expression to find a period followed by a space
  const regex = /\. (?=\S)/;

  // Check if the message contains the desired format
  let primaryMessage, secondaryMessage;

  if (regex.test(message)) {
    // Split based on the regex if the desired format exists
    [primaryMessage, ...secondaryMessage] = message.split(regex);
    secondaryMessage = secondaryMessage.join('. '); // Join back if there's more content
  } else {
    // Fallback to splitting at the first period if the desired format doesn't exist
    const firstPeriodIndex = message.indexOf('.');
    if (firstPeriodIndex !== -1) {
      primaryMessage = message.slice(0, firstPeriodIndex);
      secondaryMessage = message.slice(firstPeriodIndex + 1);
    } else {
      primaryMessage = message; // No period at all, take the whole message
      secondaryMessage = '';
    }
  }

  hotToast.custom(({ id }) => (
    <Paper
      sx={{
        maxWidth: 400,
        width: '100%',
        bg: 'white',
        boxShadow: '0px 4px 6px -1px rgba(0, 0, 0, 0.1)',
        borderRadius: '8px',
        pointerEvents: 'auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        border: `1px solid ${toastColor()}`,
        px: 2,
        py: 3,
      }}
    >
      <Box display='flex' alignItems='start'>
        <Box ml={3} flex='1'>
          <Typography variant='subtitle1' fontWeight='550' mb={-1}>
            {primaryMessage}
          </Typography>
          {secondaryMessage && (
            <Typography variant='body2' mt={1}>
              {secondaryMessage}
            </Typography>
          )}
        </Box>
      </Box>
      <IconButton onClick={() => hotToast.remove(id)}>
        <HighlightOffOutlined sx={{ color: toastColor }} />
      </IconButton>
    </Paper>
  ));
};

export const toast = {
  error: (message: string) => toaster(message, 'error'),
  success: (message: string) => toaster(message, 'success'),
};

const ToastProvider = (props: ToasterProps) => {
  return (
    <Toaster
      position='bottom-center'
      toastOptions={{
        duration: 500,
        style: {
          minWidth: 300,
          borderRadius: '0.375rem',
          backgroundColor: '#FFFFFF',
          padding: '16px 18px',
          color: '#000000',
          zIndex: 990,
        },
      }}
      {...props}
    />
  );
};

export default ToastProvider;
