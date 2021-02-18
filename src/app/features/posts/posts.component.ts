import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';
import { NewPost } from 'src/app/core/models/new-post.model';
import { Post } from 'src/app/core/models/post.model';
import { PostWebService } from 'src/app/core/web-servies/post-web.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit, OnDestroy {
  posts: Post[];
  destroySubj = new Subject();
  postTitle = '';
  postContent = '';

  constructor(public postWebservice: PostWebService) { }

  ngOnInit(): void {
    this.loadPosts();
  }

  loadPosts(): void {
    this.postWebservice.getPosts()
      .pipe(takeUntil(this.destroySubj))
      .subscribe(response => {
        this.posts = response;
      });
  }

  submintForm(): void {
    const newPostModel: NewPost = { title: this.postTitle, content: this.postContent };
    this.postWebservice.AddPost(newPostModel)
      .subscribe(_ => this.loadPosts());
  }

  ngOnDestroy(): void {
    this.destroySubj.next();
    this.destroySubj.complete();
  }
}
