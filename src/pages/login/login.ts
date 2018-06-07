import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , MenuController } from 'ionic-angular';
import { GlobalServiceProvider } from '../../providers/global-service/global-service';
import { HomePage } from  '../home/home';
import { Toast } from '@ionic-native/toast';
import { ToastController } from 'ionic-angular';
import { StudenttabsPage } from '../studenttabs/studenttabs';
import { TeachertabsPage } from '../teachertabs/teachertabs';
import { NativeStorage } from '@ionic-native/native-storage';
import { IonicStorageModule } from '@ionic/storage';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public menuCtrl: MenuController, private nativeStorage: NativeStorage , private toast: Toast ,private toastCtrl: ToastController, public navCtrl: NavController,public globalservice: GlobalServiceProvider ,  public navParams: NavParams) {
  this.menuCtrl.enable(false);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  user = {phone : '' , password : '' , token_id : this.globalservice.token_id};
presentToast(msg) {
  let toast = this.toastCtrl.create({
    message: msg,
    duration: 1000,
    position: 'top'
  });

  toast.onDidDismiss(() => {
    console.log('Dismissed toast');
  });

  toast.present();
}


  logIn(){
  	this.globalservice.login(this.user).then((result) => {
  		console.log(this.user);
    console.log(result);
    this.afterSignIn(result);
   // this.navCtrl.push(HomePage);
  }, (err) => {
    console.log("hello " + err);
      // this.presentToast 
  });
  }
/*  toastshow(msg){
  	this.toast.show(msg, '1000', 'bottom').subscribe(
  toast => {
    console.log(toast);
  }
);
  }*/
  afterSignIn(res){
 console.log('error',res['error'])
  if(res['error']!=undefined){
    // this.password=this.password_confirm=null
   // this.common.loadDismess();

    this.presentToast(res['error'])

  return;
  }
  //this.user.setuser(res)
if(res.type=='1'){
    this.navCtrl.setRoot(StudenttabsPage)
    this.globalservice.setUser(res);
      this.menuCtrl.enable(true)
      	console.log("set user to storage " , res);
    }else{
      this.menuCtrl.enable(true)

      this.navCtrl.setRoot(TeachertabsPage)
    }

  //this.common.loadDismess();
  //res.password=this.password
 /* this.common.storeValue(this.statics.CURRENT_USER,res).then(()=>{
    console.log(res.type)
    if(res.type=='1'){
    this.navCtrl.setRoot(StudenttabsPage)
      this.menuCtrl.enable(true)

    }else{
      this.menuCtrl.enable(true)

      this.navCtrl.setRoot(TeachertabsPage)
    }

  })*/
  }


 /* setUser(){
  	this.nativeStorage.setItem('phone', {property: "phone", anotherProperty: 'anotherValue'})
  .then(
    () => console.log('Stored item!'),
    error => console.error('Error storing item', error)
  );

this.nativeStorage.getItem('myitem')
  .then(
    data => console.log(data),
    error => console.error(error)
  );
  }*/
}
