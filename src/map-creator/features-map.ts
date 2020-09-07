import { Mappable, BidimensionalMap, FeaturedMappable, Feature } from '../types/interfaces';
import { BASE_SURFACE } from '../types/constants';
import { SurfaceMap } from './surface-map';
import { River } from './river';

class FeatureMap implements FeaturedMappable {  
  rows: number;
  columns: number;
  private bidimensionalMap: BidimensionalMap;  
  features: Feature[];
  bottom: Mappable;

  // TODO: Instead of fixed, the features have to be an options in the constructor
  constructor(rows: number, columns: number) {
    this.rows = rows;
    this.columns = columns;
    this.bottom = new SurfaceMap(this.rows, this.columns);
    this.features = this.generateFeatures();
  }
  
  private generateFeatures(): Feature[] {
    return [new River(this.rows, this.columns)];
  }

  private generateBidimensionalMap(): BidimensionalMap {
    const base = this.bottom.getBidimensionalMap();

    return this.features.reduce((workmap, feature) => feature.merge(workmap), base);
  }


  getBidimensionalMap(): BidimensionalMap {
    if (!this.bidimensionalMap) {
      this.bidimensionalMap = this.generateBidimensionalMap();
    }
    return this.bidimensionalMap;
  }
}

export { FeatureMap };
