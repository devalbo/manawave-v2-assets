import React from "react"
import { IMwCardModeData } from "./mw-card-data"
import { MwCardTemplateModeItem } from "./MwCardTemplateModeItem"

interface MwCardTemplateModeBlockProps {
  modes: IMwCardModeData[]
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
