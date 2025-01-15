import styled from 'styled-components';


export const MwClanCardDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 5in;
  height: 3in;
  border: 1px solid #000;
  border-radius: 10px;
  font-family: 'Beleren', 'Garamond', serif;
  background-color: #f0f0f0;
  padding: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
`;

export const MwClanCardBorderFrameDiv = styled.div`
  border: 2px solid black;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 3px;
  padding: 6px;
  height: 100%;
`;

export const MwClanCardHeaderDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 24px;
`;

export const MwClanCardBodyDiv = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  max-height: 200px;
`;

export const MwClanModesBlockDiv = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 0.9rem;
  flex-grow: 1;
  align-self: flex-end;
  justify-content: flex-end;
  align-items: flex-end;
  width: 100%;
`;

export const MwClanModeItemDiv = styled.div`
  border: 2px solid black;
  margin-left: 0px;
  margin-right: 0px;
  min-height: 38px;
  /* padding: 6px; */
  width: 100%;
`;

export const MwClanModeItemManaCostSpan = styled.span`

`;

export const MwClanModeItemTextSpan = styled.span`

`;

export const MwClanTablesDiv = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  max-height: 200px;
`;

export const MwClanConversionRatesTableContainerDiv = styled.div`
  flex-grow: 1;
  flex-basis: 0;
  padding: 2px;
  text-align: center;
  border: 1px solid #000;
`;

export const MwClanConversionRatesTableDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2px;
  width: 100%;
`;

export const MwClanConversionRatesTableGridHeaderDiv = styled.div`
  font-weight: bold;
  background-color: #f0f0f0;
  padding: 5px;
  text-align: center;
`;

export const MwClanConversionRatesTableGridItemDiv = styled.div`
  padding: 2px;
  padding-top: 5px;
  border: 1px solid #ccc;
  text-align: center;
`;


export const MwClanStockpileTableContainerDiv = styled.div`
  flex-grow: 1;
  flex-basis: 0;
  padding: 10px;
  text-align: center;
  border: 1px solid #000;
  font-weight: bold;
`;

export const MwClanStockpileTableDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 2px;
  width: 100%;
`;

export const MwClanStockpileTableGridHeaderDiv = styled.div`
  font-weight: bold;
  background-color: #f0f0f0;
  padding: 10px;
  text-align: center;
`;

export const MwClanStockpileTableGridItemDiv = styled.div`
  border: 1px solid #ccc;
  text-align: center;
`;


export const NewMwClanTemplateBodyMarkersDiv = styled.div`
  display: flex;
  flex-direction: row;
  /* justify-content: space-between; */
  /* align-items: center; */
  width: 100%;
`;

export const NewMwClanTemplateBodyBottomGridItemDiv = styled.div`
  border: 1px solid #ccc;
  text-align: center;
  width: 0.75in;
  height: 0.75in;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* height: 0.75in; */
`;

export const NewMwClanTemplateBodyBottomGridMarkerItemDiv = styled.div`
  border: 1px solid #ccc;
  text-align: center;
  width: 0.75in;
  /* height: 100%; */
  display: flex;
  /* flex-grow: 1; */
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* height: 0.75in; */
`;

export const NewMwClanTemplateStockpileGridDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2px;
  /* width: 100%; */
`;

export const NewMwClanTemplateStockpileGridItemDiv = styled.div`
  border: 1px solid #ccc;
  text-align: center;
  width: 0.75in;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* height: 0.75in; */
`;

export const NewMwClanTemplateStockpileDoubleGridItemDiv = styled.div`
  border: 1px solid #ccc;
  text-align: center;
  /* width: 0.75in; */
  width: calc(100% - 4px);
  grid-column: span 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* height: 0.75in; */
`;

export const NewMwClanTemplateBodyDiv = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  /* justify-content: space-between; */
  align-items: flex-start;
`;