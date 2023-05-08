import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @Output() option = new EventEmitter<number>();
  onSelect(opt: number) {
    this.option.emit(opt);
  }
}
