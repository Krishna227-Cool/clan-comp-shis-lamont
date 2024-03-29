import { useState } from 'react';

export default function Logo() {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);

    // Reset the clicked state after a short delay
    setTimeout(() => {
      setIsClicked(false);
    }, 500);
  };

  return (
    <svg
      className={`w-8 h-8 ${isClicked ? 'spin' : ''}`}
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      onClick={handleClick}
    >
      <defs>
        <radialGradient cx="21.152%" cy="86.063%" fx="21.152%" fy="86.063%" r="79.941%" id="footer-logo">
          <stop stopColor="#4FD1C5" offset="0%" />
          <stop stopColor="#81E6D9" offset="25.871%" />
          <stop stopColor="#338CF5" offset="100%" />
        </radialGradient>
      </defs>
      <rect width="32" height="32" rx="16" fill="url(#footer-logo)" fillRule="nonzero" />
      <style jsx>{`
        .spin {
          transition: transform 0.5s ease-in-out;
          transform: rotate(360deg);
        }
      `}</style>
    </svg>
  );
}
