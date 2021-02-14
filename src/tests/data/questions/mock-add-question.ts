import {
  AddQuestion,
  CreateQuestionDTO,
} from '../../../domain/usecases/questions';
import { QuestionModel } from '../../../domain/models';
import { fakeQuestionModel } from '../../domain/usecases/models';

export const mockAddQuestion = (): AddQuestion => {
  class AddQuestionSpy implements AddQuestion {
    async add(data: CreateQuestionDTO): Promise<QuestionModel> {
      return Promise.resolve(fakeQuestionModel());
    }
  }
  return new AddQuestionSpy();
};
