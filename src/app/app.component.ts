import { Component } from '@angular/core';
import { Menu } from './configs/menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Funcionarios';
  menu = Menu;

  toggleDropdown(item: any) {
    item.open = !item.open;
  }
}
