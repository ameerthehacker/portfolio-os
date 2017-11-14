import { Component, OnInit } from '@angular/core';
import { WindowService } from '../../services/window/window.service';

@Component({
  selector: 'os-desktop',
  templateUrl: './desktop.component.html',
  styleUrls: ['./desktop.component.scss']
})
export class DesktopComponent implements OnInit {

  constructor(private windowService: WindowService) { }

  ngOnInit() {
  }

}
