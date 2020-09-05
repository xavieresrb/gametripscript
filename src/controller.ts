function generateMapEventHandler(mapDiv: HTMLElement, columnsField: HTMLInputElement, rowsField: HTMLInputElement) {
  const columns = Number.parseInt(columnsField.value);
  const rows = Number.parseInt(rowsField.value);

  mapDiv.innerHTML = `There is here something with ${columns} columns and ${rows} rows`;
}

export { generateMapEventHandler };
