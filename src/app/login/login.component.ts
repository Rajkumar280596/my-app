import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

public loginform:FormGroup = new FormGroup(
  {
    email:new FormControl(),
    password:new FormControl()

  }

)

constructor(private _loginservice:LoginService, private _router:Router){}

  submit(){
    console.log(this.loginform);
    this._loginservice.login(this.loginform.value).subscribe(
      (data:any)=>{
        alert("Login sucessfull")
        sessionStorage.setItem('my-app-token', data.token);
        this._router.navigateByUrl("/dashboard");

      },
      (err:any)=>{
        alert("Invalid credentials");
      }
    )
  }
  name = 'rajkumar';

}


