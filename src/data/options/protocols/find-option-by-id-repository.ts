import { OptionsModel } from 'domain/models';

export interface FindOptionByIdRepository {
  findById: (id: string) => Promise<OptionsModel>;
}
