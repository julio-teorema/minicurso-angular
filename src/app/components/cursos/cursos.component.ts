import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/models/curso.model';
import { CursoService } from 'src/app/services/curso.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.sass']
})
export class CursosComponent implements OnInit {
  cursos: Curso[] = []
  loadingList: boolean = false  

  constructor(
    private cursoService: CursoService
  ) { }

  ngOnInit() {
    this.findAll()
  }

  findAll() {
    this.loadingList = true
    this.cursoService.findAll().subscribe(response => {
      this.cursos = response
      this.loadingList = false
    }, error => {
      this.loadingList = false
    })
  }

  delete(id: number) {
    if (confirm("Tem certeza que deseja excluir esse curso?")) {
      this.cursoService.delete(id).subscribe(response => {
        this.findAll()
      })
    }
  }
}
