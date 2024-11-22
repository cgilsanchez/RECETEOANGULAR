// src/app/services/interfaces/people.service.interface.ts
import { Group } from '../../models/cocineros.model';
import { Person } from '../../models/recetas.model';
import { IBaseService } from './base-service.interface';

export interface IGroupsService extends IBaseService<Group> {
  // Métodos específicos si los hay
}
