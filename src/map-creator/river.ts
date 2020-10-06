import { BidimensionalMap, Feature } from '../types/interfaces';
import { FEATURES, RIVER } from '../types/constants';
import { getRandomSign } from '../utils/random';
import { initializeBidimensionalMap, mergeBidimensionalMap } from '../utils/maps';

class River implements Feature {
  type: string;
  quantity: number;
  rows: number;
  columns: number;
  private bidimensionalMap: BidimensionalMap;

  constructor(rows: number, columns: number, quantity: number = 1) {
    this.rows = rows;
    this.columns = columns;
    this.quantity = quantity;
    this.type = FEATURES.RIVER;
  }

  private addRiver(bidimensionalMap: BidimensionalMap): BidimensionalMap {
    const result = [...bidimensionalMap];

    const startRow = Math.floor(this.rows / 2) + getRandomSign() * Math.floor(this.rows / 4);
    const startColumn = Math.floor(this.columns / 2) + getRandomSign() * Math.floor(this.columns / 4);

    result[startRow][startColumn] = RIVER;

    return result;
  } 

  private generateBidimensionalMap(): BidimensionalMap {
    
    let result = initializeBidimensionalMap(this.rows, this.columns);

    for (let i = 0; i < this.quantity; i++) {
      result = this.addRiver(result);
    }
    
    return result;
  }

  merge(base: BidimensionalMap): BidimensionalMap {
    return mergeBidimensionalMap(base, this.getBidimensionalMap());
  }

  getBidimensionalMap(): BidimensionalMap {
    if (!this.bidimensionalMap) {
      this.bidimensionalMap = this.generateBidimensionalMap();
    }
    return this.bidimensionalMap;
  }
}

export { River };
