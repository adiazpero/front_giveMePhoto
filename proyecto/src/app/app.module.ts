import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { CursosComponent } from './cursos/cursos.component';
import { BlogComponent } from './blog/blog.component';
import { RegitroComponent } from './regitro/regitro.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CursosComponent,
    BlogComponent,
    RegitroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
