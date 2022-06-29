import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError as observableThrowError, Observable, of } from 'rxjs';
import { User } from '../../users-entities';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  deleteUser(id: string): Boolean {
    this._http.delete(this.usersUrl + '/' + id,).subscribe(
      result => {
        return true;
      },
      error => {
        console.error(error)
        throw observableThrowError(error);
      });

    return false;
  }

  private users: User[] = [];
  private usersUrl = '';
  constructor(private _http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.usersUrl = 'http://localhost:7131/' + 'api/Users';
  }

  async getUsers(): Promise<User[]> {
    this._http.get<User[]>(this.usersUrl).subscribe(
      result => {
        this.users = result;
      },
      error => {
        console.error(error)
        throw observableThrowError(error);
      });

    return this.users;
  }

}


