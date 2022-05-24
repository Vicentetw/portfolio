//import { Component, NgModule } from '@angular/core';
import { Component, NgModule } from '@angular/core';
//import { RouterModule, Routes } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from './components/error404/error404.component';
import { HeaderComponent } from './components/header/header.component';
import { ModificaSkillComponent } from './components/modifica-skill/modifica-skill.component';
import { ModificaComponent } from './components/modifica/modifica.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { LoginComponent } from './login/login.component';



const routes: Routes = [
  {path: 'portfolio', component: PortfolioComponent},
  {path: 'modifica', component: ModificaComponent},
  {path: 'login', component: LoginComponent},
<<<<<<< HEAD
=======
  {path: 'modifica-skill', component: ModificaSkillComponent},
>>>>>>> form-skill
  {path: '',redirectTo:'portfolio',pathMatch:'full'},
  {path: ' ', component: Error404Component },
  {path: '**', component: Error404Component},
 
 


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
