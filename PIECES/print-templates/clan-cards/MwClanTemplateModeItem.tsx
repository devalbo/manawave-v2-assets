import { IMwCardModeData } from "../../mw-card-data"
import { createIconizedStringContent } from "../../icon-strings";
import { MwClanModeItemDiv, MwClanModeItemManaCostSpan, MwClanModeItemTextSpan } from "./clan-card-styles";


interface MwClanTemplateModeItemProps {
  mode: IMwCardModeData
}

export const MwClanTemplateModeItem = (props: MwClanTemplateModeItemProps) => {

  const fontSize = props.mode.modePrintSettings ? props.mode.modePrintSettings.fontSize : 16;
  const imageSize = props.mode.modePrintSettings ? props.mode.modePrintSettings.imageSize : 14;

  const rawModeText = props.mode.modeText;
  const iconizedModeText = createIconizedStringContent(rawModeText, 'is-mode-img-icons', imageSize);

  const item =
    <MwClanModeItemDiv style={{ fontSize: fontSize, }}>
      <MwClanModeItemManaCostSpan>[{props.mode.numManalithClaimsToActivate}]: </MwClanModeItemManaCostSpan>
      <MwClanModeItemTextSpan>{iconizedModeText}</MwClanModeItemTextSpan>
    </MwClanModeItemDiv>

  return item;
}
