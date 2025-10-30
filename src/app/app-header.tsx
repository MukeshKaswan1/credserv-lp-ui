'use client';

import React, { useState } from 'react';
import NextImage from '@/components/next-image';
import NextLink from '@/components/next-link';
import { Close as CloseIcon, Menu as MenuIcon } from '@mui/icons-material';
import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  Toolbar,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { usePathname } from 'next/navigation';

const AppHeader = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const pathName = usePathname();

  const menuItems = [
    { label: 'Home', href: '/' },
    { label: 'Solutions', href: '/solutions' },
    { label: 'About Us', href: '/about-us' },
    { label: 'Contact', href: '/contact-us' },
  ];

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  const drawer = (
    <Box
      sx={{ width: 280, p: 2, display: 'flex', flexDirection: 'column', height: '100%' }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: 3,
        }}
      >
        <NextImage
          src='/images/credserv-logo.svg'
          alt='CredCheck'
          width={140}
          height={50}
        />
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon />
        </IconButton>
      </Box>
      <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
        <List sx={{ width: '100%' }}>
          {menuItems.map((item) => (
            <ListItem key={item.label} disablePadding>
              <NextLink href={item.href} style={{ width: '100%' }}>
                <ListItemButton sx={{ borderRadius: 2 }}>
                  <ListItemText
                    primary={item.label}
                    primaryTypographyProps={{ fontWeight: 500, color: 'text.primary' }}
                  />
                </ListItemButton>
              </NextLink>
            </ListItem>
          ))}
          <ListItem sx={{ mt: 2 }}>
            <Button variant='contained' fullWidth sx={{ p: 1, bgcolor: 'text.globalText', '&:hover': { bgcolor: 'text.globalText' } }}>
              Talk to Sales
            </Button>
          </ListItem>
        </List>
      </Box>
    </Box>
  );

  return (
    <>
      <AppBar
        position='sticky'
        elevation={0}
        sx={{
          backgroundColor: 'background.paper',
          opacity: 1,
          borderBottom: '1px solid',
          borderColor: 'grey.200',
          color: 'text.primary',
          boxShadow: 'none',
        }}
      >
        <Toolbar
          sx={{
            px: { xs: 2, md: 4 },
            py: 1,
            maxWidth: 'lg',
            width: '100%',
            mx: 'auto',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          {/* Left - Logo */}
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-start' }}>
            <NextLink href='/'>
              <NextImage
                src='/images/credserv-logo.svg'
                alt='CredCheck'
                width={180}
                height={32}
              />
            </NextLink>
          </Box>

          {/* Center - Menu Items */}
          {!isMobile && (
            <Stack
              direction='row'
              spacing={4}
              sx={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
            >
              {menuItems.map((item) => {
                const isActive = pathName === item.href;
                return (
                  <NextLink
                    key={item.label}
                    href={item.href}
                    style={{
                      textDecoration: isActive ? 'underline' : 'none',
                      color: isActive ? '#006834' : theme.palette.text.secondary,
                      fontWeight: isActive ? 600 : 500,
                      fontSize: '1rem',
                      transition: 'color 0.3s ease',
                    }}
                  >
                    {item.label}
                  </NextLink>
                );
              })}
            </Stack>
          )}

          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
            {!isMobile && (
              <Button
                variant='contained'
                href='tel:+918150024174'
                sx={{
                  width: 134,
                  height: 48,
                  fontSize: '1.25rem',
                  px: 3,
                  py: 1,
                  borderRadius: 1,
                  fontWeight: 500,
                  bgcolor: '#006834',
                  '&:hover':{
                    bgcolor: '#006834'
                  }
                }}
              >
                Talk to Sales
              </Button>
            )}
            {isMobile && (
              <IconButton
                color='inherit'
                aria-label='open drawer'
                edge='end'
                onClick={handleDrawerToggle}
              >
                <MenuIcon />
              </IconButton>
            )}
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        variant='temporary'
        anchor='right'
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 280 },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default AppHeader;