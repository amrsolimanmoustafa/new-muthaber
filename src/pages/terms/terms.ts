import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GlobalServiceProvider } from '../../providers/global-service/global-service';
/**
 * Generated class for the TermsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-terms',
  templateUrl: 'terms.html',
})
export class TermsPage {
public info:any;
public policy:any;
  constructor(public navCtrl: NavController,public globalservice:GlobalServiceProvider , public navParams: NavParams) {
  	this.globalservice.policyAndTerms().subscribe(res=>{
      console.log(res)
    this.info=res
      console.log(this.info)
     this.policy=this.info[0].policy
    
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TermsPage');
  }

}
