import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoEvaluacionComponent } from './nuevo-evaluacion.component';

describe('NuevoEvaluacionComponent', () => {
  let component: NuevoEvaluacionComponent;
  let fixture: ComponentFixture<NuevoEvaluacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevoEvaluacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoEvaluacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
