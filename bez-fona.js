const fs = require('fs');
const fontkit = require('fontkit');
const { PDFDocument } = require('pdf-lib');

// mm → pt
const mm = mm => mm * 2.83465;

async function fillForm() {
    const fontBytes = fs.readFileSync('arial/times.ttf');

  const pdfDoc = await PDFDocument.create();                                            // без фона

    pdfDoc.registerFontkit(fontkit); // ⬅ Обязательно для кастомных шрифтов 

  const customFont = await pdfDoc.embedFont(fontBytes); // Встраиваем шрифт
  const page = pdfDoc.addPage([mm(210), mm(297)]); // A4 size ..                         //  без фона

  const size = 10;

   // Левая колонка
  page.drawText('Исмоилов', { x: mm(46), y: mm(297 - 63), size, font:customFont });           // Фамилия
  page.drawText('Алишер', { x: mm(34), y: mm(297 - 67.5), size, font:customFont });           // Исми
  page.drawText('Рустамович', { x: mm(50), y: mm(297 - 72), size, font:customFont });         // Отасининг исми
  page.drawText('2000', { x: mm(51), y: mm(297 - 77), size, font:customFont });               // Туғилган йили
  page.drawText('01', { x: mm(73), y: mm(297 - 77), size, font:customFont });                 // ойи
  page.drawText('15', { x: mm(93), y: mm(297 - 77), size, font:customFont });                 // куни
  page.drawText('Ташкент', { x: mm(51), y: mm(297 - 81.5), size, font:customFont });          // Туғилган жойи
  page.drawText('31', { x: mm(25), y: mm(297 - 85.5), size, font: customFont });              // 3.2 
  page.drawText('32', { x: mm(25), y: mm(297 - 90.5), size, font: customFont });              // 3.2 
  page.drawText('Ўзбек', { x: mm(45), y: mm(297 - 95.5), size, font:customFont });            // Миллати
  

  page.drawText('52', { x: mm(25), y: mm(297 - 107), size, font: customFont });               // 5.2 
  page.drawText(`Yo'q`, { x: mm(51), y: mm(297 - 100), size, font:customFont });              // Фиркавийлиги

  page.drawText('Йўк', { x: mm(70), y: mm(297 - 113), size, font:customFont });                 // Ёшлар уюшмаси
  page.drawText('62', { x: mm(25), y: mm(297 - 117.5), size, font: customFont });               // 6.2 
  page.drawText('Xа', { x: mm(85), y: mm(297 - 126), size, font:customFont });                  // Касаба уюшмаси
  page.drawText('72', { x: mm(25), y: mm(297 - 133), size, font: customFont });  
  page.drawText('81', { x: mm(47), y: mm(297 - 139), size, font: customFont });                 // 8.1 
  page.drawText('Олий', { x: mm(30), y: mm(297 - 143), size, font:customFont });                // Маълумоти a)
  page.drawText('ТАТУ ', { x: mm(30), y: mm(297 - 149), size, font:customFont });               // б) ОТМ номи
  page.drawText('83', { x: mm(26), y: mm(297 - 156), size, font: customFont });                 // 8.3 
  page.drawText('84 в', { x: mm(30), y: mm(297 - 162.5), size, font: customFont });             // 8.4 (в) 
  page.drawText('85', { x: mm(26), y: mm(297 - 168.5), size, font: customFont });               // 8.5 
  page.drawText('86', { x: mm(26), y: mm(297 - 176.5), size, font: customFont });               // 8.6 
  // page.drawText('Информатика', { x: mm(46), y: mm(297 - 126), size, font:customFont });      // в)
  // page.drawText('Кундузги', { x: mm(46), y: mm(297 - 183), size, font:customFont });         // г)
 
  page.drawText('91', { x: mm(44), y: mm(297 - 200), size, font: customFont });           // 9.1 
  page.drawText('92', { x: mm(25), y: mm(297 - 207), size, font: customFont });           // 9.2 
  page.drawText('101', { x: mm(25), y: mm(297 - 223), size, font: customFont });          // 10.1 
  
  
  page.drawText('123456', { x: mm(47), y: mm(297 - 234), size, font:customFont });           // Диплом рақами
  page.drawText('2023', { x: mm(77), y: mm(297 - 234), size, font:customFont });             // Йил
  page.drawText('15-may', { x: mm(54), y: mm(297 - 241), size, font:customFont });           // Ким томонидан берилган
  // page.drawText('102', { x: mm(54), y: mm(297 - 245), size, font: customFont });          // 10.2 






  // Правая колонка — дополнительные строки
  // Правая колонка (начинается с 11)
  page.drawText('Муҳандис', { x: mm(117), y: mm(297 - 62), size, font:customFont });       // Асосий касб
  page.drawText('5 йил', { x: mm(115), y: mm(297 - 72), size, font:customFont });          // Ихтисос бўйича иш стажи
  page.drawText('7 йил', { x: mm(145), y: mm(297 - 81), size, font:customFont });          // Умумий иш стажи
  page.drawText('4 йил', { x: mm(143), y: mm(297 - 87), size, font:customFont });          // Узлуксиз стажи

  page.drawText('TATU, катта ўқитувчи', { x: mm(117), y: mm(297 - 92), size, font:customFont });    // Охирги иш жойи
  page.drawText('Иш тугади, шартнома', { x: mm(113), y: mm(297 - 101.5), size, font:customFont });  // Сабаби
  page.drawText('143', { x: mm(113), y: mm(297 - 110.5), size, font: customFont });                  // 14.3 

  page.drawText('Уйланган', { x: mm(143), y: mm(297 - 116), size, font:customFont });           // Оилавий ҳолати
  // page.drawText('3 фарзанд', { x: mm(115), y: mm(297 - 112), size, font:customFont });        // фарзандлари сони
  page.drawText('152', { x: mm(113), y: mm(297 - 125), size, font: customFont });                 // 15.2 
  page.drawText('153', { x: mm(113), y: mm(297 - 134.5), size, font: customFont });                 // 15.3 
  page.drawText('154', { x: mm(113), y: mm(297 - 140), size, font: customFont });                 // 15.4 
  page.drawText('161', { x: mm(117), y: mm(297 - 145), size, font: customFont });                 // 16.1 
  page.drawText('162', { x: mm(113), y: mm(297 - 150.5), size, font: customFont });                 // 16.2 
  page.drawText('171', { x: mm(117), y: mm(297 - 156), size, font: customFont });                 // 17.1 
  page.drawText('172', { x: mm(113), y: mm(297 - 161), size, font: customFont });                 // 17.2 
  page.drawText('181', { x: mm(117), y: mm(297 - 167), size, font: customFont });                 // 18.1 
  page.drawText('182', { x: mm(113), y: mm(297 - 172), size, font: customFont });                 // 18.2 
  page.drawText('191', { x: mm(117), y: mm(297 - 177), size, font: customFont });                 // 19.1 
  page.drawText('192', { x: mm(113), y: mm(297 - 182.5), size, font: customFont });                 // 19.2 
  page.drawText('AB', { x: mm(146), y: mm(297 - 188), size, font:customFont });                   // Паспорт
  page.drawText('1234567', { x: mm(159), y: mm(297 - 188), size, font:customFont });              // Паспорт
  page.drawText('ИИБ Тошкент', { x: mm(151), y: mm(297 - 193), size, font:customFont });          // Ким берган
  page.drawText('203', { x: mm(113), y: mm(297 - 198), size, font: customFont });                 // 20.3 
  page.drawText('01.01.2020', { x: mm(137), y: mm(297 - 204), size, font:customFont });           // Берилган вақти
  page.drawText('205', { x: mm(113), y: mm(297 - 209), size, font: customFont });                 // 20.5 
  page.drawText('Тошкент ш.', { x: mm(151), y: mm(297 - 214), size, font:customFont });           // Турар жойи
  page.drawText('212', { x: mm(113), y: mm(297 - 219), size, font: customFont });                    // 21.2 
  page.drawText('+998 90 123 45 67', { x: mm(133), y: mm(297 - 225), size, font:customFont });    // Телефон
  page.drawText('Имзо', { x: mm(137), y: mm(297 - 230), size, font:customFont });                 // Имзоси




  // xarbiy hisobda turishi 
  page.drawText('xisob guruh', { x: mm(47), y: mm(297 - 262), size, font:customFont });
  page.drawText('xisob turkumi', { x: mm(49), y: mm(297 - 267), size, font:customFont });
  page.drawText(' tarkibi', { x: mm(38), y: mm(297 - 272), size, font:customFont });
  page.drawText('xarbiy unvoni', { x: mm(49), y: mm(297 - 277), size, font:customFont });
  page.drawText('xarbiy unvoni2', { x: mm(26), y: mm(297 - 282), size, font:customFont });

  page.drawText('xisobga olngan ixtisosi', { x: mm(153), y: mm(297 - 259), size, font:customFont });
  page.drawText('№', { x: mm(116), y: mm(297 - 264), size, font:customFont });
  page.drawText('yaroqliligi', { x: mm(157), y: mm(297 - 268), size, font:customFont });
  page.drawText('komisiya nomi', { x: mm(161), y: mm(297 - 273), size, font:customFont });
  page.drawText('komisiya nomi2', { x: mm(149), y: mm(297 - 277), size, font:customFont });
  page.drawText('Maxsus hisob ', { x: mm(153), y: mm(297 - 282), size, font:customFont });

  // Можно продолжить добавлять во вторую часть формы (Харбий ҳисоб...)

  const pdfBytesOut = await pdfDoc.save();
  fs.writeFileSync('./pdf/result_bez-fona.pdf', pdfBytesOut);
  console.log('✅ PDF успешно заполнен: result_bez-fona.pdf');
}

fillForm();
