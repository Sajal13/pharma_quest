'use client';

import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

const LottieBackground: React.FC = () => {
  const animationContainer = useRef<HTMLDivElement>(null);
  const anim = useRef<any>(null);

  useEffect(() => {
    const loadLottie = async () => {
      const res = await fetch('/assets/images/lottie/globe.json');
      const animationData = await res.json();

      if (animationContainer.current) {
        anim.current = lottie.loadAnimation({
          container: animationContainer.current,
          renderer: 'svg',
          loop: true,
          autoplay: true,
          animationData
        });
      }
    };

    loadLottie();

    return () => {
      if (anim.current) anim.current.destroy();
    };
  }, []);

  return (
    <div
      ref={animationContainer}
      className="fixed top-0 left-0 w-screen h-screen -z-10 pointer-events-none overflow-hidden opacity-30"
    />
  );
};

export default LottieBackground;
