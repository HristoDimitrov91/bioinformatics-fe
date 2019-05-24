import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'twitter-follow',
  templateUrl: './twitter-follow.component.html',
  styleUrls: ['./twitter-follow.component.css']
})
export class TwitterFollowComponent implements AfterViewInit {

  constructor() {
    // load twitter sdk if required
    const url = 'https://platform.twitter.com/widgets.js';
    if (!document.querySelector(`script[src='${url}']`)) {
      let script = document.createElement('script');
      script.src = url;
      document.body.appendChild(script);
    }
  }

  ngAfterViewInit(): void {
    // render tweet button
    window['twttr'] && window['twttr'].widgets.load();
  }

}
