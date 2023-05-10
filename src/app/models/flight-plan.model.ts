export interface FlightPlanCommand {
  latitude: number;
  longitude:number;
  altitude: number;
  }
  
  export interface FlightPlan {
    id: number;
    LocationID: number;
    FlightPlanJSON: FlightPlanCommand[];
    name: string;
    
  }