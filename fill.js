const fs = require('fs');
const fontkit = require('fontkit');
const { PDFDocument, rgb } = require('pdf-lib');

// mm → pt
const mm = mm => mm * 2.83465;

async function fillForm() {
  // Чтение данных из formdata.json
  let formData = {};
  try {
    formData = JSON.parse(fs.readFileSync('formdata.json', 'utf8'));
  } catch (e) {}

  const pdfBytes = fs.readFileSync('fon_page.pdf');
  const fontBytes = fs.readFileSync('arial/times.ttf');
  const pdfDoc = await PDFDocument.load(pdfBytes);
  pdfDoc.registerFontkit(fontkit);
  const customFont = await pdfDoc.embedFont(fontBytes);
  const pages = pdfDoc.getPages();
  const page = pages[0];
  const size = 10;

  // Левая колонка
  page.drawText(formData.lastName || '', { x: mm(46), y: mm(297 - 63), size, font:customFont });
  page.drawText(formData.firstName || '', { x: mm(34), y: mm(297 - 67.5), size, font:customFont });
  page.drawText(formData.patronymic || '', { x: mm(50), y: mm(297 - 72), size, font:customFont });
  page.drawText(formData.birthYear || '', { x: mm(51), y: mm(297 - 77), size, font:customFont });
  page.drawText(formData.birthMonth || '', { x: mm(73), y: mm(297 - 77), size, font:customFont });
  page.drawText(formData.birthDay || '', { x: mm(93), y: mm(297 - 77), size, font:customFont });
  page.drawText(formData.birthPlace || '', { x: mm(51), y: mm(297 - 81.5), size, font:customFont });
  page.drawText(formData.field32 || '', { x: mm(25), y: mm(297 - 85.5), size, font: customFont });
  page.drawText(formData.field32b || '', { x: mm(25), y: mm(297 - 90.5), size, font: customFont });
  page.drawText(formData.nationality || '', { x: mm(45), y: mm(297 - 95.5), size, font:customFont });
  page.drawText(formData.field52 || '', { x: mm(25), y: mm(297 - 107), size, font: customFont });
  page.drawText(formData.party || '', { x: mm(51), y: mm(297 - 100), size, font:customFont });
  page.drawText(formData.youthUnion || '', { x: mm(70), y: mm(297 - 113), size, font:customFont });
  page.drawText(formData.field62 || '', { x: mm(25), y: mm(297 - 117.5), size, font: customFont });
  page.drawText(formData.tradeUnion || '', { x: mm(85), y: mm(297 - 126), size, font:customFont });
  page.drawText(formData.field72 || '', { x: mm(25), y: mm(297 - 133), size, font: customFont });
  page.drawText(formData.field81 || '', { x: mm(47), y: mm(297 - 139), size, font: customFont });
  page.drawText(formData.educationA || '', { x: mm(30), y: mm(297 - 143), size, font:customFont });
  page.drawText(formData.university || '', { x: mm(30), y: mm(297 - 149), size, font:customFont });
  page.drawText(formData.field83 || '', { x: mm(26), y: mm(297 - 156), size, font: customFont });
  page.drawText(formData.field84v || '', { x: mm(30), y: mm(297 - 162.5), size, font: customFont });
  page.drawText(formData.field85 || '', { x: mm(26), y: mm(297 - 168.5), size, font: customFont });
  page.drawText(formData.field86 || '', { x: mm(26), y: mm(297 - 176.5), size, font: customFont });
  page.drawText(formData.field91 || '', { x: mm(44), y: mm(297 - 200), size, font: customFont });
  page.drawText(formData.field92 || '', { x: mm(25), y: mm(297 - 207), size, font: customFont });
  page.drawText(formData.field101 || '', { x: mm(25), y: mm(297 - 223), size, font: customFont });
  page.drawText(formData.diplomaNumber || '', { x: mm(47), y: mm(297 - 234), size, font:customFont });
  page.drawText(formData.diplomaYear || '', { x: mm(77), y: mm(297 - 234), size, font:customFont });
  page.drawText(formData.diplomaIssuedBy || '', { x: mm(54), y: mm(297 - 241), size, font:customFont });

  // Правая колонка
  page.drawText(formData.mainProfession || '', { x: mm(117), y: mm(297 - 62), size, font:customFont });
  page.drawText(formData.specialityExp || '', { x: mm(115), y: mm(297 - 72), size, font:customFont });
  page.drawText(formData.totalExp || '', { x: mm(145), y: mm(297 - 81), size, font:customFont });
  page.drawText(formData.continuousExp || '', { x: mm(143), y: mm(297 - 87), size, font:customFont });
  page.drawText(formData.lastWork || '', { x: mm(117), y: mm(297 - 92), size, font:customFont });
  page.drawText(formData.reason || '', { x: mm(113), y: mm(297 - 101.5), size, font:customFont });
  page.drawText(formData.field143 || '', { x: mm(113), y: mm(297 - 110.5), size, font: customFont });
  page.drawText(formData.familyStatus || '', { x: mm(143), y: mm(297 - 116), size, font:customFont });
  page.drawText(formData.field152 || '', { x: mm(113), y: mm(297 - 125), size, font: customFont });
  page.drawText(formData.field153 || '', { x: mm(113), y: mm(297 - 134.5), size, font: customFont });
  page.drawText(formData.field154 || '', { x: mm(113), y: mm(297 - 140), size, font: customFont });
  page.drawText(formData.field161 || '', { x: mm(117), y: mm(297 - 145), size, font: customFont });
  page.drawText(formData.field162 || '', { x: mm(113), y: mm(297 - 150.5), size, font: customFont });
  page.drawText(formData.field171 || '', { x: mm(117), y: mm(297 - 156), size, font: customFont });
  page.drawText(formData.field172 || '', { x: mm(113), y: mm(297 - 161), size, font: customFont });
  page.drawText(formData.field181 || '', { x: mm(117), y: mm(297 - 167), size, font: customFont });
  page.drawText(formData.field182 || '', { x: mm(113), y: mm(297 - 172), size, font: customFont });
  page.drawText(formData.field191 || '', { x: mm(117), y: mm(297 - 177), size, font: customFont });
  page.drawText(formData.field192 || '', { x: mm(113), y: mm(297 - 182.5), size, font: customFont });
  page.drawText(formData.passportSeries || '', { x: mm(146), y: mm(297 - 188), size, font:customFont });
  page.drawText(formData.passportNumber || '', { x: mm(159), y: mm(297 - 188), size, font:customFont });
  page.drawText(formData.passportIssuedBy || '', { x: mm(151), y: mm(297 - 193), size, font:customFont });
  page.drawText(formData.field203 || '', { x: mm(113), y: mm(297 - 198), size, font: customFont });
  page.drawText(formData.passportDate || '', { x: mm(137), y: mm(297 - 204), size, font:customFont });
  page.drawText(formData.field205 || '', { x: mm(113), y: mm(297 - 209), size, font: customFont });
  page.drawText(formData.address || '', { x: mm(151), y: mm(297 - 214), size, font:customFont });
  page.drawText(formData.field212 || '', { x: mm(113), y: mm(297 - 219), size, font: customFont });
  page.drawText(formData.phone || '', { x: mm(133), y: mm(297 - 225), size, font:customFont });
  page.drawText(formData.signature || '', { x: mm(137), y: mm(297 - 230), size, font:customFont });

  // xarbiy hisobda turishi
  page.drawText(formData.militaryGroup || '', { x: mm(47), y: mm(297 - 262), size, font:customFont });
  page.drawText(formData.militaryType || '', { x: mm(49), y: mm(297 - 267), size, font:customFont });
  page.drawText(formData.militaryStructure || '', { x: mm(38), y: mm(297 - 272), size, font:customFont });
  page.drawText(formData.militaryRank || '', { x: mm(49), y: mm(297 - 277), size, font:customFont });
  page.drawText(formData.militaryRank2 || '', { x: mm(26), y: mm(297 - 282), size, font:customFont });
  page.drawText(formData.militarySpeciality || '', { x: mm(153), y: mm(297 - 259), size, font:customFont });
  page.drawText(formData.militaryNumber || '', { x: mm(116), y: mm(297 - 264), size, font:customFont });
  page.drawText(formData.militaryValid || '', { x: mm(157), y: mm(297 - 268), size, font:customFont });
  page.drawText(formData.militaryCommission || '', { x: mm(161), y: mm(297 - 273), size, font:customFont });
  page.drawText(formData.militaryCommission2 || '', { x: mm(149), y: mm(297 - 277), size, font:customFont });
  page.drawText(formData.militarySpecial || '', { x: mm(153), y: mm(297 - 282), size, font:customFont });

  const pdfBytesOut = await pdfDoc.save();
  fs.writeFileSync('./pdf/result_fon.pdf', pdfBytesOut);
  console.log('✅ PDF успешно заполнен: result_fon.pdf');
}

fillForm();