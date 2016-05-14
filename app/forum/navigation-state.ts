import { Injectable } from '@angular/core'
import { Subject }    from 'rxjs/Subject';

@Injectable()
export class NavigationState {
    private currentThreadSource = new Subject<number>()
    private currentPostSource = new Subject<number>()

    currentThread$ = this.currentThreadSource.asObservable()
    currentPost$ = this.currentPostSource.asObservable()

    changeThread(threadId: number) {
        this.currentThreadSource.next(threadId)
    }

    changePost(postId: number) {
        this.currentPostSource.next(postId)
    }
}