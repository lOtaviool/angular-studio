import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public URL_BASE = 'https://68b886ddb715405043287a6f.mockapi.io/';
  public GIT_URL = 'https://api.github.com';
  private http = inject(HttpClient);
  private usersSubject = new BehaviorSubject<User[]>([]);
  users$ = this.usersSubject.asObservable();

  getListUser() {
    const url = `${this.URL_BASE}/data`;
    return this.http.get<User[]>(url).pipe(
      tap((users) => this.usersSubject.next(users))
    );
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
