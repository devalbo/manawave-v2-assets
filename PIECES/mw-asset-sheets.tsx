import React from "react";
import _ from "lodash";

import { MwBigCardPrintSheets, MwMediumCardPrintSheets, MwMediumCardLandscapePrintSheets } from "./mw-print-sheets";
import { getMonumentDefs } from "./mw-monument-defs";
import { MwMonumentTemplate } from "./print-templates/monument-cards/MwMonumentTemplate";
import { MwSinkCard, MwSourceCard } from "./MwSourceAndSink";
import { IMwFamilySelectorData, MwFamilySelectorTemplate } from "./print-templates/family-selector-cards/family-selector-template";
import { getCardDefs } from "./mw-card-defs";
import { MwCardTemplate } from "./print-templates/family-cards/MwCardTemplate";
import { getBlankCardDefs } from "./mw-blank-card-defs";


const MwMonumentDefs = getMonumentDefs();
const MwCardDefs = getCardDefs();
const MwBlankCardDefs = getBlankCardDefs();


export const MwLeylinesAndMonumentsSheets = () => {

  const mwMonuments = MwMonumentDefs
    .map((def, i) => {
      return (
        <MwMonumentTemplate
          {...def}
          key={i}
          />
      ) 
    });

  const cards = _.concat(
    mwMonuments,
    <MwSourceCard key={-1} />,
    <MwSinkCard key={-2} />,
  );
  
  return (
    <>
      <MwBigCardPrintSheets>
        {cards}
      </MwBigCardPrintSheets>
    </>
  )
}


export const MwFamilySelectorSheets = () => {

  const mwPlayerAFamilySelectorDefs: IMwFamilySelectorData[] = MwCardDefs.map(def => (
    { 
      playerId: 'PlayerA',
      totems: [def.totemId],
      ...def
    } as IMwFamilySelectorData
  ));

  const mwPlayer1FamilySelectorDefs: IMwFamilySelectorData[] = MwCardDefs.map(def => (
    { 
      playerId: 'Player1',
      totems: [def.totemId],
      ...def
    } as IMwFamilySelectorData
  ));

  const playerFamilySelectors = _.concat(
    mwPlayerAFamilySelectorDefs,
    mwPlayer1FamilySelectorDefs,
  );

  const mwFamilySelectorPlayset = playerFamilySelectors
    .map((def, i) => {
      return (
        <MwFamilySelectorTemplate
          {...def}
          key={i}
          />
      ) 
    });
  
  return (
    <>
      <MwMediumCardPrintSheets>
        {mwFamilySelectorPlayset}
      </MwMediumCardPrintSheets>
    </>
  )
}


export const MwFamilyCardSheets = () => {
  
  const mwCardsPlayset = MwCardDefs
    .map((def, i) => {
      return (
        <MwCardTemplate
          {...def}
          totems={[def.totemId]}
          key={i}
          />
      ) 
    });

  const mwCards = _.concat(
    mwCardsPlayset,
    mwCardsPlayset,
    mwCardsPlayset,
    mwCardsPlayset,
    );
    
  return (
    <>
      <MwMediumCardLandscapePrintSheets>
        {mwCards}
      </MwMediumCardLandscapePrintSheets>
    </>
  )
}


export const MwBlankFamilyCardSheets = () => {

  const mwCardsPlayset = MwBlankCardDefs
    .map((def, i) => {
      return (
        <MwCardTemplate
          {...def}
          key={i}
          />
      ) 
    });
    
  return (
    <>
      <MwMediumCardLandscapePrintSheets>
        {mwCardsPlayset}
      </MwMediumCardLandscapePrintSheets>
    </>
  )
}
