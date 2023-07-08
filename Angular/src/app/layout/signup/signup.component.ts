import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthserviceService } from 'src/app/service/authservice.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  FormSignup = this.fb.group({
    username: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', Validators.required]
  }, { validator: this.checkPasswords })
  constructor(private fb: FormBuilder, private authService: AuthserviceService, private router: Router) { }
  checkPasswords(form: FormGroup) {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;
    if (password === confirmPassword) {
      return true;
    }
    else {
      return { passwordNotMatch: true }
    }
  }
  onHandleSubmit() {
    if (this.FormSignup.invalid) {
      return
    }
    this.authService.Signup(this.FormSignup.value).subscribe(data => {
      console.log(data)
      this.router.navigate(["/signin"])
    })
  }
}

