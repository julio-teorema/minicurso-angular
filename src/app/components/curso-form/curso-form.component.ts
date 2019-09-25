import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { CursoService } from 'src/app/services/curso.service';
import { Curso } from 'src/app/models/curso.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-curso-form',
  templateUrl: './curso-form.component.html',
  styleUrls: ['./curso-form.component.sass']
})
export class CursoFormComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private cursoService: CursoService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  form = this.fb.group({
    id: [null],
    nome: [null, Validators.required],
    duracao: [null, Validators.required]
  })

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      if (params.id) {
        this.findById(params.id)
      }
    })
  }

  findById(id: number) {
    this.cursoService.findById(id).subscribe(response => {
      this.form.setValue(response)
    })
  }

  submitted = false
  onSubmit() {
    console.log(this.form)
    this.submitted = true
    if (this.form.invalid) {
      return
    }

    this.cursoService.save(this.form.value as Curso).subscribe(response => {
      this.router.navigate(['/cursos'])
    })
  }

}
