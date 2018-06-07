import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddlessonsPage } from './addlessons';

@NgModule({
  declarations: [
    AddlessonsPage,
  ],
  imports: [
    IonicPageModule.forChild(AddlessonsPage),
  ],
})
export class AddlessonsPageModule {}
