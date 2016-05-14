import {Component, Input, OnInit} from '@angular/core';
import {NavigationState} from "../navigation-state";
import {PostsService} from "../../services/posts.service";
import {Post} from "../../models/post";

@Component({
    selector: 'posts',
    templateUrl: 'app/forum/posts/posts.component.html'
})
export class PostsComponent implements OnInit {
    navigationState:NavigationState;
    posts:Post[];

    constructor(private _navigationState:NavigationState, private _postsService:PostsService) {
        this.navigationState = _navigationState;
        _postsService.getPosts(_navigationState.currentThread).then(posts => this.posts = posts)
    }

    ngOnInit():any {
        return null;
    }
}
