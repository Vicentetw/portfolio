import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import persona from '../../assets/data/persona.json'

@Injectable({
  providedIn: 'root'
})
export class ApicallService {
persona:any;
cargada=false;

public contentfilpere:string='';
  constructor(private http:HttpClient) { }
    
   
  getTodos():Observable<any>{
 
    //return this.http.get('../../assets/data/persona.json');
    return this.http.get('http://localhost:3000/persona');

  }
  getJson(url: string){
    return this.http.get(url)
  }
}



