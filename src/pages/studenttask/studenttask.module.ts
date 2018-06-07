import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StudenttaskPage } from './studenttask';

@NgModule({
  declarations: [
    StudenttaskPage,
  ],
  imports: [
    IonicPageModule.forChild(StudenttaskPage),
  ],
})
export class StudenttaskPageModule {}
