import { Component } from '@angular/core';
import data from 'src\assets\data\persona.json';
import { ApicallService } from './services/apicall.service';
import persona from '*../../src/assets/data/persona.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Perrotta Vicente';
  subtitle =' Full Stack Developer';
  exp = 'Experiencia';
  edu ='Educación';
  hys = 'Hard & Soft Skills';
  proy ='Proyectos';
  constructor(public apiCall:ApicallService){
    
  }
}
