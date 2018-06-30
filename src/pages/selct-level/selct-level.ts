import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{EnglishTestPage} from '../english-test/english-test';
import { GlobalServiceProvider } from '../../providers/global-service/global-service';


/**
 * Generated class for the SelctLevelPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

/*@IonicPage()*/
@Component({
  selector: 'page-selct-level',
  templateUrl: 'selct-level.html',
})
export class SelctLevelPage {
	public tests=[];
	public result;
  constructor(public navCtrl: NavController, public navParams: NavParams,public globalservice:GlobalServiceProvider) {
   this.globalservice.getEnglishTest().subscribe(res => {
  	this.result=res;
  	console.log(this.result);
  	console.log(res);
  	console.log(this.tests.push(res));

  })

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelctLevelPage');
  }
gotoTest(){
	this.navCtrl.push(EnglishTestPage,{'ress':this.result});
}
}
