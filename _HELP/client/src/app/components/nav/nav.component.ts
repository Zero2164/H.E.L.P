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
    }
  ];

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );

constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
    console.log(this.navLinks[1])
  }

}
