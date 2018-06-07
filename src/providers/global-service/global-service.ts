import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FCM } from '@ionic-native/fcm';
import { Storage } from '@ionic/storage';
/*
  Generated class for the GlobalServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GlobalServiceProvider {

public url:string = "http://muthaber-admin.muthaberapp.com/api/"
public login_url:string ="http://muthaber-admin.muthaberapp.com/api/login"
public About:string = "aboutandpolicy"
public bankaccounts:string = "bankaccount"
public contact:String = "contactus";

public user: any;
public phone;
public password;
public token_id = 'xx';
  constructor(public http: HttpClient,public storage: Storage, public fcm : FCM) {
    console.log('Hello GlobalServiceProvider Provider');
  }

// get methods
  policyAndTerms(){
    return this.http.get(this.url+this.About);
  } 
  bankAcc(){
  	return this.http.get(this.url+this.bankaccounts);
  }
  contactUs(){
	return this.http.get(this.url+this.contact);

  }

  // post methods 
 login(data): any {
 	console.log("my data" , data);

  let promise=new Promise((resolve,reject)=>{
    console.log("hi");
    this.http.post(this.login_url,data).subscribe(res=>{
      resolve(res)
    },e=>{
      reject(e)
    }) 
})
return promise;
  }
 setUser(user: any) {

   // this.loggedIn = true;
    this.storage.set("USERKey", JSON.stringify(user));
    this.user = user;
    console.log("this globalservice user : " , this.user);
  }

  getUser() {
    return this.storage.get("USERKey");
  }

}
 