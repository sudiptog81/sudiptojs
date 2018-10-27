import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'sg-footer',
  templateUrl: './sg-footer.component.html',
  styleUrls: ['./sg-footer.component.css'],
})
export class SgFooterComponent implements OnInit {

  ipAddress:any;
  ipFlag:any;

  constructor(private http: HttpClient){
    this.http.get<{ip:string} & {country:string}>('https://ipinfo.io/json')
    .subscribe( data => {
      this.ipAddress = data.ip;
      this.ipFlag = data.country;
    })
  }

  ngOnInit() {
  }

}
