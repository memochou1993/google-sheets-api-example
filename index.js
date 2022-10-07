const { GoogleSpreadsheet } = require('google-spreadsheet');

(async () => {
  const spreadsheetId = ''; // required
  const sheetID = '0'; // required
  const doc = new GoogleSpreadsheet(spreadsheetId);
  await doc.useServiceAccountAuth(require('./credentials.json')); // required
  await doc.loadInfo();
  const sheet = doc.sheetsById[sheetID];
  const rows = await sheet.getRows();
  console.log(rows);
})();
