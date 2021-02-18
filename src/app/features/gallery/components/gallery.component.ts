import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { GalleryItem } from '../../../core/models/gallery-item.model';
import { BaseService } from '../../../core/services/base.service';
import { GalleryWebService } from '../../../core/web-servies/gallery-web.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit, OnDestroy {
  galleryItems: GalleryItem[];

  destroySubj = new Subject();

  constructor(public galleryWebservice: GalleryWebService, private baseService: BaseService) { }

  ngOnInit(): void {
    this.loadGalleryItems();
    this.baseService.colorSubject.next('gallery');
  }

  loadGalleryItems(): void {
    this.galleryWebservice.getGalleryItems()
      .pipe(takeUntil(this.destroySubj))
      .subscribe(response => {
        this.galleryItems = response;
      });
  }

  ngOnDestroy(): void {
    this.destroySubj.next();
    this.destroySubj.complete();
  }
}
