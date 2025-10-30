"use client";

import React from "react";
import NextImage from "@/components/next-image";
import NextLink from "@/components/next-link";
import { LinkedIn } from "@mui/icons-material";
import Grid from "@mui/material/Grid";
import {
  Box,
  Container,
  Divider,
  IconButton,
  List,
  ListItem,
  Stack,
  Typography,
} from "@mui/material";

const AppFooter = () => {
  return (
    <Box bgcolor="#111827">
      <Container sx={{ py: 12 }}>
        <Grid container spacing={30}>
          <Grid maxWidth={400}>
            <NextImage
              src="/images/credserv-footer-logo.svg"
              alt="credCheck logo"
              width={225}
              height={40}
            />
            <Typography variant="body1" color="#9CA3AF" mt={2}>
              Turn AR into credit rails end-to-end. Treasury-backed loans for
              B2B supply chains.
            </Typography>
            <Stack
              display={{ xs: "none", md: "flex" }}
              direction="row"
              alignItems="center"
              mt={9}
              mb={10}
            >
              <a
                href="https://in.linkedin.com/company/jai-kisan"
                target="_blank"
                rel="noopener noreferrer"
              >
                <NextImage
                  src="/images/linkedin.svg"
                  alt="LinkedIn"
                  width={24}
                  height={24}
                />
              </a>
            </Stack>
          </Grid>

          <Grid>
            <Grid container spacing={25}>
              <Grid>
                <Typography color="background.paper" fontWeight="bold">
                  Product
                </Typography>
                <List>
                  {[
                    { href: "/", label: "Home" },
                    { href: "/solutions", label: "Solutions" },
                  ].map((item) => (
                    <ListItem key={item.href} disablePadding>
                      <NextLink
                        href={item.href}
                        style={{ textDecoration: "none" }}
                      >
                        <Typography color="#9CA3AF" sx={{ py: 0.5, mt: 5 }}>
                          {item.label}
                        </Typography>
                      </NextLink>
                    </ListItem>
                  ))}
                </List>
              </Grid>

              <Grid>
                <Typography color="background.paper" fontWeight="bold">
                  Company
                </Typography>
                <List>
                  {[
                    { href: "/about-us", label: "About Us" },
                    { href: "/contact-us", label: "Contact Us" },
                  ].map((item) => (
                    <ListItem key={item.href} disablePadding>
                      <NextLink
                        href={item.href}
                        style={{ textDecoration: "none" }}
                      >
                        <Typography color="#9CA3AF" sx={{ py: 0.5, mt: 5 }}>
                          {item.label}
                        </Typography>
                      </NextLink>
                    </ListItem>
                  ))}
                </List>
              </Grid>
            </Grid>
          </Grid>

        </Grid>

        <Divider
          sx={{
            borderColor: "#666464",
            borderRadius: 1,
            border: "0.5px solid",
            mb: 2,
          }}
        />

        <Grid>
          <Stack direction={{ xs: "column-reverse", md: "column" }} spacing={2}>
            <Typography
              variant="body2"
              pb={3}
              color="#9CA3AF"
              fontSize={12}
            >
              Disclaimer: CredCheck provides reports after analyzing the data
              collated from various sources. We do not warrant its completeness
              or reliability and disclaim liability for any discrepancy in the
              information contained herein.
            </Typography>
            <Stack
              direction={{ xs: "column-reverse", md: "row" }}
              alignItems={{ xs: "start", md: "center" }}
              justifyContent="space-between"
              spacing={3}
            >
              <Typography
                variant="body2"
                borderTop={{ xs: "1px solid #EBEBEB", md: "none" }}
                width={{ xs: "100%", md: "auto" }}
                paddingTop={{ xs: 4, md: 0 }}
                color="#9CA3AF"
                fontSize={12}
              >
                © {new Date().getFullYear()}, CredServ, All Rights Reserved.
              </Typography>
              <Stack
                direction={{ xs: "column", md: "row" }}
                alignItems={{ xs: "start", md: "center" }}
                gap={3}
              >
                <Stack direction="row" alignItems="center" spacing={2}>
                  <NextImage
                    src="/images/verified.svg"
                    alt="Verified"
                    width={20}
                    height={15}
                    aria-label="Verified"
                  />
                  <Typography
                    variant="body2"
                    mb={4}
                    color="#9CA3AF"
                    fontSize={12}
                  >
                    100% Safe and Secure
                  </Typography>
                </Stack>
                <Stack direction="row" alignItems="center" spacing={2}>
                  <NextImage
                    src="/images/indian-flag.svg"
                    alt="Indian Flag"
                    width={20}
                    height={15}
                    aria-label="Indian Flag"
                  />
                  <Typography
                    variant="body2"
                    color="#9CA3AF"
                    fontSize={12}
                  >
                    Made with ❤️ in India
                  </Typography>
                </Stack>
              </Stack>
              <Stack
                display={{ xs: "flex", md: "none" }}
                direction="row"
                alignItems="center"
                gap={1}
              >
                <Typography variant="body2" color="text.contrastText">
                  Follow us on
                </Typography>
                <IconButton
                  href="https://in.linkedin.com/company/jai-kisan"
                  target="_blank"
                >
                  <LinkedIn sx={{ color: "text.contrastText" }} />
                </IconButton>
              </Stack>
            </Stack>
          </Stack>
        </Grid>
      </Container>
    </Box>
  );
};

export default AppFooter;
