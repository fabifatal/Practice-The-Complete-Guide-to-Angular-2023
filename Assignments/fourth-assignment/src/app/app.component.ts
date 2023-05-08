import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  evenArray = [];
  oddArray = [];

  onNumAdded(num: { val: number }) {
    if (num.val % 2 === 0) {
      console.log(num.val +' is even');
      console.log(this.evenArray);
      this.evenArray.push({ val: num.val });
    } else {
      console.log('odd');
      this.oddArray.push({ val: num.val });
      console.log(this.oddArray);
    }
  }
}
