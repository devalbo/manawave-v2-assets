import React from "react"
import { ICardModeData } from "./mw-card-data"
import { MwCardTemplateModeItem } from "./MwCardTemplateModeItem"

interface MwCardTemplateModeBlockProps {
  modes: ICardModeData[]
}

export const MwCardTemplateModeBlock = (props: MwCardTemplateModeBlockProps) => {
  const block =
    <div className="mw-card-modes-block">
      {props.modes.map((m, i) => (
        <MwCardTemplateModeItem
          mode={m}
          key={i}
          />
      ))}
    </div>

  return block;
}
