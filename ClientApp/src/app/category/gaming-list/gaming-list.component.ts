// import { Component, OnInit } from '@angular/core';
// import {ServicesService} from '../../services.service';
// import {Router} from '@angular/router';
// import {MatTableDataSource} from '@angular/material';
// import {WebDevlopment} from '../../models/webDevlopment.model';
// import { Courses } from 'src/app/models/Courses.model';
// import { Observable,of } from 'rxjs';
// import { HttpClient } from '@angular/common/http';
// @Component({
//   selector: 'app-web-dev-list',
//   templateUrl: './gaming-list.component.html',
//   styleUrls: ['./gaming-list.component.css']
// })
// export class GamingListComponent implements OnInit {

//   web: WebDevlopment[];

//   course:Courses[]=[];

//   public courses$: Observable<Courses[]>;

//   displayedColums=['CategoryName','Description'];
//   displayCourses=['CourseName', 'CourseDescription'];
//   constructor(private service: ServicesService, private router:Router,public client: HttpClient) { }

//   public ngOnInit() {
//     // this.service.getCategories().subscribe(data=>
//     //  console.log(data) );
//     //this.fetchCategories();
//     //this.courses$=this.service.getCourses();
//     //this.fetchCourses();
//     this.service.fetchCourses().subscribe((course:Courses[])=>{
//       this.course=course;
//       console.log(this.course);
    
//     })
  
//   // fetchCategories(){
//   //   this.service.getCategories().subscribe((data:WebDevlopment[])=>{
//   //     this.web=data;
//   //     console.log('Data Requested...........');
//   //     console.log(this.web);
//   //   })
     

//   // fetchCourses() {
//   //   this.service.getCourses().subscribe((data:Courses[])=>{
//   //     this.course=data;
//   //     console.log(this.course);
//   //   })
//   // }
// }
// }
