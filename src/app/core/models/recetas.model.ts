// src/app/core/person.model.ts
import { Model } from "./base.model";

export interface Receta extends Model{
    name:string,
    ingredientes:string,
    descripcion:String,
    groupId?:string
}