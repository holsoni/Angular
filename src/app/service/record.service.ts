import { Injectable } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {Observable, of} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {logMessages} from "@angular-devkit/build-angular/src/builders/browser-esbuild/esbuild";

@Injectable({
  providedIn: 'root'
})
export class RecordService {
  private baseUrl = 'http://localhost:8080/records';

  constructor(private http: HttpClient) {}

  getAll(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }

  create(record: any): Observable<any> {
    return this.http.post(this.baseUrl, record);
  }

  update(id: string, record: any): Observable<any> {
    console.log("Update", record);
    return this.http.put(`${this.baseUrl}/update/${id}`, record);
  }

  delete(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
  getById(id:string):Observable<any>{
    return this.http.get(`${this.baseUrl}/${id}`);
  }
}
