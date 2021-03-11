import { Component, OnInit } from '@angular/core';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  faLinkedin = faLinkedin ;
  faGithub = faGithub;
  faEnvelope = faEnvelope;
  
  constructor() { }

  ngOnInit(): void {
  }

}
