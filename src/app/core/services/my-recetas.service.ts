import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { Receta } from "../models/recetas.model";
import { Paginated } from "../models/paginated.model";

export interface PaginatedRaw<T> {
    first: number
    prev: number|null
    next: number|null
    last: number
    pages: number
    items: number
    data: T[]
  };

  export interface RecetaRaw {
    id: string
    nombre: string
    ingredientes: string
    descripcion: string
    
}
@Injectable({
    providedIn:'root'
})
export class MyPeopleService{

    private apiUrl:string = "http://localhost:3000/personas"
    constructor(
        private http:HttpClient
    ){

    }

    getAll(page:number, pageSize:number): Observable<Paginated<Receta>> {
        return this.http.get<PaginatedRaw<RecetaRaw>>(`${this.apiUrl}/?_page=${page}&_per_page=${pageSize}`).pipe(map(res=>{
            return {page:page, pageSize:pageSize, pages:res.pages, data:res.data.map<Receta>((d:RecetaRaw)=>{
                return {
                    id:d.id, 
                    name:d.nombre, 
                    surname:d.ingredientes,
                    ingredientes:d.descripcion 
                }
            })};
        }))
    }
}