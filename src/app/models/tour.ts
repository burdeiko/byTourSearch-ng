export interface Tour {
    checkInDate: Date;
    duration: number;
    mealType: string;
    adultsCount: number;
    roomType: string;
    prices: Map<number, number|null>;
}