import {Routes, RouterModule} from '@angular/router';
import {ForumComponent} from './forum/forum.component';
import {UsersComponent} from './users/users.component'

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/forum',
        pathMatch: 'full'
    },
    {
        path: 'forum',
        component: ForumComponent
    },
    {
        path: 'users',
        component: UsersComponent
    }
];

export const routing = RouterModule.forRoot(appRoutes);