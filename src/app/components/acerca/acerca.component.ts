import { Component, NgModule, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/services/persona.service';
import { Persona } from 'src/app/entidades/persona';
import { HttpClient } from '@angular/common/http';
import { observable } from 'rxjs';



@Component({
  selector: 'app-acerca',
  templateUrl: './acerca.component.html',
  styleUrls: ['./acerca.component.css']
})
export class AcercaComponent implements OnInit {
name = 'Perrotta Vicente';
iam =' Full Stack Developer';
  public persona:any
  
//constructor(private service:PersonaService){}   
constructor(){}  

ngOnInit(): void {
//this.service.obtenerDatosPersona(1).subscribe(data => {
  //console.log(data);
 //this.persona=data;
  // this.=data["education"];
  //this.miServicio.obtenerDatosEducacion().subscribe(data => {
   // this.educacion=data["education"];
 // })
  }

}
