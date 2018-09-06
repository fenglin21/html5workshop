import {Injectable} from '@angular/core';
import Dexie from 'dexie';
import {People} from './model';
import { resolve } from 'url';
import { reject } from 'q';

@Injectable()
export class StarWarsStorageService{

    private db:Dexie;

    constructor(){
        this.db = new Dexie('sqdb');
        this.db.version(1).stores({

           people: "id,image,name,height,mass,hair_color,skin_color,birth_year,gender,homeworld,films,species,vehicles,starships,created,edited,url"
        })
    }
    
    find(id:number): Promise<People>{
        const p = new Promise<People>((resolve,reject)=>{
    this.db['people'].where('id').equals(id)
    .toArray()
    .then((result: People[])=>{
        if(result.length>0)
        resolve(result[0])
        else
        reject();
    })

    return(p);
    });

}

save(data:People):Promise<number>{
return(
    this.db['people'].put(data)
);
}



}