import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {HomePage} from "../pages/home/home";
import {AccueilPage} from "../pages/accueil/accueil";
import {ClientsPage} from "../pages/clients/clients";
import {CommandesPage} from "../pages/commandes/commandes";
import {DevisPage} from "../pages/devis/devis";

RouterModule.forRoot([
    { path: 'home', component: HomePage },
    { path: 'accueil', component: AccueilPage},
    { path: 'clients', component: ClientsPage },
    { path: 'commandes', component: CommandesPage },
    { path: 'devis', component: DevisPage }
]);