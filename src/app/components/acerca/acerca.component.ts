import { Component, NgModule, OnInit } from '@angular/core';
import { ApicallService } from 'src/app/services/apicall.service';
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
  persona:any;
  //constructor(public appService : ApicallService) {
    constructor(private json : ApicallService) {
      this.json.getJson('http://localhost:3000/persona').subscribe((persona: any)=>{
        console.log(persona);
        
        console.log(persona);
      });

   
  
}

  ngOnInit(): void {
//    this.json.('http://localhost:3000/persona').subscribe((persona: any)=>{
//      console.log(persona);
//this.persona=this.appService.getTodos();
//this.persona=data;

  }

}
