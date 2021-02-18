import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { GalleryItem } from '../../models/gallery-item.model';
import { Post } from '../../models/post.model';
import { GalleryWebService } from '../../web-servies/gallery-web.service';
import { PostWebService } from '../../web-servies/post-web.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  galleryItems: GalleryItem[];
  posts: Post[];

  destroySubj = new Subject();

  constructor(public galleryWebservice: GalleryWebService,
    public postWebservice: PostWebService) { }

  ngOnInit(): void {
    this.loadGalleryItems();
    this.loadPosts();
  }

  loadGalleryItems(): void {
    this.galleryWebservice.getGalleryItems(10)
      .pipe(takeUntil(this.destroySubj))
      .subscribe(response => {
        this.galleryItems = response;
      });
  }

  loadPosts(): void {
    this.postWebservice.getPosts(10)
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
