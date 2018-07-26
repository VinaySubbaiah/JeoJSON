import { Component, OnInit } from '@angular/core';
import { PDFDocumentFactory, PDFDocumentWriter, drawText } from 'pdf-lib';

@Component({
  selector: 'app-pdf-doc',
  templateUrl: './pdf-doc.component.html',
  styleUrls: ['./pdf-doc.component.scss']
})
export class PdfDocComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const pdfDoc = PDFDocumentFactory.create();
    const [timesRomanFont] = pdfDoc.embedStandardFont('Times-Roman');

    const page = pdfDoc
      .createPage([350, 500])
      .addFontDictionary('Times-Roman', timesRomanFont);

    const contentStream = pdfDoc.createContentStream(
      drawText('Creating PDFs in JavaScript is awesome!', {
        x: 50,
        y: 450,
        size: 15,
        font: 'Times-Roman',
        colorRgb: [0, 0.53, 0.71],
      }),
    );

    page.addContentStreams(pdfDoc.register(contentStream));

    pdfDoc.addPage(page);

    const pdfBytes = PDFDocumentWriter.saveToBytes(pdfDoc);
    console.log("Pdf Created..!!");
  }

}
