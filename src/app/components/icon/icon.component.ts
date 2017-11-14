import { 
  Component, 
  OnInit, 
  Input, 
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'os-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {

  @Input()
  icon: string;
  @Input()
  color: string;
  @Input()
  label: string;
  @Output('dblClick')
  iconDblClicked: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  onIconDoubleClicked() {
    this.iconDblClicked.emit();
  }

}
