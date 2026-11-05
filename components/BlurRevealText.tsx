'use client';

import React, { useEffect, useRef, useState } from 'react';

interface BlurRevealTextProps {
  children: React.ReactNode;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'div' | 'span';
  className?: string;
}

export default function BlurRevealText({
  children,
  as: Tag = 'div',
  className = '',
}: BlurRevealTextProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(true);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setInView(entry.isIntersecting);
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -16px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as React.RefObject<never>}
      className={`transition-[opacity,transform] duration-500 ease-out will-change-[opacity,transform] ${
        inView
          ? 'opacity-100 translate-y-0'
          : 'opacity-45 translate-y-2'
      } ${className}`}
    >
      {children}
    </Tag>
  );
}
