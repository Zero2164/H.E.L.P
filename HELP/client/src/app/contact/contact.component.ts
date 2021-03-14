import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  @Input() activeLink: string;
  @Input() contactEnabled: boolean;
  @Output() updateLink = new EventEmitter<string>();
  @Output() updateLink2 = new EventEmitter<boolean>();
  faLinkedin = faLinkedin;
  faGithub = faGithub;
  faEnvelope = faEnvelope;
  disableOverlay = false;
  displayStyle = "";

  constructor(public toastr: ToastrService) { }

  ngOnInit(): void {
  }

  directFeedbk() {
    this.toastr.info('Redirecting you now..');
  }


  disableOverlayActive() {
    this.disableOverlay = !this.disableOverlay;
    if (this.disableOverlay) {
      this.displayStyle = "d-none";
      this.activeLink = "";
      this.contactEnabled = false;
      this.updateLink.emit(this.activeLink);
      this.updateLink2.emit(this.contactEnabled);
    } else {
      this.displayStyle = "";
    }
  }
}
