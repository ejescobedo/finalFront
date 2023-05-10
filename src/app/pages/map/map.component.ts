import { Component, OnInit } from '@angular/core';
import { FlightPlan, FlightPlanCommand } from '../../models/flight-plan.model';
import { FlightPlanService } from '../../services/flight-plan.service';
import { Location } from 'src/app/models/location';
import { MapService } from 'src/app/services/map.service';
import * as FileSaver from 'file-saver';
@Component({
  selector: "app-map",
  templateUrl: "map.component.html"
})
export class MapComponent implements OnInit {
  lat = 31.77333;
  lng = -106.50410;
  zoom = 16;
  isLoading = false;
  locations: Location[] = [];
  loc: number;
  markers: { lat: number; lng: number; draggable: boolean }[] = [];

  constructor(
    private flightPlanService: FlightPlanService,
    private mapService: MapService
  ) {}

  ngOnInit() {
    this.getLocation();
  }

  getLocation() {
    this.mapService.getLocations().subscribe(
      (locations: Location[]) => {
        this.locations = locations;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  onMapClick(event: any) {
    this.markers.push({
      lat: event.coords.lat,
      lng: event.coords.lng,
      draggable: true,
    });
  }

  onMapReady(map: google.maps.Map) {}

  onMarkerDragEnd(markerIndex: number, event: any) {
    this.markers[markerIndex] = {
      ...this.markers[markerIndex],
      lat: event.coords.lat,
      lng: event.coords.lng,
    };
  }


  generateFlightPlan() {
    const flightplan: FlightPlan = {
      id: 0, // Assign an appropriate value for the id
      LocationID: this.loc,
      FlightPlanJSON: [],
      name: '', // Assign an appropriate value for the name
    };

    for (const marker of this.markers) {
      flightplan.FlightPlanJSON.push({
        latitude: marker.lat,
        longitude: marker.lng,
        altitude: 10,
      });
    }

    this.isLoading = true;

    this.flightPlanService.saveFlightPlan(flightplan).subscribe(
      (response) => {
        console.log('Flight plan saved:', response);
        this.isLoading = false;
        this.clearMap();
      },
      (error) => {
        console.error('Error saving flight plan:', error);
        this.isLoading = false;
      }
    );
  }

  executeFlight() {
    if (!this.loc) {
      console.error('Location ID is not set.');
      return;
    }

    this.isLoading = true;

    this.mapService.getPaths(this.loc).subscribe(
      (flightPlans: FlightPlan[]) => {
        if (flightPlans.length > 0) {
          const selectedFlightPlan = flightPlans[0]; 
          const json = JSON.stringify(selectedFlightPlan.FlightPlanJSON);
          const blob = new Blob([json], { type: 'application/json' });
          FileSaver.saveAs(blob, 'flight_plan.json');

          this.isLoading = false;
          this.clearMap();
        } else {
          console.error('No flight plans found for the selected location.');
          this.isLoading = false;
        }
      },
      (error) => {
        console.error('Error retrieving flight plans:', error);
        this.isLoading = false;
      }
    );
  }

  resetMapCenter() {
    this.lat = 31.75253099985997;
    this.lng = -106.40242909183934;
  }

  clearMap() {
    this.markers = [];
    this.resetMapCenter();
    this.zoom = 16;
  }

 

  onLocationChange(event: any) {
    const locationId = parseInt(event.target.value);
    const selectedLocation = this.locations.find(location => location.id === locationId);
    this.loc = locationId;
    if (selectedLocation) {
      this.lat = selectedLocation.latitude;
      this.lng = selectedLocation.longitude;
      this.zoom = selectedLocation.zoom;
    }
  }
}