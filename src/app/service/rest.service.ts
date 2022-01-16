import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({'Content-type': 'application/json', 'Access-Control-Allow-Origin': '*', 'Cache-control': 'no-cache', 'Expires': '0', 'Pragma': 'no-cache'})
}
@Injectable({
  providedIn: 'root'
})
export class RestService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private _httpClient: HttpClient) { }

  getAllcustomers_url:string = "/customer/all"; //load list of customers

  // getCustomerList(){
  //   return this._httpClient.get(this.getAllcustomers_url, httpOptions);
  // }

  public getCustomerList(): Observable<any[]> {
    return this._httpClient.post<any[]>(`${this.apiServerUrl}/customer/all`, String);
  }
}
