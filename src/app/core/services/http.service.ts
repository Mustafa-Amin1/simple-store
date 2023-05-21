import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  baseUrl = 'https://fakestoreapi.com';

  constructor(private http: HttpClient) { }

  getReq(path: string, options?: Object): Observable<any> {
    return this.http.get(`${this.baseUrl}${path}`, options);
  }

  postReq(path: string, data?: any, options?: Object): Observable<any> {
    return this.http.post(`${this.baseUrl}${path}`, data, options);
  }

  putReq(path: string, data?: any, options?: Object): Observable<any> {
    return this.http.put(`${this.baseUrl}${path}`, data, options);
  }

  deleteReq(path: string, options?: Object): Observable<any> {
    return this.http.delete(`${this.baseUrl}${path}`, options);
  }
}
