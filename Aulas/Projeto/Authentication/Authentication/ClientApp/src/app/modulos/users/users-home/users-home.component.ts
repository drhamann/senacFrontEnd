import { AfterViewInit, Component, Inject, ViewChild, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { User } from '../../users-entities';
import { UsersService } from '../services/users.service';
import { UsersCreateComponent } from '../users-create/users-create.component';
@Component({
  selector: 'app-users-home',
  templateUrl: './users-home.component.html',
  styleUrls: ['./users-home.component.css']
})
export class UsersHomeComponent implements AfterViewInit {
  displayedColumns: string[] = ['id', 'username', 'role', 'email', 'deleteIcon', 'editIcon'];
  users: User[] = [];
  dataSource: MatTableDataSource<User>;
  // @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  //@ViewChild(MatSort, { static: true }) sort: MatSort = new MatSort();
  searchValue: string = '';
  autocompleteShowSpinner: boolean = false;
  total: number = 25;
  filterPlanograms: string[] = [];

  constructor(
    private router: Router,
    public usersService: UsersService
  ) {
    this.dataSource = new MatTableDataSource(this.users);
  }

  ngAfterViewInit() {
    //this.paginator.pageSize = 25;
    //let currentPage = this.paginator.pageIndex;
    //let pageSize = this.paginator.pageSize;
    //this.getUsers(currentPage, pageSize);
    this.getUsers(0, 25);
    this.total = this.users.length;
  }

  async getUsers(currentPage: number, pageSize: number) {

    this.users = await this.usersService.getUsers();
    this.dataSource = new MatTableDataSource(this.users);
    //this.paginator.length = this.users.length
  }

  addNewUser() {
    /*const dialogRef = this.dialog.open(UsersCreateComponent, {
      panelClass: 'no-padding-dialog-container',
      width: '80vw',
      data: { users: this.users }
    });

    dialogRef.afterClosed().subscribe(async _ => {
      this.getUsers(0, 25);
    })*/
  }

  deteleUser(userId: string) {
    this.usersService.deleteUser(userId)
    this.getUsers(0, 25);
  }
}
