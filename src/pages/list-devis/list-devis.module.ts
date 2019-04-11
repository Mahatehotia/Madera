import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListDevisPage } from './list-devis';

@NgModule({
  declarations: [
    ListDevisPage,
  ],
  imports: [
    IonicPageModule.forChild(ListDevisPage),
  ],
})
export class ListDevisPageModule {}
