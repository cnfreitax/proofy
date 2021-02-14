import { QuestionModel } from 'domain/models';

export interface FindQuestionByIdRepository {
  findById: (id: string) => Promise<QuestionModel>;
}
