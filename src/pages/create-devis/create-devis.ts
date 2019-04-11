import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DevisPage} from "../devis/devis";

/**
 * Generated class for the CreateDevisPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-devis',
  templateUrl: 'create-devis.html',
})
export class CreateDevisPage {

  devisPage = DevisPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateDevisPage');
  }

  allDevis(){
    this.navCtrl.push(this.devisPage);
  }

}
