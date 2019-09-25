import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Curso } from '../models/curso.model';
import { Observable } from 'rxjs';

const apiUrl = `${environment.apiUrl}/cursos`

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  constructor(
    private http: HttpClient
  ) { }

  findAll(): Observable<Curso[]>{
    return this.http.get<Curso[]>(apiUrl)
  }  

  findById(id: number): Observable<Curso>{
    return this.http.get<Curso>(`${apiUrl}/${id}`)
  }

  save(curso: Curso): Observable<Curso>{
    if(curso.id){
      return this.http.put<Curso>(apiUrl, curso)
    }

    return this.http.post<Curso>(apiUrl, curso)
  }

  delete(id: number){
    return this.http.delete(`${apiUrl}/${id}`)
  }
}
