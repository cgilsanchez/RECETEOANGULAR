// src/app/core/repositories/interfaces/people-repository.interface.ts
import { Group } from "../../models/cocineros.model";
import { Person } from "../../models/recetas.model";
import { IBaseRepository } from "./base-repository.interface";

export interface IGroupsRepository extends IBaseRepository<Group>{

}