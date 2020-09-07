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

  private generateBidimensionalMap(): BidimensionalMap {
    const r = Math.floor(this.rows / 2) + getRandomSign() * Math.floor(this.rows / 4);
    const c = Math.floor(this.columns / 2) + getRandomSign() * Math.floor(this.columns / 4);
    const result = initializeBidimensionalMap(this.rows, this.columns);
    result[r][c] = RIVER;
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
