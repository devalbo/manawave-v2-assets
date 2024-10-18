import React from 'react';
import { Page, StyleSheet } from '@react-pdf/renderer';
import { CardViewComponent } from './card-view';
import { PlaySetPdfCard } from './type-defs';
import { BoxPieceFactionIndicatorId } from '../../../../manawave-game-wireframe/src/factions-db/pieces-db';
import { FactionIdsToIconImageUrls } from './constants';


// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    marginTop: "0.25in",
    // backgroundColor: '#E4E4E4',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});


const TopRowOffset = "0.0in";
const MiddleRowOffset = "3.5in";
const BottomRowOffset = "7.0in";

interface IPlaySetCardsPageComponentProps {
  pageIndex: number
  cards: PlaySetPdfCard[]
  factionIdsToIconImageUrls: Map<BoxPieceFactionIndicatorId, string>
}

export const PlaySetCardsPageComponent = (props: IPlaySetCardsPageComponentProps) => {

  const lefts = [
    "0.5in", "3.0in", "5.5in",
    "0.5in", "3.0in", "5.5in",
    "0.5in", "3.0in", "5.5in",
  ];

  const tops = [
    TopRowOffset, TopRowOffset, TopRowOffset,
    MiddleRowOffset, MiddleRowOffset, MiddleRowOffset,
    BottomRowOffset, BottomRowOffset, BottomRowOffset,
  ];


  return (
    <Page size="LETTER" style={styles.page} key={"page-" + props.pageIndex}>
      {props.cards.map((c, index) => {
        return (
          <CardViewComponent
            key={"card-page-" + props.pageIndex + ":" + index}
            left={lefts[index]}
            top={tops[index]}
            card={c}
            cardIndex={(props.pageIndex * 9) + index}
            factionIdsToIconImageUrls={FactionIdsToIconImageUrls}
            />
        )
      })}
    </Page>
  )
}
