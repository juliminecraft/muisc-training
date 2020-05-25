import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PitchDetectComponent } from './pitch-detect.component';

describe('PitchDetectComponent', () => {
  let component: PitchDetectComponent;
  let fixture: ComponentFixture<PitchDetectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PitchDetectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PitchDetectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
