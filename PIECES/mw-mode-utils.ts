import { IMwCardModeData, IUnindexedMwCardModeData } from "./mw-card-data";


export const mapToIndexedModes = (modes: IUnindexedMwCardModeData[]): IMwCardModeData[] => {
  const mappedModes: IMwCardModeData[] = modes
    .map((mode, index) => {
      return { ...mode, modeIndex: index };
    });
  return mappedModes;
}
