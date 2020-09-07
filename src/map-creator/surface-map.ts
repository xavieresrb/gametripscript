import { Mappable, BidimensionalMap } from '../types/interfaces';
import { BASE_SURFACE } from '../types/constants';
import { initializeBidimensionalMap } from '../utils/maps';

class SurfaceMap implements Mappable {
  rows: number;
  columns: number;
  private bidimensionalMap: BidimensionalMap;

  constructor(rows: number, columns: number) {
    this.rows = rows;
    this.columns = columns;
    this.bidimensionalMap = this.generateBidimensionalMap();
  }

  private generateBidimensionalMap(): BidimensionalMap {    
    return initializeBidimensionalMap(this.rows, this.columns, BASE_SURFACE);
  }

  getBidimensionalMap(): BidimensionalMap {
    return this.bidimensionalMap;
  }
}

export { SurfaceMap };
