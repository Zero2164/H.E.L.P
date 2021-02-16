import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewChangeFeature {
  baseUrl = 'https://localhost:5001/api/'

  constructor(private http: HttpClient) { }

  addchange(model: any){
    return this.http.post(this.baseUrl + 'AdminChanges/add/change', model);
  }

  addfeature(model: any){
    return this.http.post(this.baseUrl + 'AdminFeatures/add/feature', model);
  }
}
