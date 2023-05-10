export interface flightplan {
  latitude: number;
  longitude: number;
  altitude: number;
}

export interface FlightPlanObject {
  flightplan: flightplan[];
}

export interface FlightPlanLocation {
  id: number;
  LocationID: number;
  FlightPlanJSON: flightplan[];
  name: string;
}
