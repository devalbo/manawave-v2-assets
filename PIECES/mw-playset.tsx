import React from "react";
import { getCardDefs } from "./mw-card-defs";
import { MwCardTemplate } from "./MwCardTemplate";
import { getMonumentDefs } from "./mw-monument-defs";
import { MwMonumentTemplate } from "./MwMonumentTemplate";
import { getClanDefs } from "./mw-clan-defs";
import { MwClanTemplate } from "./MwClanTemplate";
import { getBlankCardDefs } from "./mw-blank-card-defs";
import { IMwFamilySelectorData, MwFamilySelectorTemplate } from "./family-selector-template";
import { CardDecoration, PlayerId } from "./constants";
import { MwSinkCard, MwSourceCard } from "./MwSourceAndSink";


const MwCardDefs = getCardDefs();

export const MwCardsPlayset = () => {
  const mwCardsPlayset = MwCardDefs
    .map(def => {
      return (
        <MwCardTemplate
          totems={[def.totemId]}
          {...def}
          />
      ) 
    });
  
  return mwCardsPlayset;
}

export const MwFamilySelectorSet = (props: { playerId: PlayerId} ) => {
  const mwFamilySelectorDefs: IMwFamilySelectorData[] = MwCardDefs.map(def => (
    { 
      ...props,
      ...def,
      totems: [def.totemId],
    } as IMwFamilySelectorData
  ));

  const mwFamilySelectorPlayset = mwFamilySelectorDefs
    .map(def => {
      return (
        <MwFamilySelectorTemplate
          {...def}
          />
      ) 
    });
  
  return mwFamilySelectorPlayset;
}

const MwBlankCardDefs = getBlankCardDefs();

export const MwBlankCardsPlayset = () => {
  const mwCardsPlayset = MwBlankCardDefs
    .map(def => {
      return (
        <MwCardTemplate
          {...def}
          />
      ) 
    });
  
  return mwCardsPlayset;
}


const MwMonumentDefs = getMonumentDefs();

export const MwMonuments = () => {
  const mwMonuments = MwMonumentDefs
    .map(def => {
      return (
        <MwMonumentTemplate
          {...def}
          />
      ) 
    });
  
  return mwMonuments;
}

const MwClanDefs = getClanDefs();

export const MwClans = (props: {decoration: CardDecoration}) => {
  const mwClans = MwClanDefs
    .map((def, i) => {
      return (
        <MwClanTemplate
          {...def}
          decoration={props.decoration}
          key={i}
          />
      )
    });

  return mwClans;
}

export const MwSourceAndSink = () => {
  return (
    [
      <MwSourceCard />,
      <MwSinkCard />
    ]
  )
}
