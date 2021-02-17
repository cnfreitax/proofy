import {
  AddOptionsRepository,
  FindOptionByIdRepository,
  UpdateOptionRepository,
} from 'data/options/protocols';
import { CreateOptionDTO } from '../../../../../../domain/usecases/options/add-options';
import { Repository, getRepository } from 'typeorm';
import { Option } from '../entities/option';
import { OptionsModel } from 'domain/models';

export class OptionRepsoitropy
  implements
    AddOptionsRepository,
    FindOptionByIdRepository,
    UpdateOptionRepository {
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

  public async findById(id: string): Promise<OptionsModel> {
    const option = await this.repository.findOne({ where: { id } });
    return option;
  }

  public async update(id: string, value: string): Promise<OptionsModel> {
    const option = await this.repository.findOne({ where: { id } });
    if (!option) {
      return null;
    }

    option.value = value;
    return await this.repository.save(option);
  }
}
