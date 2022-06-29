import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  private usersUrl = '';
  constructor(private _http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.usersUrl = baseUrl + 'api/Users';
  }


  httpOptions: Record<string, unknown> = {
    headers: new HttpHeaders({
      'Allow-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    }),
    responseType: 'text',
  }

  getUsers(): Observable<User[]> {
    return this._http.get<User[]>(this.usersUrl, this.httpOptions);
  }

}


