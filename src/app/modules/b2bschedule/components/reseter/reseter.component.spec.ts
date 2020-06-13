import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReseterComponent } from './reseter.component';

describe('ReseterComponent', () => {
  let component: ReseterComponent;
  let fixture: ComponentFixture<ReseterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReseterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReseterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
