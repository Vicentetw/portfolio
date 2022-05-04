import { Injectable } from '@angular/core';
import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Educacion } from '../interfaces/Educacion';
import { environment } from 'src/environments/environment';
import { config } from '../data/Config';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  educacion: any;
  private apiHerokuUrl = environment.apiUrl;
  url:string="https://floating-chamber-24100.herokuapp.com/";

  constructor(private http: HttpClient) { }

  obtenerDatosEducacion(): Observable<Educacion[]> {
    return this.http.get<any>(this.apiHerokuUrl + "educacion");
  }

  guardarNuevaEducacion(educacion:Educacion): Observable<Educacion> {
    return this.http.post<any>(this.apiHerokuUrl + "educacion/create", educacion);
  }

  modificarEducacion(educacion: Educacion): Observable<any> {
    return this.http.put<any>(this.apiHerokuUrl + "educacion/update", educacion);
  }

  borrarEducacion(id: number): Observable<any> {
    return this.http.delete<any>(this.apiHerokuUrl + "educacion/" + id);
  }

}
