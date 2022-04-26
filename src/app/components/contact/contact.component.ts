import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/services/persona.service';
import { LoginComponent } from 'src/app/login/login.component';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
//public persona= {nombre:"hardcoded", apellido:"Perrotta"}
public persona: any

  constructor(private service:PersonaService) { 
     
   }

  ngOnInit(): void {
    this.service.obtenerUnaPersona().subscribe(data => {
      this.persona=data;
    })
  }
  }


