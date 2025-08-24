'use client';

import Image from 'next/image';
import { useState } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
  fill?: boolean;
  sizes?: string;
  quality?: number;
  onLoadingComplete?: () => void;
  onError?: () => void;
}

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  placeholder = 'empty',
  blurDataURL,
  fill = false,
  sizes,
  quality = 85,
  onLoadingComplete,
  onError,
}: OptimizedImageProps) {
  const [imageError, setImageError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Default blur data URL for placeholder
  const defaultBlurDataURL = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyEckHvYem83ZP/2Q==';

  // Responsive sizes for different breakpoints
  const responsiveSizes = sizes || `
    (max-width: 640px) 100vw,
    (max-width: 768px) 50vw,
    (max-width: 1024px) 33vw,
    25vw
  `;

  const handleLoadingComplete = () => {
    setIsLoading(false);
    onLoadingComplete?.();
  };

  const handleError = () => {
    setImageError(true);
    setIsLoading(false);
    onError?.();
  };

  // Fallback image component
  if (imageError) {
    return (
      <div 
        className={`bg-gray-200 flex items-center justify-center text-gray-400 ${className}`}
        style={{ width, height }}
      >
        <svg 
          className="w-8 h-8" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" 
          />
        </svg>
      </div>
    );
  }

  const imageProps = {
    src,
    alt,
    className: `${className} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`,
    priority,
    placeholder,
    blurDataURL: placeholder === 'blur' ? (blurDataURL || defaultBlurDataURL) : undefined,
    quality,
    onLoadingComplete: handleLoadingComplete,
    onError: handleError,
  };

  if (fill) {
    return (
      <div className="relative overflow-hidden">
        <Image
          {...imageProps}
          fill
          sizes={responsiveSizes}
          style={{ objectFit: 'cover' }}
        />
      </div>
    );
  }

  return (
    <Image
      {...imageProps}
      width={width}
      height={height}
      sizes={responsiveSizes}
    />
  );
}

// Preset configurations for common use cases
export const HeroImage = ({ src, alt, className, ...props }: Omit<OptimizedImageProps, 'priority' | 'sizes'>) => (
  <OptimizedImage
    src={src}
    alt={alt}
    className={className}
    priority={true}
    sizes="100vw"
    placeholder="blur"
    quality={90}
    {...props}
  />
);

export const CardImage = ({ src, alt, className, ...props }: Omit<OptimizedImageProps, 'sizes'>) => (
  <OptimizedImage
    src={src}
    alt={alt}
    className={className}
    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    placeholder="blur"
    {...props}
  />
);

export const ThumbnailImage = ({ src, alt, className, ...props }: Omit<OptimizedImageProps, 'sizes'>) => (
  <OptimizedImage
    src={src}
    alt={alt}
    className={className}
    sizes="(max-width: 768px) 25vw, 150px"
    quality={80}
    {...props}
  />
);

export const FullWidthImage = ({ src, alt, className, ...props }: Omit<OptimizedImageProps, 'sizes'>) => (
  <OptimizedImage
    src={src}
    alt={alt}
    className={className}
    sizes="100vw"
    placeholder="blur"
    quality={85}
    {...props}
  />
);