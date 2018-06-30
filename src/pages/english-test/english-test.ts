import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,ToastController} from 'ionic-angular';
import { GlobalServiceProvider } from '../../providers/global-service/global-service';
import {EnglishTestResultPage} from '../english-test-result/english-test-result';
/**
 * Generated class for the EnglishTestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

/*@IonicPage()
*/@Component({
  selector: 'page-english-test',
  templateUrl: 'english-test.html',
})
export class EnglishTestPage {
	public weak_id;
	public subject_id;
	public teacher_id;
	public test_question;
	public tests;
	public x ;
	public testSplice;
	public y = 5;
	public z;
	public start = 5;
	public end = 10;
  public week;
  answer_1
  answer_2
  answer_3
 public show:boolean = true ;
 public finsh:boolean = false ;
    number_of_elements_to_get = 5;
    public correct;
resultCounter;
  constructor(public navCtrl: NavController,private toastCtrl: ToastController ,public globalservice:GlobalServiceProvider ,public navParams: NavParams) {
 	this.tests = this.navParams.get('ress');
 	console.log(this.tests);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EnglishTestPage');
    this.correct=[];

  }
  public users=[];
  public Counter = 3;
 

  next(){
     console.log( this.tests.length)
   let Counterplus = this.Counter + 3;
   
      while(this.Counter < Counterplus && this.Counter < this.tests.length){
      this.Counter++;
     this.test_question.push(this.tests[this.Counter]);
        
        if (this.Counter == this.tests.length - 1) {
             this.show = false;
             this.finsh = true;
            console.log("out");
            break;   

          }
          }
          
  }


  ionViewWillEnter() {
    this.test_question=[]
    this.answer_1=[]
    this.answer_2=[]
    this.answer_3=[]
    this.correct=[]
  this.test_question=this.tests.slice(0,4);
  }

  val;
  radio(value,l){
    let i=l
    console.log(value,i)
    this.val = value;
    console.log( this.test_question)
              if(this.test_question[i]['correct']==value){
                  console.log('true')
                            this.correct[i]=1
              }else{
                            this.correct[i]=0
                            console.log('false')
                    }
                          console.log(  this.correct)
                          this.resultCounter=0
    for(let l=0;l<this.correct.length;l++){
            if(this.correct[l]==1){
                    console.log( 'this.correct[i]',this.correct[l])
                    this.resultCounter++
             }else{

    }
              console.log( this.resultCounter)
    }

  }
  public corrRes;
  finish(){
          console.log(this.tests.length)
          console.log("val",this.val);
          console.log("this.correct.length",this.correct.length);
           if(this.correct.length != this.tests.length){
               this.presentToast("من فضلك الاجابة على جميع الاسئلة");
           }else{
           	console.log("right");
               let data ={
                 "total_question" : this.tests.length,
                 "correct_answer":this.correct.length

               }
               console.log("data", data);
               this.globalservice.levelRs(data).then(res=>{
                   this.corrRes = res;
                   console.log("this.corrRes", this.corrRes);
                   this.navCtrl.push(EnglishTestResultPage,{'level':this.corrRes});
               });
               
           }
  
  }

presentToast(msg) {
  let toast = this.toastCtrl.create({
    message: msg,
    duration: 1000,
    position: 'center'
  });

  toast.onDidDismiss(() => {
    console.log('Dismissed toast');
  });

  toast.present();
}



}
