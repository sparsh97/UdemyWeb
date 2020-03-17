import { Component, OnInit, PipeTransform, Pipe } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { transformAll } from '@angular/compiler/src/render3/r3_ast';
import {SafePipe} from './custome.pipe';
@Component({
  selector: 'app-web',
  templateUrl: './web.component.html',
  styleUrls: ['./web.component.css']
})
export class WebComponent implements OnInit {
  //url='https://www.youtube.com/embed/v=Y1BlT4_c_SU&list=PL4cUxeGkcC9ibZ2TSBaGGNrgh4ZgYE6Cc'
  //video:string[]=['https://www.youtube.com/playlist?list=PL4cUxeGkcC9ibZ2TSBaGGNrgh4ZgYE6Cc'];
  videos:any[]=['https://www.youtube.com/embed/videoseries?list=PL4cUxeGkcC9ibZ2TSBaGGNrgh4ZgYE6Cc','https://www.youtube.com/embed/videoseries?list=PL4cUxeGkcC9gQeDH6xYhmO-db2mhoTSrT','https://www.youtube.com/embed/videoseries?list=PL4cUxeGkcC9gKfw25slm4CUDUcM_sXdml','https://www.youtube.com/embed/videoseries?list=PL08903FB7ACA1C2FB','https://www.youtube.com/embed/videoseries?list=PL8uhW8cclMiNv8UT1NUawB-XpXVeJ8mN8','https://www.youtube.com/embed/videoseries?list=PLWPirh4EWFpEgUZE7bNwqaxZ9efgfKu3w','https://www.youtube.com/embed/videoseries?list=PLPV2KyIb3jR5QFsefuO2RlAgWEz6EvVi6','https://www.youtube.com/embed/videoseries?list=PLa1F2ddGya_-UvuAqHAksYnB0qL9yWDO6','https://www.youtube.com/embed/videoseries?list=PLL0cLF8gjBpqDdMoeid6Vl5roMl6xJQGC'];
  urlSafe:SafeResourceUrl[];
  constructor() {

   }
  
  ngOnInit(): void {
    
    }
  }
