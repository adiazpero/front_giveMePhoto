import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { CursosComponent } from './cursos/cursos.component';
import { BlogComponent } from './blog/blog.component';
import { RegistroComponent } from './registro/registro.component';
import { ProductosComponent } from './productos/productos.component';



@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CursosComponent,
    BlogComponent,
    RegistroComponent,
    ProductosComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
