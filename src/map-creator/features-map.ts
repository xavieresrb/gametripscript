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
  // Different optional features
  rivers: number;

  // TODO: the different features should be in an options object
  constructor(rows: number, columns: number, rivers: number ) {
    this.rows = rows;
    this.columns = columns;
    this.rivers = rivers;
    this.bottom = new SurfaceMap(this.rows, this.columns);
    this.features = this.generateFeatures();
  }
  
  private generateFeatures(): Feature[] {
    return [new River(this.rows, this.columns, this.rivers)];
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
