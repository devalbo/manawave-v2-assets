import styled from "styled-components";


export const TribeToClanMarkerPlacementsCardDiv = styled.div.withConfig({
  componentId: 'TribeToClanMarkerPlacementsCardDiv'
})`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 2.5in;
  height: 2.5in;
  border: 1px solid #000;
  border-radius: 10px;
  font-family: 'Beleren', 'Garamond', serif;
  background-color: #f0f0f0;
  padding: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
`;


export const TribeToClanMarkerPlacementsCardBorderFrameDiv = styled.div.withConfig({
  componentId: 'TribeToClanMarkerPlacementsCardBorderFrameDiv'
})`
  border: 2px solid black;
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  margin-bottom: 3px;
  padding: 6px;
  height: 100%;
`;


export const TribeToClanMarkerPlacementsCardHeaderDiv = styled.div.withConfig({
  componentId: 'TribeToClanMarkerPlacementsCardHeaderDiv'
})`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 6px;
`;


export const TribeToClanMarkerPlacementsGridDiv = styled.div.withConfig({
  componentId: 'TribeToClanMarkerPlacementsGridDiv'
})`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  flex-direction: column;
  width: 100%;
  /* justify-content: space-between; */
  align-items: center;
  gap: 1px; /* Add gap between grid items */
  /* border: 1px solid black; */
  & > div:nth-child(4n+2),
  & > div:nth-child(4n+3),
  & > div:nth-child(4n+4) {
    /* outline: 1px solid black; This line adds a 5px solid black border to all direct child elements of the grid container */
  }
`;
//   display: grid;
//   grid-template-columns: 1fr 1fr 1fr 1fr;
//   flex-direction: column;
//   width: 100%;
//   justify-content: space-between;
//   align-items: center;
// `;


export const TribeToClanAllocationsAreaDiv = styled.div.withConfig({
  componentId: 'TribeToClanAllocationsAreaDiv'
})`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;


export const TribeToClanAllocationSectionDiv = styled.div.withConfig({
  componentId: 'TribeToClanAllocationSectionDiv'
})`
  display: flex;
  flex-direction: column;
  justify-content: start;
  /* width: 100%; */
  /* justify-content: space-between; */
  width: 0.75in;
  /* border: 1px solid black; */
`;


export const TribeToClanAllocationSectionHeaderDiv = styled.div.withConfig({
  componentId: 'TribeToClanAllocationSectionHeaderDiv'
})`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 12px;
`;


export const TribeToClanAllocationSectionMarkersDiv = styled.div.withConfig({
  componentId: 'TribeToClanAllocationSectionMarkersDiv'
})`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  font-size: 12px;
  /* width: 100%; */
  width: 0.75in;
`;


export const TribeToClanAllocationSectionMarkerItemDiv = styled.div.withConfig({
  componentId: 'TribeToClanAllocationSectionMarkerItemDiv'
})`
  display: flex;
  flex-direction: column;
  border: 1px solid #000;
  height: 0.5in;
  justify-content: space-around;
  align-items: center;
  font-size: 12px;
  /* transform: rotate(90deg); */
`;

export const MwTribePlacementCardConversionGridRowItemDiv = styled.div.withConfig({
  componentId: 'MwTribePlacementCardConversionGridRowItemDiv'
})`
  /* display: flex; */
  flex-grow: 1;
  text-align: center;
  /* height: 0.25in; */
  /* border: 1px solid #000; */
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`;


export const FromTribeToClanIconDiv = styled.div.withConfig({
  componentId: 'FromTribeToClanIconDiv'
})`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: start;
`;