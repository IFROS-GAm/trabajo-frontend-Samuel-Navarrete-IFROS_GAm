import { Component, OnInit } from '@angular/core';
import { Grupo } from '../../_models/grupo';

@Component({
  selector: 'app-admin-grupos',
  templateUrl: './admin-grupos.component.html',
  styleUrls: ['./admin-grupos.component.css']
})
export class AdminGruposComponent implements OnInit {
  listaGrupos: Grupo[] = [];
  grupoAEliminar: Grupo | null = null;

  constructor() { }

  ngOnInit(): void {
    // Mock data for testing
    this.listaGrupos = [
      { idGrupo: 1, nombre: 'Grupo A', grado: 10, estado: 'Activo' },
      { idGrupo: 2, nombre: 'Grupo B', grado: 10, estado: 'Activo' },
      { idGrupo: 3, nombre: 'Grupo C', grado: 11, estado: 'Activo' }
    ];
  }

  seleccionarGrupo(grupo: Grupo): void {
    this.grupoAEliminar = grupo;
  }

  eliminarGrupo(): void {
    if (this.grupoAEliminar) {
      this.listaGrupos = this.listaGrupos.filter(g => g.idGrupo !== this.grupoAEliminar!.idGrupo);
      this.grupoAEliminar = null;
    }
  }

}
