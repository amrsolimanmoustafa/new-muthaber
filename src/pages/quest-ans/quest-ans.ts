import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';
import { GlobalServiceProvider } from '../../providers/global-service/global-service';

/**
 * Generated class for the QuestAnsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

/*@IonicPage()*/
@Component({
  selector: 'page-quest-ans',
  templateUrl: 'quest-ans.html',
})
export class QuestAnsPage {
	public questionID;
	public answer='';
	rate=0;
qStatus: any;
public rateStars:string[];
  constructor(public navCtrl: NavController,private toastCtrl: ToastController,public globalservice:GlobalServiceProvider, public navParams: NavParams) {
  	this.questionID=this.navParams.get('questionid');
  }

  ionViewDidLoad() {
  	this.rateStars=[];
    console.log('ionViewDidLoad QuestAnsPage');
    this.globalservice.getQuestAns(this.questionID).subscribe(res=>{
  			//this.answer = res;
  			console.log(res);
  			this.answer=res[0].answer;
  				this.assignQuestion(res);
  	})
  }


answer_id;
audio_url;
created_at;
image_url;

   assignQuestion(res){
    console.log(res)
    if(res.length !=0){
      this.answer=res[0].answer
      this.answer_id=res[0].answer_id
      this.audio_url=res[0].audio_url
      this.created_at=res[0].created_at
      this.image_url=res[0].image_url
      this.questionID=res[0].question_id
      this.rate=res[0].rate
    this.assignStars(res[0].rate)
    }else{
      this.answer=''
      this.answer_id=''
      this.audio_url=''
      this.created_at=''
      this.image_url=''
      this.questionID=''
      this.rate=0
     this.assignStarsEmpty()
      }
  }


assignStarsEmpty(){
    for(let i=0;i<5;i++){
      this.rateStars.push('star-outline')}
  }
   assignStars(rateValue){
    this.rateStars=[]

    for(let i=0;i<5;i++){
if(rateValue>=i){
  this.rateStars.push('star')
}else{
      this.rateStars.push('star-outline')}
    }

  }
  addRate(index){
  this.assignStars(index);
  this.globalservice.rateAnswer(index,this.questionID).subscribe(res=>{
  	this.presentToast("تم ارسال تقييم");
   // this.common.presentToast('تم ارسال تقييم','اغلاق')
    console.log(res)
  });

  }

presentToast(msg) {
  let toast = this.toastCtrl.create({
    message: msg,
    duration: 1000,
    position: 'bottom'
  });

  toast.onDidDismiss(() => {
    console.log('Dismissed toast');
  });

  toast.present();
}



}
