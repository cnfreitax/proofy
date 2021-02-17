import { QuestionModel } from 'domain/models';
import { UpdateQuestionDTO } from 'domain/usecases/questions';

export interface UpdateQuestionRepository {
  update: (data: UpdateQuestionDTO) => Promise<QuestionModel>;
}
