import { Injectable, EventEmitter } from '@angular/core';
import { Window } from '../../models/window';

@Injectable()
export class WindowService {

  showWindowEvent: EventEmitter<Window> = new EventEmitter<Window>();
  closeWindowEvent: EventEmitter<Window> = new EventEmitter<Window>();

  constructor() { }

  showWindow(title: string, route: Array<string>, type: string = '', context: string = 'system', search: boolean = true, navigation: boolean = true) {
    const window: Window = { title: title, route: route, type: type, context: context, search: search, navigation: navigation };
    this.showWindowEvent.emit(window);
  }
  closeWindow(window: Window) {
    this.closeWindowEvent.emit(window);
  }

}
