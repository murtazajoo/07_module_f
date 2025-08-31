'use client';

import { useState, useEffect } from 'react';

export function useResponsiveImage() {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 760);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const getImagePath = (imageName: string) => {
    const suffix = isLargeScreen ? '' : '-low-res';
    const ext = imageName.split('.').pop();
    return `/images/${imageName.split('.')[0]}${suffix}.${ext}`;
  };

  return { getImagePath, isLargeScreen };
}
