import { Component, OnInit } from '@angular/core';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faArrowRight, faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  faArrowRight = faArrowRight;
  faLinkedin = faLinkedin ;
  faGithub = faGithub;
  faEnvelope = faEnvelope;

  constructor() { }

  ngOnInit(): void {
  }


}
