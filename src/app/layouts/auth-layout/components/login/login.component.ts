import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth-service';
import { HttpService } from 'src/app/core/services/http.service';
import { ErrorHandlingService } from 'src/app/layouts/main-layout/services/error-handling.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  loginForm!: UntypedFormGroup;
  loadingSubmit = false;

  constructor(
    private formBuilder: UntypedFormBuilder,
    private route: Router,
    private _auth: AuthService,
    private _http: HttpService,
    private errHandle: ErrorHandlingService,
  ) { }


  ngOnInit(): void {
    // init login form
    this.loginForm = this.formBuilder.group({
      username: ['', [
        Validators.required,
        // Validators.email,
      ]],
      password: [
        '',
        Validators.compose([
          Validators.required,
        ]),
      ],
    });

  }
  login() {
    if (this.loginForm.valid) {
      this.loadingSubmit = true;
      let userObj = this.loginForm.value;
      this._auth.setUserObj({
        username: userObj?.username,
        role: userObj?.username === 'admin'? 'admin': 'user',
      });

      this._auth.setUserToken('custom_Token');

      if (userObj?.role == 'admin') {
        this.route.navigate(['/dashboard']);
      }
      else {
        this.route.navigate(["/home"]);
      }
    }
    else {
      this.loginForm.markAllAsTouched();
    }
    this.loadingSubmit = false;
  }
}
