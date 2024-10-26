import './mw-markers-summary-styles.css';


export const MwMarkersSummarySheet = () => {

  const markerItems = Array.from({ length: 30 }, (_, index) => index + 1); 

  return (
    <div className="mw-markers-summary-sheet">
      <div className="mw-markers-summary-border-frame">
        <div style={{fontSize: 24}}>
          Manawave Markers
        </div>

        <div className="mw-markers-summary-grid">
          <div>Name</div><div>Icon</div><div>Color</div>

          <div>Manalith Token</div><div>Icon</div><div>Color</div>
          <div>Population Token</div><div>Icon</div><div>Color</div>
          <div>Soulstain Token</div><div>Icon</div><div>Color</div>

          <div>Attack Counter</div><div>Icon</div><div>Color</div>
          <div>Shield Counter</div><div>Icon</div><div>Color</div>
          <div>Mana Counter</div><div>Icon</div><div>Color</div>
          <div>Manalith Usage Indicator</div><div>Icon</div><div>Color</div>
          <div>Population Increase Counter</div><div>Icon</div><div>Color</div>
          <div>Population Sacrifice Counter</div><div>Icon</div><div>Color</div>

          <div>Manawave Round Token</div><div>Icon</div><div>Color</div>

{/*           
          {
            markerItems.map((item, i) => {
              return (
                <div 
                  className='mw-markers-summary-grid-item'
                  key={i}
                  >
                    Item {i}
                </div>
              )
            })
          } */}
        </div>
      {/* {items.map((item) => (
        <GridItem key={item}>Item {item}</GridItem>
      ))}
    </GridContainer> */}
        {/* <div style={{fontSize: 16}}>

          <ul>
            <li>Increase Round Counter</li>
            <li>Select Family/Bloodline</li>
            <li>Place Family and Change Modes</li>
            <li>Add Family Populations</li>
            <li>Channel Clan Manaflows</li>
            <li>Purchase and Place Counters/Tokens</li>
            <li>Wage Clan Conflicts</li>
            <li>Power Monuments</li>
            <li>Consolidate Clan Counters</li>
            <li>Restart Manawave Execution</li>
          </ul>

        </div> */}
      </div>
    </div>
  );
};


// export const MwMarkersSummarySheet = () => {
//   return (
//     <MwMarkersSummaryContainerDiv
//       >
//       Manawave Markers
//     </MwMarkersSummaryContainerDiv>
//   )
// }