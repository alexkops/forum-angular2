import {Injectable} from '@angular/core';
import {Response, Http} from '@angular/http';
import {Post} from "../models/post";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class PostsService {
    private postsUrl = 'app/posts';  // URL to web api

    constructor(private http:Http) {
    }
    
    getPosts(threadId:number):Promise<Post[]> {
        return this.http.get(this.postsUrl + "?thread_id=" + threadId)
            .toPromise()
            .then(response => this.extractData<Post[]>(response))
            .catch(this.handleError);
    }

    getPost(postId:number):Promise<Post> {
        if (!postId) return Promise.resolve(null);
        return this.http.get(`${this.postsUrl}/${postId}`)
            .toPromise()
            .then(response => this.extractData<Post>(response))
            .catch(this.handleError);
    }

    private extractData<T>(res:Response) {
        if (res.status < 200 || res.status >= 300) {
            throw new Error('Bad response status: ' + res.status);
        }
        let body = res.json();
        return <T>(body.data || {});
    }

    private handleError(error:any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}
