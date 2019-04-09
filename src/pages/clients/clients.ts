import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

import { Client } from "../../models/client";
import { Clients} from "../../providers";

/**
 * Generated class for the ClientsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-clients',
  templateUrl: 'clients.html',
})
export class ClientsPage {
  currentClients: Client[];

  constructor(public navCtrl: NavController, public clients: Clients) {
    this.currentClients = this.clients.query();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClientsPage');
  }


  /**
   * Navigate to the detail page for this client.
   */
  openClient(client: Client) {
    this.navCtrl.push('ClientDetailPage', {
      client: client
    });
  }
}
