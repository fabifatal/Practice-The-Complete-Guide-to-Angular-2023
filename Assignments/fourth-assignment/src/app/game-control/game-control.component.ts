import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css'],
})
export class GameControlComponent implements OnInit {
  n = 0;
  // increment() {
  //   this.n = this.n + 1;
  //   console.log(this.n);
  // }
  // aumN = setInterval(this.increment, 2000);
  constructor() {}

  ngOnInit() {}

  onStart() {
    console.log(this.n)
  }

  onStop() {
    console.log(this.n)
  }
}
