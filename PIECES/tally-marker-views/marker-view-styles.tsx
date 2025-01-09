import styled from "styled-components";


interface IMarkerViewDivProps {
  $backgroundColorHexCode: string
  $textColorHexCode: string
}


export const MarkerViewDiv = styled.div<IMarkerViewDivProps>`
  /* height: 2.5in;
  width: 3.5in; */
  /* width: 0; */
  /* background-color: yellow; */
  display: flex;
  /* flex-direction: row;
  flex-grow: 1; */
  /* justify-content: center; */
  align-content: center;
  /* width: 100%; */

  color: ${(props) => props.$textColorHexCode};
  background-color: ${(props) => props.$backgroundColorHexCode};
  /* background-color: #FFFFFF; */

  max-height: 120px;
  height: 14px;
  align-items: center;
  margin: 3px;
  margin-top: 2px;
  margin-bottom: 2px;
  border: 4px solid ${(props) => props.$backgroundColorHexCode};
  border-radius: 10px;
`;


export const VerticalMarkerViewDiv = styled.div<IMarkerViewDivProps>`
  display: flex;
  flex-direction: column;
  align-content: center;

  color: ${(props) => props.$textColorHexCode};
  background-color: ${(props) => props.$backgroundColorHexCode};

  max-height: 120px;
  /* height: 14px; */
  align-items: center;
  margin: 3px;
  margin-top: 2px;
  margin-bottom: 2px;
  border: 4px solid ${(props) => props.$backgroundColorHexCode};
  border-radius: 10px;
`;


export const MarkerViewIconDiv = styled.div<IMarkerViewDivProps>`
  background-color: #FFFFFF;
  padding: 2px;
  display: flex;
  justify-content: center;
  align-content: center;
  border-radius: 5px;
`;


export const MarkerViewTextDiv = styled.div<IMarkerViewDivProps>`
  padding-left: 4px;
  height: 20px;
  background-color: ${(props) => props.$backgroundColorHexCode};
  color: ${(props) => props.$textColorHexCode};
`;


export const MarkerViewLeftTextDiv = styled.div<IMarkerViewDivProps>`
  padding-right: 4px;
  height: 20px;
  background-color: ${(props) => props.$backgroundColorHexCode};
  color: ${(props) => props.$textColorHexCode};
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
