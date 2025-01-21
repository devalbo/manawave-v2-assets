import { createIconizedStringContent } from '../../icon-strings';
import { MwMonumentCardDiv, MwMonumentCardBorderFrameDiv, MwMonumentCardTopHalfDiv, MwMonumentCardBottomHalfDiv } from './monument-card-styles';


export interface IMonumentPrintSettings {
  fontSize: number    // defaults to 16
  imageSize: number   // defaults to 14
}

export interface IMwMonumentData {
  title: string
  text: string
  text2: string
  backgroundImageUrl?: string
  isDefault?: boolean
  monumentPrintSettings?: IMonumentPrintSettings
}


export const MwMonumentTemplate = (props: IMwMonumentData) => {

  const fontSize = props.monumentPrintSettings ? props.monumentPrintSettings.fontSize : 16;
  const imageSize = props.monumentPrintSettings ? props.monumentPrintSettings.imageSize : 14;

  const iconizedModeText = createIconizedStringContent(props.text, 'is-mode-img-icons', imageSize);
  const iconizedModeText2 = createIconizedStringContent(props.text2, 'is-mode-img-icons', imageSize);

  // const backgroundUrl = '/card-images/monument-1.jpeg';
  const backgroundImageUrl = props.backgroundImageUrl;

  return (
    <MwMonumentCardDiv>
      <MwMonumentCardBorderFrameDiv
        backgroundImageUrl={backgroundImageUrl}
      >
        <MwMonumentCardTopHalfDiv>
          <div style={{ textAlign: 'center'}}>
            {props.isDefault ?
              <span style={{fontSize: 12, fontStyle: 'italic', fontWeight: 'bold', }}>
                Default
              </span>
              : null}
            <span style={{fontSize: 24, paddingLeft: 20, paddingRight: 20, }}>
              {props.title}
            </span>
            {props.isDefault ?
              <span style={{fontSize: 12, fontStyle: 'italic', fontWeight: 'bold', }}>
                Default
              </span>
              : null}
          </div>
          <div style={{ fontSize: fontSize, }}>
            {iconizedModeText}
          </div>
          <div style={{ fontSize: fontSize, }}>
            {iconizedModeText2}
          </div>
        </MwMonumentCardTopHalfDiv>
        <MwMonumentCardBottomHalfDiv>
          <div style={{ textAlign: 'center'}}>
            {props.isDefault ?
              <span style={{fontSize: 12, fontStyle: 'italic', fontWeight: 'bold', }}>
                Default
              </span>
              : null}
            <span style={{fontSize: 24, paddingLeft: 20, paddingRight: 20, }}>
              {props.title}
            </span>
            {props.isDefault ?
              <span style={{fontSize: 12, fontStyle: 'italic', fontWeight: 'bold', }}>
                Default
              </span>
              : null}
          </div>
          <div style={{ fontSize: fontSize, }}>
            {iconizedModeText}
          </div>
          <div style={{ fontSize: fontSize, }}>
            {iconizedModeText2}
          </div>
        </MwMonumentCardBottomHalfDiv>
      </MwMonumentCardBorderFrameDiv>
    </MwMonumentCardDiv>
  );
};
