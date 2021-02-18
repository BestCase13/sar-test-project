import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { HomeComponent } from './core/components/home/home.component';
import { LeftMenuComponent } from './core/components/left-menu/left-menu.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { BaseService } from './core/services/base.service';
import { GalleryWebService } from './core/web-servies/gallery-web.service';
import { PostWebService } from './core/web-servies/post-web.service';
import { ContactUsModule } from './features/contact-us/contact-us.module';
import { GalleryModule } from './features/gallery/gallery.module';
import { PostsModule } from './features/posts/posts.module';
import { SharedModule } from './shared/shared.module';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'gallery', loadChildren: () => import('./features/gallery/gallery.module').then(module => module.GalleryModule)
  },
  { path: 'posts', loadChildren: () => import('./features/posts/posts.module').then(module => module.PostsModule) },
  {
    path: 'contact-us', loadChildren: () => import('./features/contact-us/contact-us.module').then(module => module.ContactUsModule)
  }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LeftMenuComponent,
    HomeComponent
  ],
  imports: [
    PostsModule,
    GalleryModule,
    ContactUsModule,
    CommonModule,
    BrowserModule,
    SharedModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [BaseService, GalleryWebService, PostWebService],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
