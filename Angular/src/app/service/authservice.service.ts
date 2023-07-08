import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Iuser } from '../interface/auth';
@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  constructor(private http: HttpClient) { }
  Signup(user: Iuser): Observable<Iuser>{
    return this.http.post<Iuser>(`http://localhost:8080/api/signup`,user)
  }
  Signin(user: any): Observable<any>{
    return this.http.post<any>(`http://localhost:8080/api/signin`,user)
  }
  isAuthenticated(): any {
    return JSON.parse(localStorage.getItem('userInfo') || '{}');
  }
}
