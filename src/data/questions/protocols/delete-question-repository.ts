import { QuestionModel } from 'domain/models';

export interface DeleteQuestionRepository {
  delete: (id: string) => Promise<QuestionModel>;
}
