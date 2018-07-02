import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  registermode = false;
  constructor(private http: Http) { }
  values: any;
  ngOnInit() {
    this.getvalues();
  }
  registertoggel() {
    this.registermode = true;
  }

  getvalues() {
    this.http.get("http://localhost:5000/api/values").subscribe(response => {

      this.values = response.json();
    });
  }
  cancelRegisterMode(registerMode: boolean) {
    this.registermode = registerMode;

  }

}
