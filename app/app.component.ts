import {Component} from 'angular2/core';
import {ForumComponent} from './forum/forum.component'
import {UsersComponent} from './users/users.component'
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {ThreadService} from "./services/threads.service";
import {NavigationState} from "./forum/navigation-state";
import {PostsService} from "./services/posts.service";

@Component({
    selector: 'app',
    template: `<h1>Willkommen bei {{title}}</h1>
        <nav>        
          <a [routerLink]="['Forum']">Forum</a>
          <a [routerLink]="['Users']">User</a>
        </nav>
        <router-outlet></router-outlet>`,
    directives: [ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS, ThreadService, PostsService, NavigationState]
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