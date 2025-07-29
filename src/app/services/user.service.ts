import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public URL_BASE = 'https://6863d24a88359a373e967374.mockapi.io';
  public GIT_URL = 'https://api.github.com';

  constructor(
    private http: HttpClient, 
    private router: Router,
  ) { }

  getListUser(): Observable<User[]>{
    const url = `${this.URL_BASE}/data`;
    return this.http.get<User[]>(url);
  }

  getUser(username: string){
    const url = `${this.GIT_URL}/users/${username}`
    return this.http.get(url);
  }

  updateUserName(userId: string, name: string){
    const url = `${this.URL_BASE}/data/${userId}`;
    return this.http.put(url, {name: name});
  }

  deleteUser(userId: string){
    const url = `${this.URL_BASE}/data/${userId}`;
    return this.http.delete(url);
  }

}
