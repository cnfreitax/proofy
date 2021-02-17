import { OptionsModel } from 'domain/models';

export interface UpdateOptionRepository {
  update: (id: string, value: string) => Promise<OptionsModel>;
}
