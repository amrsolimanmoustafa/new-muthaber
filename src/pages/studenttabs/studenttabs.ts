import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StudentsubsPage } from '../studentsubs/studentsubs';
import {  StudenttaskPage } from '../studenttask/studenttask';
import { StudentanswerPage } from '../studentanswer/studentanswer';
/**
 * Generated class for the StudenttabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-studenttabs',
  templateUrl: 'studenttabs.html',
})
export class StudenttabsPage {
  tab1Root: any = StudentsubsPage;
  tab2Root: any = StudenttaskPage;
  tab3Root: any = StudentanswerPage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StudenttabsPage');
  }

}
