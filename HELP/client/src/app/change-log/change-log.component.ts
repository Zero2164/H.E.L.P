import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Change } from '../_models/change';
import { Feature } from '../_models/feature';
import { NewChangeFeature } from '../_services/newChangeFeature.service';

@Component({
  selector: 'app-change-log',
  templateUrl: './change-log.component.html',
  styleUrls: ['./change-log.component.css']
})
export class ChangeLogComponent implements OnInit {
  changes$: Observable<Change[]>;
  features$: Observable<Feature[]>;

  constructor(private http: HttpClient, private newChangeFeature: NewChangeFeature) { }

  ngOnInit() {
    this.changes$ = this.newChangeFeature.getChangz();
    this.features$ = this.newChangeFeature.getFeatures();
  }
 

}
