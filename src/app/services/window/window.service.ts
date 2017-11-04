import { Injectable, EventEmitter } from '@angular/core';
import { Window } from '../../models/window';

@Injectable()
export class WindowService {

  showWindowEvent: EventEmitter<Window> = new EventEmitter<Window>();
  closeWindowEvent: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  showWindow(title: string, route: Array<string>, type: string = '') {
    const window: Window = { title: title, route: route, type: type };
    this.showWindowEvent.emit(window);
  }
  closeWindow() {
    this.closeWindowEvent.emit();
  }

}
