import styled from "styled-components";


export const TribeManaConjurationCardDiv = styled.div.withConfig({
  componentId: 'TribeManaConjurationCardDiv'
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


export const TribeManaConjurationCardBorderFrameDiv = styled.div.withConfig({
  componentId: 'TribeManaConjurationCardBorderFrameDiv'
})`
  border: 2px solid black;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 3px;
  padding: 6px;
  height: 100%;
`;


export const TribeManaConjurationCardHeaderDiv = styled.div.withConfig({
  componentId: 'TribeManaConjurationCardHeaderDiv'
})`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;


export const TribeManaConjurationGridDiv = styled.div.withConfig({
  componentId: 'TribeManaConjurationGridDiv'
})`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  flex-direction: column;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  gap: 1px; /* Add gap between grid items */
  /* border: 1px solid black;  */
  & > div:nth-child(n+1),
  & > div:nth-child(n+2),
  & > div:nth-child(n+3) {
    outline: 1px solid black;
  }
`;
//   display: grid;
//   grid-template-columns: 1fr 1fr 1fr 1fr;
//   flex-direction: column;
//   width: 100%;
//   justify-content: space-between;
//   align-items: center;
// `;


export const TribeManaConjurationGridItemDiv = styled.div.withConfig({
  componentId: 'TribeManaConjurationGridItemDiv'
})`
  display: flex;
  flex-grow: 1;
  text-align: center;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  height: 0.66in;

  margin: 3px;
`;

export const TribeManaConjurationInteractiveGridItemDiv = styled(TribeManaConjurationGridItemDiv).withConfig({
  componentId: 'TribeManaConjurationInteractiveGridItemDiv'
})`
  cursor: pointer;
  
  /* Add hover effect */
  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
    transform: scale(0.95);
    border: 1px solid gray;
      /* translate(-4px, -4px); Added scale */
  }
  
  /* Add active/click effect */
  &:active {
    transform: scale(0.9);
      /* translate(-2px, -2px); Added scale */
  }

  /* Updated transition to include scale */
  transition: all 0.2s ease;
`;


export const TribeManaConjurationStartingManaDiv = styled.div.withConfig({
  componentId: 'TribeManaConjurationStartingManaDiv'
})`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 0.75in;
  border: 1px solid black;
`;