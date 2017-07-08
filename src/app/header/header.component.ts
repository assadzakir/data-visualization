import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public authService: AuthService, private route: Router) { }

  ngOnInit() {
  }

  onLogout() {
    this.authService.logout();
    this.route.navigate(['/home']);
  }

}
