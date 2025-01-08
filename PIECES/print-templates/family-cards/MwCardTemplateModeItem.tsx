import { createIconizedStringContent } from "../../icon-strings";
import { MODE_PRINT_SETTINGS_DEFAULT_FONT_SIZE, MODE_PRINT_SETTINGS_DEFAULT_IMAGE_SIZE } from "../../constants";
import { IMwCardModeData } from "../../mw-card-data";
import { MwCardModeItemDiv, MwCardModeItemManaClaimsRequiredSpan, MwCardModeItemTextSpan } from "./family-card-styles";


interface MwCardTemplateModeItemProps {
  mode: IMwCardModeData
}

export const MwCardTemplateModeItem = (props: MwCardTemplateModeItemProps) => {

  const fontSize = props.mode.modePrintSettings ? props.mode.modePrintSettings.fontSize : MODE_PRINT_SETTINGS_DEFAULT_FONT_SIZE;
  const imageSize = props.mode.modePrintSettings ? props.mode.modePrintSettings.imageSize : MODE_PRINT_SETTINGS_DEFAULT_IMAGE_SIZE;

  const rawModeText = props.mode.modeText;
  const iconizedModeText = createIconizedStringContent(rawModeText, 'is-mode-img-icons', imageSize);

  const item =
    <MwCardModeItemDiv style={{ fontSize: fontSize, }}>
      <MwCardModeItemManaClaimsRequiredSpan>[{props.mode.numManalithClaimsToActivate}]: </MwCardModeItemManaClaimsRequiredSpan>
      <MwCardModeItemTextSpan>{iconizedModeText}</MwCardModeItemTextSpan>
    </MwCardModeItemDiv>

  return item;
}
