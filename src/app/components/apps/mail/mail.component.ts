import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'os-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.scss']
})
export class MailComponent implements OnInit {

  mailForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.mailForm = new FormGroup({
      from: new FormControl('', Validators.required),
      subject: new FormControl(''),
      message: new FormControl('', Validators.required)
    });
  }

}
