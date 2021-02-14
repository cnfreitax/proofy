import { AddOptionsRepository } from 'data/options/protocols/add-options-repository';
import { CreateOptionDTO } from '../../../../../../domain/usecases/options/add-options';
import { Repository, getRepository } from 'typeorm';
import { Option } from '../entities/option';

export class OptionRepsoitropy implements AddOptionsRepository {
  private readonly repository: Repository<Option>;

  constructor() {
    this.repository = getRepository(Option);
  }

  async add({ options }: CreateOptionDTO): Promise<void> {
    for (const option of options) {
      const insert = this.repository.create(option);
      await this.repository.save(insert);
    }
  }
}
