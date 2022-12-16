import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(private _httpClient: HttpClient) { }

  getitems():Observable<any>{
    return this._httpClient.get("https://fakestoreapi.com/products")
  }
}
