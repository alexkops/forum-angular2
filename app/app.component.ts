import {Component} from '@angular/core';
import {ForumComponent} from './forum/forum.component'
import {UsersComponent} from './users/users.component'
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router-deprecated';
import {ThreadsComponent} from "./forum/threads/threads.component";

@Component({
    selector: 'app',
    templateUrl: 'app/app.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS]
})
@RouteConfig([
    {
        path: '/forum',
        name: 'Forum',
        component: ForumComponent,
        useAsDefault: true
    },
    {
        path: '/users',
        name: 'Users',
        component: UsersComponent
    },
])
export class AppComponent {
    title = "Walexplodiert"
}