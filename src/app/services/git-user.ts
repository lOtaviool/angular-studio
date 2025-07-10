import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GitUserService {
  public GIT_URL = 'https://api.github.com';

  constructor(
    private http: HttpClient, 
    private router: Router
  ) { }

  getUser(username: string){
    const url = `${this.GIT_URL}/users/${username}`
    return this.http.get(url);
  }
}
