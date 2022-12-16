import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Boredom1Service {

  constructor(private _httpClient: HttpClient) { }

  getboredom():Observable<any>{
    return this._httpClient.get("https://www.boredapi.com/api/activity")
  }

}
