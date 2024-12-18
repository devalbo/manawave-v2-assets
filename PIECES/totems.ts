

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


export const UnknownTotemSvg = `
<svg id="svg2" xmlns="http://www.w3.org/2000/svg" height="200" width="200" version="1.0">
 <path id="path2382" d="m165.33 113.44a103.61 103.61 0 1 1 -207.22 0 103.61 103.61 0 1 1 207.22 0z" transform="matrix(.93739 0 0 .93739 42.143 -6.3392)" stroke-width="0" fill="#fff"/>
 <g id="layer1">
  <path id="path2413" d="m100 0c-55.2 0-100 44.8-100 100-5.0495e-15 55.2 44.8 100 100 100s100-44.8 100-100-44.8-100-100-100zm0 12.812c48.13 0 87.19 39.058 87.19 87.188s-39.06 87.19-87.19 87.19-87.188-39.06-87.188-87.19 39.058-87.188 87.188-87.188zm1.47 21.25c-5.45 0.03-10.653 0.737-15.282 2.063-4.699 1.346-9.126 3.484-12.876 6.219-3.238 2.362-6.333 5.391-8.687 8.531-4.159 5.549-6.461 11.651-7.063 18.687-0.04 0.468-0.07 0.868-0.062 0.876 0.016 0.016 21.702 2.687 21.812 2.687 0.053 0 0.113-0.234 0.282-0.937 1.941-8.085 5.486-13.521 10.968-16.813 4.32-2.594 9.808-3.612 15.778-2.969 2.74 0.295 5.21 0.96 7.38 2 2.71 1.301 5.18 3.361 6.94 5.813 1.54 2.156 2.46 4.584 2.75 7.312 0.08 0.759 0.05 2.48-0.03 3.219-0.23 1.826-0.7 3.378-1.5 4.969-0.81 1.597-1.48 2.514-2.76 3.812-2.03 2.077-5.18 4.829-10.78 9.407-3.6 2.944-6.04 5.156-8.12 7.343-4.943 5.179-7.191 9.069-8.564 14.719-0.905 3.72-1.256 7.55-1.156 13.19 0.025 1.4 0.062 2.73 0.062 2.97v0.43h21.598l0.03-2.4c0.03-3.27 0.21-5.37 0.56-7.41 0.57-3.27 1.43-5 3.94-7.81 1.6-1.8 3.7-3.76 6.93-6.47 4.77-3.991 8.11-6.99 11.26-10.125 4.91-4.907 7.46-8.26 9.28-12.187 1.43-3.092 2.22-6.166 2.46-9.532 0.06-0.816 0.07-3.03 0-3.968-0.45-7.043-3.1-13.253-8.15-19.032-0.8-0.909-2.78-2.887-3.72-3.718-4.96-4.394-10.69-7.353-17.56-9.094-4.19-1.062-8.23-1.6-13.35-1.75-0.78-0.023-1.59-0.036-2.37-0.032zm-10.908 103.6v22h21.998v-22h-21.998z"/>
 </g>
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

const encodedUnknownTotemSvg = encodeURIComponent(UnknownTotemSvg);
export const UnknownTotemDataUrl = `data:image/svg+xml;charset=utf-8,${encodedUnknownTotemSvg}`;