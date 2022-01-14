import { Component, OnInit } from '@angular/core';
import { creators } from 'src/app/data';

@Component({
  selector: 'app-creators',
  templateUrl: './creators.page.html',
  styleUrls: ['./creators.page.scss']
})
export class CreatorsPage implements OnInit {

  creators;

  constructor() { }

  ngOnInit(): void {
    this.creators = creators;
    console.log(this.creators);
  }

}
