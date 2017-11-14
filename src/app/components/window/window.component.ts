import { 
  Component, 
  OnInit, 
  AfterViewChecked
} from '@angular/core';
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

  systemWindow: Window = new Window();
  markdownWindow: Window = new Window();

  constructor(private windowService: WindowService, private router: Router) { }

  ngOnInit() {
  }
  ngAfterViewChecked() {
    this.windowService.showWindowEvent.subscribe((window: Window) => {
      if(window.context == 'system') {
        this.systemWindow = window;
      }
      else if(window.context == 'markdown') {
        this.markdownWindow = window;        
      }
      this.router.navigate(window.route);
      $(`.ui.${window.context}.modal`).modal({ allowMultiple: true }).modal('show');      
    });
    this.windowService.closeWindowEvent.subscribe((window: Window) => {
      $(`.ui.${window.context}.modal`).modal('hide');
    });    
  }

}
