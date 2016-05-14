import {Component} from '@angular/core';
import {NavigationState} from "../navigation-state";
import {PostsService} from "../../services/posts.service";
import {Post} from "../../models/post";
import {Subscription} from "rxjs/Subscription";

@Component({
    selector: 'posts',
    templateUrl: 'app/forum/posts/posts.component.html'
})
export class PostsComponent {
    currentThreadId: number
    posts:Post[]
    subscription: Subscription
    
    constructor(private _navigationState:NavigationState, private _postsService:PostsService) {
        this.subscription = _navigationState.currentThread$.subscribe(
            threadId => {
                if (threadId != this.currentThreadId) {
                    this.currentThreadId = threadId
                    _postsService.getPosts(threadId).then(posts => this.posts = posts)
                    _navigationState.changePost(null)
                }
            })
    }

    onSelect(post:Post) {
        this._navigationState.changePost(post.post_id)
    }
}
