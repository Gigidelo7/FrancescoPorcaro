import React, { useState, useEffect, useRef } from 'react';

// Custom hook to detect when an element is in view
const useInView = (options: IntersectionObserverInit) => {
  const ref = useRef<HTMLSpanElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        observer.disconnect(); // Disconnect after it's in view once
      }
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options]);

  return [ref, isInView];
};


const Counter: React.FC<{ end: number; duration?: number; className?: string; suffix?: string; prefix?: string; decimals?: number; }> = ({ end, duration = 2000, className, suffix = '', prefix = '', decimals = 0 }) => {
  const [count, setCount] = useState(0);
  const [ref, isInView] = useInView({ threshold: 0.5 });
  const startTimestamp = useRef<number | null>(null);

  useEffect(() => {
    if (isInView) {
      const step = (timestamp: number) => {
        if (!startTimestamp.current) {
          startTimestamp.current = timestamp;
        }
        const progress = Math.min((timestamp - startTimestamp.current) / duration, 1);
        const currentCount = progress * end;
        setCount(currentCount);

        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
            setCount(end);
        }
      };
      requestAnimationFrame(step);
    }
  }, [isInView, end, duration]);
  
  const formatNumber = (num: number) => {
      return num.toFixed(decimals);
  }

  return (
    <span ref={ref as React.RefObject<HTMLSpanElement>} className={className}>
      {prefix}{formatNumber(count)}{suffix}
    </span>
  );
};

export default Counter;