'use client'
import Image from 'next/image';

const ImageWidget = ({ src, alt, width, height, className, ...props }) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      {...props}
      className={className}
      layout="intrinsic"
      loading="lazy"
    />
  );
};

export default ImageWidget;
