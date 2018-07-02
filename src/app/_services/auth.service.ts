
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
  baseurl = "http://localhost:5000/api/auth/";
  userToken: any;
  constructor(private http: Http) { }

  login(model: any) {
   

    return this.http.post(this.baseurl + "login", model, this.requestOption()).map((response: Response) => {
      const user = response.json();
      if (user) {
        localStorage.setItem("token", user.tokenstring);
        this.userToken = user.tokenstring;
      }

    });
  }
  Register(model:any){
    return this.http.post(this.baseurl + "register", model, this.requestOption())
  }
  private requestOption()
  {
    const headers = new Headers({ 'content-type': 'application/json' });
    return new RequestOptions({ headers: headers });
  }
}
