import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
profile;
  constructor(public auth: AuthService) {
    auth.handleAuthentication();
    this.profile = this.auth.userProfile;
    console.log(this.profile);
  }

}
