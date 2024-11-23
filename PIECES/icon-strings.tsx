import { getMwIconAscii, MwGameImgIcon } from "./icons";
import { TokenCounterTypeTags } from "./token-counter-icons";

export type IconStringMode = 'is-mode-react-icons' | 'is-mode-ascii-text' | 'is-mode-img-icons'

const RegEx = /^(.+?)(<::.+?::>)(.*)$/;


const _createContentWithImgIcons = (strText: string, imageSize: number): string | (string | JSX.Element)[] => {
  if (!strText || !strText.includes('<::')) {
    return strText;
  }

  const retval = [] as (string | JSX.Element)[];

  const regex = RegEx

  let match = strText.match(regex);
  let remaining = strText;

  let keyIndex = 0;
  while (match) {
    const leftText = match[1];
    const iconKey = match[2];
    remaining = match[3];

    const iconComponent = <MwGameImgIcon key={keyIndex} iconKey={iconKey} imageSize={imageSize} />;
  
    retval.push(leftText);
    retval.push(iconComponent);

    match = remaining.match(regex);
    keyIndex++;
  }

  if (remaining && remaining.length > 0) {
    retval.push(remaining);
  }

  return retval;
}


const _createAsciiStringContent = (strText: string): string => {
  if (!strText || !strText.includes('<::')) {
    return strText;
  }

  const retval = [] as string[];

  
  let match = strText.match(RegEx);
  let remaining = strText;

  while (match) {
    const leftText = match[1];
    const iconKey = match[2];
    remaining = match[3];

    const iconText = getMwIconAscii(iconKey as TokenCounterTypeTags);
  
    retval.push(leftText);
    retval.push(iconText);

    match = remaining.match(RegEx);
  }

  if (remaining && remaining.length > 0) {
    retval.push(remaining);
  }

  const joined = retval.join("");
  return joined;
}


export const createIconizedStringContent = (strText: string, mode: IconStringMode, imageSize: number): string | (string | JSX.Element)[] => {

  if (mode === 'is-mode-img-icons') {
    return _createContentWithImgIcons(strText, imageSize);
  }

  return _createAsciiStringContent(strText);
}
