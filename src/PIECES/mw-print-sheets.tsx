import React from 'react';
import { createChunkedArrays } from '../utils/utils';
import './mw-print-sheets.css';
import _ from 'lodash';


export const MwBigCardPrintSheet = ({ children }) => {
  return (
    <div className="mw-big-card-print-sheet" style={{
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      // gridAutoRows: "minmax(100px, auto)",
      justifyContent: "space-around",  /* Adjusts spacing between cards */
      alignItems: "flex-start",        /* Aligns cards to the top */
      pageBreakAfter: "always",
      height: "8in",
      width: "10.5in",    
    }}>
      {children}
    </div>
  )
}


export const MwBigCardPrintSheets = ({ children }) => {

  const chunks = createChunkedArrays(children, 4);

  const sheets = chunks.map((chunk, i) => (
    <MwBigCardPrintSheet key={i}>
      {chunk}
    </MwBigCardPrintSheet>
  ))

  return (
    <div className="mw-big-card-print-sheets" style={{
      display: "grid",
    }}>
      {sheets}
    </div>
  )
}



export const MwMediumCardPrintSheet = ({ children }) => {
  return (
    <div className="mw-medium-card-print-sheet" style={{
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
      // gridAutoRows: "minmax(100px, auto)",
      justifyContent: "space-around",  /* Adjusts spacing between cards */
      alignItems: "flex-start",        /* Aligns cards to the top */
      pageBreakAfter: "always",
      // boxSizing: "content-box",
      border: '1px solid #000',
      width: "8in",
      height: "10.5in",    
    }}>
      {children}
    </div>
  )
}


export const MwMediumCardPrintSheets = ({ children }) => {

  const chunks = createChunkedArrays(children, 9);

  const sheets = chunks.map((chunk, i) => (
    <MwMediumCardPrintSheet key={i}>
      {chunk}
    </MwMediumCardPrintSheet>
  ))

  return (
    <div className="mw-medium-card-print-sheets" style={{
      display: "grid",
    }}>
      {sheets}
    </div>
  )
}



export const MwMediumCardLandscapePrintSheet = ({ children }) => {
  return (
    <div className="mw-medium-card-print-sheet" style={{
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
      // gridAutoRows: "minmax(100px, auto)",
      justifyContent: "space-around",  /* Adjusts spacing between cards */
      alignItems: "flex-start",        /* Aligns cards to the top */
      pageBreakAfter: "always",
      // boxSizing: "content-box",
      border: '1px solid #000',
      width: "10.5in",
      height: "8in",    
    }}>
      {children}
    </div>
  )
}


export const MwMediumCardLandscapePrintSheets = ({ children }) => {

  const chunks = createChunkedArrays(children, 9);

  const sheets = chunks.map((chunk, i) => (
    <MwMediumCardLandscapePrintSheet key={i}>
      {chunk}
    </MwMediumCardLandscapePrintSheet>
  ))

  return (
    <div className="mw-medium-card-landscape-print-sheets" style={{
      display: "grid",
    }}>
      {sheets}
    </div>
  )
}
