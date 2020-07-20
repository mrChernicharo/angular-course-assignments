import { Component, OnInit, OnChanges, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() intervalFired = new EventEmitter<number> ();
  @Output() gameReset = new EventEmitter();
  interval;
  lastNumber: number = 0;


  constructor() {}


  ngOnInit(): void {
  }


  onStartGame() {
    this.interval = setInterval(() => {
      this.intervalFired.emit(this.lastNumber + 1);
      this.lastNumber++;
    }, 1000);
  }

  onStopGame() {
    clearInterval(this.interval);
  }

  onResetGame() {
    clearInterval(this.interval);
    this.lastNumber = 0;
    this.gameReset.emit();
  }
}
