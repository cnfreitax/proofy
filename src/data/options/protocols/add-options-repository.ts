import { CreateOptionDTO } from 'domain/usecases/options/add-options';

export interface AddOptionsRepository {
  add: (data: CreateOptionDTO) => Promise<void>;
}
