import { Sd1Totem } from "@mw-assets/type-defs/totem-type-defs";
import { OxTotemDataUrl, SpiritsTotemDataUrl, TigerTotemDataUrl, Totems, TurtleTotemDataUrl } from "../../totems";
import { MwCardHeaderInitDiv, MwCardHeaderNameDiv, MwCardHeaderTotemsDiv } from "./family-card-styles";
import { MwCardHeaderNameAndTotemsDiv } from "./family-card-styles";
import { MwCardHeaderDiv } from "./family-card-styles";


interface MwCardTemplateHeaderProps {
  name: string;
  familyTotems: (Totems | Sd1Totem)[];
  singlePickInitialPopulation: number
  multiplePickInitialPopulation: number
}


export const MwCardTemplateHeader = (props: MwCardTemplateHeaderProps) => {
  return (
    <MwCardHeaderDiv>
      <MwCardHeaderNameAndTotemsDiv>
        <MwCardHeaderNameDiv>
          {props.name}
        </MwCardHeaderNameDiv>
        <MwCardHeaderTotemsDiv>
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
        </MwCardHeaderTotemsDiv>
      </MwCardHeaderNameAndTotemsDiv>
      <MwCardHeaderInitDiv>
        <span
          // className="mw-card-mana"
        >
          {props.singlePickInitialPopulation} [{props.multiplePickInitialPopulation}]
        </span>
      </MwCardHeaderInitDiv>
    </MwCardHeaderDiv>
  )
}
