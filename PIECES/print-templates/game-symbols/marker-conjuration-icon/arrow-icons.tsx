import { RightArrowSvg } from "./right-arrow";


const encodedRightArrowSvg = encodeURIComponent(RightArrowSvg);
export const RightArrowDataUrl = `data:image/svg+xml;charset=utf-8,${encodedRightArrowSvg}`;

export const RightArrowIcon = ({size, style}: {size: number, style?: React.CSSProperties}) => (
  <img src={RightArrowDataUrl} alt="Right Arrow" style={{ width: size, height: size, ...style }} />
);
