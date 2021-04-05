import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  itemsPerSlide = 2;
  singleSlideOffset = false;
  noWrap = false;

  constructor() { }

  ngOnInit(): void {
  }


}
