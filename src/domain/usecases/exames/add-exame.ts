import { ExameModel, ProofType } from '../../../domain/models';

export type AddExameParams = {
  name: string;
  type: ProofType;
  description: string;
};

export interface AddExam {
  add: (data: AddExameParams) => Promise<ExameModel>;
}
