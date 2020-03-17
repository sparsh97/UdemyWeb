import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  video:any[]=[
    'https://www.youtube.com/embed/videoseries?list=PL4cUxeGkcC9ibZ2TSBaGGNrgh4ZgYE6Cc',
    ' ',
    '',
    ''
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
