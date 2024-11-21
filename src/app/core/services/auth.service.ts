import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:1337/admin'; // URL de Strapi

  constructor(private http: HttpClient) {}

  login(identifier: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}`, {
      identifier,
      password
    });
  }

  register(username: string, email: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, {
      username,
      email,
      password
    });
  }
}
