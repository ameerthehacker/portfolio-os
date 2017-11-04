import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { Router } from '@angular/router';

import { WindowService } from '../../services/window/window.service';

import { Window } from '../../models/window';

declare var $: any;

@Component({
  selector: 'os-window',
  templateUrl: './window.component.html',
  styleUrls: ['./window.component.scss']
})
export class WindowComponent implements OnInit, AfterViewChecked {

  windowTitle: string;
  windowType: string;

  constructor(private windowService: WindowService, private router: Router) { }

  ngOnInit() {
  }
  ngAfterViewChecked() {
    this.windowService.showWindowEvent.subscribe((window: Window) => {
      this.windowTitle = window.title;
      this.windowType = window.type;
      this.router.navigate(window.route);
      $('.ui.modal').modal('show');
    });
    this.windowService.closeWindowEvent.subscribe(() => {
      $('.ui.modal').modal('hide');
    });
  }

}
