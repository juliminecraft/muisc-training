import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectScaleComponent } from './select-scale.component';

describe('SelectScaleComponent', () => {
  let component: SelectScaleComponent;
  let fixture: ComponentFixture<SelectScaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectScaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectScaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
