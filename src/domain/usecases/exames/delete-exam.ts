import { ExameModel } from 'domain/models';

export interface DeleteExam {
  delete: (id: string) => Promise<ExameModel>;
}
