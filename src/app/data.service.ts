import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public base_url: string = "http://localhost:8001/open/";
  constructor(private http: HttpClient) { }
  public getseating(semesterId: any, departmentId: any, all: boolean) {
    let url = ``;
    if (all == true) {
      url = `${this.base_url}seating/${semesterId}`;
    }
    else {
      url = `${this.base_url}seating/${semesterId}/${departmentId}`
    }
    return this.http.get(url);
  }
  public getDepartments() {
    return this.http.get(`${this.base_url}department`);
  }
  public deleteDepartment(id: string) {
    return this.http.delete(`${this.base_url}department/${id}`);
  }

  public getSemester() {
    return this.http.get(`${this.base_url}semester`);
  }
  public getTimeTable(semesterId: any, departmentId: any) {

    return this.http.get(`${this.base_url}table/${semesterId}/${departmentId}`);
  }
}
