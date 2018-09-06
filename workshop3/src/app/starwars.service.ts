import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

import { People } from './model';


//Make this into a service

const URL = "https://swapi.co/api/people/";

@Injectable()
export class StarWarsService {

    private http: HttpClient;
    //Inject http into the service
    constructor(http: HttpClient) {
        this.http = http;
    }
    //go to app component to add to provide the service

    searchPeople(id: number): Promise<People> {
        //this.http.get(URL + id) //String concatenation
        return (
            //String interpolation
            this.http.get<People>(`https://swapi.co/api/people/${id}`)
                .toPromise()
                //enrich the data then return
                .then(result => {
                    result.id=id;
                    result.image = `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`
                    return(result);
                })
        );
    }

}