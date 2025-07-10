import { Routes } from '@angular/router';
import { GitUser } from './pages/git-user/git-user';
import { ListUsers } from './pages/list-users/list-users';
import { Home } from './pages/home/home';

export const routes: Routes = [
    {
        path: '',
        component: Home,
        children: [
        { path: 'list-users', component: ListUsers },
        { path: 'git-user', component: GitUser },
        // { path: '', redirectTo: 'app1', pathMatch: 'full' }
        ]
    }
];
