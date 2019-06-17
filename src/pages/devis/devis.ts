import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

import { Devis } from "../../models/devis";
import { Deviss} from "../../providers";

/**
 * Generated class for the DevisPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-devis',
  templateUrl: 'devis.html',
})
export class DevisPage {
  currentDeviss: Devis[];
  valide : string = 'Valide';
  supprime : string = 'Supprime';
  enattente : string = 'En attente';


  constructor(public navCtrl: NavController, public deviss: Deviss) {
    this.currentDeviss = this.deviss.query();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DevisPage');
  }

  /**
   * Navigate to the detail page for this devis.
   */
  openDevis(devis: Devis) {
    this.navCtrl.push('DevisDetailPage', {
      devis: devis
    });
  }


}
