export interface Location {
    id: number;
    name: string;
    latitude: number;
    longitude: number;
    zoom: number;
    }
    

export interface LocationList {
    location: Location[];

}