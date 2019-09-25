import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/models/curso.model';
import { ActivatedRoute } from '@angular/router';
import { CursoService } from 'src/app/services/curso.service';

@Component({
  selector: 'app-curso-view',
  templateUrl: './curso-view.component.html',
  styleUrls: ['./curso-view.component.sass']
})
export class CursoViewComponent implements OnInit {
  curso: Curso

  constructor(    
    private activatedRoute: ActivatedRoute,
    private cursoService: CursoService
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      if(params.id){
        this.cursoService.findById(params.id).subscribe(response => {
          this.curso = response
        })
      }
    })
  }

}
