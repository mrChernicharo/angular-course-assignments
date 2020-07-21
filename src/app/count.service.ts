import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountService {
  activeToInactiveCounter = 0;
  inactiveToActiveCounter = 0;

  constructor() { }

  incrementActiveToInactive():void {
    this.activeToInactiveCounter++;
    console.log('active to inactive count: ' + this.activeToInactiveCounter)
  }

  incrementInactiveToActive():void {
    this.inactiveToActiveCounter++;
    console.log('inactive to active count: ' + this.inactiveToActiveCounter)
  }
}
