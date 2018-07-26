import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PdfDocComponent } from './pdf-doc/pdf-doc.component';

import { PdfViewerModule } from 'ng2-pdf-viewer';
import { PdfViewComponent } from './pdf-view/pdf-view.component';
import { ModificationComponent } from './modification/modification.component';
import { DrawComponent } from './draw/draw.component';
import { SgvRectComponent } from './sgv-rect/sgv-rect.component';


@NgModule({
  declarations: [
    AppComponent,
    PdfDocComponent,
    PdfViewComponent,
    ModificationComponent,
    DrawComponent,
    SgvRectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PdfViewerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
