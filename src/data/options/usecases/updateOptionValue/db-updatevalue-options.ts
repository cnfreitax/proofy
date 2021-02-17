import { OptionsModel } from 'domain/models';
import { UpdateAOptionValue } from '../.././../../domain/usecases/options/update-value';
import {
  FindOptionByIdRepository,
  UpdateOptionRepository,
} from '../../protocols/';

export class DbUpdateValueOption implements UpdateAOptionValue {
  constructor(
    private readonly findOptionByIdRepository: FindOptionByIdRepository,
    private readonly updateOptionRepository: UpdateOptionRepository,
  ) {}

  async update(id: string, value: string): Promise<OptionsModel> {
    const option = await this.findOptionByIdRepository.findById(id);
    if (option) {
      const optionUpdated = await this.updateOptionRepository.update(id, value);
      return optionUpdated;
    }

    return null;
  }
}
