"use client";
import { useEffect, useRef, useState } from "react";
import "./scrollReveal.css";

export default function ScrollReveal({ children, className, delay, width }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
            observer.disconnect();
          }, delay);
        }
      },
      { threshold: 0 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      style={{ width: width }}
      ref={ref}
      className={isVisible ? `hidden ${className}` : "hidden"}
    >
      {children}
    </div>
  );
}
