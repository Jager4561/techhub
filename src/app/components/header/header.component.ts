import { Component, OnInit } from '@angular/core';
import { videos } from 'src/app/data';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  resultsActive = false;
  searchInput = "";
  searchResults = [];

  showResults(): void {
    this.resultsActive = true;
  }

  hideResults(): void {
    this.resultsActive = false;
  }

  searchVideos(): void {
    this.searchResults = videos.filter(video => {
      if(video.title.toLowerCase().includes(this.searchInput.toLowerCase()))
        return video;
    })
  }

}
