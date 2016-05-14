import {Injectable} from '@angular/core';
import {POSTS} from "../models/mock-posts";
import {Post} from "../models/post";

@Injectable()
export class PostsService {
    getPosts(threadId:number):Promise<Post[]> {
        return Promise.resolve(POSTS.filter(post => post.parent_id == threadId));
    }

    getPost(postId:number):Promise<Post> {
        return Promise.resolve(POSTS.filter(post => post.post_id == postId)[0]);
    }
}
