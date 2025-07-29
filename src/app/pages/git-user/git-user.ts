import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { finalize, tap } from 'rxjs';

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

  getUser() {
    const userName = this.myForm?.value.userName;

    this.userSevice.getUser(userName).pipe(
      finalize(() => this.isLoading = false)
    ).subscribe({
      next: (res) => {
        this.user = res;
        console.log(this.user);
      },
      error: (err) => {
        console.error('Erro ao buscar usuário:', err);
      }
    });
  }

}
