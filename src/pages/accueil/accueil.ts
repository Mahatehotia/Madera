import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ClientsPage} from '../clients/clients';
import { DevisPage } from '../devis/devis';
import { CommandesPage } from '../commandes/commandes';
import { CataloguePage } from "../catalogue/catalogue";
import {CreateDevisPage} from "../create-devis/create-devis";


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
  commandePage = CommandesPage;
  cataloguePage = CataloguePage;
  createDevisPage = CreateDevisPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccueilPage');
  }

  allClients(){
    this.navCtrl.push(this.clientsPage);
  }

  //allDevis(){
  //  this.navCtrl.push(this.devisPage);
  //}

  allCommandes(){
    this.navCtrl.push(this.commandePage);
  }

  allCatalogue(){
    this.navCtrl.push(this.cataloguePage)
  }

  createDevis(){
    this.navCtrl.push(this.createDevisPage)
  }


}
