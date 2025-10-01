import { Component, OnInit } from '@angular/core';
import { Evaluacion } from '../../_models/evaluacion';

@Component({
  selector: 'app-admin-evaluaciones',
  templateUrl: './admin-evaluaciones.component.html',
  styleUrls: ['./admin-evaluaciones.component.css']
})
export class AdminEvaluacionesComponent implements OnInit {
  listaEvaluaciones: Evaluacion[] = [];
  evaluacionAEliminar: Evaluacion | null = null;

  constructor() { }

  ngOnInit(): void {
    // Mock data for testing
    this.listaEvaluaciones = [
      { idEvaluacion: 1, materia: 'Matemáticas', grado: 10, grupo: 'A', fecha: '2023-10-01', estado: 'Activa' },
      { idEvaluacion: 2, materia: 'Ciencias', grado: 10, grupo: 'B', fecha: '2023-10-02', estado: 'Activa' }
    ];
  }

  seleccionarEvaluacion(evaluacion: Evaluacion): void {
    this.evaluacionAEliminar = evaluacion;
  }

  eliminarEvaluacion(): void {
    if (this.evaluacionAEliminar) {
      this.listaEvaluaciones = this.listaEvaluaciones.filter(e => e.idEvaluacion !== this.evaluacionAEliminar!.idEvaluacion);
      this.evaluacionAEliminar = null;
    }
  }

}
