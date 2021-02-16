import { Component, OnInit } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  isCollapsed = true;
  faBars = faBars;
  shdwClass = "";

  constructor() { }

  ngOnInit(): void {
  }

  drpDownActive() {
    this.isCollapsed = !this.isCollapsed;
    if(!this.isCollapsed) {
      this.shdwClass = "shdwClass";
    } else if(this.isCollapsed) {
      this.shdwClass = "";
    }
  }

}
