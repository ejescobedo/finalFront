import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Location } from '../models/location';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FlightPlan, FlightPlanCommand } from '../models/flight-plan.model';

@Injectable({
  providedIn: 'root',
})
export class MapService {
  constructor(private httpClient: HttpClient) {}

  getLocations(): Observable<Location[]> {
    var apiUrl = 'http://129.153.95.231:8080/locations';
    return this.httpClient.get<Location[]>(apiUrl).pipe(
      map(locations =>
        locations.map(location => ({
          id: location.id,
          latitude: location.latitude,
          longitude: location.longitude,
          zoom: location.zoom,
          name: location.name,
        })),
      ),
    );
  }

  getPaths(id: number): Observable<FlightPlan[]> {
    var apiUrl = `http://127.0.0.1:5000/paths/${id}`;
    return this.httpClient.get<FlightPlan[]>(apiUrl).pipe(
      map(paths =>
        paths.map(path => ({
          id: path.id,
          LocationID: path.LocationID,
          FlightPlanJSON: path.FlightPlanJSON.map((command: FlightPlanCommand) => ({
            latitude: command.latitude,
            longitude: command.longitude,
            altitude: command.altitude,
          })),
          name: path.name,
        })),
      ),
    );
  }
}
