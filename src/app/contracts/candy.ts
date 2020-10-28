import { CandyShopItem } from './CandyShopItem';
import { Nutrition } from './Nutrition';

export class Candy extends CandyShopItem{
    weight:number;
    allias:string;
    nutrition:Nutrition
}

export enum CandyType{
    nuts,
    lollies,
    liquid,
    misc
}