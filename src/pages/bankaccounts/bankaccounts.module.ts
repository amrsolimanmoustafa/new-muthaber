import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BankaccountsPage } from './bankaccounts';

@NgModule({
  declarations: [
    BankaccountsPage,
  ],
  imports: [
    IonicPageModule.forChild(BankaccountsPage),
  ],
})
export class BankaccountsPageModule {}
