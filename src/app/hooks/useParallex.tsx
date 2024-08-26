"use client";

import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Scrollbar from 'smooth-scrollbar';

gsap.registerPlugin(ScrollTrigger);

export const useParallaxEffect = () => {
  useEffect(() => {
    const scrollbarElement: any = document.querySelector('#my-scrollbar');
    const smoothScrollbar: any = Scrollbar.get(scrollbarElement);

    if (!smoothScrollbar) return;

    smoothScrollbar.addListener(() => {
      ScrollTrigger.update();
    });

    ScrollTrigger.scrollerProxy(scrollbarElement, {
      scrollTop(value) {
        if (arguments.length) {
          smoothScrollbar.scrollTop = value;
        }
        return smoothScrollbar.scrollTop;
      },
      getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
      },
      pinType: scrollbarElement.style.transform ? 'transform' : 'fixed',
    });

    const images = gsap.utils.toArray('.parallax-image');
    const texts = gsap.utils.toArray('.fade-in-text');
    const parallex = gsap.utils.toArray('.parallex'); 
    const  scaleReverse = gsap.utils.toArray('.scale-reverse'); 

   

    images.forEach(( image : any)  => {
      gsap.fromTo(image,
        {
        scale: 1.3,

        },
        {
        scale: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: image,
          scroller: scrollbarElement,
          start: 'top 90%',
          scrub: true,
        },
      });
    });

    texts.forEach((text : any) => {
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
            scroller: scrollbarElement,
            start: 'top 90%',
            end: 'top 80%',
            scrub:true,
          },
        }
      );
    });

    parallex.forEach(( image : any)  => {
      gsap.fromTo(image,
        {
        scale: 1.06,
        y:80,
        },
        {
        scale: 1,
        y:-10,
        
        ease: 'none',
        scrollTrigger: {
          trigger: image,
          scroller: scrollbarElement,
          start: 'top 90%',
          end: 'top 10%',
          scrub: true,
        },
      });
    });
    scaleReverse.forEach(( image : any)  => {
      gsap.fromTo(image,
        {
        scale: 0.9,
        // y:80,
        },
        {
        scale: 1,
        // y:-10,
        
        ease: 'none',
        scrollTrigger: {
          trigger: image,
          scroller: scrollbarElement,
          start: 'top 90%',
          end: 'top 30%',
          scrub: true,
        },
      });
    });
    

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
};