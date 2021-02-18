import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { NewPost } from '../models/new-post.model';

import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostWebService {

  constructor(private http: HttpClient) { }

  public getPosts(numOfPosts?: number): Observable<Post[]> {
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts').pipe(
      map(response => {
        if (numOfPosts !== null && numOfPosts !== undefined) {
          return response.slice(0, numOfPosts);
        } else {
          return response;
        }
      }), shareReplay(1)
    );
  }

  public AddPost(newPost: NewPost): Observable<any> {
    return this.http.post('https://jsonplaceholder.typicode.com/posts', newPost);
  }
}
