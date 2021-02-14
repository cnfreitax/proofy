import { OptionsModel } from './options';

export type QuestionModel = {
  id: string;
  exam_id: string;
  statement: string;
  points: number;
  options: OptionsModel[];
};
