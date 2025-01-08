import styled from 'styled-components';


export const MwTribeCardDiv = styled.div`
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


export const MwTribeCardBorderFrameDiv = styled.div`
  border: 2px solid black;
  display: flex;
  flex-direction: column;
  margin-bottom: 3px;
  height: 100%;
`;


export const MwTribePlayerHeaderDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 5px;
`;

export const MwTribePlayerHeaderIdIcon = styled.img`
  height: 50px;
  width: 50px;
`;

export const MwTribeTablesDiv = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  max-height: 200px;
`;


export const MwTribeConversionRatesTableContainerDiv = styled.div`
  flex-grow: 1;
  flex-basis: 0;
  padding: 2px;
  text-align: center;
  border: 1px solid #000;
`;

export const MwTribeConversionRatesTableDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2px;
  width: 100%;
`;

export const MwTribeConversionRatesTableGridHeaderDiv = styled.div`
  font-weight: bold;
  background-color: #f0f0f0;
  padding: 5px;
  text-align: center;
`;

export const MwTribeConversionRatesTableGridItemDiv = styled.div`
  padding: 2px;
  padding-top: 5px;
  border: 1px solid #ccc;
  text-align: center;
`;


export const MwTribeStockpileTableContainerDiv = styled.div`
  flex-grow: 1;
  flex-basis: 0;
  padding: 10px;
  text-align: center;
  border: 1px solid #000;
  font-weight: bold;
`;

export const MwTribeStockpileTableDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  width: 100%;
`;

export const MwTribeStockpileTableGridHeaderDiv = styled.div`
  font-weight: bold;
  background-color: #f0f0f0;
  padding: 5px;
  text-align: center;
`;

export const MwTribeStockpileTableGridItemDiv = styled.div`
  padding: 2px;
  padding-top: 5px;
  border: 1px solid #ccc;
  text-align: center;
`;
