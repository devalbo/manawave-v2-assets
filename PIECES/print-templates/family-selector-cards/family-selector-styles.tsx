import styled from 'styled-components';


export const MwFamilySelectorCardDiv = styled.div`
  border-radius: 10px;
  border: 2px solid black;
  height: 3.4in;
  width: 2.5in;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: content-box;
  
  margin-left: 0px;
  margin-right: 0px;
  min-height: 38px;
  padding: 6px;
`;

export const MwFamilySelectorNameDiv = styled.div`
  font-family: 'Beleren', 'Garamond', serif;
  font-size: 1.2rem;
  font-weight: bold;
  font-style: italic;
`;

export const MwFamilySelectorDetailsRowDiv = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.2rem;
  font-weight: bold;
`;

export const MwFamilySelectorTotemsDiv = styled.div`
  flex: 1;
  height: 0.33in;
`;

export const MwFamilySelectorInitDiv = styled.div`

`;

export const MwFamilySelectorLabelDiv = styled.div`
  font-size: 0.9rem;
  align-items: center;
  text-align: center;
  margin-bottom: 0.33in;
`;
