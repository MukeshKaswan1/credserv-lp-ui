import React from 'react';
import Button, { ButtonProps } from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';

const LoadingButton: React.FC<ButtonProps & { isLoading?: boolean }> = ({
  isLoading,
  disabled,
  children,
  ...buttonProps
}) => {
  return (
    <Button disabled={disabled || isLoading} {...buttonProps}>
      {isLoading ? <CircularProgress size={24} sx={{ color: '#E3E5E5' }} /> : children}
    </Button>
  );
};

export default LoadingButton;
