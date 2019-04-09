import { Injectable } from '@angular/core';

import {Client} from "../../models/client";
import {Api} from "../api/api";

@Injectable()
export class Clients {

    constructor(public api: Api) { }

    query(params?: any) {
        return this.api.get('/clients', params);
    }

    add(client: Client) {
    }

    delete(client: Client) {
    }


}