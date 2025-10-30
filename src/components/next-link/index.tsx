'use client';

import { ComponentProps, forwardRef } from 'react';
import NextLink from 'next/link';
import { useTheme } from '@mui/material';
import { useRouter } from 'next-nprogress-bar';

const Link: React.ForwardRefRenderFunction<
  HTMLAnchorElement,
  Omit<ComponentProps<typeof NextLink>, 'href'> & {
    href: string;
    refresh?: boolean;
  }
> = ({ href, onClick, refresh, children, ...rest }, ref) => {
  const theme = useTheme();
  const router = useRouter();

  return refresh ? (
    <a
      ref={ref}
      href={href}
      onClick={(event) => {
        onClick?.(event);
        if (!event.defaultPrevented) {
          event.preventDefault();
          router.push(href);
          router.refresh();
        }
      }}
      {...rest}
    >
      {children}
    </a>
  ) : (
    <NextLink
      ref={ref}
      href={href}
      onClick={onClick}
      prefetch={true}
      style={{ color: theme.palette.text.primary, textDecoration: 'none', ...rest?.style }} // prettier-ignore
      {...rest}
    >
      {children}
    </NextLink>
  );
};

export default forwardRef(Link);
