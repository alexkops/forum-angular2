import {provideRouter, RouterConfig}  from '@angular/router';
import {ForumComponent} from './forum/forum.component';
import {UsersComponent} from './users/users.component'

const routes: RouterConfig = [
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

export const appRouterProviders = [
    provideRouter(routes)
];