import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs';
import { MateriaInput } from 'src/app/_models/materiaInput';
import { Materia } from 'src/app/_models/materias';
import { MateriasService } from 'src/app/_services/materias.service';

@Component({
  selector: 'app-materias',
  templateUrl: './materias.component.html',
  styleUrls: [],
  providers: [DatePipe, MateriasService],
})
export class MateriasComponent implements OnInit {
  listaMaterias: Materia[] = [];
  listaMateriasSelect: Materia[] = [];
  materiaSeleccionado: MateriaInput = new MateriaInput();
  materiaAEliminar: Materia | null = null;

  constructor(private materiasService: MateriasService) {}

  ngOnInit(): void {
    // Mock data for testing
    this.listaMaterias = [
      { idMateria: 1, nombre: 'Matemáticas' },
      { idMateria: 2, nombre: 'Ciencias' },
      { idMateria: 3, nombre: 'Historia' },
      { idMateria: 4, nombre: 'Lenguaje' },
      { idMateria: 5, nombre: 'Inglés' }
    ];
    this.listaMateriasSelect = this.listaMaterias;
  }

  findMateria(): void {
      this.materiasService
        .getMateriasById(this.materiaSeleccionado.idMateria)
        .pipe(first())
        .subscribe((data) => (this.listaMaterias = data));
  }

  capturarId($event: any): void {
    let idSeleccionado = $event.target.options[$event.target.options.selectedIndex].value;
    this.materiaSeleccionado.idMateria = Number(idSeleccionado);
  }

  seleccionarMateria(materia: Materia): void {
    this.materiaAEliminar = materia;
  }

  eliminarMateria(): void {
    if (this.materiaAEliminar) {
      this.listaMaterias = this.listaMaterias.filter(m => m.idMateria !== this.materiaAEliminar!.idMateria);
      this.materiaAEliminar = null;
    }
  }
}
