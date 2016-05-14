import {Component} from '@angular/core';
import {ThreadsComponent} from "./threads/threads.component";
import {PostsComponent} from "./posts/posts.component";
import {NavigationState} from "./navigation-state";
import {ThreadService} from "../services/threads.service";
import {PostsService} from "../services/posts.service";
import {PostComponent} from "./post/post.component";


@Component({
    selector: 'forum',
    templateUrl: 'app/forum/forum.component.html',
    directives: [ThreadsComponent, PostsComponent, PostComponent],
    providers: [ThreadService, PostsService, NavigationState]
})
export class ForumComponent {}
