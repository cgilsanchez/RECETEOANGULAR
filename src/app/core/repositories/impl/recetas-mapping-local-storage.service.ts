import { Injectable } from "@angular/core";
import { IBaseMapping } from "../intefaces/base-mapping.interface";
import { Paginated } from "../../models/paginated.model";
import { Receta } from "../../models/recetas.model";

interface RecetaRaw{
    id:string,
    name:{
        title:string;
        first:string;
        last:string;
    },
    age:number,
    genero:string,
    picture:{
        large:string
        thumbnail:string
    }
}

@Injectable({
    providedIn: 'root'
  })
  export class PeopleLocalStorageMapping implements IBaseMapping<Receta> {
    setAdd(data: Receta) {
        throw new Error("Method not implemented.");
    }
    setUpdate(data: any) {
        throw new Error("Method not implemented.");
    }
    getPaginated(page:number, pageSize:number, pages:number, data: RecetaRaw[]): Paginated<Receta> {
        return {page:page, pageSize:pageSize, pages:pages, data:data.map<Receta>((d:RecetaRaw)=>{
            return this.getOne(d);
        })};
    }
    getOne(data: RecetaRaw):Receta {
        return {
            id:data.id, 
            name:data.name.first, 
            surname:data.name.last, 
            age:data.age,
            gender:data.genero,
            picture:{
                large:data.picture.large, 
                thumbnail:data.picture.thumbnail
            }};
    }
    getAdded(data: RecetaRaw):Receta {
        return this.getOne(data);
    }
    getUpdated(data: RecetaRaw):Receta {
        return this.getOne(data);
    }
    getDeleted(data: RecetaRaw):Receta {
        return this.getOne(data);
    }
  }
  