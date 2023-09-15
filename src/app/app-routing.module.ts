import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductosComponent } from './Componentes/productos/productos.component';

const routes: Routes = [
  { path: '', component: ProductosComponent }, // Ruta para ProductosComponent
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
