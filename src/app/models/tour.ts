import { Hotel } from "./hotel";

export interface Tour {
    hotel: Hotel
    checkInDate: Date;
    duration: number;
    mealType: string;
    adultsCount: number;
    roomType: string;
    prices: Map<number, number|null>;
}