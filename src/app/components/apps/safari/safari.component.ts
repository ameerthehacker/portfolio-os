import { Component, OnInit, AfterViewChecked, AfterViewInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'os-safari',
  templateUrl: './safari.component.html',
  styleUrls: ['./safari.component.scss']
})
export class SafariComponent implements OnInit, AfterViewChecked, AfterViewInit {

  constructor() { }

  ngOnInit() {
  }
  ngAfterViewChecked() {
    $('.menu .item').tab();
  }
  ngAfterViewInit() {
    !function(d,s,id){
         var js,
             fjs=d.getElementsByTagName(s)[0],
             p='https';
         if(!d.getElementById(id)){
             js=d.createElement(s);
             js.id=id;
             js.src=p+"://platform.twitter.com/widgets.js";
             fjs.parentNode.insertBefore(js,fjs);
         }
     }
     (document,"script","twitter-wjs");
  }
}
