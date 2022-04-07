import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Error404Component } from './components/error404/error404.component';
import { HeaderComponent } from './components/header/header.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { LoginComponent } from './login/login.component';



const routes: Routes = [
  {path: 'portfolio', component: PortfolioComponent},
  {path: 'login', component: LoginComponent},
  {path: '',redirectTo:'login',pathMatch:'full'},
 {path: ' ', component: Error404Component },
 {path: '**', component: Error404Component},
 


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
