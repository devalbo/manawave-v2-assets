import { IMwCardModeData } from "../../mw-card-data"
import { MwCardModesBlockDiv } from "./family-card-styles"
import { MwCardTemplateModeItem } from "./MwCardTemplateModeItem"


interface MwCardTemplateModeBlockProps {
  modes: IMwCardModeData[]
}

export const MwCardTemplateModeBlock = (props: MwCardTemplateModeBlockProps) => {
  const block =
    <MwCardModesBlockDiv>
      {props.modes.map((m, i) => (
        <MwCardTemplateModeItem
          mode={m}
          key={i}
          />
      ))}
    </MwCardModesBlockDiv>

  return block;
}
