import { createIconizedStringContent } from "./icon-strings";
import { MODE_PRINT_SETTINGS_DEFAULT_FONT_SIZE, MODE_PRINT_SETTINGS_DEFAULT_IMAGE_SIZE } from "./constants";
import { IMwCardModeData } from "./mw-card-data";


interface MwCardTemplateModeItemProps {
  mode: IMwCardModeData
}

export const MwCardTemplateModeItem = (props: MwCardTemplateModeItemProps) => {

  const fontSize = props.mode.modePrintSettings ? props.mode.modePrintSettings.fontSize : MODE_PRINT_SETTINGS_DEFAULT_FONT_SIZE;
  const imageSize = props.mode.modePrintSettings ? props.mode.modePrintSettings.imageSize : MODE_PRINT_SETTINGS_DEFAULT_IMAGE_SIZE;

  const rawModeText = props.mode.modeText;
  const iconizedModeText = createIconizedStringContent(rawModeText, 'is-mode-img-icons', imageSize);

  const item =
    <div className="mw-card-mode-item" style={{ fontSize: fontSize, }}>
      <span className="mw-card-mode-item-mana-claims-required">[{props.mode.numManalithClaimsToActivate}]: </span>
      <span className="mw-card-mode-item-text">{iconizedModeText}</span>
    </div>

  return item;
}