import { Injectable } from '@angular/core';


import {Composant} from "../../models/composant";

@Injectable()
export class Composants {
    composants: Composant[] = [];

    defaultComposant: any = {
        "idFamille":"1",
        "name": "Porte",
        "src":"../../assets/imgs/porte.JPG",
    };


    constructor() {
        let composants = [
            {
                "idFamille":"1",
                "type": "Tuile",
                "name": "Tuile orange",
                "src": "../../assets/imgs/tuile_orange.jpg",
            },

            {
                "idFamille":"1",
                "type": "Tuile",
                "name": "Tuile noire",
                "src": "../../assets/imgs/tuile_noire.jpg",
            },

            {
                "idFamille":"1",
                "type": "Ardoise",
                "name": "Ardoise Noire 30 cm x 20 cm",
                "src": "../../assets/imgs/ardoise_30x20.jpg",
            },

            {
                "idFamille":"1",
                "type": "Vegetal",
                "name": "Toit végétal",
                "src": "../../assets/imgs/toit_vegetal.jpg",
            },
            {
                "idFamille": "1",
                "name": "Bloc-porte postformé Blanc",
                "src": "../../assets/imgs/IMG_01.JPG",

            },

            {
                "idFamille": "1",
                "name": "Porte TORHAMN",
                "src": "../../assets/imgs/IMG_02.JPG",

            },

            {
                "idFamille": "2",
                "name": " Lame multi usage 141 x 9cm, ép.27mm",
                "src": "../../assets/imgs/IMG_03.JPG",

            },

            {

                "idArticle": "4",
                "name": "Plancher sapin Colours brut 205 x 13,5 cm",
                "prix": "19.35",
                "description": "Matière : Sapin brut (origine Finlande). Dimensions : L.205 x l.13,5 cm. Epaisseur : 20 mm. Conditionnement : 1,384 m² par botte. A clouer. 13,98 € / M2",
                "src": "../../assets/imgs/IMG_04.JPG",
                "idFamille": "2",

            },

            {

                "idArticle": "5",
                "name": "Fenêtre pvc 2 vantaux ouverture à la française tirant droit blanc - 100 x h.115 cm",
                "prix": "99.00",
                "description": "Matière : PVC. Vitrage : Double vitrage 4/16/4 mm avec gaz argon. Coefficient Uw (coefficient d'isolation thermique de la menuiserie et du vitrage, plus il est faible, plus la fenêtre est performante) : 1,2. Ouverture : A la française. Sens d'ouverture : Ouvrant droit. Nombre de vantaux : 2. Coloris : Blanc traité anti-UV. Dimensions : L.100 x h.115 cm. Dormant 1000 x 60 mm. Nombre de points de fermeture : 5. Pose en applique : Oui. Pose en feuillure : Oui. Pose en tunnel : Oui. Réglages : Paumelles réglables. Vendue sans poignée.",
                "src": "../../assets/imgs/IMG_05.JPG",
                "idFamille": "3",

            },

            {

                "idArticle": "6",
                "name": "Abattant pvc 1 vantail Mealon blanc - 79 x h.49 cm",
                "prix": "45.90",
                "description": "Fenêtre abattant PVC Mealon 79 x h.49 cm. Matière : Structure PVC. Vitrage : Simple vitrage, épaisseur 5 mm. Coefficient Uw (coefficient d'isolation thermique de la menuiserie et du vitrage, plus il est faible, plus la fenêtre est performante) : 1,2. Ouverture : Abattant. Nombre de vantaux : 1. Coloris : Blanc traité anti-UV. Dimensions : L.79 x h.49 x ép.6,5 cm. Nombre de points de fermeture : 2. Pose en applique : Non. Pose en feuillure : Non. Pose en tunnel : Oui. Poignée et caches paumelles vendus séparément. Aides financières : Eligible sous conditions au Crédit d'Impôt, Prime énergie et TVA réduite. 3 niveaux d'ouverture, dispositif anti dégondage.",
                "src": "../../assets/imgs/IMG_06.JPG",
                "idFamille": "3",

            },

        ];

        for (let composant of composants) {
            this.composants.push(new Composant(composant));
        }
    }

    query(params?: any) {
        if (!params) {
            return this.composants;
        }

        return this.composants.filter((composant) => {
            for (let key in params) {
                let field = composant[key];
                if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
                    return composant;
                } else if (field == params[key]) {
                    return composant;
                }
            }
            return null;
        });
    }

    add(composant: Composant) {
        this.composants.push(composant);
    }

    delete(composant: Composant) {
        this.composants.splice(this.composants.indexOf(composant), 1);
    }
}
