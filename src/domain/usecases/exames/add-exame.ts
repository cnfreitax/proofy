import { ExameModel, Questions } from 'domain/models';

export type AddExameParams = {
  name: string;
  type: string;
  description: string;
  questions: Questions[];
};

export interface AddExam {
  add: (data: AddExameParams) => Promise<ExameModel>;
}
