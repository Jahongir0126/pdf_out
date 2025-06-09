import express from 'express';
import { readFileSync } from 'fs';
import fontkit from '@pdf-lib/fontkit';
import { PDFDocument } from 'pdf-lib';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
app.use(express.json());

// Настройка CORS для Render.com
app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? ['https://pdf-out.onrender.com'] 
    : ['http://localhost:5173']
}));

const mm = mm => mm * 2.83465;

app.post('/fill-pdf', async (req, res) => {
  try {
    const data = req.body;

    const pdfBytes = readFileSync('fon_page.pdf');
    const fontBytes = readFileSync('arial/times.ttf');

    const pdfDoc = await PDFDocument.load(pdfBytes);
    pdfDoc.registerFontkit(fontkit);
    const customFont = await pdfDoc.embedFont(fontBytes);
    const page = pdfDoc.getPages()[0];
    const size = 10;

    const draw = (text, x, y) => {
      if (text) {
        page.drawText(String(text), { x: mm(x), y: mm(297 - y), size, font: customFont });
      }
    };

    // 🟦 Левая колонка
    const left = data.left || {};
    draw(left.lastName, 46, 63);
    draw(left.firstName, 34, 67.5);
    draw(left.middleName, 50, 72);
    draw(left.birthYear, 51, 77);
    draw(left.birthMonth, 73, 77);
    draw(left.birthDay, 93, 77);
    draw(left.birthPlace, 51, 81.5);
    draw(left.nationality, 45, 95.5);
    draw(left.religion, 51, 100);
    draw(left.yoshlarUchun, 70, 113);
    draw(left.kasabaUchun, 85, 126);
    draw(left.educationLevel, 30, 143);
    draw(left.institution, 30, 149);
    draw(left.specialty, 30, 155);
    draw(left.type, 30, 161);
    draw(left.diplomaSpec, 30, 167);
    draw(left.diplomaIssuer, 30, 173);
    draw(left.diplomaNumber, 47, 234);
    draw(left.diplomaYear, 77, 234);
    draw(left.diplomaDate, 54, 241);

    // 🟥 Правая колонка
    const right = data.right || {};
    draw(right.mainSpecialty, 117, 62);
    draw(right.specExperience, 115, 72);
    draw(right.generalExperience, 145, 81);
    draw(right.familyNotes, 143, 121);
    draw(right.lastJob, 117, 92);
    draw(right.reasonLeave, 113, 101.5);
    draw(right.familyStatus, 143, 116);
    draw(right.passportSeries, 146, 188);
    draw(right.passportNumber, 159, 188);
    draw(right.issuedBy, 151, 193);
    draw(right.issuedDate, 137, 204);
    draw(right.address, 151, 214);
    draw(right.phone, 133, 225);
    draw(right.signature, 137, 230);

    // 🔻 Военная информация (нижняя часть)
    const bottom = data.bottom || {};
    draw(bottom.militaryGroup, 47, 262);
    draw(bottom.militaryType, 49, 267);
    draw(bottom.composition, 38, 272);
    draw(bottom.militaryRank, 49, 277);
    draw(bottom.specialty, 153, 259);
    draw(bottom.militaryFit, 157, 268);
    draw(bottom.commissionName, 161, 273);
    draw(bottom.commissionNote, 149, 277);
    draw(bottom.militaryNumber, 153, 282);

    const filledPdf = await pdfDoc.save();
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename=anketa.pdf');
    res.send(Buffer.from(filledPdf));
  } catch (error) {
    console.error('❌ Ошибка:', error);
    res.status(500).json({ error: 'Не удалось создать PDF', details: error.message });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
