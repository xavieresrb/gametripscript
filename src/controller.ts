import { FeatureMap } from './map-creator/features-map';
import { generateTextMap } from './map-converter/map-to-string';

function generateMapEventHandler(mapDiv: HTMLElement, columnsField: HTMLInputElement, rowsField: HTMLInputElement, riversField: HTMLInputElement) {
  const columns = Number.parseInt(columnsField.value);
  const rows = Number.parseInt(rowsField.value);  
  const rivers = Number.parseInt(riversField.value);
  const surfaceMap = new FeatureMap(rows, columns, rivers); 

  const textMap = generateTextMap(surfaceMap);


  mapDiv.innerHTML = textMap;
}

export { generateMapEventHandler };
