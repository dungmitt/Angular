import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthserviceService } from 'src/app/service/authservice.service';
import { Router } from "@angular/router";
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {
    formSignin = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    })
    constructor(private fb: FormBuilder, private authService: AuthserviceService, private router :Router){}
   onHandleSubmit(){
    if(this.formSignin.invalid){
      return
    }
    this.authService.Signin(this.formSignin.value).subscribe(data=>{
      localStorage.setItem('userInfo', JSON.stringify(data))
      console.log(data)
      if(data.user.role=="admin"){
        this.router.navigate(["/admin"])
      }
      if(data.user.role!="admin"){
        this.router.navigate(["/"])
      }
      // this.router.navigate(["/"])
      alert("Wellcome")
    })
   }
}
