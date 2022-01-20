import { animate, query, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger("slider", [
      transition("void => *", [
        query(".image", style({opacity: 0, transform: "scale(0.8)"})),
        query(".image", animate("600ms ease-in", style({opacity: 1, transform: "none"}))),
      ]),
      transition("* => void", [
        animate("600ms ease-out", style({transform: "translateY(-100%)"}))
      ]),
    ])
  ]
})
export class AppComponent {
  title = 'techhub';

  sliderVisible = true;
  sliderLoaded = false;
  currentURL = "/";

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if(event instanceof NavigationEnd) {
        this.currentURL = this.router.url;
        if(this.currentURL !== "/") this.sliderVisible = false;
      }
    })
  }

  enableSlider(): void {
    this.sliderLoaded = true;
  }

  closeSlider(): void {
    if(this.sliderLoaded) this.sliderVisible = false;
  }
}
