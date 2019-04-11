import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

import { Composant } from "../../models/composant";
import { Composants } from "../../providers";

/**
 * Generated class for the CataloguePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-catalogue',
  templateUrl: 'catalogue.html',
})
export class CataloguePage {
  currentComposants: Composant[];

  constructor(public navCtrl: NavController, public composants: Composants) {
    this.currentComposants = this.composants.query();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CataloguePage');
  }

  /**
   * Navigate to the detail page for this composant.
   */
  openComposant(composant: Composant) {
    this.navCtrl.push('ComposantDetailPage', {
      composant: composant
    });
  }

}
