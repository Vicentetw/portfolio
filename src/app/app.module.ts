import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Error404Component } from './components/error404/error404.component';
import { HeaderComponent } from './components/header/header.component';
import {ExperienceComponent} from './components/experience/experience.component';
import { AcercaComponent } from './components/acerca/acerca.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { EducationComponent } from './components/education/education.component';
import { ContactComponent } from './components/contact/contact.component';
import { SoftwareSkillComponent } from './components/skills/software-skill/software-skill.component';
@NgModule({
  declarations: [
    AppComponent,
    Error404Component,
    HeaderComponent,
    ExperienceComponent,
    AcercaComponent,
    SkillsComponent,
    ProjectsComponent,
    EducationComponent,
    ContactComponent,
    SoftwareSkillComponent
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
