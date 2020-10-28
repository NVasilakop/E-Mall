import { Candy } from '../contracts/candy'
import * as candyJson from '../data/candies.json';

export function returnCandies():Array<Candy>{
    let candies=[];
    console.log(candyJson["candies"]);
    for(var i = 0; i < candyJson["candies"].length; i++) {
        var obj = candyJson["candies"][i];
        console.log(obj);
        candies.push(obj);
    }
    return candies;
}