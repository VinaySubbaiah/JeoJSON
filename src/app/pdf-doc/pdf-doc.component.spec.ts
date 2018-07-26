import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfDocComponent } from './pdf-doc.component';

describe('PdfDocComponent', () => {
  let component: PdfDocComponent;
  let fixture: ComponentFixture<PdfDocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdfDocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdfDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
