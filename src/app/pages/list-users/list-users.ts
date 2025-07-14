import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../interfaces/user';

@Component({
  selector: 'app-list-users',
  standalone: false,
  templateUrl: './list-users.html',
  styleUrls: ['./list-users.scss']
})
export class ListUsers implements OnInit {
  list_data: any;

  constructor(
    private userService: UserService
  ){}

  ngOnInit(): void {
    this.getListUsers();
  }

  async getListUsers(){
    await this.userService.getListUser().subscribe((res)=>{
      this.list_data = res;
      console.log(this.list_data);
      // this.isLoading = false;
    })
  }

}
