import { Injectable } from '@angular/core';

import { Devis } from "../../models/devis";

@Injectable()
export class Deviss{
    deviss: Devis[] = [];

    defaultDevis: any = {
        "idDevis": "1",
        "name" : "NODEVISMDEVIS1",
        "etat" : "Supprime",
        "unite" : "UNITE",
        "dateCreation" : "03/02/2019",
        "margeCommercial" : "2",
        "margeEntreprise" : "39",
        "prixTotalHT" : "1453",
        "prixTotalTTC" : "2991",
        "idPlan" : "1",
        "idProjet" : "1",
        "idClient" : "1",
        "idCommercial" : "1",
    };

    constructor() {
        let deviss = [
            {

                "idDevis": "1",
                "name" : "NODEVISMDEVIS1",
                "etat" : "Supprime",
                "unite" : "UNITE",
                "dateCreation" : "03/02/2019",
                "margeCommercial" : "2",
                "margeEntreprise" : "39",
                "prixTotalHT" : "1453",
                "prixTotalTTC" : "2991",
                "idPlan" : "1",
                "idProjet" : "1",
                "idClient" : "1",
                "idCommercial" : "1",

            },

            {

                "idDevis":"2",
                "name" : "NOMDEVIS2",
                "etat" : "En attente",
                "unite" : "UNITE",
                "dateCreation" : "14/03/2019",
                "margeCommercial" : "1",
                "margeEntreprise" : "45",
                "prixTotalHT" : "1280",
                "prixTotalTTC" : "2056",
                "idPlan" : "2",
                "idProjet" : "2",
                "idClient" : "2",
                "idCommercial" : "2",

            },

            {

                "idDevis": "3",
                "name" : "DEVIS3",
                "etat" : "Valide",
                "unite" : "UNITE",
                "dateCreation" : "21/01/2019",
                "margeCommercial" : "5",
                "margeEntreprise" : "25",
                "prixTotalHT" : "1150",
                "prixTotalTTC" : "2800",
                "idPlan" : "3",
                "idProjet" : "3",
                "idClient" : "3",
                "idCommercial" : "3",

            },

            {

                "idDevis": "4",
                "name" : "DEVIS4",
                "etat" : "Valide",
                "unite" : "UNITE",
                "dateCreation" : "16/01/2019",
                "margeCommercial" : "5",
                "margeEntreprise" : "39",
                "prixTotalHT" : "1086",
                "prixTotalTTC" : "2395",
                "idPlan" : "4",
                "idProjet" : "4",
                "idClient" : "4",
                "idCommercial" : "4",

            },

            {

                "idDevis": "5",
                "name" : "DEVIS5",
                "etat" : "Valide",
                "unite" : "UNITE",
                "dateCreation" : "10/03/2019",
                "margeCommercial" : "5",
                "margeEntreprise" : "12",
                "prixTotalHT" : "1213",
                "prixTotalTTC" : "2530",
                "idPlan" : "5",
                "idProjet" : "5",
                "idClient" : "5",
                "idCommercial" : "5",

            },

            {

                "idDevis": "6",
                "name" : "DEVIS6",
                "etat" : "En attente",
                "unite" : "UNITE",
                "dateCreation" : "31/03/2019",
                "margeCommercial" : "3",
                "margeEntreprise" : "14",
                "prixTotalHT" : "1276",
                "prixTotalTTC" : "2364",
                "idPlan" : "6",
                "idProjet" : "6",
                "idClient" : "6",
                "idCommercial" : "6",

            },

            {

                "idDevis": "7",
                "name" : "DEVIS7",
                "etat" : "En attente",
                "unite" : "UNITE",
                "dateCreation" : "27/02/2019",
                "margeCommercial" : "1",
                "margeEntreprise" : "37",
                "prixTotalHT" : "1178",
                "prixTotalTTC" : "2513",
                "idPlan" : "7",
                "idProjet" : "7",
                "idClient" : "7",
                "idCommercial" : "7",

            },

            {

                "idDevis": "8",
                "name" : "DEVIS8",
                "etat" : "En attente",
                "unite" : "UNITE",
                "dateCreation" : "11/02/2019",
                "margeCommercial" : "3",
                "margeEntreprise" : "35",
                "prixTotalHT" : "1238",
                "prixTotalTTC" : "2700",
                "idPlan" : "8",
                "idProjet" : "8",
                "idClient" : "8",
                "idCommercial" : "8",

            },

            {

                "idDevis": "9",
                "name" : "DEVISTEST",
                "etat" : "Valide",
                "unite" : "UNITE",
                "dateCreation" : "28/02/2019",
                "margeCommercial" : "5",
                "margeEntreprise" : "48",
                "prixTotalHT" : "1448",
                "prixTotalTTC" : "2862",
                "idPlan" : "9",
                "idProjet" : "9",
                "idClient" : "9",
                "idCommercial" : "9",

            },

            {

                "idDevis": "10",
                "name" : "DEVIS10",
                "etat" : "Annulé",
                "unite" : "UNITE",
                "dateCreation" : "27/02/2019",
                "margeCommercial" : "1",
                "margeEntreprise" : "26",
                "prixTotalHT" : "1003",
                "prixTotalTTC" : "2414",
                "idPlan" : "10",
                "idProjet" : "10",
                "idClient" : "10",
                "idCommercial" : "10",

            },

            {

                "idDevis": "11",
                "name" : "DEVIS11",
                "etat" : "Valide",
                "unite" : "UNITE",
                "dateCreation" : "04/03/2019",
                "margeCommercial" : "2",
                "margeEntreprise" : "10",
                "prixTotalHT" : "1315",
                "prixTotalTTC" : "1814",
                "idPlan" : "11",
                "idProjet" : "11",
                "idClient" : "6",
                "idCommercial" : "11",

            },

            {

                "idDevis": "12",
                "name" : "DEVIS12",
                "etat" : "Valide",
                "unite" : "UNITE",
                "dateCreation" : "02/01/2019",
                "margeCommercial" : "4",
                "margeEntreprise" : "17",
                "prixTotalHT" : "1023",
                "prixTotalTTC" : "2553",
                "idPlan" : "12",
                "idProjet" : "12",
                "idClient" : "10",
                "idCommercial" : "12",

            },

            {

                "idDevis": "13",
                "name" : "DEVIS13",
                "etat" : "Annulé",
                "unite" : "UNITE",
                "dateCreation" : "26/02/2019",
                "margeCommercial" : "3",
                "margeEntreprise" : "54",
                "prixTotalHT" : "1388",
                "prixTotalTT13C" : "2250",
                "idPlan" : "13",
                "idProjet" : "13",
                "idClient" : "9",
                "idCommercial" : "13",

            },

            {

                "idDevis": "14",
                "name" : "DEVIS14",
                "etat" : "En attente",
                "unite" : "UNITE",
                "dateCreation" : "21/03/2019",
                "margeCommercial" : "2",
                "margeEntreprise" : "40",
                "prixTotalHT" : "1360",
                "prixTotalTTC" : "1864",
                "idPlan" : "14",
                "idProjet" : "14",
                "idClient" : "1",
                "idCommercial" : "14",

            },

            {

                "idDevis": "15",
                "name" : "DEVIS15",
                "etat" : "En attente",
                "unite" : "UNITE",
                "dateCreation" : "10/03/2019",
                "margeCommercial" : "1",
                "margeEntreprise" : "33",
                "prixTotalHT" : "1224",
                "prixTotalTTC" : "1835",
                "idPlan" : "15",
                "idProjet" : "15",
                "idClient" : "10",
                "idCommercial" : "15",

            },
        ];

        for (let devis of deviss) {
            this.deviss.push(new Devis(devis));
        }
    }

    query(params?: any) {
        if (!params) {
            return this.deviss;
        }

        return this.deviss.filter((devis) => {
            for (let key in params) {
                let field = devis[key];
                if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
                    return devis;
                } else if (field == params[key]) {
                    return devis;
                }
            }
            return null;
        });
    }

    add(devis: Devis) {
        this.deviss.push(devis);
    }

    delete(devis: Devis) {
        this.deviss.splice(this.deviss.indexOf(devis), 1);
    }
}