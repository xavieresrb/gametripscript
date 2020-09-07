declare type BidimensionalMap = string[][];

interface Mappable {
  rows: number;
  columns: number;

  getBidimensionalMap: () => BidimensionalMap;
}

interface Feature extends Mappable {
  type: string;
  quantity: number;
  merge: (base: BidimensionalMap) => BidimensionalMap;
}

interface FeaturedMappable extends Mappable {
  features: Feature[];
  bottom: Mappable;  
}

export { Mappable, BidimensionalMap, Feature, FeaturedMappable };
