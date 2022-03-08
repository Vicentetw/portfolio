import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Error404Component } from './components/error404/error404.component';
import { HeaderComponent } from './components/header/header.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { AcercaComponent } from './components/acerca/acerca.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { EducationComponent } from './components/education/education.component';

@NgModule({
  declarations: [
    AppComponent,
    Error404Component,
    HeaderComponent,
    ExperienciaComponent,
    AcercaComponent,
    SkillsComponent,
    ProjectsComponent,
    EducationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  //componente principal
  bootstrap: [AppComponent]
})
export class AppModule { }
