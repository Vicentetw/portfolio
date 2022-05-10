import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Skill } from '../entidades/skill';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SkillService {
skill:any
private apiHerokuUrl = environment.apiUrl;
  url:string="https://floating-chamber-24100.herokuapp.com/";

  constructor(private http: HttpClient) { }
  obtenerDatosSkill(): Observable<Skill[]> {
    return this.http.get<Skill[]>(`${this.apiHerokuUrl}skill/todas`);
  }

  guardarNuevaSkill(skill:Skill): Observable<Skill> {
    return this.http.post<Skill>(this.apiHerokuUrl + "skill/create", skill);
  }

  modificarSkill(skill: Skill): Observable<any> {
    return this.http.put<any>(this.apiHerokuUrl + "skill/update", skill);
  }

  borrarSkill(id: number): Observable<any> {
    return this.http.delete<any>(this.apiHerokuUrl + "skill/" + id);
  }
  public getSkill(): Observable<Skill[]> {
    return this.http.get<Skill[]>(`${this.apiHerokuUrl}/skill/all`);
  }
 
  public editarDatosSkill(skill:Skill):Observable<any>{
    return  this.http.put(this.url,skill);
  }
  public obtenerUnaSkill(){
    return this.http.get<any>(this.apiHerokuUrl + "skill/1")
}

}
