

export type Totems = 'tiger' | 'turtle' | 'spirits' | 'ox' | 'demon'

export const SpiritSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100" fill="white" stroke="black" stroke-width="2">
  <rect x="2" y="2" width="96" height="96" fill="white" stroke="black" stroke-width="2" rx="20" />

  <!-- Ghost body -->
  <path d="M32 2 C20 2, 10 10, 10 24 Q10 40, 32 58 Q54 40, 54 24 C54 10, 44 2, 32 2 Z" />
  
  <!-- Eyes -->
  <circle cx="24" cy="24" r="4" fill="black" />
  <circle cx="40" cy="24" r="4" fill="black" />
  
  <!-- Mouth -->
  <path d="M24 34 Q32 42, 40 34" stroke="black" stroke-width="2" fill="transparent" />
</svg>
`

export const TurtleSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100" fill="green" stroke="black" stroke-width="2">
  <rect x="2" y="2" width="96" height="96" fill="white" stroke="black" stroke-width="2" rx="20" />

  <!-- Turtle shell -->
  <ellipse cx="50" cy="50" rx="30" ry="20" fill="green" stroke="black" stroke-width="2" />

  <!-- Turtle head -->
  <circle cx="50" cy="25" r="10" fill="green" stroke="black" stroke-width="2" />

  <!-- Turtle legs -->
  <circle cx="25" cy="50" r="8" fill="green" stroke="black" stroke-width="2" />
  <circle cx="75" cy="50" r="8" fill="green" stroke="black" stroke-width="2" />
  <circle cx="35" cy="70" r="8" fill="green" stroke="black" stroke-width="2" />
  <circle cx="65" cy="70" r="8" fill="green" stroke="black" stroke-width="2" />

  <!-- Turtle tail -->
  <path d="M50 70 Q50 75, 48 80" fill="none" stroke="black" stroke-width="2" />
</svg>
`

export const TigerSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100" fill="orange" stroke="black" stroke-width="2">
  <rect x="2" y="2" width="96" height="96" fill="white" stroke="black" stroke-width="2" rx="20" />
  
  <!-- Tiger body -->
  <ellipse cx="50" cy="60" rx="30" ry="20" fill="orange" stroke="black" stroke-width="2" />
  
  <!-- Tiger head -->
  <circle cx="50" cy="30" r="15" fill="orange" stroke="black" stroke-width="2" />

  <!-- Tiger ears -->
  <circle cx="40" cy="20" r="5" fill="orange" stroke="black" stroke-width="2" />
  <circle cx="60" cy="20" r="5" fill="orange" stroke="black" stroke-width="2" />

  <!-- Tiger stripes -->
  <path d="M35 25 Q40 30, 35 35" stroke="black" stroke-width="10" fill="none" />
  <path d="M65 25 Q60 30, 65 35" stroke="black" stroke-width="10" fill="none" />
  <path d="M50 30 Q55 35, 50 40" stroke="black" stroke-width="10" fill="none" />
  <path d="M50 30 Q45 35, 50 40" stroke="black" stroke-width="10" fill="none" />
  
  <!-- Tiger legs -->
  <rect x="30" y="70" width="10" height="15" fill="orange" stroke="black" stroke-width="2" />
  <rect x="60" y="70" width="10" height="15" fill="orange" stroke="black" stroke-width="2" />

  <!-- Tiger tail -->
  <path d="M70 70 Q85 75, 80 65" stroke="black" stroke-width="2" fill="none" />
</svg>
`


export const OxSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100" fill="brown" stroke="black" stroke-width="2">
  <rect x="2" y="2" width="96" height="96" fill="white" stroke="black" stroke-width="2" rx="20" />
  
  <!-- Ox body -->
  <ellipse cx="50" cy="60" rx="30" ry="20" fill="brown" stroke="black" stroke-width="2" />

  <!-- Ox head -->
  <circle cx="50" cy="35" r="12" fill="brown" stroke="black" stroke-width="2" />

  <!-- Ox horns -->
  <path d="M38 28 Q30 20, 38 20" stroke="black" stroke-width="2" fill="none" />
  <path d="M62 28 Q70 20, 62 20" stroke="black" stroke-width="2" fill="none" />

  <!-- Ox eyes -->
  <circle cx="45" cy="35" r="2" fill="black" />
  <circle cx="55" cy="35" r="2" fill="black" />

  <!-- Ox nose -->
  <circle cx="50" cy="40" r="1.5" fill="black" />

  <!-- Ox legs -->
  <rect x="35" y="70" width="6" height="15" fill="brown" stroke="black" stroke-width="2" />
  <rect x="59" y="70" width="6" height="15" fill="brown" stroke="black" stroke-width="2" />

  <!-- Ox tail -->
  <path d="M75 65 Q85 70, 80 55" stroke="black" stroke-width="2" fill="none" />
</svg>
`


const encodedOxTotemSvg = encodeURIComponent(OxSvg);
export const OxTotemDataUrl = `data:image/svg+xml;charset=utf-8,${encodedOxTotemSvg}`;

const encodedSpiritsTotemSvg = encodeURIComponent(SpiritSvg);
export const SpiritsTotemDataUrl = `data:image/svg+xml;charset=utf-8,${encodedSpiritsTotemSvg}`;

const encodedTurtleTotemSvg = encodeURIComponent(TurtleSvg);
export const TurtleTotemDataUrl = `data:image/svg+xml;charset=utf-8,${encodedTurtleTotemSvg}`;

const encodedTigerTotemSvg = encodeURIComponent(TigerSvg);
export const TigerTotemDataUrl = `data:image/svg+xml;charset=utf-8,${encodedTigerTotemSvg}`;
