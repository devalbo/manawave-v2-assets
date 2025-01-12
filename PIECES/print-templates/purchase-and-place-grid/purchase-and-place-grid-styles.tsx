import styled from 'styled-components';


export const MwPlacementGridCardDiv = styled.div.withConfig({
  componentId: 'MwPlacementGridCardDiv'
})`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 16in;
  height: 4.5in;
  border: 1px solid #000;
  border-radius: 10px;
  font-family: 'Beleren', 'Garamond', serif;
  background-color: #f0f0f0;
  padding: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  /* transform: scale(0.75);
  transform-origin: top left; */
`;

export const MwPlacementGridCardBorderFrameDiv = styled.div.withConfig({
  componentId: 'MwPlacementGridCardBorderFrameDiv'
})`
  border: 2px solid black;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 3px;
  padding: 6px;
  height: 100%;
`;

export const MwPlacementGridCardClanPlacementContainerDiv = styled.div.withConfig({
  componentId: 'MwPlacementGridCardClanPlacementContainerDiv'
})`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const MwPlacementGridCardPlacementRowDiv = styled.div.withConfig({
  componentId: 'MwPlacementGridCardPlacementRowDiv'
})`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  width: 100%;
  justify-content: space-around;
`;

