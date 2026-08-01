import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-homepage-banner',
  imports: [],
  templateUrl: './homepage-banner.html',
  styleUrl: './homepage-banner.css',
})
export class HomepageBanner {
  @Output() playNowClicked = new EventEmitter<void>();

  onPlayNow() {
    this.playNowClicked.emit();
  }
}
