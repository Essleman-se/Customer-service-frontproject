import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';


const httpOptions = {
  headers: new HttpHeaders({'Content-type': 'application/json', 'Access-Control-Allow-Origin': '*', 'Cache-control': 'no-cache', 'Expires': '0', 'Pragma': 'no-cache'})
}
@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private _httpClient: HttpClient) { }

  getAllcustomers_url:string = "/customer/all"; //load list of customers

  getCustomerList(){
    return this._httpClient.post(this.getAllcustomers_url, httpOptions);
  }
}
