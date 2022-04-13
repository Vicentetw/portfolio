import { Injectable } from '@angular/core';
import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Persona } from '../entidades/persona';


@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  
  persona: any;
  cargada = false;
  url:string="http://localhost:8080/persona";
  constructor(private http:HttpClient) {
    console.log("El servicio está corriendo");
   }

  obtenerDatosPersona(id:number):Observable<Persona>{
   return this.http.get<Persona>(this.url+"/"+id);
  }

  obtenerDatosEducacion():Observable<any>{
    return this.http.get('./assets/data/educacion.json');
  }

  editarDatosPersona(persona:Persona):Observable<any>{
    return  this.http.put(this.url,persona);
  }
  public obtenerUnaPersona(){
    return this.http.get("http://localhost:8080/persona/1")
    //el get devuelve un obserbable
    //y el service me va a devolver un observable
  }
 
}
/**
  persona: any;
  cargada = false;

  public contentfilpere: string = '';
  constructor(private http: HttpClient) { }


  public getTodos(): Observable<any> {

    //return this.http.get('../../assets/data/persona.json');
    return this.http.get('http://localhost:8080/persona/1');

  }
  getJson(url: string) {
    return this.http.get(url);
  }
  public obtenerPersona() {
    return this.http.get("http://localhost:8080/persona/1");
    //get devuelve un objeto llamado Observable al cuál nos podemos subscribir desde el componente.ts dentro de ngOnInit(): void {acá va} quedando a la espera por retrasos
  }
 */