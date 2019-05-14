import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewFacturePage } from './view-facture';

@NgModule({
  declarations: [
    ViewFacturePage,
  ],
  imports: [
    IonicPageModule.forChild(ViewFacturePage),
  ],
})
export class ViewFacturePageModule {}
