import { Sd1Totem } from "@mw-assets/type-defs/totem-type-defs";
import { OxTotemDataUrl, SpiritsTotemDataUrl, TigerTotemDataUrl, Totems, TurtleTotemDataUrl } from "../../totems";
import { MwCardHeaderDetailsDiv, MwCardHeaderInitDiv, MwCardHeaderNameDiv, MwCardHeaderTotemsDiv, MwCardIconContainerDiv } from "./family-card-styles";
import { MwCardHeaderNameAndTotemsDiv } from "./family-card-styles";
import { MwCardHeaderDiv } from "./family-card-styles";
import { MwModeMarker } from "../game-symbols/mode-marker/mode-marker";


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
          <MwCardIconContainerDiv>
            <MwModeMarker
              modeIndex='blank'
              renderMode='print'
            />
          </MwCardIconContainerDiv>
        </MwCardHeaderNameDiv>
        <MwCardHeaderDetailsDiv>
          <MwCardHeaderInitDiv>
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
              <span>
                {props.singlePickInitialPopulation} [{props.multiplePickInitialPopulation}]
              </span>
            </MwCardHeaderTotemsDiv>
          </MwCardHeaderInitDiv>
        </MwCardHeaderDetailsDiv>
      </MwCardHeaderNameAndTotemsDiv>
    </MwCardHeaderDiv>
  )
}
