import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GlobalServiceProvider } from '../../providers/global-service/global-service';
import {TeacherquesPage} from '../teacherques/teacherques';

/**
 * Generated class for the QuestionTeacherPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
/*
@IonicPage()*/
@Component({
  selector: 'page-question-teacher',
  templateUrl: 'question-teacher.html',
})
export class QuestionTeacherPage {
	public quetions;
  constructor(public navCtrl: NavController,public globalserivce:GlobalServiceProvider, public navParams: NavParams) {
  
  this.globalserivce.getTeachQuest().subscribe(res =>{
  	this.quetions = res;
  	console.log(this.quetions);
  })

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuestionTeacherPage');
  }
goToquestion(obj,name){
  console.log(obj);
  console.log(name);
  this.navCtrl.push(TeacherquesPage,{ob:obj,stName:name});
}
}
