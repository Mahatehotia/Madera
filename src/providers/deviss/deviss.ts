import { Injectable } from '@angular/core';

import {Devis} from "../../models/devis";
import {Api} from "../api/api";

@Injectable()
export class Deviss {

    constructor(public api: Api) { }

    query(params?: any) {
        return this.api.get('/deviss', params);
    }

    add(devis: Devis) {
    }

    delete(devis: Devis) {
    }


}