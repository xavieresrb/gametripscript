import { FeatureMap } from './map-creator/features-map';
import { generateTextMap } from './map-converter/map-to-string';

function generateMapEventHandler(mapDiv: HTMLElement, columnsField: HTMLInputElement, rowsField: HTMLInputElement) {
  const columns = Number.parseInt(columnsField.value);
  const rows = Number.parseInt(rowsField.value);
  const surfaceMap = new FeatureMap(rows, columns);
  const textMap = generateTextMap(surfaceMap);

  mapDiv.innerHTML = textMap;
}

export { generateMapEventHandler };
