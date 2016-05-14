import {Component, OnInit} from '@angular/core';
import {ThreadService} from "../../services/threads.service";
import {Thread} from "../../models/thread";
import {NavigationState} from "../navigation-state";
import {PostsService} from "../../services/posts.service";
import {Post} from "../../models/post";

@Component({
    selector: 'threads',
    templateUrl: 'app/forum/threads/threads.component.html'
})
export class ThreadsComponent implements OnInit {
    private threads:Thread[];
    private post:Post;
    navigationState:NavigationState;

    onSelect(thread:Thread) {
        this.navigationState.currentThread = thread.post_id;
    }

    constructor(private _threadsService:ThreadService, private _postsService:PostsService,
                private _navigationState:NavigationState) {
        this.navigationState = _navigationState
    }

    ngOnInit() {
        this._threadsService.getThreads()
            .then(threads => this.threads = threads);
        this._postsService.getPost(this.navigationState.currentThread).then(post => this.post = post)
    }
}