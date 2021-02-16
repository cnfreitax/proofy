import { ExameModel, ProofType } from 'domain/models';

export type UpdateExamDTO = {
  id: string;
  name: string;
  description: string;
  type: ProofType;
};

export interface UpdateExam {
  update: ({
    id,
    name,
    description,
    type,
  }: UpdateExamDTO) => Promise<ExameModel>;
}
