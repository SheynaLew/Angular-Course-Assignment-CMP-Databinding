import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() intervalFired = new EventEmitter<number>();
  interval;
  lastNumber = 0;

  ngOnInit(): void {
  }

  // Tried and failed so followed along and made notes
  onStartGame() {
    this.interval = setInterval(() => {
      this.intervalFired.emit(this.lastNumber + 1);
      this.lastNumber++;
    },1000);
  }

  // Tried on my own
  onStopGame() {
    clearInterval(this.interval);
  }

  // A new Odd component should get created for every odd number emitted, the same should happen for the Even Component (on even numbers)
    // a function with an if statement which is called in the onStartGame function and generates an Even Component in the app component?
  createOdd() {
    if (this.lastNumber / 2 % 0) {

    }
  }
}
