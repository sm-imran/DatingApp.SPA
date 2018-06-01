import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.css']
})
export class ValueComponent implements OnInit {
  values: any;
  constructor(private http: Http) { }

  ngOnInit() {
   this.getvalues();
  }

  getvalues() {
    this.http.get("http://localhost:5000/api/values").subscribe(response => {
      debugger;
      this.values = response.json();
    });
  }
}
