import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(private route: ActivatedRoute, private router: Router) {
    let videoId = +this.route.snapshot.paramMap.get("id");
    this.watchVideo = videos.find(video => video.id == videoId);
    this.otherVideos = videos.filter(video => video.id !== videoId);
  }

  ngOnInit(): void {
    
  }

  navigateToVideo(id: number) {
    this.router.navigateByUrl("/watch/" + id);
  }

}
