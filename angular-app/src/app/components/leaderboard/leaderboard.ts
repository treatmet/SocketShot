import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface LeaderboardEntry {
  username: string;
  rating: number;
  wins: number;
}

@Component({
  selector: 'app-leaderboard',
  imports: [CommonModule],
  templateUrl: './leaderboard.html',
  styleUrl: './leaderboard.css',
})
export class Leaderboard {
  @Input() entries: LeaderboardEntry[] = [];
}
