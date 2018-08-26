import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BioBodyComponent } from './bio-body.component';

describe('BioBodyComponent', () => {
  let component: BioBodyComponent;
  let fixture: ComponentFixture<BioBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BioBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BioBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
