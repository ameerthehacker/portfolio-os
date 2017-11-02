import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DesktopComponent } from './desktop/desktop.component';
import { TaskbarComponent } from './taskbar/taskbar.component';
import { DockComponent } from './dock/dock.component';

@NgModule({
  declarations: [
    AppComponent,
    DesktopComponent,
    TaskbarComponent,
    DockComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
