import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {Clients} from "../../providers";

/**
 * Generated class for the ClientDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-client-detail',
  templateUrl: 'client-detail.html',
})
export class ClientDetailPage {

  client: any;
  color_list = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, clients: Clients) {
    this.client = navParams.get('client');
    this.color_list = [{
      title: 'Color',
      color : this.getRandomColor(),
    }];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClientDetailPage');
  }

  getRandomColor()
  {
    var color = "#";
    for (var i = 0; i < 3; i++)
    {
      var part = Math.round(Math.random() * 255).toString(16);
      color += (part.length > 1) ? part : "0" + part;
    }
    return color;
  }

}
