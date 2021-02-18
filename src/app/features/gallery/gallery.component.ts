import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { GalleryItem } from 'src/app/core/models/gallery-item.model';
import { GalleryWebService } from 'src/app/core/web-servies/gallery-web.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit, OnDestroy {
  galleryItems: GalleryItem[];

  destroySubj = new Subject();

  constructor(public galleryWebservice: GalleryWebService) { }

  ngOnInit(): void {
    this.loadGalleryItems();
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
