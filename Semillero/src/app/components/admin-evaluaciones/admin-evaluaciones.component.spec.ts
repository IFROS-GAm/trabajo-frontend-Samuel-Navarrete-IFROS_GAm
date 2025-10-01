import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEvaluacionesComponent } from './admin-evaluaciones.component';

describe('AdminEvaluacionesComponent', () => {
  let component: AdminEvaluacionesComponent;
  let fixture: ComponentFixture<AdminEvaluacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminEvaluacionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEvaluacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
