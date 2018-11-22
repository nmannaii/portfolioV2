import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  config: any;
  fullpage_api: any;
  constructor() {
    // for more details on config options please visit fullPage.js docs
    this.config = {

      // fullpage options
      licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
      anchors: ['home', 'about-me', 'thirdPage', 'fourthPage', 'lastPage'],
      menu: '#menu',
      scrollingSpeed: 700,
      navigation: true,
      keyboardScrolling: true,
	    animateAnchor: true,
	    recordHistory: true,
      // fullpage callbacks
      afterResize: () => {
        console.log('After resize');
      }
    };
  }

  getRef(fullPageRef) {
    this.fullpage_api = fullPageRef;
  }
}
