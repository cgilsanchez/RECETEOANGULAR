import { Model } from "./base.model";
import { Person } from "./recetas.model";

export interface Task extends Model{
    owner:Person,
    date:Date
}