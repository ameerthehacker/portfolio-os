import { Component, OnInit } from '@angular/core';

import { PROJECTS } from './projects';

import { WindowService } from '../../../../services/window/window.service';

@Component({
  selector: 'os-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects: string[];

  constructor(private windowService: WindowService) { }

  ngOnInit() {
    this.projects = [];

    Object.keys(PROJECTS)
    .forEach((project) => {
      this.projects.push(PROJECTS[project]);
    });
  }

}
