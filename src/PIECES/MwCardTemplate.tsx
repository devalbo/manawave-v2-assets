import React from 'react';
import './MwCard.css';
import { MwCardTemplateHeader } from './MwCardTemplateHeader';
import { IMwCardData } from './mw-card-data';
import { MwCardTemplateModeBlock } from './MwCardTemplateModeBlock';
import { MwCardTemplateArtBlock } from './MwCardTemplateArtBlock';


export const MwCardTemplate = (props: IMwCardData) => {
  return (
    <div className="mw-card">
      <div className="mw-card-border-frame">
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
      </div>
    </div>
  );
};
