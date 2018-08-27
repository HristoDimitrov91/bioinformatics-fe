import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RosalindComponent } from './rosalind.component';

describe('RosalindComponent', () => {
  let component: RosalindComponent;
  let fixture: ComponentFixture<RosalindComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RosalindComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RosalindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
