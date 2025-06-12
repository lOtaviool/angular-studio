import { Component, OnInit } from '@angular/core';
import { GitUserService } from '../../services/git-user';
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

  constructor(
    private gitSevice: GitUserService,
    private formBuilder: FormBuilder
  ){
    this.myForm = this.formBuilder.group({
      userName: ['lotaviool', [Validators.required]]
    })
  }

  ngOnInit(): void {}

  async getUser(){
    this.gitSevice.getUser(this.myForm?.value.userName).subscribe((res)=>{
      this.user = JSON.stringify(res, null, 2);
      console.log(this.user);
    })
  }

}
