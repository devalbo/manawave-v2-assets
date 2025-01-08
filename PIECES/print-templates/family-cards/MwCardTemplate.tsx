import { MwCardTemplateHeader } from './MwCardTemplateHeader';
import { IMwCardData } from '../../mw-card-data';
import { MwCardTemplateModeBlock } from './MwCardTemplateModeBlock';
import { MwCardTemplateArtBlock } from './MwCardTemplateArtBlock';
// import './MwCard.css';
import { MwCardDiv } from './family-card-styles';
import { MwCardBorderFrameDiv } from './family-card-styles';


export const MwCardTemplate = (props: IMwCardData) => {
  return (
    <MwCardDiv>
      <MwCardBorderFrameDiv>
        <MwCardTemplateHeader
          name={props.title}
          familyTotems={props.totems}
          singlePickInitialPopulation={props.onCardPickData.singlePickInitialPopulation}
          multiplePickInitialPopulation={props.onCardPickData.multiplePickInitialPopulation}
          />

        <MwCardTemplateArtBlock />

        <MwCardTemplateModeBlock
          modes={props.modes}
          />
      </MwCardBorderFrameDiv>
    </MwCardDiv>
  );
};
