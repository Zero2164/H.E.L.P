import { Component, Input, OnInit } from '@angular/core';
import { Navlinks } from './navlinks';

@Component({
  selector: 'app-nav-links',
  templateUrl: './nav-links.component.html',
  styleUrls: ['./nav-links.component.css']
})
export class NavLinksComponent implements OnInit {
  @Input() navlink: Navlinks | null = null; 
  
  constructor() { }

  ngOnInit(): void {
  }

}
