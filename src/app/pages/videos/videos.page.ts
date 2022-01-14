import { Component, OnInit } from '@angular/core';
import { videos } from 'src/app/data';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.page.html',
  styleUrls: ['./videos.page.scss']
})
export class VideosPage implements OnInit {

  videosList = videos;

  constructor() { }

  ngOnInit(): void {
  }

}
