import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { ResponseUser, User } from '../../users-entities'; 'dns';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private usersUrl = '';
  usersData: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);

  constructor(private _http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.usersUrl = baseUrl + 'api/Users';
    this.getUsers().subscribe(users => this.usersData.next(users));
  }
  httpOptions: Record<string, unknown> = {
    headers: new HttpHeaders({
      'Allow-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    }),
    responseType: 'text',
  }

  getUsers(): Observable<User[]> {
    return this._http.get<string>(this.usersUrl, this.httpOptions).pipe(
      map(response => {
        const responseUsers: ResponseUser = JSON.parse(response);
        const users: User[] = responseUsers.result;
        return users;
      }));
  }

  createUser(email: string, senha: string, name: String, role: String, confirmPassword: String): Observable<void> {
    return this._http.post<void>(this.usersUrl, { email: email, password: senha, userName: name, role: role, confirmPassword: confirmPassword }, this.httpOptions);
  }

  deleteUser(id: string): Observable<void> {
    return this._http.delete<void>(this.usersUrl + '?id=' + id, this.httpOptions);
  }

  updateUser(id: string, email: string, senha: string, name: String, role: String, confirmPassword: String): Observable<void> {
    return this._http.put<void>(this.usersUrl, { id: id, email: email, password: senha, userName: name, role: role, confirmPassword: confirmPassword }, this.httpOptions);
  }

}


