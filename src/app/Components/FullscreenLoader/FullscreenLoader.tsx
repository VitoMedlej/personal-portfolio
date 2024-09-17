"use client";
import { Box, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

const FullscreenCover = () => {
  const [fadeOut, setFadeOut] = useState(false); // Controls the opacity
  const [disappear, setDisappear] = useState(false); // Controls the final display:none

  useEffect(() => {
    // Start fading out after a delay
    const fadeOutTimer = setTimeout(() => {
      setFadeOut(true); // This will trigger the opacity change
    }, 900);

    // Set display:none AFTER the fade-out animation completes
    const disappearTimer = setTimeout(() => {
      setDisappear(true); // Finally hide the component
      document.body.classList.remove('no-scroll');
    }, 1600); // Wait 700ms (after fadeOut) to set display:none

    return () => {
      clearTimeout(fadeOutTimer);
      clearTimeout(disappearTimer);
    };
  }, []);

  // Do not render anything once it's supposed to disappear (after fade-out finishes)
  if (disappear) return null;

  return (
    <>
      {/* Inline styles to ensure fast loading */}
      <style>{`
        .fullscreen-cover {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          width: 100vw;
          position: fixed;
          top: 0;
          left: 0;
          background: white;
          z-index: 9999;
          transition: opacity 0.7s ease; /* Smooth fade out */
        }

        .fade-out {
          opacity: 0; /* Apply opacity fade out */
        }

        .word {
          font-size: 2em;
          display: block;
          font-weight: 900;
          margin-right: 0.25em;
          opacity: 0;
          animation: fadeIn 1s ease forwards;
        }

        .word:nth-child(1) {
          animation-delay: 0.6s;
        }

        .word:nth-child(2) {
          animation-delay: 0.9s;
        }

        .word:nth-child(3) {
          animation-delay: 1.3s;
        }

        @keyframes fadeIn {
          to {
            opacity: 1;
          }
        }
      `}</style>

      {/* Box with fading effect */}
      <Box
        className={`fullscreen-cover ${fadeOut ? 'fade-out' : ''}`} // Add fade-out class based on state
      >
        <Typography sx={{ color: 'black', gap: 1 }}>
          <span className="word">Guiding</span>
          <span className="word">Towards</span>
          <span className="word">Greatness</span>
        </Typography>
      </Box>
    </>
  );
};

export default FullscreenCover;
