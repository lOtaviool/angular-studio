import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

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

  getListUser(){
    const url = `${this.URL_BASE}/data`;
    return this.http.get(url);
  }


  // updateUserName(userId: string, name: string): Promise<User> {
  //   const url = ``
  //   const response = ''

  //   return response.data;
  // }

  // deleteUser(userId: string): Promise<User> {
  //   const url = ``
  //   const response = 

  //   return response.data;
  // }

  getUser(username: string){
    const url = `${this.GIT_URL}/users/${username}`
    return this.http.get(url);
  }
}
