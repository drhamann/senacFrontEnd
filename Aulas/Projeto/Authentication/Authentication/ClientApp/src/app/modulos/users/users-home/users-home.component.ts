import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../users-entities';
import { UsersService } from '../services/users.service';
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
  }
  ngOnInit(): void {
    this.users = JSON.parse('[{"id":"18c77172-a411-4d89-9393-bbe9d4c80b81","email":"batman@test.com","userName":"batman","password":"batman123456","role":"simples"},{"id":"3647bcf1-c696-4ee3-8edd-aaa032b05eb6","email":"robin@test.com","userName":"robin","password":"robin123456","role":"simples"},{"id":"ed09ecf4-ecdb-467c-baea-3db8250dbdbf","email":"admin@test.com","userName":"admin","password":"admin123456","role":"manager"}]');
    //this.getUsers();
  }

  getUsers() {
    this.usersService.getUsers().pipe().subscribe((result: User[]) => {
      this.users = result;
      console.log(this.users);
    }, error => console.error(error));
  }

  addNewUser() {
    this.router.navigate(['/users/create']);
  }

  editUser(userId: string) {
    this.router.navigate(['/users/edit', userId]);
  }

  deteleUser(userId: string) {
    this.usersService.deleteUser(userId)
    this.getUsers();
  }
}
