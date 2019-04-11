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
                "idFamille": "1",
                "name": "Porte",
                "src":"../../assets/imgs/porte.JPG",
            },

            {
                "idFamille": "2",
                "name": "Plancher",
                "src":"../../assets/imgs/plancher.JPG",
            },

            {
                "idFamille": "3",
                "name": "Fenêtres",
                "src":"../../assets/imgs/fenêtre.JPG",
            },

            {
                "idFamille": "4",
                "name": "Luminaire",
                "src":"../../assets/imgs/luminaire.JPG",
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
