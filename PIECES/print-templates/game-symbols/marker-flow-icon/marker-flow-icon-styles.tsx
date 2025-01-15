import styled from 'styled-components';


export const MarkerFlowIconDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-grow: 0.5;
`;

export const MarkerFlowUpIconDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 0.5;
`;


export const VerticalConjurationIconDiv = styled.div.withConfig({
  componentId: 'VerticalConjurationIconDiv'
})`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HorizontalIconsDiv = styled.div.withConfig({
  componentId: 'HorizontalIconsDiv'
})`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
