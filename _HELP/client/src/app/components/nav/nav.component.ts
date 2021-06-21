import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { NgSwitchCase } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, RouterLink } from '@angular/router';
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
  tabTitle = window.location.pathname.toString().replace("/", "");

  // import navlink interface and structure navbar link data
  navLinks: Navlinks[] = [
    {
      title: 'About',
      link: 'about',
    },
    {
      title: 'Projects',
      link: 'projects',
    },
    {
      title: 'Contact',
      link: 'contact',
    }
  ];


  // determine screen view breakpoint, change elements view depending on breakpoint
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  // import breakpointObserver property
  constructor(private breakpointObserver: BreakpointObserver, private titleService: Title, private router: Router) { }

  ngOnInit() {
    this.getTabTitle();
  }

  // create checkDrawState() function to toggle between changeDrawState tru or false
  changeDrawState(event?: boolean) {
    if (event) {
      this.checkDrawState = true;
    } else if (!event) {
      this.checkDrawState = false;
    }
  }

  getTabTitle() {
    return this.setTitle(this.capitalise(this.tabTitle));
  }

  capitalise(str: string) {
    const lower = str.toLowerCase();
    return str.charAt(0).toUpperCase() + lower.slice(1)
  }

  // set browser tab title
  setTitle(newTitle: string) {
    if (newTitle === "/" || newTitle === "") {
      this.titleService.setTitle("Kyle Portfolio");
    } else {
      this.titleService.setTitle("Kyle Portfolio | " + newTitle);
    }
  }


}
