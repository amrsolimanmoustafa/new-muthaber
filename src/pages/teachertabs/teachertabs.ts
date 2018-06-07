import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TeachertabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-teachertabs',
  templateUrl: 'teachertabs.html',
})
export class TeachertabsPage {
/*tab1Root: any = TeacherweeksPage; 
  tab2Root: any = TeacherquesPage;*/
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeachertabsPage');
  }

}
