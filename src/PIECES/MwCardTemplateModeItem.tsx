import React from "react"
import { ICardModeData } from "./mw-card-data"
import { createIconizedStringContent } from "./icon-strings";


interface MwCardTemplateModeItemProps {
  mode: ICardModeData
}

export const MwCardTemplateModeItem = (props: MwCardTemplateModeItemProps) => {

  const fontSize = props.mode.modePrintSettings ? props.mode.modePrintSettings.fontSize : 16;
  const imageSize = props.mode.modePrintSettings ? props.mode.modePrintSettings.imageSize : 14;

  const rawModeText = props.mode.modeText;
  const iconizedModeText = createIconizedStringContent(rawModeText, 'is-mode-img-icons', imageSize);

  const item =
    <div className="mw-card-mode-item" style={{ fontSize: fontSize, }}>
      <span className="mw-card-mode-item-mana-cost">[{props.mode.manaCost}]: </span>
      <span className="mw-card-mode-item-text">{iconizedModeText}</span>
    </div>

  return item;
}