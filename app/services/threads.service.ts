import {Injectable} from 'angular2/core';
import {THREADS} from '../models/mock-threads';

@Injectable()
export class ThreadService {
    getThreads() {
        return Promise.resolve(THREADS);
    }
}