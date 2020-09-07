import { Mappable } from '../types/interfaces';

function generateTextMap(map: Mappable): string {
  return map.getBidimensionalMap().reduce((acc: string, row: string[]) => `${acc}${row.join('')}<br>`, '');
}

export { generateTextMap };
