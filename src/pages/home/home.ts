import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AccueilPage } from '../accueil/accueil';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  accueilPage = AccueilPage;

  constructor(public navCtrl: NavController) {
  }

  connexion(){
    this.navCtrl.setRoot(this.accueilPage);
  }
}
