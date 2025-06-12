import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GitUserService {
  public BaseUrl = 'http://localhost:3000';

  constructor(
    private http: HttpClient, 
    private router: Router
  ) { }

  getUser(username: string){
    const url = `${this.BaseUrl}/api/github/${username}`
    return this.http.get(url);
  }
}
