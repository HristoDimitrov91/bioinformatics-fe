
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BioNavComponent } from './bio-nav.component';

describe('BioNavComponent', () => {
  let component: BioNavComponent;
  let fixture: ComponentFixture<BioNavComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [MatSidenavModule],
      declarations: [BioNavComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BioNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
