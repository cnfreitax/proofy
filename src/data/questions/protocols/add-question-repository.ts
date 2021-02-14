import { QuestionModel } from 'domain/models';
import { CreateQuestionDTO } from 'domain/usecases/questions/add-question';

export interface AddQuestionRepository {
  add: (data: CreateQuestionDTO) => Promise<QuestionModel>;
}
