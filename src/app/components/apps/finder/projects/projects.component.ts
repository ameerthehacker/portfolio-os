import { Component, OnInit } from '@angular/core';

import { PROJECTS } from './projects';

import { WindowService } from '../../../../services/window/window.service';

@Component({
  selector: 'os-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projectLabels: string[];

  constructor(private windowService: WindowService) { }

  ngOnInit() {
    this.projectLabels = [];

    Object.keys(PROJECTS)
    .forEach((project) => {
      this.projectLabels.push(PROJECTS[project].label);
    });
  }

}
