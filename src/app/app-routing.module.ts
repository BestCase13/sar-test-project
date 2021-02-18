import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactUsComponent } from './features/contact-us/contact-us.component';
import { GalleryComponent } from './features/gallery/gallery.component';
import { HomeComponent } from './core/components/home/home.component';
import { PostsComponent } from './features/posts/posts.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'posts', component: PostsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
