import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sg-header',
  templateUrl: './sg-header.component.html',
  styleUrls: ['./sg-header.component.css']
})
export class SgHeaderComponent implements OnInit {

  title="SudiptoJS";
  email="mailto:ghosh.prosolutions@gmail.com";
  linkedin_link = "https://www.linkedin.com/in/sudiptoghosh99/";
  phone="tel:+918826358310";
  showSecMenu:boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
