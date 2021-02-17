import { OptionsModel } from '../../models';

export interface UpdateAOptionValue {
  update: (value: string, id: string) => Promise<OptionsModel>;
}
