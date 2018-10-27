import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {style, animate, transition, trigger} from '@angular/animations';



@Component({
  selector: 'sg-main',
  templateUrl: './sg-main.component.html',
  styleUrls: ['./sg-main.component.css'],
  animations: [
    trigger('fadeInOut', [
        transition(':enter', [   // :enter is alias to 'void => *'
          style({opacity:0}),
          animate(800, style({opacity:1})) 
        ]),
        transition(':leave', [   // :leave is alias to '* => void'
          animate(800, style({opacity:0})) 
        ])
      ])
  ]
})
export class SgMainComponent implements OnInit {

  title = 'SudiptoJS';
  ff_link = 'https://fa.ghosh.pro/#extended';
  gps_link = 'https://ghosh.pro';
  ssh_link = 'ssh://pi@ghosh.pro:2504';
  angular_logo = 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg';
  public isViewable: boolean;

  constructor(private sanitizer:DomSanitizer){}

  sanitize(url:string){
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

  ngOnInit() {
  }
} 
