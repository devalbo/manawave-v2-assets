import styled from "styled-components";


interface IModeMarkerDivProps {
  // $backgroundColorHexCode: string
  // $textColorHexCode: string
}


export const ModeMarkerDiv = styled.div.withConfig({
  componentId: 'ModeMarkerDiv'
})<IModeMarkerDivProps>`
  /* height: 2.5in;
  width: 3.5in; */
  /* width: 0; */
  /* background-color: yellow; */
  background-color: #000000;
  position: relative;
  display: flex;
  flex-direction: row;
  /* flex-direction: row;
  flex-grow: 1; */
  justify-content: center;
  align-content: center;
  /* width: 100%; */

  color: "#000000";
  background-color: "#FFFFFF";
  /* background-color: #FFFFFF; */

  /* max-height: 120px;
  height: 14px; */
  width: 0.5in;
  height: 0.5in;

  align-items: center;
  /* margin: 3px;
  margin-top: 2px;
  margin-bottom: 2px; */
  border: 4px solid #000000;
  border-radius: 15%;
  /* border-radius: 10px; */
`;


export const ModeMarkerIconDiv = styled.div.withConfig({
  componentId: 'ModeMarkerIconDiv'
})<IModeMarkerDivProps>`
  background-color: #000000;
  /* padding: 2px; */
  display: flex;
  justify-content: center;
  align-content: center;
  /* border-radius: 30%; */
  /* width: 40px;
  height: 40px; */
  width: 0.5in;
  height: 0.5in;
  /* border: 2px solid #0000ff; */
  display: flex;
  align-items: center;
  justify-content: center;
`;


export const TooltipContainerDiv = styled.div`
  position: relative;
  cursor: pointer;
`;


export const TooltipTextDiv = styled.div`
  visibility: hidden;
  width: 120px;
  background-color: #333;
  color: #fff;
  text-align: center;
  padding: 5px;
  border-radius: 5px;

  /* Position the tooltip */
  position: absolute;
  bottom: 125%; /* Position above the element */
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
  transition: opacity 0.3s, visibility 0.3s;
  
  /* Arrow at the bottom */
  &:after {
    content: '';
    position: absolute;
    top: 100%; /* Position below the tooltip */
    left: 50%;
    transform: translateX(-50%);
    border-width: 5px;
    border-style: solid;
    border-color: #333 transparent transparent transparent;
  }
`;


export const TooltipWrapperDiv = styled.div`
  &:hover ${TooltipTextDiv} {
    visibility: visible;
    opacity: 1;
  }
`;
