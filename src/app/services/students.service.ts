import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private http:HttpClient) { }

  SERVER_URL:string ="http://localhost:3000"

  getStudentsDetails(){
    return this.http.get(`${this.SERVER_URL}/users/1`)
  }
}
