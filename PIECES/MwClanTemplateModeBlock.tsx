import { IMwCardModeData } from "./mw-card-data"
import { MwClanTemplateModeItem } from "./MwClanTemplateModeItem"
import { createImgComponentFromTag } from "./icons";

interface MwClanTemplateModeBlockProps {
  modes: IMwCardModeData[]
}

const ManaLevelTokenIcon = () => createImgComponentFromTag('<::manalith-token::>', 20);
const PopulationTokenIcon = () => createImgComponentFromTag('<::population-token::>', 20);

export const MwClanTemplateModeBlock = (props: MwClanTemplateModeBlockProps) => {
  const block =
    <div className="mw-clan-modes-block">
      {props.modes.map((m, i) => (
        <MwClanTemplateModeItem
          mode={m}
          key={i}
          />
      ))}
      <div className="mw-clan-mode-item" style={{ 
        fontSize: 14,
        display: 'flex',
        justifyContent: "space-evenly",
        }}>
        <ManaLevelTokenIcon />
        <PopulationTokenIcon />
      </div>

    </div>

  return block;
}
