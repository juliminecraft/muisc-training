import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { B2BScheduleComponent } from './b2bsched.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        B2BScheduleComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(B2BScheduleComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'BassBuzzProgression'`, () => {
    const fixture = TestBed.createComponent(B2BScheduleComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('BassBuzzProgression');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(B2BScheduleComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to BassBuzzProgression!');
  });
});
