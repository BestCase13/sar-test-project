import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  footerOpen = false;
  constructor() { }

  ngOnInit(): void {
  }

  toggleFooter(): void {
    this.footerOpen = !this.footerOpen;
  }
}
