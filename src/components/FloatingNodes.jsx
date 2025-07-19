import React from 'react';

export default function FloatingNodes() {
  return (
    <svg className="pointer-events-none fixed inset-0 -z-10" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <g className="animate-float" fill="#C08A2D" fillOpacity="0.3">
        <circle cx="20%" cy="30%" r="40" />
        <circle cx="70%" cy="60%" r="30" />
        <circle cx="40%" cy="80%" r="20" />
        <rect x="80%" y="20%" width="25" height="25" rx="5" />
      </g>
    </svg>
  );
}
