import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-edit-button',
  templateUrl: './edit-button.component.html',
  styleUrls: ['./edit-button.component.css']
})
export class EditButtonComponent implements OnInit {

  constructor( public authService: AuthService) { }

  ngOnInit(): void {
  }
Editar(){
  if (this.authService.estaLogeado)
  this.authService.router.navigate(['arFm2225txrz2532kkkdsdieujdls3#23345dnesdjy2j430slk9sk3d']);
  else{
    this.authService.router.navigate(['login']);
  }
}
}
