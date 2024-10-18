import React from 'react';
import './MwSourceAndSink.css';
import { createImgComponentFromTag } from './icons';


export interface IMwSourceCardProps {
  // title: string
}


const RoundIndexIcon = () => createImgComponentFromTag('<::manawave-round-token::>', 50);

export const MwSourceCard = (props: IMwSourceCardProps) => {
  return (
    <div className="mw-source-sink-card">
      <div className="mw-source-sink-border-frame">
        <div className="mw-source-body">
          <div className="mw-source-round-counters-box">
            <RoundIndexIcon />
          </div>
          
          <img src='/img/mw_logo_white_top.svg' width={200} height={200} />
          <img src='/img/down-arrow-svgrepo-com.svg' width={100} height={75} />
          <img src='/img/down-arrow-svgrepo-com.svg' width={100} height={75} />
        </div>
      </div>
    </div>
  );
};


export interface IMwSinkCardProps {
  // title: string
}

export const MwSinkCard = (props: IMwSinkCardProps) => {
  return (
    <div className="mw-source-sink-card">
      <div className="mw-source-sink-border-frame">
        <div className="mw-sink-body">
          <img src='/img/down-arrow-svgrepo-com.svg' width={100} height={75} />
          <img src='/img/down-arrow-svgrepo-com.svg' width={100} height={75} />
          <img src='/img/down-arrow-svgrepo-com.svg' width={100} height={75} />
          <img src='/img/mw_logo_white_top.svg' width={200} height={200} />
        </div>
      </div>
    </div>
  );
};
