import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LessonsshowPage } from '../lessonsshow/lessonsshow';
/**
 * Generated class for the AddlessonsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addlessons',
  templateUrl: 'addlessons.html',
})
export class AddlessonsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddlessonsPage');
  }
 showVideo(){
   this.navCtrl.push(LessonsshowPage); 
  }
}
