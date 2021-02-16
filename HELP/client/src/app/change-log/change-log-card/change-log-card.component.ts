import { Component, Input, OnInit } from '@angular/core';
import { Change } from 'src/app/_models/change';

@Component({
  selector: 'app-change-log-card',
  templateUrl: './change-log-card.component.html',
  styleUrls: ['./change-log-card.component.css']
})
export class ChangeLogCardComponent implements OnInit {
  @Input() chng: Change;

  constructor() { }

  ngOnInit(): void {
  }

}
