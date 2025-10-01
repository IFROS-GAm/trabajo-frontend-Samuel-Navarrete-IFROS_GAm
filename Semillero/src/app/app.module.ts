import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { APP_ROUTING } from './app.routes';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuLeftComponent } from './components/menu-left/menu-left.component';
import { AdminEstudiantesComponent } from './components/admin-estudiantes/admin-estudiantes.component';
import { NuevoEstudianteComponent } from './components/nuevo-estudiante/nuevo-estudiante.component';
import { AdminMateriasComponent } from './components/admin-materias/admin-materias.component';
import { MateriasComponent } from './components/materias/materias.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AdminGruposComponent } from './components/admin-grupos/admin-grupos.component';
import { AdminEvaluacionesComponent } from './components/admin-evaluaciones/admin-evaluaciones.component';
import { AdminInformesComponent } from './components/admin-informes/admin-informes.component';
import { NuevoGrupoComponent } from './components/nuevo-grupo/nuevo-grupo.component';
import { NuevoEvaluacionComponent } from './components/nuevo-evaluacion/nuevo-evaluacion.component';
import { NuevoInformeComponent } from './components/nuevo-informe/nuevo-informe.component';
import { PerfilComponent } from './components/perfil/perfil.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuLeftComponent,
    AdminEstudiantesComponent,
    NuevoEstudianteComponent,
    AdminMateriasComponent,
    MateriasComponent,
    AdminGruposComponent,
    AdminEvaluacionesComponent,
    AdminInformesComponent,
    NuevoGrupoComponent,
    NuevoEvaluacionComponent,
    NuevoInformeComponent,
    PerfilComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
