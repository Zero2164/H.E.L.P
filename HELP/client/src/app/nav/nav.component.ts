import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  services = false;


  constructor() { }

  ngOnInit(): void {
  }

  serviceOff() {
    this.services = false;
  }

  serviceClck() { 
    this.services = true;
  }
}
