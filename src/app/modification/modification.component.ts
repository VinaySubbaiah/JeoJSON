import { Component, OnInit } from '@angular/core';
import { PDFDocumentFactory, PDFDocumentWriter, drawText } from 'pdf-lib';

@Component({
  selector: 'app-modification',
  templateUrl: './modification.component.html',
  styleUrls: ['./modification.component.scss']
})
export class ModificationComponent implements OnInit {

  constructor() { }

    data: any
     getData(url) {

      return new Promise((accept, reject) => {
          var req = new XMLHttpRequest();
          req.open("GET", url, true);
          req.responseType = "arraybuffer";
  
          req.onload = function(event) {
              var resp = req.response;
              if(resp) {
                  accept(resp);
              }
          };
  
          req.send(null);
      });
  }

  downloadFile() {
   this.data =  this.getData('assets/A1.1.pdf');
    var unitArray = new Uint8Array(this.data);
    const pdfDoc = PDFDocumentFactory.load(unitArray);
    const [helveticaFont] = pdfDoc.embedStandardFont('Helvetica');
    const pages = pdfDoc.getPages();
    const page = pages[0];
    page.addFontDictionary('Helvetica', helveticaFont);
    const contentStream = pdfDoc.createContentStream(
      drawText('This text was added to the PDF with JavaScript!', {
        x: 25,
        y: 25,
        size: 24,
        font: 'Helvetica',
        colorRgb: [0.95, 0.26, 0.21],
      }),
    );
    page.addContentStreams(pdfDoc.register(contentStream));
    const pdfBytes = PDFDocumentWriter.saveToBytes(pdfDoc);
  }

  ngOnInit() {
  }
}
