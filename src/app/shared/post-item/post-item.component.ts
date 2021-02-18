import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Post } from '../../core/models/post.model';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostItemComponent implements OnInit {
  @Input() postItemModel: Post;
  constructor() { }

  ngOnInit(): void {
  }

}
