import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-git-user',
  standalone: false,
  templateUrl: './git-user.html',
  styleUrls: ['./git-user.scss']
})
export class GitUser implements OnInit {
  myForm: any = FormGroup;
  user: any = '';
  isLoading: boolean = false;

  constructor(
    private userSevice: UserService,
    private formBuilder: FormBuilder
  ){
    this.myForm = this.formBuilder.group({
      userName: ['', [Validators.required]]
    })
  }

  ngOnInit(): void {}

  async getUser(){
    this.isLoading = true;
    await this.userSevice.getUser(this.myForm?.value.userName).subscribe((res)=>{
      this.user = res;
      console.log(this.user);
      this.isLoading = false;
    })
  }

}
