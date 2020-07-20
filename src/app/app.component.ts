import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numbers: number[] = [];
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  onIntervalFired(firedInterval: number) {
    this.numbers.push(firedInterval);
    console.log(this.numbers);
    // console.log(firedInterval)

    firedInterval % 2 === 0 ? this.evenNumbers.push(firedInterval) : this.oddNumbers.push(firedInterval);
  }

  onGameReset() {
    this.numbers = [];
    this.evenNumbers.splice(0, this.evenNumbers.length);
    this.oddNumbers.splice(0, this.oddNumbers.length);
  }
}
