import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Navlinks } from './nav-links/navlinks';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  checkDrawState: boolean;

  // import navlink interface and structure navbar link data
  navLinks: Navlinks[] = [
    {
      title: 'About',
      link: 'about'
    },
    {
      title: 'Projects',
      link: 'projects'
    },
    {
      title: 'Resume',
      link: 'resume'
    },
    {
      title: 'Contact',
      link: 'contact'
    }
  ];


  // determine screen view breakpoint, change elements view depending on breakpoint
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  // import breakpointObserver property
  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit() { }
  
  // create checkDrawState() function to toggle between changeDrawState tru or false
  changeDrawState(event?: boolean) {
    if(event) {
      this.checkDrawState = true;
    } else if (!event) {
      this.checkDrawState = false;
    } 
  }


}
