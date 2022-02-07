export interface  Schedules{
    flightNumber:number;
    airline:string;
    fromPlace:string;
    toPlace:string;
    startDateTime:Date;
    endDateTime:Date;
    scheduledDays:string;
    instrumentUsed:string;
    totalBCSeats:number;
    totalNBCSeats:number;
    bCost:number;
    nCost:number;
    noOfRows:number;
    mealsType:string;
}