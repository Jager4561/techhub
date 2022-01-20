import { Component, OnInit } from '@angular/core';
import { videos } from 'src/app/data';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit {

  videosList = videos.slice(0, 3);

  constructor() { }

  ngOnInit(): void {
    
  }

}
