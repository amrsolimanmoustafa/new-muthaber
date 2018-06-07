import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StudenttabsPage } from './studenttabs';

@NgModule({
  declarations: [
    StudenttabsPage,
  ],
  imports: [
    IonicPageModule.forChild(StudenttabsPage),
  ],
})
export class StudenttabsPageModule {}
