import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css'],
})
export class GameControlComponent implements OnInit {
  @Output() numero = new EventEmitter<{ val: number }>();
  n = 0;
  interval;
  constructor() {}

  ngOnInit() {}

  onStart() {
    this.interval = setInterval(() => {
      this.n = this.n + 1;
      this.numero.emit({ val: this.n });
    }, 1000);
  }

  onStop() {
    clearInterval(this.interval);
  }
}
