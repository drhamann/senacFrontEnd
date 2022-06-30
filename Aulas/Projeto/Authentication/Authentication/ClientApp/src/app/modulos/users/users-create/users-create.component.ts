import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-users-create',
  templateUrl: './users-create.component.html',
  styleUrls: ['./users-create.component.css']
})
export class UsersCreateComponent {

  createForm: FormGroup;
  createError = ''
  private redirectUrl: string | null | undefined;
  constructor(private formBuilder: FormBuilder, private usersService: UsersService, private router: Router) {

    this.createForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.required, Validators.minLength(1), Validators.maxLength(50),]],
      role: ['', [Validators.required, Validators.required, Validators.minLength(1), Validators.maxLength(50),]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(50),]],
      confirmPassword: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(50)]]
    })
  }
  async createUser(submittedForm: FormGroup) {
    this.usersService.createUser(
      submittedForm.value.email,
      submittedForm.value.password,
      submittedForm.value.name,
      submittedForm.value.role,
      submittedForm.value.confirmPassword
    ).pipe(
      take(1))
      .subscribe({
        next: this.onSuccessCallback.bind(this),
        error: this.onErrorCallback.bind(this),
      });
  }

  private onSuccessCallback(): void {
    this.usersService.getUsers().subscribe();
    this.router.navigate([this.redirectUrl || '/users/home']);
  }

  private onErrorCallback(): void {
    this.createForm.setErrors({ incorrectData: true });
    this.createError = 'Incorrect data'
  }
}
