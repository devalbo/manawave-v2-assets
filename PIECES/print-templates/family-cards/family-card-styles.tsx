import styled from 'styled-components';


export const MwCardDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 2.5in;
  width: 3.35in;
  border: 1px solid #000;
  border-radius: 10px;
  font-family: 'Beleren', 'Garamond', serif;
  background-color: #f0f0f0;
  padding: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
`;

export const MwCardBorderFrameDiv = styled.div`
  border: 2px solid black;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 3px;
  height: 100%;
`;


export const MwCardHeaderDiv = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.2rem;
  font-weight: bold;
`;

export const MwCardHeaderNameAndTotemsDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MwCardHeaderNameDiv = styled.div`
  flex: 1;
`;

export const MwCardHeaderTotemsDiv = styled.div`
  flex: 1;
  height: 0.33in;
`;

export const MwCardHeaderInitDiv = styled.div`
  flex: 0 0 auto;
`;

export const MwCardArtBlockDiv = styled.div`

`;


export const MwCardModesBlockDiv = styled.div`
  font-size: 0.9rem;
  align-self: flex-end;
  width: 100%;
`;

export const MwCardModeItemDiv = styled.div`
  border: 2px solid black;
  margin-left: 0px;
  margin-right: 0px;
  min-height: 28px;
`;

export const MwCardModeItemManaClaimsRequiredSpan = styled.span`

`;

export const MwCardModeItemTextSpan = styled.span`

`;
