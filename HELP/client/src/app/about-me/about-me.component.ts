import { Component, OnInit } from '@angular/core';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {
  faLinkedin = faLinkedin ;
  faGithub = faGithub;
  faEnvelope = faEnvelope;
  emailShw = false;

  constructor() { }

  ngOnInit(): void {
  }

  shwEmail() {
    this.emailShw = !this.emailShw;
  }
}
