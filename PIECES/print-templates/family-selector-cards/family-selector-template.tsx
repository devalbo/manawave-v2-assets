import { OnCardPickData } from '../../mw-card-data';
import { OxTotemDataUrl, SpiritsTotemDataUrl, TurtleTotemDataUrl, TigerTotemDataUrl, Totems } from '../../totems';
import { MW_DOC_SITE_PREFIX, PlayerId } from '../../constants';
import { Sd1Totem } from '@mw-assets/type-defs/totem-type-defs';
import { MwFamilySelectorCardDiv, MwFamilySelectorDetailsRowDiv, MwFamilySelectorInitDiv, MwFamilySelectorLabelDiv, MwFamilySelectorNameDiv, MwFamilySelectorTotemsDiv } from './family-selector-styles';


export interface IMwFamilySelectorData {
  title: string;
  totems: (Totems | Sd1Totem)[];
  onCardPickData: OnCardPickData;
  playerId: PlayerId
}


export const MwFamilySelectorTemplate = (props: IMwFamilySelectorData) => {
  const playerIdImgSrc = props.playerId === 'Player1' ? 
    `${MW_DOC_SITE_PREFIX}/img/mw_logo_white_top.svg` :
    `${MW_DOC_SITE_PREFIX}/img/mw_logo_black_top.svg`;

  return (
    <MwFamilySelectorCardDiv
      // style={{
      //   width: "2.5in",
      //   height: "3.4in",    
      // }}
    >
      <div>
        <MwFamilySelectorNameDiv>
          {props.title}
        </MwFamilySelectorNameDiv>
        <MwFamilySelectorDetailsRowDiv>
          <MwFamilySelectorTotemsDiv>
            { props.totems.includes("ox") ? 
              <img src={OxTotemDataUrl} alt="Flying Icon" height="100%" width="auto" /> :
              null }
            { props.totems.includes("spirits") ? 
              <img src={SpiritsTotemDataUrl} alt="Flying Icon" height="100%" width="auto" /> :
              null }
            { props.totems.includes("turtle") ? 
              <img src={TurtleTotemDataUrl} alt="Flying Icon" height="100%" width="auto" /> :
              null }
            { props.totems.includes("tiger") ? 
              <img src={TigerTotemDataUrl} alt="Flying Icon" height="100%" width="auto" /> :
              null }
          </MwFamilySelectorTotemsDiv>
          <MwFamilySelectorInitDiv>
            <span className="mw-card-mana">{props.onCardPickData.singlePickInitialPopulation} [{props.onCardPickData.multiplePickInitialPopulation}]</span>
          </MwFamilySelectorInitDiv>
        </MwFamilySelectorDetailsRowDiv>
      </div>
      <MwFamilySelectorLabelDiv>
        <img src={playerIdImgSrc} height={100} width={100} />
      </MwFamilySelectorLabelDiv>
    </MwFamilySelectorCardDiv>
  );
};
