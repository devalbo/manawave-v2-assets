import { IMwCardModeData } from "../../mw-card-data"
import { MwClanTemplateModeItem } from "./MwClanTemplateModeItem"
import { createImgComponentFromTag } from "../../icons";
import { MwClanModeItemDiv, MwClanModesBlockDiv } from "./clan-card-styles";

interface MwClanTemplateModeBlockProps {
  modes: IMwCardModeData[]
}

const ManaLevelTokenIcon = () => createImgComponentFromTag('<::manalith-token::>', 20);
const PopulationTokenIcon = () => createImgComponentFromTag('<::population-token::>', 20);

export const MwClanTemplateModeBlock = (props: MwClanTemplateModeBlockProps) => {
  const block =
    <MwClanModesBlockDiv>
      {props.modes.map((m, i) => (
        <MwClanTemplateModeItem
          mode={m}
          key={i}
          />
      ))}
      <MwClanModeItemDiv style={{ 
        fontSize: 14,
        display: 'flex',
        justifyContent: "space-evenly",
        }}>
        <ManaLevelTokenIcon />
        <PopulationTokenIcon />
      </MwClanModeItemDiv>

    </MwClanModesBlockDiv>

  return block;
}
