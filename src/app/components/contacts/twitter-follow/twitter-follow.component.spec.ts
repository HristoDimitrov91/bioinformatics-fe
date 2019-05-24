import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwitterFollowComponent } from './twitter-follow.component';

describe('TwitterFollowComponent', () => {
  let component: TwitterFollowComponent;
  let fixture: ComponentFixture<TwitterFollowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwitterFollowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwitterFollowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
