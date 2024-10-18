export const getDistinctElements = <T>(arr: T[]): T[] => {
  return Array.from(new Set(arr));
}


export const countDistinctElements = <T>(arr: T[]): Map<T, number> => {
  const keys = Array.from(new Set(arr));

  const retval = new Map<T, number>()

  keys.forEach(k => {
    retval.set(k, 0);
  })

  arr.forEach(k => {
    const count = retval.get(k)!;
    retval.set(k, count + 1);
  })

  return retval;
}


export const createChunkedArrays = <T>(arr: T[] | undefined, chunkSize: number): T[][] => {
  if (arr === undefined) {
    return [];
  }

  const retVal: T[][] = [];
  
  for (let i = 0; i < arr.length; i += chunkSize) {
    retVal.push(arr.slice(i, i + chunkSize));
  }

  return retVal;
}