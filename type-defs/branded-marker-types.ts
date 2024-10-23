export type MwMarkerTypeCounter = number & { __brand: 'MwMarkerTypeCounter' };
export type MwMarkerTypeToken = number & { __brand: 'MwMarkerTypeToken' };

export const createMwCounterCount = (count: number): MwMarkerTypeCounter => {
  return count as MwMarkerTypeCounter;
}

export const createMwTokenCount = (count: number): MwMarkerTypeToken => {
  return count as MwMarkerTypeToken;
}
