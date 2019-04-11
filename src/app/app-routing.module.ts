import { RouterModule } from '@angular/router';

import {HomePage} from "../pages/home/home";
import {AccueilPage} from "../pages/accueil/accueil";
import {ClientsPage} from "../pages/clients/clients";
import {CommandesPage} from "../pages/commandes/commandes";
import {DevisPage} from "../pages/devis/devis";
import {CataloguePage} from "../pages/catalogue/catalogue";

RouterModule.forRoot([
    { path: '', redirectTo :'home', pathMatch: 'full' },
    { path: 'home', component: HomePage },
    { path: 'accueil', component: AccueilPage},
    { path: 'clients', component: ClientsPage },
    { path: 'commandes', component: CommandesPage },
    { path: 'devis', component: DevisPage },
    { path: 'catalogue', component: CataloguePage },
]);