import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
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

  ngOnDestroy(): void {
    this.destroySubj.next();
    this.destroySubj.complete();
  }
}
