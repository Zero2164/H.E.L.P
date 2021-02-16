import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NewChangeFeature } from '../_services/newChangeFeature.service';

@Component({
  selector: 'app-change-log',
  templateUrl: './change-log.component.html',
  styleUrls: ['./change-log.component.css']
})
export class ChangeLogComponent implements OnInit {
  changeModel: any;
  featureModel: any;

  constructor(private http: HttpClient, private newChangeFeature: NewChangeFeature) { }

  ngOnInit() {
    this.getChangz();
    this. getFeatures();
  }
 
  getChangz() {
    this.http.get('https://localhost:5001/api/changes').subscribe(response => {
      this.changeModel = response;
    }, error => {
      console.log(error);
    })
  }

  getFeatures() {
    this.http.get('https://localhost:5001/api/features').subscribe(response => {
      this.featureModel = response;
    }, error => {
      console.log(error);
    })
  }
}
