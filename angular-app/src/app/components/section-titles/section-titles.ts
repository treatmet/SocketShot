import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-section-titles',
  imports: [CommonModule],
  templateUrl: './section-titles.html',
  styleUrl: './section-titles.css',
})
export class SectionTitles {
  @Input() titles: string[] = ['Select Game', 'Leaderboard', 'Community'];
}
