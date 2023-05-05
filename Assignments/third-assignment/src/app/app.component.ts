import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'third-assignment';
  showP = false;
  array = [];
  styleChange = false;
  color = "blue"

  constructor(){
    if (this.array.length > 0){
      this.styleChange = true;
    }
  }

  ngOnInit() {}

  onToggleAndCreate() {
    this.showP=!this.showP;
    this.array.push(new Date());
  }

  getColor(){
    return this.styleChange ? 'blue' : ''
  }

}
