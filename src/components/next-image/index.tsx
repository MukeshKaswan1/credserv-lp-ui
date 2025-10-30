'use client';

import Image from 'next/image';

interface NextImageProps {
  src: string | undefined;
  alt: string | undefined;
  height?: number | `${number}` | undefined;
  width?: number | `${number}` | undefined;
  style?: object;
  responsive?: boolean;
}

const NextImage: React.FC<NextImageProps> = ({
  src,
  alt,
  height,
  width,
  style,
  responsive = false,
  ...props
}) => {
  if (responsive) {
    return (
      <Image
        alt={alt || ''}
        fill
        sizes='100vw'
        style={{
          objectFit: 'contain',
          ...style,
        }}
        src={src || ''}
        priority
        {...props}
      />
    );
  }
  return (
    <Image
      alt={alt || ''}
      width={width || 75}
      height={height || 75}
      sizes='100vw'
      style={{
        ...style,
      }}
      src={src || ''}
      priority
      {...props}
    />
  );
};

export default NextImage;
