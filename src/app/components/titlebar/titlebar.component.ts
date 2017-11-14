import { 
  Component, 
  OnInit, 
  Input, 
  Output,
  EventEmitter
} from '@angular/core';

import { WindowService } from '../../services/window/window.service';

@Component({
  selector: 'os-titlebar',
  templateUrl: './titlebar.component.html',
  styleUrls: ['./titlebar.component.scss']
})
export class TitlebarComponent implements OnInit {

  @Input()
  title: string;
  @Input('search')
  searchVisible: boolean = true;
  @Input('navigation')
  navigationVisible: boolean = true;
  @Output('close')
  closeClicked: EventEmitter<any> = new EventEmitter<any>();

  constructor(private windowService: WindowService) { }

  ngOnInit() {
  }

  onCloseClicked() {
    this.closeClicked.emit();
  }

}
