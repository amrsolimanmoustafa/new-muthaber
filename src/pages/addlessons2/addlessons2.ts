import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GlobalServiceProvider } from '../../providers/global-service/global-service';
import { LessonsshowPage } from '../lessonsshow/lessonsshow';

/**
 * Generated class for the Addlessons2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

/*@IonicPage()*/
@Component({
  selector: 'page-addlessons2',
  templateUrl: 'addlessons2.html',
})
export class Addlessons2Page {
public lessons;
public subjectid;
public lessonID;
  constructor(public navCtrl: NavController,public globalserive: GlobalServiceProvider, public navParams: NavParams) {
 		this.lessonID = this.navParams.get('lesson_id');
 		this.subjectid = this.navParams.get('subject');
 		this.globalserive.getLessonByWEekID(this.lessonID,this.subjectid).subscribe(res=>{
 			this.lessons =res;
 			console.log("resss" , this.lessons);
 		})

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Addlessons2Page');
  }
showVideo(video){
 	console.log(video);
   this.navCtrl.push(LessonsshowPage,{video_url:video}); 
  }
}
