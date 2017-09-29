import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContestSelectedPage } from './contest-selected';

@NgModule({
  declarations: [
    ContestSelectedPage,
  ],
  imports: [
    IonicPageModule.forChild(ContestSelectedPage),
  ],
})
export class ContestSelectedPageModule {}
