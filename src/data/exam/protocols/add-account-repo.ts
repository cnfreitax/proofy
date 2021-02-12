import { AddExameParams, ExameModel } from '../usecases/add/exam-imports';

export interface AddExamRepository {
  add: (data: AddExameParams) => Promise<ExameModel>;
}
