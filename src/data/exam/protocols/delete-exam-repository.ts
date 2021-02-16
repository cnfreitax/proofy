import { ExameModel } from '../usecases/add/exam-imports';

export interface DeleteExamRepository {
  delete: (id: string) => Promise<ExameModel>;
}
