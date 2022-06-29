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
  total: number = 25;
  filterPlanograms: string[] = [];

  constructor(
    private router: Router,
    public usersService: UsersService
  ) {
    //this.usersService.getUsers().subscribe(data => this.usersService.usersData.next(data));
  }
  ngOnInit(): void {
    //this.users = JSON.parse('[{"id":"18c77172-a411-4d89-9393-bbe9d4c80b81","email":"batman@test.com","userName":"batman","password":"batman123456","role":"simples"},{"id":"3647bcf1-c696-4ee3-8edd-aaa032b05eb6","email":"robin@test.com","userName":"robin","password":"robin123456","role":"simples"},{"id":"ed09ecf4-ecdb-467c-baea-3db8250dbdbf","email":"admin@test.com","userName":"admin","password":"admin123456","role":"manager"}]');
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
    //this.router.navigate(['/users/home']);
  }

  private onErrorCallback(): void {
    alert('Error');
  }

}
