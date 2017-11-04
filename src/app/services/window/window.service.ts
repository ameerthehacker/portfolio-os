import { Injectable, EventEmitter } from '@angular/core';
import { Window } from '../../models/window';

@Injectable()
export class WindowService {

  showWindowEvent: EventEmitter<Window> = new EventEmitter<Window>();
  closeWindowEvent: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  showWindow(title: string, route: Array<string>) {
    const window: Window = { title: title, route: route };
    this.showWindowEvent.emit(window);
  }
  closeWindow() {
    this.closeWindowEvent.emit();
  }

}
