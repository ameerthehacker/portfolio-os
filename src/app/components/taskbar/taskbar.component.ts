import { Component, OnInit } from '@angular/core';
import * as date from 'date-and-time';

@Component({
  selector: 'os-taskbar',
  templateUrl: './taskbar.component.html',
  styleUrls: ['./taskbar.component.scss']
})
export class TaskbarComponent implements OnInit {

  timeNow: string;

  constructor() { }

  ngOnInit() {
    let today = new Date();
    this.timeNow = date.format(today, 'ddd, MMMM D HH:mm');
  }

}
