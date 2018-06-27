import {Country} from './country';

export interface Hotel {
    country: Country;
    name: string;
    id : number;
    isCollapsed: boolean|null;
}