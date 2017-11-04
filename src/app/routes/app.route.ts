import { Routes } from '@angular/router';
import { FINDER_ROUTES } from './finder.route';
import { MAIL_ROUTES } from './mail.route';
import { SAFARI_ROUTES } from './safari.route';
import { DesktopComponent } from '../components/desktop/desktop.component';

export const APP_ROUTES = [
  {
    path: '', component: DesktopComponent, children: [
      { path: 'finder', children: FINDER_ROUTES },
      { path: 'mail', children: MAIL_ROUTES },
      { path: 'safari', children: SAFARI_ROUTES }
    ]
  }
];
