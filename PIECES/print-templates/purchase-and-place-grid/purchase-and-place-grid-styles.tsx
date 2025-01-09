import styled from 'styled-components';


export const MwPlacementGridCardDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 6in;
  height: 4in;
  border: 1px solid #000;
  border-radius: 10px;
  font-family: 'Beleren', 'Garamond', serif;
  background-color: #f0f0f0;
  padding: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
`;

export const MwPlacementGridCardBorderFrameDiv = styled.div`
  border: 2px solid black;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 3px;
  padding: 6px;
  height: 100%;
`;

export const MwPlacementGridCardClanPlacementContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const MwPlacementGridCardClanPlacementRowDiv = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  width: 100%;
`;

export const MwPlacementGridCardClanPlacementColumnsRowDiv = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  width: 100%;
`;

export const MwPlacementGridCardClanPlacementColumnDiv = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin: 4px;
  margin-top: 0px;
  align-items: center;
  border: 1px solid #000;
`;

export const MwPlacementGridCardClanPlacementMarkersColumnDiv = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 40px;
  text-align: center;
`;

export const MwPlacementGridCardClanCounterItemDiv = styled.div`
  border: 1px solid #000;
  border-radius: 5px;
  height: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;
  align-items: center;
`;

export const MwPlacementGridCardConversionGridRowDiv = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  height: 40px;
`;

export const MwPlacementGridCardConversionGridRowItemDiv = styled.div`
  flex-grow: 1;
  text-align: center;
  /* height: 0.25in; */
  /* border: 1px solid #000; */
  align-items: end;
  border-radius: 5px;
`;
