import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, throwError,of } from 'rxjs';
import { Courses } from './models/Courses.model';
import { retry, catchError } from 'rxjs/operators';
import {environment} from 'src/environments/environment';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  uri='https://localhost:44353/api';
  constructor( private http: HttpClient) { }


  // getCategories() {
  //   return this.http.get(`${this.uri}/Categories`);
  // }
  // getCategoriesById(id){
  //   return this.http.get(`${this.uri}/Categories/${id}`)
  // }

  // getCourses(){
  //   return this.http.get(`${this.uri}/Courses`)
  // }
  getCourses(): Observable<Courses[]>{
    return this.http.get<Courses[]>(`${this.uri}/Courses`).pipe(
      retry(1),catchError(this.errorHandler)
    );
  }

  public fetchCourses(){
    return this.http.get<Courses[]>(`${this.uri}/Courses`);
  }


  errorHandler(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
    // Get client-side error
    errorMessage = error.error.message;
    } else {
    // Get server-side error
    errorMessage = `Error Code: ${error.status}\nMessage: $
    {error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
    }
}
