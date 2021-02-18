import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { GalleryComponent } from './gallery/gallery.component';
import { PostsComponent } from './posts/posts.component';

@NgModule({
  declarations: [
    PostsComponent,
    GalleryComponent,
    ContactUsComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class FeaturesModule { }
