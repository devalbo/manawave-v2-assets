import styled from "styled-components";


export const MwClanPlacementsCardDiv = styled.div.withConfig({
  componentId: 'MwClanPlacementsCardDiv'
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


export const MwClanPlacementsCardBorderFrameDiv = styled.div`
  border: 2px solid black;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 3px;
  padding: 6px;
  height: 100%;
`;