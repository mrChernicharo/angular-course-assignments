import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert-box',
  templateUrl: './alert-box.component.html',
  styles: [`
    .container {
      text-align: center;
      border: 2px solid lightgreen;
      border-radius: 8px;
    }
  `]
})
export class AlertBoxComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
