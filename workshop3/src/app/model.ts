export interface People {
    id: number; //primary key
    
    //http://startwars-visualguide.com/assets/img/characters/88/jpg
    image: string;

    //fields from swpi.com
    name: string;
    height: string;
    mass: string;
    hair_color: string;
    skin_color: string;
    birth_year: string;
    gender: string;
    homeworld: string;
    films: string[];
    species :string[];
    vehicles:string[];
    starships:string[];
    created: string;
    edited: string;
    url: string;
}
    