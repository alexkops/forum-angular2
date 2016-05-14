import {Component, OnInit} from '@angular/core';
import {ThreadService} from "../../services/threads.service";
import {Thread} from "../../models/thread";
import {NavigationState} from "../navigation-state";
import {PostsService} from "../../services/posts.service";

@Component({
    selector: 'threads',
    templateUrl: 'app/forum/threads/threads.component.html'
})
export class ThreadsComponent implements OnInit {
    private threads:Thread[]

    onSelect(thread:Thread) {
        this._navigationState.changeThread(thread.post_id)
    }

    constructor(private _threadsService:ThreadService, private _postsService:PostsService,
                private _navigationState: NavigationState) {
    }

    ngOnInit() {
        this._threadsService.getThreads()
            .then(threads => this.threads = threads);
    }
}