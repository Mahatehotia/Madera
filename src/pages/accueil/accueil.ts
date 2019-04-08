import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ClientsPage} from '../clients/clients';
import { DevisPage } from '../devis/devis';
import {CommandesPage} from '../commandes/commandes';

/**
 * Generated class for the AccueilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-accueil',
  templateUrl: 'accueil.html',
})
export class AccueilPage {

  clientsPage = ClientsPage;
  devisPage = DevisPage;
  commandesPages = CommandesPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccueilPage');
  }

  allClients(){
    this.navCtrl.push(this.clientsPage);
  }

  allDevis(){
    this.navCtrl.push(this.devisPage);
  }

  allCommandes(){
    this.navCtrl.push(this.commandesPages);
  }

}
