function doGet() {
  return HtmlService.createHtmlOutputFromFile('index');
}

function getSheetNames() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheets = ss.getSheets();
  const sheetNames = sheets.map(sheet => sheet.getName());
  return sheetNames;
}

function getDataFromSheet(sheetName) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName(sheetName);

  // Fetch data starting from row 2 (skipping header row)
  const data = sheet.getDataRange().getValues();
  
  // Remove the header row (row 1) from the data array
  data.shift(); 

  return data;
}
