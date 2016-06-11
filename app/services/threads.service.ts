import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';
import {Thread} from "../models/thread";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ThreadService {
    private threadsUrl = 'app/threads';  // URL to web api

    constructor(private http:Http) {
    }

    getThreads():Promise<Thread[]> {
        return this.http.get(this.threadsUrl)
            .toPromise()
            .then(response => response.json().data)
            .catch(this.handleError);
    }

    save(thread:Thread):Promise<Thread> {
        if (thread.post_id) {
            return this.put(thread);
        }
        return this.post(thread);
    }

    // Add new Thread
    private post(thread:Thread):Promise<Thread> {
        let headers = new Headers({
            'Content-Type': 'application/json'
        });

        return this.http
            .post(this.threadsUrl, JSON.stringify(thread), {headers: headers})
            .toPromise()
            .then(res => res.json().data)
            .catch(this.handleError);
    }

    // Update existing Thread
    private put(thread:Thread) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        let url = `${this.threadsUrl}/${thread.post_id}`;

        return this.http
            .put(url, JSON.stringify(thread), {headers: headers})
            .toPromise()
            .then(() => thread)
            .catch(this.handleError);
    }

    private handleError(error:any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}