import React from "react";
import { Sd1Totem } from "@mw-assets/type-defs/totem-type-defs";
import { OxTotemDataUrl, SpiritsTotemDataUrl, TigerTotemDataUrl, Totems, TurtleTotemDataUrl } from "./totems";


interface MwCardTemplateHeaderProps {
  name: string;
  familyTotems: (Totems | Sd1Totem)[];
  singlePickInitialPopulation: number
  multiplePickInitialPopulation: number
}


export const MwCardTemplateHeader = (props: MwCardTemplateHeaderProps) => {
  return (
    <div className="mw-card-header">
      <div className="mw-card-name-and-totems">
        <div className="mw-card-header-name">
          {props.name}
        </div>
        <div className="mw-card-header-totems">
          { props.familyTotems.includes("ox") ? 
            <img src={OxTotemDataUrl} alt="Flying Icon" height="100%" width="auto" /> :
            null }
          { props.familyTotems.includes("spirits") ? 
            <img src={SpiritsTotemDataUrl} alt="Flying Icon" height="100%" width="auto" /> :
            null }
          { props.familyTotems.includes("turtle") ? 
            <img src={TurtleTotemDataUrl} alt="Flying Icon" height="100%" width="auto" /> :
            null }
          { props.familyTotems.includes("tiger") ? 
            <img src={TigerTotemDataUrl} alt="Flying Icon" height="100%" width="auto" /> :
            null }
        </div>
      </div>
      <div className="mw-card-header-init">
        <span className="mw-card-mana">{props.singlePickInitialPopulation} [{props.multiplePickInitialPopulation}]</span>
      </div>
    </div>
  )
}
