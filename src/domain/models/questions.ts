import { OptionsModel } from './options';

export type QuestionModel = {
  id: string;
  statement: string;
  points: number;
  options: OptionsModel[];
};
