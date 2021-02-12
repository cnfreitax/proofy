import { OptionsModel } from './options';

export type Questions = {
  id: string;
  statement: string;
  options: OptionsModel[];
};
