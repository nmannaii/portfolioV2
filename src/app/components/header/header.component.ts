import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { style, state, transition, animate, trigger } from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('urlInOut', [
      state('url-in', style({
        borderBottomWidth: '5px',
        borderBottomStyle: 'solid'
      })),
      state('url-out', style({
        borderBottomWidth: '0px',
        borderBottomStyle: 'solid'
      })),
      transition('url-in => url-out', [animate('0.2s')]),
      transition('url-out => url-in', [animate('0.2s')])
    ])
  ]
})
export class HeaderComponent implements OnInit {
  public url = '#home';
  constructor(private location: Location) {
  }

  ngOnInit() {
    this.location.subscribe(url => {
      this.url = url.url;
    });
  }

}
