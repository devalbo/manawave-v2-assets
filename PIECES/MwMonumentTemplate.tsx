import './MwCard.css';
import { createIconizedStringContent } from './icon-strings';


export interface IMonumentPrintSettings {
  fontSize: number    // defaults to 16
  imageSize: number   // defaults to 14
}

export interface IMwMonumentData {
  title: string
  text: string
  text2: string
  isDefault?: boolean
  monumentPrintSettings?: IMonumentPrintSettings
}


export const MwMonumentTemplate = (props: IMwMonumentData) => {

  const fontSize = props.monumentPrintSettings ? props.monumentPrintSettings.fontSize : 16;
  const imageSize = props.monumentPrintSettings ? props.monumentPrintSettings.imageSize : 14;

  const iconizedModeText = createIconizedStringContent(props.text, 'is-mode-img-icons', imageSize);
  const iconizedModeText2 = createIconizedStringContent(props.text2, 'is-mode-img-icons', imageSize);

  return (
    <div className="mw-monument-card">
      <div className="mw-monument-card-border-frame">
        <div className="mw-monument-card-top-half">
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
        </div>
        <div className="mw-monument-card-bottom-half">
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
        </div>
      </div>
    </div>
  );
};
