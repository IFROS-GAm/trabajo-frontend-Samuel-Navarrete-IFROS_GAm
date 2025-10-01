
import { Routes, RouterModule } from "@angular/router";
import { AdminEstudiantesComponent } from "./components/admin-estudiantes/admin-estudiantes.component";
import { NuevoEstudianteComponent } from "./components/nuevo-estudiante/nuevo-estudiante.component";
import { AdminMateriasComponent } from "./components/admin-materias/admin-materias.component";
import { MateriasComponent } from "./components/materias/materias.component";
import { AdminGruposComponent } from "./components/admin-grupos/admin-grupos.component";
import { AdminEvaluacionesComponent } from "./components/admin-evaluaciones/admin-evaluaciones.component";
import { AdminInformesComponent } from "./components/admin-informes/admin-informes.component";
import { NuevoGrupoComponent } from "./components/nuevo-grupo/nuevo-grupo.component";
import { NuevoEvaluacionComponent } from "./components/nuevo-evaluacion/nuevo-evaluacion.component";
import { NuevoInformeComponent } from "./components/nuevo-informe/nuevo-informe.component";
import { PerfilComponent } from "./components/perfil/perfil.component";

const APP_ROUTES: Routes = [
    { path: 'adminEstudiantes', component: AdminEstudiantesComponent },
    { path: 'nuevoEstudiante', component: NuevoEstudianteComponent },
    { path: 'adminMaterias', component: AdminMateriasComponent },
    { path: 'materias', component: MateriasComponent },
    { path: 'adminGrupos', component: AdminGruposComponent },
    { path: 'nuevoGrupo', component: NuevoGrupoComponent },
    { path: 'adminEvaluaciones', component: AdminEvaluacionesComponent },
    { path: 'nuevoEvaluacion', component: NuevoEvaluacionComponent },
    { path: 'adminInformes', component: AdminInformesComponent },
    { path: 'nuevoInforme', component: NuevoInformeComponent },
    { path: 'perfil', component: PerfilComponent }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash:true});