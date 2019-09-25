import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CursosComponent } from './components/cursos/cursos.component';
import { CursoFormComponent } from './components/curso-form/curso-form.component';
import { CursoViewComponent } from './components/curso-view/curso-view.component';


const routes: Routes = [
  {
    path: 'cursos',
    component: CursosComponent
  },
  {
    path: 'novo-curso',
    component: CursoFormComponent
  },
  {
    path: 'editar-curso/:id',
    component: CursoFormComponent
  },
  {
    path: 'ver-curso/:id',
    component: CursoViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
