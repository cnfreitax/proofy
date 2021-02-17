import { QuestionModel } from 'domain/models';

export interface DeleteQuestion {
  delete: (id: string) => Promise<QuestionModel>;
}
