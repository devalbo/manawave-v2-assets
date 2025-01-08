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
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 3px;
  padding: 6px;
  height: 100%;
`;

export const MwClanCardBodyDiv = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  max-height: 200px;
`;

export const MwClanModesBlockDiv = styled.div`
  font-size: 0.9rem;
  flex-grow: 1;
  align-self: flex-end;
  width: 100%;
`;

export const MwClanModeItemDiv = styled.div`
  border: 2px solid black;
  margin-left: 0px;
  margin-right: 0px;
  min-height: 38px;
  padding: 6px;
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
