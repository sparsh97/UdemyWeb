import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services.service';
import { Courses } from 'src/app/models/Courses.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-gaming-list',
  templateUrl: './gaming-list.component.html',
  styleUrls: ['./gaming-list.component.css']
})
export class GamingListComponent implements OnInit {
  cors:Courses[]=[];
  id:number;
  constructor(private service:ServicesService, private avRoute:ActivatedRoute) {
    const idParam='id';
    if(this.avRoute.snapshot.params[idParam]){
      this.id=this.avRoute.snapshot.params[idParam];
    }
   }

  public ngOnInit(): void {
    this.service.fetchCourse(this.id).subscribe((cors:Courses[])=>{
      this.cors=cors
    })
  }

}
