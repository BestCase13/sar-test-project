import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { BaseService } from './core/services/base.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('backGroundContainer') backGroundContainer: ElementRef;
  constructor(private baseService: BaseService) { }

  ngOnInit(): void {
    this.baseService.colorSubject.subscribe(subjectValue => {
      switch (subjectValue) {
        case 'contact-us':
          this.backGroundContainer.nativeElement.ownerDocument.body.style.backgroundColor = 'rgba(188, 188, 255, 0.904)';
          break;
        case 'gallery':
          this.backGroundContainer.nativeElement.ownerDocument.body.style.backgroundColor = 'rgb(255, 255, 174)';
          break;
        case 'posts':
          this.backGroundContainer.nativeElement.ownerDocument.body.style.backgroundColor = 'rgb(199, 255, 199)';
          break;
        case 'home':
          this.backGroundContainer.nativeElement.ownerDocument.body.style.backgroundColor = 'rgb(255, 185, 185)';
          break;
      }
    });
  }
}
