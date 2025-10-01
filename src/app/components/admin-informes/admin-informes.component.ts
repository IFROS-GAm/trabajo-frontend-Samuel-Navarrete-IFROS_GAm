import { Component, OnInit } from '@angular/core';
import { Informe } from '../../_models/informe';

@Component({
  selector: 'app-admin-informes',
  templateUrl: './admin-informes.component.html',
  styleUrls: ['./admin-informes.component.css']
})
export class AdminInformesComponent implements OnInit {
  listaInformes: Informe[] = [];
  informeAEliminar: Informe | null = null;

  constructor() { }

  ngOnInit(): void {
    // Mock data for testing
    this.listaInformes = [
      { idInforme: 1, tipo: 'Calificaciones', grado: 10, periodo: '2023-1', fechaGeneracion: '2023-10-01', estado: 'Generado' },
      { idInforme: 2, tipo: 'Asistencia', grado: 10, periodo: '2023-1', fechaGeneracion: '2023-10-02', estado: 'Generado' }
    ];
  }

  seleccionarInforme(informe: Informe): void {
    this.informeAEliminar = informe;
  }

  eliminarInforme(): void {
    if (this.informeAEliminar) {
      this.listaInformes = this.listaInformes.filter(i => i.idInforme !== this.informeAEliminar!.idInforme);
      this.informeAEliminar = null;
    }
  }

}
