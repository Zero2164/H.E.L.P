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
  chngDrawState: boolean;
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



  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit() { }

  changeDrawState() {
    this.checkDrawState = !this.checkDrawState;
    if (this.checkDrawState) {
      this.chngDrawState = true;
    } else if (!this.checkDrawState) {
      this.chngDrawState = false;
    }
  }

  closeDrawState() {
    this.chngDrawState = false;
  }

  openDrawState() {
    this.chngDrawState = true;
  }
}
