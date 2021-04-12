import { Component, OnInit } from '@angular/core';
import { faAngular, faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { faChessKnight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  itemsPerSlide = 2;
  singleSlideOffset = false;
  noWrap = false;
  fahtml5 = faHtml5;
  faChessKnight = faChessKnight;
  faAngular = faAngular;
  
  constructor() { }

  ngOnInit(): void {
  }

}
