import { Routes } from '@angular/router';
import { GitUser } from './components/git-user/git-user';

export const routes: Routes = [
    {
        path: '',
        component: GitUser,
        data:{}
    }
];
