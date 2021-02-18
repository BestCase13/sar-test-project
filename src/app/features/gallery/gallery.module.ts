import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { GalleryComponent } from './components/gallery.component';

const routes: Routes = [{ path: '', component: GalleryComponent }];

@NgModule({
  declarations: [GalleryComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class GalleryModule { }
