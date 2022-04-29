import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  

 constructor(public authService: AuthService){ }
ngOnInit(): void {
  
}


/**
export class LoginComponent implements OnInit {
  public form:FormGroup;
  usuario={

email:'',
password:''


  }

  constructor(private formBuilder:FormBuilder) { 
    this.form=this.formBuilder.group(
      {
        email:['',[Validators.required,Validators.email]],
        password:['',[Validators.required,Validators.minLength(8)]],
        deviceInfo:this.formBuilder.group({
        deviceId:["17867868768"],
        deviceType:["DEVICE_TYPE_ANDROID"],
        notificationToken:["67657575eececc34"]
        })
      }
    )

  }

  ngOnInit(): void {
    this.form;
  }
  get Email()
  {
    return this.form.get('email');
  }
  get Password(){
    return this.form.get('password')
  }
  Ingresar(){
    console.log(this.usuario);
  }
  */
}
