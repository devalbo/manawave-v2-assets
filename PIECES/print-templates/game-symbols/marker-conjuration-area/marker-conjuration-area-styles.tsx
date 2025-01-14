import styled from 'styled-components';


export const MarkerConjurationAreaDiv = styled.div.withConfig({
  componentId: 'MarkerConjurationAreaDiv'
})`
  display: flex;
  flex-direction: column;
  align-items: center;
`;


export const NewMarkerConjurationAreaDiv = styled.div.withConfig({
  componentId: 'NewMarkerConjurationAreaDiv'
})`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  align-items: center;
  justify-content: space-around;
`;


export const ConjurationMarkersAreaDiv = styled.div.withConfig({
  componentId: 'ConjurationMarkersAreaDiv'
})`
  display: flex;
  flex-direction: column;
`;


export const HorizontalConjurationMarkersAreaDiv = styled.div.withConfig({
  componentId: 'HorizontalConjurationMarkersAreaDiv'
})`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-grow: 1;
`;
