import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Change } from '../_models/change';
import { Feature } from '../_models/feature';

@Injectable({
  providedIn: 'root'
})
export class NewChangeFeature {
  baseUrl = 'https://localhost:5001/api/';
  changes: Change[] = [];
  features: Feature[] = [];

  constructor(private http: HttpClient) { }

  getChangz() {
    if (this.changes.length > 0) return of(this.changes);
    return this.http.get<Change[]>(this.baseUrl + 'Changes').pipe(
      map(changes => {
        this.changes = changes;
        return changes.reverse();
      })
    );
  }

  getFeatures() {
    if (this.features.length > 0) return of(this.features);
    return this.http.get<Feature[]>(this.baseUrl + 'Features').pipe(
      map(features => {
        this.features = features;
        return features;
      })
    );
  }

  addchange(model: any) {
    return this.http.post(this.baseUrl + 'Changes/add/change', model);
  }

  addfeature(model: any) {
    return this.http.post(this.baseUrl + 'Features/add/feature', model);
  }
}
