import { Routes } from '@angular/router';
import { FinderComponent } from '../components/apps/finder/finder.component';
import { ProjectsComponent } from '../components/apps/finder/projects/projects.component';

export const FINDER_ROUTES = [
  { path: '', component: FinderComponent }, 
  { path: 'projects', component: ProjectsComponent }
];
