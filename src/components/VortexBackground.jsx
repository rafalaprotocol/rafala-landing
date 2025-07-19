import React from 'react';

export default function VortexBackground() {
  return (
    <svg
      className="pointer-events-none fixed inset-0 -z-10"
      width="100%"
      height="100%"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="animate-spin-slow" fill="#C08A2D" fillOpacity="0.15">
        <path d="M50 15C65 25 75 45 60 65 45 80 25 70 25 50 25 30 35 20 50 15Z" />
        <path d="M55 20C70 30 80 50 65 70 50 85 30 75 30 55 30 35 40 25 55 20Z" />
        <path d="M45 18C60 30 70 48 52 68 35 85 18 70 20 50 22 30 33 20 45 18Z" />
      </g>
    </svg>
  );
}
