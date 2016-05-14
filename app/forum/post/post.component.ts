import {Component} from '@angular/core';
import {NavigationState} from "../navigation-state";
import {PostsService} from "../../services/posts.service";
import {Post} from "../../models/post";
import {Subscription} from "rxjs/Subscription";

@Component({
    selector: 'post',
    templateUrl: 'app/forum/post/post.component.html'
})
export class PostComponent {
    post:Post
    private subscription: Subscription
    
    constructor(private _navigationState:NavigationState, private _postsService:PostsService) {
        this.subscription = _navigationState.currentPost$.subscribe(
            postId => {
                _postsService.getPost(postId).then(post => this.post = post)
            })
    }
}
