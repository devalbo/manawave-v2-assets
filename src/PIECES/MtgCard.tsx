// import React from 'react';
// import './MtgCard.css';
// import ReactMarkdown from 'react-markdown';
// import FlyingIcon from './FlyingIcon';  // Import the SVG component


// interface MtgCardProps {
//   name: string;
//   manaCost: string;
//   type: string;
//   text: string;
//   powerToughness?: string; // Optional, only for creatures
//   imageUrl?: string;       // Optional, for card art
// }

// const markdownText = `
//   **Flying**, _vigilance_  
//   (Attacking doesn't cause this creature to tap.)

  
//   **Abilities:**
//   - Can block creatures with flying.
//   - Doesn't tap when attacking.
//   `;

//   const fColor = "blue";

//   // const dataUrl = getImageDataUrl();
//   const svgData = `
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         width="100"
//         height="100"
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="${fColor}"
//         strokeWidth="2"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       >
//         <circle cx="12" cy="12" r="10" />
//         <line x1="12" y1="2" x2="12" y2="22" />
//         <line x1="2" y1="12" x2="22" y2="12" />
//       </svg>
//     `;
    
//     const encodedSvg = encodeURIComponent(svgData);
//     const dataUrl = `data:image/svg+xml;charset=utf-8,${encodedSvg}`;

// const MtgCard: React.FC<MtgCardProps> = ({
//   name,
//   manaCost,
//   type,
//   text,
//   powerToughness,
//   imageUrl
// }) => {
//   return (
//     <div className="mtg-card">
//       <div className="mtg-card-header">
//         <span className="mtg-card-name">{name}</span>
//         <span className="mtg-card-mana">{manaCost}</span>
//       </div>
//       <div className="mtg-card-image">
//         {imageUrl ? <img src={imageUrl} alt={`${name} art`} /> : <div className="placeholder-image">No Image</div>}
//       </div>
//       <FlyingIcon /> {/* Embed the SVG */}
//       {/* <img src="http://localhost:3000/icons/icon1" alt="Flying Icon" /> */}
//       <img src={dataUrl} alt="Flying Icon" height="0.5in" width="0.5in" />
//       <div className="mtg-card-type">{type}</div>
//       {/* <div className="mtg-card-text">{text}</div> */}
//       <div className="mtg-card-text">
//         <ReactMarkdown>{markdownText}</ReactMarkdown>  {/* Render the Markdown */}
//       </div>
//       {powerToughness && (
//         <div className="mtg-card-power-toughness">
//           {powerToughness}
//         </div>
//       )}
//     </div>
//   );
// };

// export default MtgCard;
