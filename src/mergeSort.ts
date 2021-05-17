export function mergeSort(array: number[]): number[] {
  return divide(array);
}
function divide(array: number[]): number[] {
  let halfLength = Math.ceil(array.length / 2);
  let low = array.slice(0, halfLength);
  let high = array.slice(halfLength);
  if (halfLength > 1) {
    low = divide(low);
    high = divide(high);
  }
  return combine(low, high);
}
function combine(low: number[], high: number[]): number[] {
  let indexLow = 0;
  let indexHigh = 0;
  let lengthLow = low.length;
  let lengthHigh = high.length;
  let combined = [];
  while (indexLow < lengthLow || indexHigh < lengthHigh) {
    let lowItem = low[indexLow];
    let highItem = high[indexHigh];
    if (lowItem !== undefined) {
      if (highItem === undefined) {
        combined.push(lowItem);
        indexLow++;
      } else {
        if (lowItem <= highItem) {
          combined.push(lowItem);
          indexLow++;
        } else {
          combined.push(highItem);
          indexHigh++;
        }
      }
    } else {
      combined.push(highItem);
      indexHigh++;
    }
  }
  return combined;
}
