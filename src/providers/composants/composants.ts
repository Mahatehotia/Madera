import { Injectable } from '@angular/core';

import {Composant} from "../../models/composant";
import {Api} from "../api/api";

@Injectable()
export class Composants {

    constructor(public api: Api) { }

    query(params?: any) {
        return this.api.get('/composants', params);
    }

    add(composant: Composant) {
    }

    delete(composant: Composant) {
    }


}