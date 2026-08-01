import { Component } from '@angular/core';
import { HomepageBanner } from './components/homepage-banner/homepage-banner';
import { SectionTitles } from './components/section-titles/section-titles';
import { ServerLogin } from './components/server-login/server-login';
import { ControlsGuide } from './components/controls-guide/controls-guide';
import { Leaderboard, LeaderboardEntry } from './components/leaderboard/leaderboard';
import { CommunitySection } from './components/community-section/community-section';

@Component({
  selector: 'app-root',
  imports: [
    HomepageBanner,
    SectionTitles,
    ServerLogin,
    ControlsGuide,
    Leaderboard,
    CommunitySection,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  sampleLeaderboard: LeaderboardEntry[] = [
    { username: 'xXSniperKingXx', rating: 1850, wins: 142 },
    { username: 'SocketMaster', rating: 1720, wins: 98 },
    { username: 'FragHunter', rating: 1695, wins: 87 },
    { username: 'NovaBurst', rating: 1610, wins: 76 },
    { username: 'ShadowOps', rating: 1580, wins: 71 },
  ];

  onPlayNow() {
    console.log('Play Now clicked!');
  }

  onLogin() {
    console.log('Login clicked');
  }

  onCreateAccount() {
    console.log('Create Account clicked');
  }
}
