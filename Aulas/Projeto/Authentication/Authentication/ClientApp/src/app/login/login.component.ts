import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  loginError = ''
  private redirectUrl: string | null | undefined;
  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router, private route: ActivatedRoute) {
    this.route.paramMap.subscribe(params => (this.redirectUrl = params.get('redirectUrl')))
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(50),
      ]],
    })
  }
  async login(submittedForm: FormGroup) {
    this.authService.login(submittedForm.value.email, submittedForm.value.password).pipe(take(1))
      .subscribe({
        next: this.onSuccessCallback.bind(this),
        error: this.onErrorCallback.bind(this),
      });
  }

  private onSuccessCallback(): void {
    this.router.navigate([this.redirectUrl || '/counter'])
  }

  private onErrorCallback(): void {
    this.loginForm.setErrors({ incorrectData: true });
    this.loginError = 'Incorrect data'
  }
}
