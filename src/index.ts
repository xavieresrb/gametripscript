import { generateMapEventHandler } from './controller';

const generateMapButton = document.getElementById('generateMap');
const mapDiv = document.getElementById('map');
const columnsNumberField = document.getElementById('columns');
const rowsNumberField = document.getElementById('rows');

generateMapButton.onclick = () => {
  generateMapEventHandler(mapDiv, columnsNumberField as HTMLInputElement, rowsNumberField as HTMLInputElement);
};
