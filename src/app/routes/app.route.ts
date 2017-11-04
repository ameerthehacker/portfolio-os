import { Routes } from '@angular/router';
import { FINDER_ROUTES } from './finder.route';
import { DesktopComponent } from '../components/desktop/desktop.component';

export const APP_ROUTES = [
  { path: '', component: DesktopComponent },
  { path: 'finder', component: DesktopComponent, children: FINDER_ROUTES },
];
