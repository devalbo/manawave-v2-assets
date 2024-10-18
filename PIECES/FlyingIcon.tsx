// FlyingIcon.tsx
import React from 'react';

const FlyingIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    // fill="currentColor"
    fill="blue"
  >
    <path d="M12 2L2 7l10 5 10-5-10-5zm0 13.29l-6.24-3.12-1.42 2.86 7.66 3.83 7.66-3.83-1.42-2.86L12 15.29z" />
  </svg>
);

// const svgElementToDataURL = (svgElement): string => {
//   const svgString = new XMLSerializer().serializeToString(svgElement);
  
//   // Encode the SVG string into base64
//   const base64Encoded = window.btoa(unescape(encodeURIComponent(svgString)));
  
//   // Return the data URL
//   return `data:image/svg+xml;base64,${base64Encoded}`;
// };

// export const getImageDataUrl = () => {
//   const svgElement = <FlyingIcon />
//   const x = svgElementToDataURL(svgElement);
//   return x;
// }

export default FlyingIcon;
