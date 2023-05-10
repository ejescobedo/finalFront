import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { flightplan, FlightPlanObject } from '../models/flight-plan.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root', 
})
export class FlightPlanService {
  

  constructor(private httpClient: HttpClient) {}
  
  saveFlightPlan(flightPlan: FlightPlanObject): Observable<any> {
    var apiUrl = 'http://127.0.0.1:5000/send_flight_plan';
    return this.httpClient.post(apiUrl, flightPlan);
  }

  executeFlightPlan(flightPlan: FlightPlanObject): Observable<any> {
    var apiUrl = 'http://127.0.0.1:5000/send_flight_plan';
    return this.httpClient.post(apiUrl, flightPlan);
  }
}
