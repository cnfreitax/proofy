import { ExameModel, UpdateExamDTO } from '../usecases/add/exam-imports';

export interface UpdateExamRepository {
  update: (data: UpdateExamDTO) => Promise<ExameModel>;
}
