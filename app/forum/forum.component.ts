import {Component} from '@angular/core';
import {ThreadsComponent} from "./threads/threads.component";
import {PostsComponent} from "./posts/posts.component";
import {NavigationState} from "./navigation-state";

@Component({
    selector: 'forum',
    templateUrl: 'app/forum/forum.component.html',
    directives: [ThreadsComponent, PostsComponent]
})
export class ForumComponent {
}
