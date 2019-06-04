import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
 
@Injectable({
  providedIn: 'root'
})
export class AccountService {
  api_url = environment.BACKEND;
  pathBalance = '/balance'
  constructor(  private _http: HttpClient) { }
   

  tokensAccount(address: string): Observable<any>{
    // address= '0xad9EB619Ce1033Cc710D9f9806A2330F85875f22'
    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Access-Control-Allow-Origin', '*')
    .set('Authorization', `token`);
 
    return this._http.get(`${this.api_url}${this.pathBalance}/${address}`, { headers: headers })
     
     
  
  }
  
}
