import { Injectable } from '@angular/core';
import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Educacion } from 'src/app/interfaces/Educacion'
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

  public obtenerDatosEducacion(): Observable<Educacion[]> {
    return this.http.get<Educacion[]>(`${this.apiHerokuUrl}educacion/all`);
  }

  public addEducacion(educacion:Educacion): Observable<Educacion> {
    return this.http.post<Educacion>(`${this.apiHerokuUrl}educacion`, educacion);
  }
  
  public updateEducacion(educacion: Educacion): Observable<Educacion> {
    return this.http.put<Educacion>(`${this.apiHerokuUrl}educacion/update`, educacion);
  } 
  public borrarEducacion(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiHerokuUrl}educacion/${id}`);
  }
  public getEducacion(): Observable<Educacion[]> {
    return this.http.get<Educacion[]>(`${this.apiHerokuUrl}educacion/all`);
  }
 
  public editarDatosEducacion(educacion:Educacion):Observable<Educacion>{
    return  this.http.put<Educacion>(this.url,educacion);
  }
  public obtenerUnaEducacion(){
    return this.http.get<any>(this.apiHerokuUrl + "educacion/1")
}
}
