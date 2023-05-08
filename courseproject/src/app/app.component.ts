import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'courseproject';
  chooseRecipe = false;
  chooseShoppingList = false;
  onOption(opt: number){
    if (opt === 0){
      this.chooseRecipe = true;
      this.chooseShoppingList = false;
    }else if (opt === 1){
      this.chooseRecipe = false;
      this.chooseShoppingList = true;
    }else {
      this.chooseRecipe = false;
      this.chooseShoppingList = false;
    }
  }
}
