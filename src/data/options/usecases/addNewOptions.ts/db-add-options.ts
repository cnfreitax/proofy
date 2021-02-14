import { AddOptionsRepository } from 'data/options/protocols/add-options-repository';
import {
  AddOptions,
  CreateOptionDTO,
} from '../../../../domain/usecases/options/add-options';

export class DbAddOptions implements AddOptions {
  constructor(private readonly addOptionsRepository: AddOptionsRepository) {}

  async add(data: CreateOptionDTO): Promise<void> {
    await this.addOptionsRepository.add(data);
  }
}
