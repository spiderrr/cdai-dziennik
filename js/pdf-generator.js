// pdf-generator.js

const fs = require('fs');
const pdf = require('pdf-lib');

async function generatePDF(content) {
    const { PDFDocument, rgb } = pdf;

    // Create a new PDFDocument
    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage([600, 400]);

    // Draw a string of text
    page.drawText(content, { x: 50, y: 350, size: 30, color: rgb(0, 0, 0) });

    // Serialize the PDFDocument to bytes (a Uint8Array)
    const pdfBytes = await pdfDoc.save();

    // Write the PDF to file system
    fs.writeFileSync('output.pdf', pdfBytes);
    console.log('PDF generated successfully: output.pdf');
}

module.exports = generatePDF;