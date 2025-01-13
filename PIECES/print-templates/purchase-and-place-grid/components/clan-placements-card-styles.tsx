import styled from "styled-components";


export const MwClanPlacementsCardDiv = styled.div.withConfig({
  componentId: 'MwClanPlacementsCardDiv'
})`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 3.5in;
  height: 3.5in;
  border: 1px solid #000;
  border-radius: 10px;
  font-family: 'Beleren', 'Garamond', serif;
  background-color: #f0f0f0;
  padding: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
`;


export const MwClanPlacementsCardBorderFrameDiv = styled.div.withConfig({
  componentId: 'MwClanPlacementsCardBorderFrameDiv'
})`
  border: 2px solid black;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 3px;
  padding: 6px;
  height: 100%;
`;


export const MwClanPlacementsCardGridDiv = styled.div.withConfig({
  componentId: 'MwClanPlacementsCardGridDiv'
})`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  flex-direction: row;
  /* flex-grow: 1; */
  width: 100%;
`;


export const MwClanPlacementsCardGridItemDiv = styled.div.withConfig({
  componentId: 'MwClanPlacementsCardGridItemDiv'
})`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  margin: 4px;
  height: 0.75in;
  width: 1in;
  margin-top: 0px;
  align-items: center;
  border: 1px solid #000;
  justify-content: space-around;
  align-content: space-around;
`;


export const ClanManaManagementAreaDiv = styled.div.withConfig({
  componentId: 'ClanManaManagementAreaDiv'
})`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;


export const ClanManaManagementAreaItemDiv = styled.div.withConfig({
  componentId: 'ClanManaManagementAreaItemDiv'
})`
  display: flex;
  flex-direction: column;
  border: 1px solid #000;
  padding: 2px;
  flex-grow: 1;
  justify-content: center;
  height: 100%;
  /* display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center; */
`;


export const StartingManaCounterDiv = styled.div.withConfig({
  componentId: 'StartingManaCounterDiv'
})`
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-size: 14px;
`;


// export const MwClanPlacementCardClanPlacementMarkersColumnDiv = styled.div.withConfig({
//   componentId: 'MwClanPlacementCardClanPlacementMarkersColumnDiv'
// })`
//   display: flex;
//   flex-direction: column;
//   flex-grow: 1;
//   width: 40px;
//   text-align: center;
// `;


// export const MwClanPlacementCardClanCounterItemDiv = styled.div.withConfig({
//   componentId: 'MwClanPlacementCardClanCounterItemDiv'
// })`
//   border: 1px solid #000;
//   border-radius: 5px;
//   height: 40px;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-around;
//   text-align: center;
//   align-items: center;
// `;

// export const MwClanPlacementCardConversionGridRowDiv = styled.div.withConfig({
//   componentId: 'MwClanPlacementCardConversionGridRowDiv'
// })`
//   display: flex;
//   width: 100%;
//   justify-content: space-between;
//   align-items: center;
//   height: 40px;
// `;

// export const MwClanPlacementCardConversionGridRowItemDiv = styled.div.withConfig({
//   componentId: 'MwClanPlacementCardConversionGridRowItemDiv'
// })`
//   flex-grow: 1;
//   text-align: center;
//   /* height: 0.25in; */
//   /* border: 1px solid #000; */
//   align-items: end;
//   border-radius: 5px;
// `;
