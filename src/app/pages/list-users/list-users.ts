import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../interfaces/user';
import { finalize, tap } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserEdit } from '../../components/modals/user-edit/user-edit';

@Component({
  selector: 'app-list-users',
  standalone: false,
  templateUrl: './list-users.html',
  styleUrls: ['./list-users.scss']
})
export class ListUsers implements OnInit {
  list_data: User[] = [];
  isLoading: boolean = true;

  constructor(
    private userService: UserService,
    private modalService: NgbModal
  ){}

  ngOnInit(): void {
    this.getListUsers();
  }

  getListUsers(){
    this.userService.getListUser().pipe(
      finalize(() => this.isLoading = false)
    ).subscribe({
      next: (res: User[]) => {
        this.list_data = res;
      },
      error: (err) => {
        console.error('Erro ao buscar lista de usuários:', err);
      }
    });
  }

  updateUSer(user: User){
    this.userService.updateUserName(user?.id, user?.name).pipe().subscribe({
      next: () => {
        this.getListUsers();
      },
      error: (err) => {
        console.error('Erro ao atualizar usuário:', err);
      }
    })
  }

  deleteUser(userId: string){
    this.userService.deleteUser(userId).pipe().subscribe({
      next: () => {
        this.getListUsers();
      },
      error: (err) => {
        console.error('Erro ao deletar usuário:', err);
      }
    })
  }

  openEditModal(user: User){
    const modalRef = this.modalService.open(UserEdit);
    modalRef.componentInstance.user = user;

    modalRef.result.then(
      (updatedUser: User) => {
        if(updatedUser){
          this.updateUSer(updatedUser);
        }
      },
      (reason) => {
        console.log('Modal fechado sem salvar', reason);
      }
    );
  }

}
