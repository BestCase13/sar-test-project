import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

import { GalleryItem } from '../../core/models/gallery-item.model';

@Component({
  selector: 'app-gallery-item',
  templateUrl: './gallery-item.component.html',
  styleUrls: ['./gallery-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GalleryItemComponent implements OnInit {
  @Input() galleryItemModel: GalleryItem;
  constructor() { }

  ngOnInit(): void {
  }
}
