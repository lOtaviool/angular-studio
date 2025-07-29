import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from '../../../services/user.service';
import { User } from '../../../interfaces/user';

@Component({
  selector: 'app-user-edit',
  standalone: false,
  templateUrl: './user-edit.html',
  styleUrls: ['./user-edit.scss']
})
export class UserEdit implements OnInit{
  @Input() user!: User;
  editForm: any = FormGroup;


  constructor(
    public activeModal: NgbActiveModal,
    private userSevice: UserService,
    private formBuilder: FormBuilder
  ){}

  ngOnInit(): void {
    this.editForm = this.formBuilder.group({
      userName: [this.user?.name, [Validators.required]]
    })
  }

  onSubmit() {
    if (this.editForm.valid) {
      const updatedUser = {
        ...this.user,
        name: this.editForm.value.userName
      };

      this.activeModal.close(updatedUser);
    }
  }

}
