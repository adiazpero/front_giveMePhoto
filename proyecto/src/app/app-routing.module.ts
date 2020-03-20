import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { CursosComponent } from './cursos/cursos.component';
import { RegistroComponent } from './registro/registro.component';
import { BlogComponent } from './blog/blog.component';
import { ProductosComponent } from './productos/productos.component';
import { CarritoComponent } from './carrito/carrito.component';


const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: 'main', component: MainComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'productos/:categoria', component: ProductosComponent },
  { path: 'cursos', component: CursosComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'carrito', component: CarritoComponent },
  { path: 'blog', component: BlogComponent },
  { path: '**', component: MainComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
