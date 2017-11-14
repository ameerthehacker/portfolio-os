import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MarkdownModule } from 'angular2-markdown';

import { WindowService } from './services/window/window.service';

import { APP_ROUTES } from './routes/app.route';

import { AppComponent } from './app.component';
import { DesktopComponent } from './components/desktop/desktop.component';
import { TaskbarComponent } from './components/taskbar/taskbar.component';
import { DockComponent } from './components/dock/dock.component';
import { WindowComponent } from './components/window/window.component';
import { TitlebarComponent } from './components/titlebar/titlebar.component';
import { FinderComponent } from './components/apps/finder/finder.component';
import { MailComponent } from './components/apps/mail/mail.component';
import { SafariComponent } from './components/apps/safari/safari.component';
import { IconComponent } from './components/icon/icon.component';
import { TrashComponent } from './components/apps/trash/trash.component';

@NgModule({
  declarations: [
    AppComponent,
    DesktopComponent,
    TaskbarComponent,
    DockComponent,
    WindowComponent,
    TitlebarComponent,
    FinderComponent,
    MailComponent,
    SafariComponent,
    IconComponent,
    TrashComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(APP_ROUTES),
    FormsModule,
    ReactiveFormsModule,
    MarkdownModule
  ],
  providers: [
    WindowService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
