import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../interfaces/user';
import { finalize, Observable, tap } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserEdit } from '../../components/modals/user-edit/user-edit';
import { select, Store } from '@ngrx/store';
import { UserListActions } from '../../store/user-list/user-list.actions';
import { selectResults } from '../../store/user-list/user-list.selectors';

@Component({
  selector: 'app-list-users',
  standalone: false,
  templateUrl: './list-users.html',
  styleUrls: ['./list-users.scss']
})
export class ListUsers implements OnInit {
  isLoading: boolean = true;
  users$: Observable<User[]>;
  
  constructor(
    private userService: UserService,
    private modalService: NgbModal,
    private store: Store
  ){
    this.users$ = this.userService.users$;
    // this.users$ = this.store.pipe(
    //   select(selectResults)
    // )
  }
  
  
  ngOnInit(): void {
    this.store.dispatch(UserListActions.listUsersRequested());
  }

  getListUsers(){
    this.userService.getListUser().pipe(
      finalize(() => this.isLoading = false)
    ).subscribe({
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
