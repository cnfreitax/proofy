import { ExameModel, Questions, ProofType } from '../../../domain/models';

export type AddExameParams = {
  name: string;
  type: ProofType;
  description: string;
  questions: Questions[];
};

export interface AddExam {
  add: (data: AddExameParams) => Promise<ExameModel>;
}
