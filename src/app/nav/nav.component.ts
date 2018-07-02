import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { error } from 'util';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model: any = {}
  constructor(private authservice: AuthService) { }

  ngOnInit() {
  }
  login() {
    this.authservice.login(this.model).subscribe(data => {
      console.log("successfull");
    }, error => {
      console.log("error");
    });
  }
  Logout() {
    this.authservice.userToken = null;
    localStorage.removeItem("token");
    console.log("logged out");
  }
  Loggedin(){
    const token = localStorage.getItem("token");
    return !!token;
  }
}
