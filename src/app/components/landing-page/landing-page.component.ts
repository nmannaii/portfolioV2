import { Component, OnInit, AfterViewInit } from '@angular/core';
declare var Typed;
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit, AfterViewInit {
  public aboutMeFull = 'Computer Science Engineering Student';
  public aboutMeFull2 = 'Dynamic, Organized, Creative';

  constructor() {
  }

  ngOnInit() {
  }
  ngAfterViewInit() {
    const typed1 = new Typed('.about-me', {
      strings: [this.aboutMeFull, this.aboutMeFull2],
      typeSpeed: 50,
      backDelay: 2000,
      startDelay: 1000,
      loop: true,
      cursorChar: '_',
    });
    const typed2 = new Typed('.cursor', {
      strings: [''],
      cursorChar: '>'
    });
  }
}
