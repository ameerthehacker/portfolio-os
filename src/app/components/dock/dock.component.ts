import { Component, OnInit } from '@angular/core';

import { WindowService } from '../../services/window/window.service';

@Component({
  selector: 'os-dock',
  templateUrl: './dock.component.html',
  styleUrls: ['./dock.component.scss']
})
export class DockComponent implements OnInit {

  constructor(private windowService: WindowService) { }

  ngOnInit() {
  }
  
}
