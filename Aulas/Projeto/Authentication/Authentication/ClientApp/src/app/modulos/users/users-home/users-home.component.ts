import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../users-entities';
import { UsersService } from '../services/users.service';
import { take } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
@Component({
  selector: 'app-users-home',
  templateUrl: './users-home.component.html',
  styleUrls: ['./users-home.component.css']
})
export class UsersHomeComponent implements OnInit {
  public users!: User[];
  filterPlanograms: string[] = [];
  add = false;
  constructor(private router: Router, public usersService: UsersService) { }
  ngOnInit(): void {
    this.usersService.usersData.subscribe(users => { this.users = users; });
  }

  addNewUser() {
    this.router.navigate(['/users/create']);
  }

  editUser(userId: string) {
    this.router.navigate(['/users/edit', userId]);
  }

  deteleUser(userId: string) {
    this.usersService.deleteUser(userId).pipe(take(1))
      .subscribe({
        next: this.onSuccessCallback.bind(this),
        error: this.onErrorCallback.bind(this),
      });
  }

  private onSuccessCallback(): void {
    this.usersService.getUsers().subscribe();
  }

  private onErrorCallback(): void {
    alert('Error');
  }

}
