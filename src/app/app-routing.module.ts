import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MaterialListarComponent } from './components/material/material-listar.component';
import { MaterialAdministrarComponent } from './components/material/material-administrar.component';
import { ReporteComponent } from './components/reporte/reporte.component';


const routes: Routes = [
  { path: '', component: MaterialListarComponent },
  {
    path: 'material/administrar/editar/:id',
    component: MaterialAdministrarComponent
  },
  {
    path: 'material/administrar/nuevo',
    component: MaterialAdministrarComponent,
  },
  {
    path: 'reporte',
    component: ReporteComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
