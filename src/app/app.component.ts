import { animate, query, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

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

  ngOnInit(): void {
    const slider = new Image();
    slider.src = "../assets/images/slider.png";
    slider.onload = () => {
      this.sliderLoaded = true;
    }
  }

  closeSlider(): void {
    if(this.sliderLoaded) this.sliderVisible = false;
    
  }
}
