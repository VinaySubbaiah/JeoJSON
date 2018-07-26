import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SgvRectComponent } from './sgv-rect.component';

describe('SgvRectComponent', () => {
  let component: SgvRectComponent;
  let fixture: ComponentFixture<SgvRectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SgvRectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SgvRectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
