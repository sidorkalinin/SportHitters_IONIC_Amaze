import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContestMainPage } from './contest-main';

@NgModule({
  declarations: [
    ContestMainPage,
  ],
  imports: [
    IonicPageModule.forChild(ContestMainPage),
  ],
})
export class ContestMainPageModule {}
