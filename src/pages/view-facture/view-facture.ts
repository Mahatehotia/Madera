import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {PdfViewerPage} from "../pdf-viewer/pdf-viewer";

/**
 * Generated class for the ViewFacturePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-view-facture',
  templateUrl: 'view-facture.html',
})
export class ViewFacturePage {
  pdfViewerPage = PdfViewerPage;
  myClient;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewFacturePage');
  }

  createPdf() {
    this.navCtrl.push('PdfViewerPage', {

    });
  }

}
