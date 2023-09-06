import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment.prod';
import { Router } from '@angular/router';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': 'true',
  })
};
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  endpoint = environment.baseUrl;

  constructor(private http: HttpClient, private router: Router) { }

  getHeader(): Observable<any> {
    return this.http.get<any>(`${this.endpoint}/site/header/list`,);
  }

  getSectionsByHeaderId(data){
    return this.http.post<any>(`${this.endpoint}/site/sections/list`,data);
  }

  getBanners(data){
    return this.http.post<any>(`${this.endpoint}/site/banners/list`,data);
  }

  createCareer(data){
    return this.http.post<any>(`${this.endpoint}/site/career`, data);
  }
}


