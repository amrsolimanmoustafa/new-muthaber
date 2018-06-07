import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TeacherquesPage } from '../teacherques/teacherques';
/**
 * Generated class for the AddtestsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addtests',
  templateUrl: 'addtests.html',
})
export class AddtestsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddtestsPage');
  }
addtest(){
    this.navCtrl.push(TeacherquesPage);
  }
}
