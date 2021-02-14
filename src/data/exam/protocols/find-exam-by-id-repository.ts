import { ExameModel } from '../usecases/add/exam-imports';

export interface FindExamByIdRepository {
  findById: (id: string) => Promise<ExameModel>;
}
