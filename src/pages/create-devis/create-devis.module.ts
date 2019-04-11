import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateDevisPage } from './create-devis';

@NgModule({
  declarations: [
    CreateDevisPage,
  ],
  imports: [
    IonicPageModule.forChild(CreateDevisPage),
  ],
})
export class CreateDevisPageModule {}
