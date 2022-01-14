import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { creators, videos } from 'src/app/data';

@Component({
  selector: 'app-watch',
  templateUrl: './watch.page.html',
  styleUrls: ['./watch.page.scss']
})
export class WatchPage implements OnInit {

  watchVideo;
  otherVideos = [];
  creators = creators;

  constructor(private route: ActivatedRoute) {
    let videoId = +this.route.snapshot.paramMap.get("id");
    this.watchVideo = videos.find(video => video.id == videoId);
    this.otherVideos = videos.filter(video => video.id !== videoId);
  }

  ngOnInit(): void {
    
  }

}
