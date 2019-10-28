import { Component } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  template: `
    this works if you see a picture of a cat *and* no errors in the console
    <div class="cat" [style.background-image]="iconSafe" (click)="clickMe()"></div>
  `,
  styles: [`
    .cat {
      width: 200px;
      height: 200px;
      background-size: 200px 200px;
      background-repeat: no-repeat;
      background-position: 1px 1px;
    }
  `]
})
export class AppComponent {
  icon = 'https://i.imgur.com/4AiXzf8.jpg';

  constructor(private sanitizer: DomSanitizer) {}

  get iconSafe() {
    return this.sanitizer.bypassSecurityTrustStyle(`url(${this.icon})`);
  }

  clickMe() {

  }
}
