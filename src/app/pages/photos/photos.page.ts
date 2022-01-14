import { Component, OnInit } from '@angular/core';
import { photos } from 'src/app/data';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.page.html',
  styleUrls: ['./photos.page.scss']
})
export class PhotosPage implements OnInit {
  
  photos = photos;

  constructor() { }

  ngOnInit(): void {
  }

}
