import { Component, OnInit, Input } from '@angular/core';

import { WindowService } from '../../services/window/window.service';

@Component({
  selector: 'os-titlebar',
  templateUrl: './titlebar.component.html',
  styleUrls: ['./titlebar.component.scss']
})
export class TitlebarComponent implements OnInit {

  @Input()
  title: string;

  constructor(private windowService: WindowService) { }

  ngOnInit() {
  }

}
