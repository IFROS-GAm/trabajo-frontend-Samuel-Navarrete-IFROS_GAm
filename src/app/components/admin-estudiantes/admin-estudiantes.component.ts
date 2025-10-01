import { Component, OnInit } from '@angular/core';
import { Estudiante } from '../../_models/estudiante';

@Component({
  selector: 'app-admin-estudiantes',
  templateUrl: './admin-estudiantes.component.html',
  styleUrls: []
})
export class AdminEstudiantesComponent implements OnInit {
  listaEstudiantes: Estudiante[] = [];
  estudianteAEliminar: Estudiante | null = null;

  constructor() { }

  ngOnInit(): void {
    // Mock data for testing
    this.listaEstudiantes = [
      { idEstudiante: 1, codigo: '2022101', identificacion: 'TI 1088123456', nombre: 'Camila Fernández Rojas', grado: 10, grupo: 'A', estado: 'En curso' },
      { idEstudiante: 2, codigo: '2022102', identificacion: 'TI 1088123457', nombre: 'Juan Pérez González', grado: 10, grupo: 'A', estado: 'En curso' },
      { idEstudiante: 3, codigo: '2022103', identificacion: 'TI 1088123458', nombre: 'María López García', grado: 10, grupo: 'A', estado: 'En curso' }
    ];
  }

  seleccionarEstudiante(estudiante: Estudiante): void {
    this.estudianteAEliminar = estudiante;
  }

  eliminarEstudiante(): void {
    if (this.estudianteAEliminar) {
      this.listaEstudiantes = this.listaEstudiantes.filter(e => e.idEstudiante !== this.estudianteAEliminar!.idEstudiante);
      this.estudianteAEliminar = null;
    }
  }

}
