import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AccueilPage} from '../pages/accueil/accueil';
import {ClientsPage} from '../pages/clients/clients';
import {DevisPage} from '../pages/devis/devis';
import {CommandesPage} from '../pages/commandes/commandes';
import {IonicStorageModule} from "@ionic/storage";
import {Clients} from "../mocks/providers/clients";
import {Deviss} from "../mocks/providers/deviss";


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AccueilPage,
    ClientsPage,
    DevisPage,
    CommandesPage,
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
    DevisPage,
    CommandesPage,
  ],
  providers: [
    Clients,
    Deviss,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
