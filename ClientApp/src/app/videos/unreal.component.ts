import { Component, OnInit, PipeTransform, Pipe } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { transformAll } from '@angular/compiler/src/render3/r3_ast';
import {SafePipe} from './web/custome.pipe';
@Component({
  selector: 'app-web',
  template: `
  <iframe [src]=" 'https://www.youtube.com/embed/videoseries?list='+url | safeurl" width="560" height="315" allowfullscreen></iframe>
  `,
  //styleUrls: ['./web.component.css']
})
export class UnrealComponent implements OnInit {
    url="PLL0cLF8gjBpqDdMoeid6Vl5roMl6xJQGC";
  //url='https://www.youtube.com/embed/v=Y1BlT4_c_SU&list=PL4cUxeGkcC9ibZ2TSBaGGNrgh4ZgYE6Cc'
  //video:string[]=['https://www.youtube.com/playlist?list=PL4cUxeGkcC9ibZ2TSBaGGNrgh4ZgYE6Cc'];
  constructor() {

   }
  
  ngOnInit(): void {
    
    }
  }
