import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateContestPage } from './create-contest';

@NgModule({
  declarations: [
    CreateContestPage,
  ],
  imports: [
    IonicPageModule.forChild(CreateContestPage),
  ],
})
export class CreateContestPageModule {}
