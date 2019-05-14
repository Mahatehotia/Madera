import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {DevisPage} from "../devis/devis";

import {Clients, Composants} from "../../providers";
import {Client} from "../../models/client";
import {Composant} from "../../models/composant";


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
  pdfmake;
  devisPage = DevisPage;
  listClients: Client[];
  allComposants: Composant[];
  toggleValue : boolean = false;
  items;
  pdfObj = null;
  letterObj = {
    to: 'Taf',
    from: 'Madera',
    text: 'mon texte'
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public clients: Clients, public composants: Composants) {
    this.listClients = this.clients.query();
    this.initializeItems();
    this.allComposants = this.composants.query();

  }
  initializeItems() {
    this.items =
        [
      'Bloc-porte postformé Blanc',
      'Porte TORHAMN',
      'Lame multi usage 141 x 9cm, ép.27mm',
      'Plancher sapin Colours brut 205 x 13,5 cm',
      'Fenêtre pvc 2 vantaux ouverture à la française tirant droit blanc - 100 x h.115 cm',
      'Abattant pvc 1 vantail Mealon blanc - 79 x h.49 cm',
      'Tuile orange',
      'Tuile noire',
      'Ardoise Noire 30 cm x 20 cm',
      'Toit végétal'
    ];
  }
  getItems(ev) {
    // Reset items back to all of the items
    this.initializeItems();
    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateDevisPage');
  }

  allDevis(){
    this.navCtrl.push('DevisPage');
  }

  createPdf() {
    this.navCtrl.push('PdfViewerPage', {
    });
  }
}
