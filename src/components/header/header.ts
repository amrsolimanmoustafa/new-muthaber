import { Component , Input } from '@angular/core';
import { MenuController,Events , NavController } from 'ionic-angular';

/**
 * Generated class for the HeaderComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'header',
  templateUrl: 'header.html'
})
export class HeaderComponent {
@Input() name: string;
  text: string;

  constructor(public menuCtrl: MenuController) {
    console.log('Hello HeaderComponent Component');
    this.text = 'Hello World';
  }
 openMenu() {
    this.menuCtrl.toggle();
  }
}
