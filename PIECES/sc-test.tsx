import React from "react";
import styled from "styled-components";


export const ScTestViewDiv = styled.div`
  /* height: 4in;
  width: 6in; */
  /* width: 0; */
  background-color: pink;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
  /* max-height: 120px; */
  height: 100px;
  align-items: center;
  margin: 3px;
  border: 4px solid black;
  border-radius: 10px;
`

export const ScTestViewDiv2 = styled(ScTestViewDiv)`
  border-style: solid;
  border-color: greenyellow;
  border-width: 3px;
  border-radius: 10px;
`;


export const ScTestView = () => {
  return (
    <>
      <ScTestViewDiv>
        <div>Hello</div>
      </ScTestViewDiv>
      <ScTestViewDiv2>
        <div>HelloDiv2</div>
      </ScTestViewDiv2>
    </>
  )
}
