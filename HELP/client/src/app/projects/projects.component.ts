import { Component, OnInit } from '@angular/core';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  itemsPerSlide = 2;
  singleSlideOffset = false;
  noWrap = false;
  faInfoCircle = faInfoCircle;
  infoActive = false;
  appDisp1 = "";
  appDisp2 = "display: none;";

  constructor() { }

  ngOnInit(): void {
  }

  info() {
    this.infoActive = !this.infoActive;
    if(this.infoActive) {
      this.appDisp1 = "opacity: 0;";
      this.appDisp2 = "opacity: 1; display: block;";
    }
    else if (!this.infoActive) {
      this.appDisp1 = "opacity: 1;";
      this.appDisp2 = "display: none;";
    };
  }

}
