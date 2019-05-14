import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AccueilPage } from '../pages/accueil/accueil';
import { ClientsPage } from '../pages/clients/clients';
//import { DevisPage } from '../pages/devis/devis';
import { CommandesPage } from '../pages/commandes/commandes';
import { CataloguePage } from "../pages/catalogue/catalogue";
import { IonicStorageModule } from "@ionic/storage";
import { Clients } from "../mocks/providers/clients";
import { Deviss } from "../mocks/providers/deviss";
import {Composants} from "../mocks/providers/composants";
import {CreateDevisPage} from "../pages/create-devis/create-devis";
import {DataPage} from "../pages/data/data";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AccueilPage,
    ClientsPage,
    //DevisPage,
    CommandesPage,
    CataloguePage,
    CreateDevisPage,
    DataPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      backButtonText: 'Retour',
      backButtonIcon: 'ios-arrow-back',
      iconMode: 'md'
    }),
    IonicStorageModule.forRoot(),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AccueilPage,
    ClientsPage,
    //DevisPage,
    CommandesPage,
    CataloguePage,
    CreateDevisPage,
    DataPage
  ],
  providers: [
    Clients,
    Deviss,
    Composants,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}
