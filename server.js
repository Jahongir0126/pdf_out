const express = require('express');
const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');
const app = express();
app.use(express.json({limit: '2mb'}));
app.use(express.static(__dirname));

app.post('/generate', async (req, res) => {
  const data = req.body;
  // Сохраняем данные во временный файл
  fs.writeFileSync('formdata.json', JSON.stringify(data, null, 2));
  // Запускаем fill.js как отдельный процесс (ожидается, что fill.js читает formdata.json)
  const child = spawn('node', ['fill.js']);
  child.on('close', code => {
    if (code === 0 && fs.existsSync('./pdf/result_fon.pdf')) {
      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader('Content-Disposition', 'attachment; filename=result_fon.pdf');
      fs.createReadStream('./pdf/result_fon.pdf').pipe(res);
    } else {
      res.status(500).send('PDF generation error');
    }
  });
});

app.post('/generate-bez-fona', async (req, res) => {
  const data = req.body;
  fs.writeFileSync('formdata.json', JSON.stringify(data, null, 2));
  const child = spawn('node', ['bez-fona.js']);
  child.on('close', code => {
    if (code === 0 && fs.existsSync('./pdf/result_bez-fona.pdf')) {
      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader('Content-Disposition', 'attachment; filename=result_bez-fona.pdf');
      fs.createReadStream('./pdf/result_bez-fona.pdf').pipe(res);
    } else {
      res.status(500).send('PDF generation error');
    }
  });
});

app.listen(3000, () => {
  console.log('Сервер запущен на http://localhost:3000');
});
