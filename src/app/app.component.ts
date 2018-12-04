import { TokenStorageService } from './services/login/token-storage.service';

import { Component, OnInit } from '@angular/core';
import { InteractionService } from './services/interaction.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private token: TokenStorageService) { }
  title = 'hrm-system-frontend';
  loggedIn= 'false';
  info: any;

  ngOnInit() {
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
    };

    // this.interactionService.loggedInSource$.subscribe(data=>{
    //   this.loggedIn = data;
    // })
  }



}

