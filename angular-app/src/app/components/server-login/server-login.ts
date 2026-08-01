import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-server-login',
  imports: [CommonModule],
  templateUrl: './server-login.html',
  styleUrl: './server-login.css',
})
export class ServerLogin {
  @Input() isLoggedIn = false;
  @Output() createAccountClicked = new EventEmitter<void>();
  @Output() loginClicked = new EventEmitter<void>();

  onCreateAccount() {
    this.createAccountClicked.emit();
  }

  onLogin() {
    this.loginClicked.emit();
  }
}
