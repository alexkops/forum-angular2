import {Injectable} from '@angular/core';
import {THREADS} from '../models/mock-threads';

@Injectable()
export class ThreadService {
    getThreads() {
        return Promise.resolve(THREADS);
    }
}