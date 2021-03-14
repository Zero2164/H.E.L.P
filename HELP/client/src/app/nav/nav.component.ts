import { Component, OnInit, Output } from '@angular/core';
import { faBars, faHandsHelping } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  isCollapsed = true;
  faBars = faBars;
  faHandsHelping = faHandsHelping;
  shdwClass = "";
  collapseMnuHvr = "";
  contactEnabled = false;
  activeLink = ""

  constructor() { }

  ngOnInit(): void {
  }


  contactSwtchActive() {
    this.contactEnabled = !this.contactEnabled;
    if (this.contactEnabled) {
      this.activeLink = "active activeContactLink";
    } else {
      this.activeLink = "";
    }
  }

  contactSwtchInactive() {
    this.activeLink = "";
    this.contactEnabled = false;
  }

  drpDownActive() {
    this.isCollapsed = !this.isCollapsed;
    if (!this.isCollapsed) {
      this.shdwClass = "shdwClass";
      this.collapseMnuHvr = "collapseMnuHvr";
    } else if (this.isCollapsed) {
      this.shdwClass = "";
      this.collapseMnuHvr = "";
    }
  }

  drpDownInactive() {
    this.isCollapsed = true;
    if (this.isCollapsed) {
      this.shdwClass = "";
      this.collapseMnuHvr = "";
    }
  }

}

