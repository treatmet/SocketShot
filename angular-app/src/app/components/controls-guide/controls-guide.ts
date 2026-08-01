import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Control {
  icon: string;
  label: string;
}

@Component({
  selector: 'app-controls-guide',
  imports: [CommonModule],
  templateUrl: './controls-guide.html',
  styleUrl: './controls-guide.css',
})
export class ControlsGuide {
  showMore = false;

  primaryControls: Control[] = [
    { icon: '/img/icons/wasd.png', label: 'Move' },
    { icon: '/img/icons/arrows.png', label: 'Shoot' },
    { icon: '/img/icons/space.png', label: 'Dash (while moving)<br>Cloak (while still)' },
  ];

  secondaryControls: Control[] = [
    { icon: '/img/icons/r.png', label: 'Reload' },
    { icon: '/img/icons/qe.png', label: 'Change Gun' },
    { icon: '/img/icons/shift.png', label: 'Utility' },
    { icon: '/img/icons/enter.png', label: 'Chat' },
    { icon: '/img/icons/esc.png', label: 'Scoreboard' },
  ];

  toggleMoreControls(event: Event) {
    event.preventDefault();
    this.showMore = !this.showMore;
  }
}
