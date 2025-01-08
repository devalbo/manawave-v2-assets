import styled from 'styled-components';


export const MwMonumentCardDiv = styled.div`
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

export const MwMonumentCardBorderFrameDiv = styled.div`
  border: 2px solid black;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 3px;
  height: 100%;
`;

export const MwMonumentCardTopHalfDiv = styled.div`
  border: 2px solid black;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 6px;
  height: 100%;
  transform: rotate(180deg);
`;
  

export const MwMonumentCardBottomHalfDiv = styled.div`
  border: 2px solid black;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 6px;
  height: 100%;
`;
