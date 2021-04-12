import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.css']
})
export class CertificatesComponent implements OnInit {
  @Input() certsEnabled: boolean;
  @Output() updateLink2 = new EventEmitter<boolean>();
  disableOverlay = false;
  displayStyle = "";
  
  constructor() { }

  ngOnInit(): void {
  }

  disableOverlayActive() {
    this.disableOverlay = !this.disableOverlay;
    if (this.disableOverlay) {
      this.displayStyle = "d-none";
      this.certsEnabled = false
      this.updateLink2.emit(this.certsEnabled);
    } else {
      this.displayStyle = "";
    }
  }

}
