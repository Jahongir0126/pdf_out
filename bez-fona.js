const fs = require('fs');
const fontkit = require('fontkit');
const { PDFDocument } = require('pdf-lib');

// mm → pt
const mm = mm => mm * 2.83465;

async function fillForm() {
    // Чтение данных из formdata.json
    let formData = {};
    try {
        formData = JSON.parse(fs.readFileSync('formdata.json', 'utf8'));
    } catch (e) {}

    const fontBytes = fs.readFileSync('arial/times.ttf');
    const pdfDoc = await PDFDocument.create();
    pdfDoc.registerFontkit(fontkit);
    const customFont = await pdfDoc.embedFont(fontBytes);
    const page = pdfDoc.addPage([mm(210), mm(297)]);
    const size = 10;

    // Левая колонка
    page.drawText(formData.lastName || '', { x: mm(46), y: mm(297 - 63), size, font:customFont });
    page.drawText(formData.firstName || '', { x: mm(34), y: mm(297 - 67.5), size, font:customFont });
    page.drawText(formData.patronymic || '', { x: mm(50), y: mm(297 - 72), size, font:customFont });
    page.drawText(formData.birthYear || '', { x: mm(51), y: mm(297 - 77), size, font:customFont });
    page.drawText(formData.birthMonth || '', { x: mm(73), y: mm(297 - 77), size, font:customFont });
    page.drawText(formData.birthDay || '', { x: mm(93), y: mm(297 - 77), size, font:customFont });
    page.drawText(formData.birthPlace || '', { x: mm(51), y: mm(297 - 81.5), size, font:customFont });
    page.drawText(formData.nationality || '', { x: mm(45), y: mm(297 - 95.5), size, font:customFont });
    page.drawText(formData.party || '', { x: mm(51), y: mm(297 - 100), size, font:customFont });
    page.drawText(formData.youthUnion || '', { x: mm(70), y: mm(297 - 113), size, font:customFont });
    page.drawText(formData.tradeUnion || '', { x: mm(85), y: mm(297 - 126), size, font:customFont });
    page.drawText(formData.educationA || '', { x: mm(30), y: mm(297 - 143), size, font:customFont });
    page.drawText(formData.university || '', { x: mm(30), y: mm(297 - 149), size, font:customFont });
    page.drawText(formData.diplomaNumber || '', { x: mm(47), y: mm(297 - 234), size, font:customFont });
    page.drawText(formData.diplomaYear || '', { x: mm(77), y: mm(297 - 234), size, font:customFont });
    page.drawText(formData.diplomaIssuedBy || '', { x: mm(54), y: mm(297 - 241), size, font:customFont });

    // Правая колонка
    page.drawText(formData.mainProfession || '', { x: mm(117), y: mm(297 - 62), size, font:customFont });
    page.drawText(formData.specialityExp || '', { x: mm(115), y: mm(297 - 72), size, font:customFont });
    page.drawText(formData.totalExp || '', { x: mm(145), y: mm(297 - 81), size, font:customFont });
    page.drawText(formData.continuousExp || '', { x: mm(143), y: mm(297 - 87), size, font:customFont });
    page.drawText(formData.lastWork || '', { x: mm(117), y: mm(297 - 92), size, font:customFont });
    page.drawText(formData.reason || '', { x: mm(115), y: mm(297 - 101.5), size, font:customFont });
    page.drawText(formData.familyStatus || '', { x: mm(143), y: mm(297 - 116), size, font:customFont });
    page.drawText(formData.passportSeries || '', { x: mm(146), y: mm(297 - 188), size, font:customFont });
    page.drawText(formData.passportNumber || '', { x: mm(159), y: mm(297 - 188), size, font:customFont });
    page.drawText(formData.passportIssuedBy || '', { x: mm(151), y: mm(297 - 193), size, font:customFont });
    page.drawText(formData.passportDate || '', { x: mm(137), y: mm(297 - 204), size, font:customFont });
    page.drawText(formData.address || '', { x: mm(151), y: mm(297 - 214), size, font:customFont });
    page.drawText(formData.phone || '', { x: mm(133), y: mm(297 - 225), size, font:customFont });
    page.drawText(formData.signature || '', { x: mm(137), y: mm(297 - 230), size, font:customFont });

    // Харбий ҳисоб (пример, можно добавить остальные)
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

    // Убедиться, что папка pdf существует
    if (!fs.existsSync('./pdf')) {
        fs.mkdirSync('./pdf');
    }
    const pdfBytesOut = await pdfDoc.save();
    fs.writeFileSync('./pdf/result_bez-fona.pdf', pdfBytesOut);
    console.log('✅ PDF успешно заполнен: result_bez-fona.pdf');
}

fillForm();
