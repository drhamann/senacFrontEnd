import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { map } from 'rxjs/operators'
import { HttpClient } from '@angular/common/http';
import { sign } from 'fake-jwt-sign';
import jwtDecode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly authProvider: (email: string, password: string) => Observable<IServerAuthResponse>
  authStatus = new BehaviorSubject<IAuthStatus>({ isAuthenticated: false, userId: '', role: '' })
  private baseUrl: string
  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.authProvider = this.fakeAuthProvider
    //this.authProvider = this.exemploDeProvedorReal
    this.baseUrl = baseUrl
  }

  private exemploDeProvedorReal(email: string, senha: string): Observable<IServerAuthResponse> {
    return this.http.post<IServerAuthResponse>(this.baseUrl + 'authentication/login', { email: email, senha: senha })
  }

  private fakeAuthProvider(email: string, password: string): Observable<IServerAuthResponse> {
    if (!email.toLowerCase().endsWith('@test.com')) {
      return throwError('Failed to login! Email needs to end with @test.com.')
    }
    const authStatus: IAuthStatus = { isAuthenticated: true, userId: '123', role: 'admin' }
    if (email === 'simples@test.com') {
      authStatus.role = 'simples'
    }
    const authResponse = {
      accessToken: sign(authStatus, 'secret', {
        expiresIn: '1h',
        algorithm: 'none',
      }),
    } as IServerAuthResponse

    return of(authResponse)
  }


  login(email: string, senha: string): Observable<IAuthStatus> {
    this.logout()
    const loginResponse = this.authProvider(email, senha).pipe(
      map(value => {
        return jwtDecode(value.accessToken) as IAuthStatus
      }))

    loginResponse.subscribe(
      res => {
        this.authStatus.next(res)
      },
      err => {
        this.logout()
        return throwError(err)
      })
    return loginResponse
  }

  logout() {
    this.authStatus.next({ isAuthenticated: false, userId: '', role: '' })
  }
}

interface IServerAuthResponse {
  accessToken: string
}

export interface IAuthStatus {
  isAuthenticated: boolean
  userId: string
  role: string
}

