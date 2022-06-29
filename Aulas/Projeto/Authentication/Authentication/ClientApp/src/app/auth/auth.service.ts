import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { map } from 'rxjs/operators'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { sign } from 'fake-jwt-sign';
import jwtDecode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly authProvider: (email: string, password: string) => Observable<void>
  authStatus = new BehaviorSubject<IAuthStatus>({ isAuthenticated: false, userId: '', role: '' })
  private baseUrl: string
  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    //this.authProvider = this.fakeAuthProvider
    this.authProvider = this.exemploDeProvedorReal
    this.baseUrl = baseUrl
    this.getUser()
  }

  httpOptions: Record<string, unknown> = {
    headers: new HttpHeaders({
      'Allow-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    }),
    responseType: 'text',
  }

  private exemploDeProvedorReal(email: string, senha: string): Observable<void> {

    return this.http.post<string>('https://localhost:7131/api/autenticador/login', { Email: email, Password: senha }, this.httpOptions).pipe(
      map(value => {
        localStorage.setItem('token', value)
        const authStatus = jwtDecode(value as string) as IAuthStatus
        localStorage.setItem('user', JSON.stringify(authStatus))
      }
      ))
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

  getToken(): string {
    return localStorage.getItem('token') as string
  }

  getUser(): IAuthStatus {
    const authUser = JSON.parse(localStorage.getItem('user') as string) as IAuthStatus
    this.authStatus.next(authUser)
    return authUser
  }

  login(email: string, senha: string): Observable<void> {
    this.logout()
    const loginResponse = this.authProvider(email, senha).pipe()

    loginResponse.subscribe(
      res => {

        this.authStatus.next(this.getUser())
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
