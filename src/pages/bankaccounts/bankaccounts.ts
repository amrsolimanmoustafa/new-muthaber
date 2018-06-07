import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GlobalServiceProvider } from '../../providers/global-service/global-service';

/**
 * Generated class for the BankaccountsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bankaccounts',
  templateUrl: 'bankaccounts.html',
})
export class BankaccountsPage {
public account:any;
public info:any;
  constructor(public navCtrl: NavController,public globalservice:GlobalServiceProvider , public navParams: NavParams) {
 this.globalservice.bankAcc().subscribe(res=>{
      console.log(res)
    this.info=res
      console.log(this.info)    
    })

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BankaccountsPage');
  }

}
