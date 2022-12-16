import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VisitedService {



 constructor(private _httpClient: HttpClient) { }

  getmail():Observable<any>{
    return this._httpClient.get("https://jsonplaceholder.typicode.com/todos")
  }


   
}
