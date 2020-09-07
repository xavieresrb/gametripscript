import { BidimensionalMap } from '../types/interfaces';
import { VOID } from '../types/constants';

function initializeBidimensionalMap(rows: number, columns: number, featureString: string = VOID): BidimensionalMap {
  const result: BidimensionalMap = new Array(rows);
  for (let i = 0; i < rows; i++) {
    result[i] = new Array(columns);
    result[i].fill(featureString);
  }

  return result;
}

function copy(input: BidimensionalMap): BidimensionalMap {
  const result: BidimensionalMap = new Array(input.length);
  for (let i = 0; i < input.length; i++) {
    result[i] = [...input[i]]
  }
  return result;
}

// TODO: the algorithm could be generalized for different sizes but not needed here
function mergeBidimensionalMap(inferior: BidimensionalMap, superior: BidimensionalMap): BidimensionalMap {
  const result = copy(inferior);

  for (let i = 0; i < result.length; i++) {      
    for (let j = 0; j < result[i].length; j++) {
      console.log(`superior[${i}][${j}] = ${superior[i][j]} noVoid ${superior[i][j] !== VOID}`)
      if (superior[i][j] !== VOID) {
        result[i][j] = superior[i][j];
      }
    }
  }

  return result;
}

export { initializeBidimensionalMap, mergeBidimensionalMap };
