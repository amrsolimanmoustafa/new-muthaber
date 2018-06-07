import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GlobalServiceProvider } from '../../providers/global-service/global-service';

/**
 * Generated class for the ContactusPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contactus',
  templateUrl: 'contactus.html',
})
export class ContactusPage {
public info:any;
public address;
 public created_at;
  public email;
  public phone_whatsapp;
  public updated_at;
  public website;
  constructor(public navCtrl: NavController,public globalservice:GlobalServiceProvider , public navParams: NavParams) {
   this.globalservice.contactUs().subscribe(res=>{
   	      console.log("hiiii");
      console.log(res);
    this.info=res;
     this. address=this.info[0].address
      this. created_at=this.info[0].created_at
      this. email=this.info[0].email
      this. phone_whatsapp=this.info[0].phone_whatsapp
      this.updated_at=this.info[0].updated_at
      this. website=this.info[0].website  
    })

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactusPage');
  }

}
