import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoInformeComponent } from './nuevo-informe.component';

describe('NuevoInformeComponent', () => {
  let component: NuevoInformeComponent;
  let fixture: ComponentFixture<NuevoInformeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevoInformeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoInformeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
