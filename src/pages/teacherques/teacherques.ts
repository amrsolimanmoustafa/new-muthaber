import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TeacherquesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-teacherques',
  templateUrl: 'teacherques.html',
})
export class TeacherquesPage {
  questionText:any
  audioAnswer:any;
  imageAnswer:any;
  reportBlockes:any
  reportStudent:any;
  year_id=''
  grade_id=''
  subject_id=''
  yearsArr
  gradeArr
  subjectsArr
  questionsArr
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeacherquesPage');
  }

}
