import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryItemComponent } from './gallery-item/gallery-item.component';
import { PostItemComponent } from './post-item/post-item.component';

@NgModule({
  declarations: [GalleryItemComponent, PostItemComponent],
  imports: [
    CommonModule
  ],
  exports: [GalleryItemComponent, PostItemComponent]
})
export class SharedModule { }
