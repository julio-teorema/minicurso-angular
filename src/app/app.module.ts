import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { CursoFormComponent } from './components/curso-form/curso-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CursoViewComponent } from './components/curso-view/curso-view.component';

@NgModule({
  declarations: [
    AppComponent,    
    CursosComponent,
    CursoFormComponent,
    CursoViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
