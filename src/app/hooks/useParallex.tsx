"use client";

import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useParallaxEffect = () => {
  useEffect(() => {
    // You can now rely on normal browser scrolling
    const images = gsap.utils.toArray('.parallax-image');
    const texts = gsap.utils.toArray('.fade-in-text');
    const parallex = gsap.utils.toArray('.parallex'); 
    const scaleReverse = gsap.utils.toArray('.scale-reverse'); 


    gsap.to('.floating-box', {
      y: '+=15',
      rotate : '+=6',
      x:'+=4',      
      duration: 3.5, // Duration of one cycle
      repeat: -1, // Repeat indefinitely
      yoyo: true, // Reverse the animation
      ease: 'power1.inOut', // Smooth easing
    });

    images.forEach((image: any) => {
      gsap.fromTo(image,
        {
          scale: 1.3,
        },
        {
          scale: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: image,
            start: 'top 90%',
            scrub: true,
          },
        }
      );
    });

    texts.forEach((text: any) => {
      gsap.fromTo(
        text,
        { opacity: 0, y: 30, scale: 1.05 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.35,
          ease: 'none',
          stagger: 0.25,
          scrollTrigger: {
            trigger: text,
            start: 'top 90%',
            end: 'top 80%',
            scrub: true,
          },
        }
      );
    });

    parallex.forEach((image: any) => {
      gsap.fromTo(image,
        {
          scale: 1.06,
          y: 80,
        },
        {
          scale: 1,
          y: -10,
          ease: 'none',
          scrollTrigger: {
            trigger: image,
            start: 'top 90%',
            end: 'top 10%',
            scrub: true,
          },
        }
      );
    });

    scaleReverse.forEach((image: any) => {
      gsap.fromTo(image,
        {
          scale: 0.9,
        },
        {
          scale: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: image,
            start: 'top 90%',
            end: 'top 30%',
            scrub: true,
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
};
