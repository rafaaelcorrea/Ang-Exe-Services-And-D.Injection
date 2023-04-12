import { Injectable } from "@angular/core";

 
 @Injectable()
 export class CountsService {

    activeToInactiveCounter: number = 0;
    inactiveToActiveCounter: number = 0;

    incrementalActiveToInactive(){
        this.activeToInactiveCounter++;
       console.log(`From Active to Inactive: ${this.activeToInactiveCounter}`);
    }

    incrementalInactiveToActive(){
        this.inactiveToActiveCounter++;
        console.log(`From Inactive to Inactive: ${this.inactiveToActiveCounter}`);
    }


}