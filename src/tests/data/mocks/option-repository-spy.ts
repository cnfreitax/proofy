import { CreateOptionDTO } from '../../../domain/usecases/options/add-options';
import { fakeOption } from '../../domain/usecases/models/fake-options-model';
import { AddOptionsRepository } from '../../../data/options/protocols/add-options-repository';

export class AddOptionsRepositorySpy implements AddOptionsRepository {
  opionsModel = fakeOption();
  addOptionsParams: CreateOptionDTO;

  async add(data: CreateOptionDTO): Promise<void> {
    this.addOptionsParams = data;
  }
}
