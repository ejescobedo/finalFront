
export interface FlightSchedule {
    id: number;
    flightPlanId: string;
    locationId: number;
    scheduleType: string; 
    startDate: Date;
    endDate?: Date;
    intervalDays?: number;
  }
  