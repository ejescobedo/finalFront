import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";

import { Observable, BehaviorSubject } from "rxjs";
import { first, catchError, tap } from "rxjs/operators";

import { Data } from "../models/Data";
import { ErrorHandlerService } from "./error-handler.service";

@Injectable({
  providedIn: "root",
})
export class DataService {
  private url = "http://localhost:3000/table"; // to be changed for Nodejs url "url"/auth
  name: Pick<Data, "name">;


  httpOptions: { headers: HttpHeaders } = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };

  constructor(
    private http: HttpClient,
    private errorHandlerService: ErrorHandlerService,
    private router: Router
  ) {}

 

  searchByName(
    name: Pick<Data, "name">,
  ): Observable<{
    token: string;

  }> {
    return this.http
      .post<any>(`${this.url}/table`, {name}, this.httpOptions);
  }

  searchByDay(
    day: Pick<Data, "day">,
  ): Observable<{
    token: string;

  }> {
    return this.http
      .post<any>(`${this.url}/table`, {day}, this.httpOptions);
  }

  searchByTime(
    time: Pick<Data, "time">,
  ): Observable<{
    token: string;

  }> {
    return this.http
      .post<any>(`${this.url}/table`, {time}, this.httpOptions);
  }

  
}