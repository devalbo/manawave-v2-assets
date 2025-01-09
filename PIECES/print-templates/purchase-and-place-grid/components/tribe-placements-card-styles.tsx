import styled from "styled-components";


export const MwTribePlacementsCardDiv = styled.div.withConfig({
  componentId: 'MwTribePlacementsCardDiv'
})`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 3.5in;
  height: 2.5in;
  border: 1px solid #000;
  border-radius: 10px;
  font-family: 'Beleren', 'Garamond', serif;
  background-color: #f0f0f0;
  padding: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
`;


export const MwTribePlacementsCardBorderFrameDiv = styled.div`
  border: 2px solid black;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 3px;
  padding: 6px;
  height: 100%;
`;


export const TribePlacementsCardHeaderDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;


export const TribePlacementsGridDiv = styled.div.withConfig({
  componentId: 'TribePlacementsGridDiv'
})`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  flex-direction: column;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  gap: 1px; /* Add gap between grid items */
  border: 1px solid black; /* Outer border */
  & > div:nth-child(4n+2),
  & > div:nth-child(4n+3),
  & > div:nth-child(4n+4) {
    outline: 4px solid black; /* This line adds a 5px solid black border to all direct child elements of the grid container */
  }
`;
//   display: grid;
//   grid-template-columns: 1fr 1fr 1fr 1fr;
//   flex-direction: column;
//   width: 100%;
//   justify-content: space-between;
//   align-items: center;
// `;


export const TribeToClanAllocationsAreaDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  /* border: 2px solid black; */
`;


export const TribeToClanAllocationSectionDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 1px solid black;
`;


export const TribeToClanAllocationSectionHeaderDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 12px;
`;


export const TribeToClanAllocationSectionMarkersDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  /* justify-content: space-around; */
  /* align-items: center; */
  font-size: 12px;
`;


export const TribeToClanAllocationSectionMarkerItemDiv = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: space-around; */
  align-items: center;
  font-size: 12px;
  /* transform: rotate(90deg); */
`;