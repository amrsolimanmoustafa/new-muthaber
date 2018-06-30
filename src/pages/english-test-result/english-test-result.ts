import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EnglishTestResultPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

/*@IonicPage()
*/@Component({
  selector: 'page-english-test-result',
  templateUrl: 'english-test-result.html',
})
export class EnglishTestResultPage {
	public place;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.place = this.navParams.get('level');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EnglishTestResultPage');
  }

}
