import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CallDataService {

  constructor(private http: HttpClient) { }

  data(): Observable<any> {
    return this.http.get('https://api.publicapis.org/categories');
  }
}
