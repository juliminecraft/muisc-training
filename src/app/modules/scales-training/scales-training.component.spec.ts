import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScalesTrainingComponent } from './scales-training.component';

describe('ScalesTrainingComponent', () => {
  let component: ScalesTrainingComponent;
  let fixture: ComponentFixture<ScalesTrainingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScalesTrainingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScalesTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
