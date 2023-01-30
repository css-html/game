const fs = require('fs');

const filePath = './build/index.d.ts';

fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    return console.log(err);
  }
  const result = data.replace(/interface/g, 'export interface');

  fs.writeFile(filePath, result, 'utf8', (err) => {
    if (err) return console.log(err);
    return console.log('Type file written');
  });
});
